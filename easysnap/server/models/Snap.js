const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SnapSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  text: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('snap', SnapSchema)
