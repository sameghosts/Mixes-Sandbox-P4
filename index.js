//TODO: install base dependencies / requirements
// Dependencies
require('dotenv').config()
const CORS = require('cors')
const EXPRESS = require('express')
const { ApolloServer, gql } = require('apollo-server-express')


import {
  typeDefs,
  resolvers
} from './graphQL'

// Instatiate express app 
const app = EXPRESS()

//middleware
  //? Do I need cors?
app.use(CORS())

//body parsing 
app.use(EXPRESS.urlencoded({ extended: false}))
app.use(EXPRESS.json())

//TODO: set up initial calls and stub todo routes with graphql
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: true
});

SERVER.applyMiddleware({
  app: app
});


// dummy home route
app.get('/', (req, res) => {
  res.send("Mixes Sandbox app API Home (Next, Mongo, Express, GraphQL, Node")
})

app.listen(process.env.PORT || 3001, () => {
  console.log(`✅ You are listening to to smooth sounds of Port ${process.env.PORT || 3000}`)
})



