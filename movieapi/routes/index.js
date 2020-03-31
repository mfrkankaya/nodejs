const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

const User = require('../models/User')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.post('/register', async (req, res, next) => {
  const { username, password } = req.body

  try {
    const hashed = await bcrypt.hash(password, 10)
    await new User({ username, password: hashed }).save()
    res.json({ status: true })
  } catch (error) {
    res.json({ status: false, error })
  }
})

module.exports = router
