const express = require('express')
const router = express.Router()

// Models
const Movie = require('../models/Movie')

router.post('/', async (req, res, next) => {
  const movie = new Movie(req.body)

  try {
    await movie.save()
    res.json({ status: true })
  } catch (error) {
    res.json({ status: false, error })
  }
})

router.get('/', async (req, res, next) => {
  try {
    const data = await Movie.find({})
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

// Top 10 List
router.get('/top10', async (req, res, next) => {
  try {
    const data = await Movie.find({})
      .limit(10)
      .sort({ imdb: -1 })
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

// Year Between
router.get('/between/:startYear/:endYear', async (req, res, next) => {
  const { startYear, endYear } = req.params

  try {
    const data = await Movie.find({ year: { $gte: parseInt(startYear), $lte: parseInt(endYear) } }) // lte: lower than and equal, gte: greater than and equal
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

router.get('/:movieId', async (req, res) => {
  const { movieId } = req.params
  try {
    const data = await Movie.findById(movieId)
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

router.put('/:movieId', async (req, res) => {
  const { movieId } = req.params
  try {
    const data = await Movie.findByIdAndUpdate(movieId, req.body, { new: true })
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

router.delete('/:movieId', async (req, res) => {
  const { movieId } = req.params
  try {
    const data = await Movie.findByIdAndRemove(movieId)
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

module.exports = router
