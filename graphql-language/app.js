const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    name: String!
    surname: String!
    age: Int
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    name: () => 'Furkan',
    surname: () => 'Kaya',
    age: () => 24
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 3000 }, () =>
  console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
);