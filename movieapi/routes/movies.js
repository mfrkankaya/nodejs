const express = require('express')
const router = express.Router()

// Models
const Movie = require('../models/Movie')

router.post('/', (req, res, next) => {
  const movie = new Movie(req.body)

  movie.save((err, data) => {
    if (err) res.json(err)

    res.json({ status: true })
  })
})

router.get('/', (req, res, next) => {
  res.send({ example: 'movie router' })
})

module.exports = router
