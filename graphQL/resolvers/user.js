const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')


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
      user = await User.findOne({ userName: username });
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
      // hash the password
      // save the user to db
      // issue the authentication JWT token

      } catch (err) {
        throw new ApolloError(err.message, 400)
      }
    }
  }
}