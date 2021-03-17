// ------ Dependencies
const { ApolloError } = require('apollo-server-errors')
const bcrypt = require('bcrypt')

// ------ Auth Middleware
const { issueToken, serializedUser } = require('../../helper/UserAuth');

// ------ User Resolvers 
module.exports = {
  Query: {
    infoUserResolvers: () => {
      return 'Hello from user resolver.'
    },
    loginUser: async (_, {
      username,
      password
    }, {
      User
    }) => {
      try {

        // find user by username
        let user = await User.findOne({ username });
        if (!user) {
          throw new Error("Username not found.");
        }
        // check for the password using bcrypt
        let isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error("Invalid password.");
        }
        // Serialize the User
        user.id = user._id;
        user = serializedUser(user.toObject());
        // Issue New Authentication Token
        let token = await issueToken(user);
        //send back user and token
        return {
          user,
          token
        };
      } catch (err) {
        throw new ApolloError(err.message, 404);
      }
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
        let user = await User.findOne({ username: username });
        if (user) {
          throw new ApolloError("Username is already taken!", '403')
        }
        // Check if email registered
        user = await User.findOne({
          email: email
        });
        if (user) {
          throw new ApolloError("Email is already registered!", '403')
        }
        // Create new user instance
        user = new User(newUser);
        // hash the password
        user.password = await bcrypt.hash(newUser.password, 10);
        // save the user to db
        let result = await user.save();
        result = await serializedUser(result);
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