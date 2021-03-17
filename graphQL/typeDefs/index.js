//TODO: add in other schema


// typeDef GraphQL schema index => here we combine all the type/schema modules into one nice package 
const root = require('./root')
const user = require('./user')

const schemaArray =[root, user]

module.exports = schemaArray;