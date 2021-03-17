//TODO: Build out build schema and then stub out resolvers
const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Query {
    _:String
    infoUserResolvers: String
    #authUser: User! @isAuth
    #loginUser(username: String!, password: String!):AuthUser!
  }
  type Mutation{
    _:String
    registerUser(newUser: UserInput!): AuthUser!
  }
  type Subscription {
    _:String
  }
  #Schema for new users
  input UserInput {
    email: String!
    username: String!
    password: String!
    avatar: String
  }
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

module.exports = typeDefs;
// //! Not working trying one type def file 
// const baseDefs = require('./baseDefs')
// const user = require('./user');
// const mixlist= require('./mixlist');
// const typeDefs = { user }
// module.exports = typeDefs;







//! Original Code for test:

// gql dependency from ASE
// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
//   #Schema go here base query   
//   type Query {
//     hello: String!
//   }
//   # type mutations 
//   #add type password

//   type User {
//     id: ID!
//     userName: String!
//     email: String!
//     profile: UserProfile
//     userMixes: [MixList]
//     userCollection: Collection
//     createdAt: String
//     updatedAt: String
//   }

//   type UserProfile {
//     displayName: String
//     bio: String
//     profilePic: String
//     following: [User]
//     followers: [User]
//   }

//   type MixList {
//     id: ID!
//     name: String!
//     user: User!
//     authorDisplay: String
//     imageUrl: String
//     description: String
//     featuredText: String
//     tracks: [Track]
//     comments: [Comment]
//     createdAt: String
//     updatedAt: String
//   }
//   type Track {
//     title: String!
//     artist: String!
//     uri: String!
//     imageUrl: String
//     featured: Boolean
//   }
//   type Comment {
//     user: User!
//     body: String!
//     date: 
//   }


// `;
// //module exports build schema with type def
// module.exports = typeDefs;

