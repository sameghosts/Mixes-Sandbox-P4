const { gql } = require('apollo-server-express');
//TODO: profile??? does it go here or its own graphql schema

//TODO: Migrate from index for module joining, double check it works 
module.exports =  gql`
#Base Queries for user
  extend type Query {
    hello: String
    #authUser: User! @isAuth
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
    createdAt: String!
    updatedAt: String!
  }
  type User {
    id: ID!
    userName: String!
    email: String!
    profile: UserProfile
    #userMixes: [MixList]
    #userCollection: Collection
    createdAt: String
    updatedAt: String
  }

  type UserProfile {
    displayName: String
    bio: String
    profilePic: String
    following: [User]
    followers: [User]
  }

  type AuthUser {
    user: User!
    token: String!
  }

`;