// ------ Dependency: gql from apollo server express dependency 
const { gql } = require('apollo-server-express');

//TODO: profile??? does it go here or its own graphql schema
//TODO: Left on user model:
  // Edit user Mutation (username, avatar)
  // adding and deleting mixes? 
  // figure out profile stuff
  // query user profile
  // query user mixes
  // query user collection
  //! When above done, test in apollo playground AND THEN add them to the docs gql files

  // ------ Module: user gql module / type node
const user = gql`

  # User type for user module base def 
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    profile: UserProfile
    #userMixes: [MixList]
    #userCollection: Collection
    createdAt: String
    updatedAt: String
  }

  # User Queries
  extend type Query {
    infoUserResolvers: String
    #authUser: User! @isAuth
    loginUser(username: String!, password: String!):AuthUser!
    # Find User by Email
    # Find User by Username
  }

  # User Mutations
  extend type Mutation {
    registerUser(newUser: UserInput!): AuthUser!
  }
  # TODO: figure out if I will be doing subscriptions
  # extend type Subscription {
  #   _:String
  # }

  # Input Schema for new users / registration
  input UserInput {
    email: String!
    username: String!
    password: String!
    avatar: String
  }

  # Type Schema User Profile
  #TODO: Move to its own schema?, or keep as userprofile and also define a profile?
  type UserProfile {
    displayName: String
    bio: String
    profilePic: String
    following: [User]
    followers: [User]
  }
  
  # Type auth user, for payload 
  type AuthUser {
    user: User!
    token: String!
  }
  
`;

//-------- Export
module.exports = user;