const graphql = require('graphql')
const _ = require('lodash')

const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt } = graphql

const movies = [
  {
    id: '1',
    title: 'God Father',
    year: 1972,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.'
  },
  {
    id: '2',
    title: 'Scarface',
    year: 1980,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.'
  },
  {
    id: '3',
    title: 'Babam ve Oğlum',
    year: 2000,
    description:
      'Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak.'
  }
]

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    year: { type: GraphQLInt }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
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
    }
  }
})

module.exports = new GraphQLSchema({ query: RootQuery })
