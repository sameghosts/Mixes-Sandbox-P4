// ------ Dependency: gql from apollo server express dependency 
const { gql } = require('apollo-server-express');

//TODO: Define the schema 
  //initial pass
//TODO: Define subschema
//TODO: Queries and resolves

// ------ Module: mixlist gql module / type node
const mixlist = gql`
# First define mixlist type
type MixList {
  id: ID!
  name: String!
  user: String!
  authorDisplay: String
  imageUrl: String
  tagline: String
  description: String
  featuredText: String
  tracks: [Track]
  comments: [Comment]
  createdAt: String!
  updatedAt: String!
}
# Mixlist exted queries

# Mixlist extend mutations

# Other types / Inputs
#input MixListInput
#input CommentInput
#input TrackInput

type Comment {
  id: ID!
  user: User!
  body: String!
  date: String!
  createdAt: String!
  updatedAt: String!

}

type Track {
  trackType: String!
  title: String!
  artist: String!
  uri: String!
  featured: Boolean
}
`;

module.exports = mixlist;