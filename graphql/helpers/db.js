const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect('mongodb://mfurkankaya:mf133256@ds119060.mlab.com:19060/heroku_mr2pwd12', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  mongoose.connection.on('open', () => console.log('Mongo connected.'))
  mongoose.connection.on('error', () => console.log('Mongo failed.'))

  mongoose.Promise = global.Promise
}
