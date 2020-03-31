const express = require('express')
const router = express.Router()

// Models
const Movie = require('../models/Movie')

router.post('/', async (req, res, next) => {
  const movie = new Movie(req.body)

  // movie.save((err, data) => {
  //   if (err) res.json(err)

  //   res.json({ status: true })
  // })

  try {
    await movie.save()
    res.json({ status: true })
  } catch (error) {
    res.json(error)
  }
})

router.get('/', (req, res, next) => {
  res.send({ example: 'movie router' })
})

module.exports = router
