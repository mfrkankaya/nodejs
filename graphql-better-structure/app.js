const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const db = require('./data')

const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
  typeDefs: importSchema('./graphql/schema/schema.graphql'),
  resolvers,
  context: { db } // Context is a shared storage
})

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`))
