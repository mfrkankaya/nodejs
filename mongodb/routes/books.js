const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

/* GET home page. */
router.get('/new', function(req, res, next) {
  const book = new Book({ title: 'NodeJS' })
  book.save((err, data) => {
    if (err) console.log(err)

    res.json(data)
  })
})

module.exports = router
