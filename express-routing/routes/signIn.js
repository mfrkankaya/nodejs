const express = require('express')
const router = express.Router()

router.get('/signIn', (req,res) => {
  res.send('Sign in page.')
})

router.post('/signIn', (req,res) => {
  res.send('Sign in page (POST).')
})

module.exports = router