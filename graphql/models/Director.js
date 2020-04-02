const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorSchema = new Schema({
  name: String,
  birth: String,
})

module.exports = mongoose.model('director', DirectorSchema)