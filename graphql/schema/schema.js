const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } = graphql

// Mongo Models
const Movie = require('../models/Movie')
const Director = require('../models/Director')

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    year: { type: GraphQLInt },
    director: {
      type: DirectorType,
      async resolve(parent, args) {
        // return _.find(directors, { id: parent.directorId })
        return Director.findById(parent.directorId)
      }
    }
  })
})

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    birth: { type: GraphQLInt },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        // return _.filter(movies, { directorId: parent.id })
        return Movie.find({ directorId: parent.id })
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        /* wen we make a request like;
        movie (id: 2){
          title,
          year
        }
        
        args.id becomes 2
        */

        // return _.find(movies, { id: args.id })
        return Movie.findById(args.id)
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(directors, { id: args.id })
        return Director.findById(args.id)
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return Movie.find({})
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return Director.find({})
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        year: { type: GraphQLInt },
        directorId: { type: GraphQLString }
      },
      async resolve(parent, args) {
        const movie = new Movie({
          title: args.title,
          description: args.description,
          year: args.year,
          directorId: args.directorId
        })

        try {
          const data = movie.save()
          return data
        } catch (error) {
          return error
        }
      }
    },
    addDirector: {
      type: DirectorType,
      args: {
        name: { type: GraphQLString },
        birth: { type: GraphQLInt }
      },
      async resolve(parent, args) {
        const director = new Director({
          name: args.name,
          birth: args.birth
        })

        try {
          const data = director.save()
          return data
        } catch (error) {
          return error
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation })
