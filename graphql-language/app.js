const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

// String, Int, ID, Booleand, Float
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    director: Director!
    movie: Movie!
  }

  type Director {
    id: ID!
    name: String!
    age: Int
  }

  type Movie {
    id: ID!
    title: String!
    year: Int!
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    director: () => ({ id: 'adfdfdaf', name: 'Furkan Kaya', age: 23 }),
    movie: () => ({ id: '13413', title: 'The Godfather', year: 1972 })

  }
}

const server = new ApolloServer({ typeDefs, resolvers })

const app = express()
server.applyMiddleware({ app })

app.listen({ port: 3000 }, () => console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`))
