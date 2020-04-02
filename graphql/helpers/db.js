const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.on('open', () => console.log('Mongo connected.'))
  mongoose.connection.on('error', () => console.log('Mongo failed.'))

  mongoose.Promise = global.Promise
}
