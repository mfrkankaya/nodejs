const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DirectorSchema = new Schema({
  fullname: String,
  bio: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  birthYear: Number
})

module.exports = mongoose.model('director', DirectorSchema)
