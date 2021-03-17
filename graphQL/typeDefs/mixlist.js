// ------ Dependency: gql from apollo server express dependency 
const { gql } = require('apollo-server-express');

//TODO: Define the schema 
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
}
# Mixlist exted queries

# Mixlist extend mutations

# Other types / Inputs
type Comment {
  user: User!
  body: String!
  date: String!

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