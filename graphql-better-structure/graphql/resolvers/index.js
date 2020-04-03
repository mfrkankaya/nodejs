// Query Resolvers
const Query = require('./query/Query')
const Movie = require('./query/Movie')
const Director = require('./query/Director')

// Mutation Resolvers
const Mutation = require('./mutation')

module.exports = { Query, Mutation, Movie, Director }
