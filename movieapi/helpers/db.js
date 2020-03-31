// mongodb://mfurkankaya:mf133256+@ds149894.mlab.com:49894/heroku_8k2fqqpv
const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://mfurkankaya:mf133256@ds149894.mlab.com:49894/heroku_8k2fqqpv', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  mongoose.connection.on('open', () => console.log('Mongo connected.'))
  mongoose.connection.on('error', () => console.log('Mongo failed.'))

  mongoose.Promise = global.Promise
}
