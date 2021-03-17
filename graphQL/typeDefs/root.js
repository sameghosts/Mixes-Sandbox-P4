const { gql } = require('apollo-server-express')


// root is the base definitions which will be extended by all type def query and mutations on specific modules
const root = gql`
  type Query {
    root:String
  }
  type Mutation{
    root:String
  }
  # type Subscription {
  #   root:String
  # }
`;
module.exports = root;