//TODO: install base dependencies / requirements
// Dependencies
require('dotenv').config()
const CORS = require('cors')
const EXPRESS = require('express')
const { ApolloServer, gql } = require('apollo-server-express')


const {
  typeDefs,
  resolvers
} = require('./graphQL')
const {
  schemaDirectives
} = require('./graphQL/directives')

// Instatiate express app 
const app = EXPRESS()

// Models for graphql server context
const AppModels = require('./models');
const AuthMiddleware = require('./middleware/auth')

//middleware
  //? Do I need cors?
// app.use(CORS())

//body parsing 
// app.use(EXPRESS.urlencoded({ extended: false}))
// app.use(EXPRESS.json())

app.use(AuthMiddleware);

//TODO: set up initial calls and stub todo routes with graphql
const SERVER = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  schemaDirectives: schemaDirectives,
  playground: true,
  context: ({ req }) => {
    let {
      user,
      isAuth,
    } = req;
    return{
      req,
      user,
      isAuth,
      ...AppModels,
    }
  }
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



