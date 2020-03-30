const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middlewares/isLoggedIn')

router.get('/signIn', isLoggedIn, (req,res) => {
  res.send('Sign in page.')
})

router.post('/signIn', (req,res) => {
  res.send('Sign in page (POST).')
})

module.exports = router