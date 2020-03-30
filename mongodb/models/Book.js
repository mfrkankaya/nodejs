const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    maxlength: [20, 'Max {MAXLENGTH} digits allowed for "{PATH}", "{VALUE}" detected.']
  },
  published: { type: Boolean, default: false },
  comments: [{ message: String }],
  meta: {
    votes: Number,
    favs: Number
  },
  publishedAt: {
    type: Date,
    default: Date.now
  },
  category: String,
  year: {
    type: Number,
    max: 2030,
    min: 1700
  }
})

module.exports = mongoose.model('book', BookSchema)
