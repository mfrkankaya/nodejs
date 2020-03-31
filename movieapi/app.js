const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

// DB
require('./helpers/db')()

// Config
const config = require('./config')

// Middlewares
const verifyToken = require('./middlewares/verifyToken')

const indexRouter = require('./routes/index')
const moviesRouter = require('./routes/movies')
const directorsRouter = require('./routes/directors')

const app = express()
app.set('API_SECRET_KEY', config.API_SCRET_KEY)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api', verifyToken) // Middleware
app.use('/api/movies', moviesRouter)
app.use('/api/directors', directorsRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
