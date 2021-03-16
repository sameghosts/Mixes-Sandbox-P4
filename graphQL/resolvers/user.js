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
      // First Check if username is taken
      // Check if email registered
      // Create new user instance
      // hash the password
      // save the user to db
      // issue the authentication JWT token
    }
  }
}