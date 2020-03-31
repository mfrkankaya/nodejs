const jwt = require('jsonwebtoken')
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

router.post('/authenticate', async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })
    if (!user) res.json({ status: false, error: { message: 'User not found.' } })
    else {
      const passwordMatched = bcrypt.compare(password, user.password)
      if (!passwordMatched) res.json({ status: false, error: { message: 'Wrong password.' } })
      else {
        const payload = {
          username
        }

        const token = jwt.sign(payload, req.app.get('API_SECRET_KEY'), { expiresIn: 720 /* Minutes */ })
        res.json({ status: true, token })
      }
    }
  } catch (error) {
    res.json({ status: false, error })
  }
})

module.exports = router
