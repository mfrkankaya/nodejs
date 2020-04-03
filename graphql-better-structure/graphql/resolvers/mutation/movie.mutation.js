module.exports = {
  createMovie: (parent, args, { db }) => {
    const directorExists = db.directors.some(director => director.id === args.data.directorId)
    if (!directorExists) throw new Error("Director ID didn't match any director.")
    const movie = {
      id: Math.random()
        .toString(36)
        .substr(2, 10),
      ...args.data
    }

    db.movies.push(movie)
    return movie
  }
}
