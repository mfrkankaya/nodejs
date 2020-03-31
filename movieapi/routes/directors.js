const express = require('express')
const router = express.Router()

// Models
const Director = require('../models/Director')

router.post('/', async (req, res, next) => {
  const director = new Director(req.body)

  try {
    await director.save()
    res.json({ status: true })
  } catch (error) {
    res.json({ status: false, error })
  }
})

module.exports = router
