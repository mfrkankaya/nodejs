const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// String, Int, ID, Booleand, Float
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    id: ID!
    name: String!
    surname: String!
    age: Int
    isAdmin: Boolean
    score: Float
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    id: () => 'Fdsagfsgsadf',
    name: () => 'Furkan',
    surname: () => 'Kaya',
    age: () => 24,
    isAdmin: () => true,
    score: () => 123.3431
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);