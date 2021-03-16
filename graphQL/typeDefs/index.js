//TODO: Build out build schema and then stub out resolvers
// gql dependency from ASE
const { gql } = require('apollo-server-express');

const typeDefs = gql`
#Schema go here base query   
type Query {
    hello: String!
  }
`;
//module exports build schema with type def
module.exports = typeDefs;