const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')

// Auth Middleware
const { issueToken, serializedUser } = require('../../middelware/UserAuth');

module.exports = {
  Query: {
    infoUserResolvers: () =>{
      return 'Hello from user resolver.'
    }
  },
  Mutation: {
    registerUser: async (_, {
      newUser
    }, {
      User
    }) => {
      try {
        let { username, email } = newUser
      // First Check if username is taken
      let user;
      user = await User.findOne({ username: username });
      if (user){
        throw new Error("Username is already taken!")
      }
      // Check if email registered
      user = await User.findOne({
        email: email
      });
      if (user) {
        throw new Error("Email is already registered!")
      }
      // Create new user instance
      user = new User(newUser);
      // hash the password
      user.password = await bcrypt.hash(newUser.password, 10);
      // save the user to db
      let result = await user.save();
      result.id = result._id
      result = serializedUser(result);
      // issue the authentication JWT token
      let token = await issueToken(result);
      return {
        token,
        user: result
      }

      } catch (err) {
        throw new ApolloError(err.message, 400)
      }
    }
  }
}