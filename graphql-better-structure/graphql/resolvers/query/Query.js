module.exports = {
  director: (parent, args, ctx) => ctx.db.directors.find(director => director.id === args.id),
  directors: (parent, args, { db }) => db.directors,
  movie: (parent, args, { db }) => db.movies.find(movie => movie.id === args.id),
  movies: (parent, args, { db }) => db.movies
}
