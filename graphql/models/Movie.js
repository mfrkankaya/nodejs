const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  title: String,
  description: String,
  year: String,
  directorId: String
})

module.exports = mongoose.model('movie', MovieSchema)