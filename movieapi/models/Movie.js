const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  directorId: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, '`{PATH}` field is required.'],
    maxlength: [15, '`{PATH}` field can have max ({MAXLENGTH}) character.'],
    minlength: [1, '`{PATH}` field can have min ({MINLENGTH}) character.']
  },
  category: String,
  country: String,
  year: {
    type: Number,
    max: 2040,
    min: 1900
  },
  imdb: {
    type: Number,
    max: 10,
    min: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('movie', MovieSchema)
