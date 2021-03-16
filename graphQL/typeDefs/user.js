const { gql } = require('apollo-server-express');
//TODO: profile??? does it go here or its own graphql schema
module.exports = gql `
#Base Queries for user
  extend type Query {
    authUser: User! @isAuth
    loginUser(username: String!, password: String!):AuthUser!
  }
  
  #create user mutation
  extend type Mutation {
    registerUser(newUser: UserInput!): AuthUser!
  }
  
#Schema for new users
  input UserInput {
    email: String!
    username: String!
    email: String!
    createdAt: String!
    updatedAt: String!
  }

  type AuthUser {
    user: User!
    token: String!
  }

`;