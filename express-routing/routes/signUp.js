const express = require('express')
const router = express.Router()

router.get('/signUp', (req,res) => {
  res.send('Sign up page.')
})

router.post('/signUp', (req,res) => {
  res.send('Sign up page (POST).')
})

module.exports = router