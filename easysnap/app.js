require('dotenv').config()
require('./helpers/db')()

// Models
const User = require('./models/User')

const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')

const resolvers = require('./graphql/resolvers')
const server = new ApolloServer({ typeDefs: importSchema('./graphql/schema.graphql'), resolvers, context: { User } })

const app = express()

server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => console.log('Server is up.'))
