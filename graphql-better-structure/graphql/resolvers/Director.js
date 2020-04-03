module.exports = {
  movies: (parent, args, { db }) => db.movies.filter(movie => movie.directorId === parent.id)
}
