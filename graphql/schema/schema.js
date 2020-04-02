const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID, GraphQLList } = graphql

const directors = [
  {
    id: '1',
    name: 'Fatih Akın',
    birth: 1972
  },
  {
    id: '2',
    name: 'Quentin Tarantino',
    birth: 1980
  },
  {
    id: '3',
    name: 'Onur Ünlü',
    birth: 1970
  }
]

const movies = [
  {
    id: '1',
    title: 'God Father',
    year: 1972,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.',
    directorId: '1'
  },
  {
    id: '2',
    title: 'Scarface',
    year: 1980,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.',
    directorId: '1'
  },
  {
    id: '3',
    title: 'Babam ve Oğlum',
    year: 2000,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.',
    directorId: '2'
  }
]

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    year: { type: GraphQLInt },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return _.find(directors, { id: parent.directorId })
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
        return _.filter(movies, { directorId: parent.id })
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
        return _.find(movies, { id: args.id })
      }
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(directors, { id: args.id })
      }
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies
      }
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return directors
      }
    },
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
