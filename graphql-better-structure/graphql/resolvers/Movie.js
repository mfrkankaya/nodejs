module.exports = {
  director: (parent, args, { db }) => db.directors.find(director => director.id === parent.directorId)
}