const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

/* GET home page. */
router.post('/new', function(req, res, next) {
  const book = new Book({
    title: 'NodeJS',
    published: false,
    comments: [{ message: "I didn't like this so much." }, { message: 'I really liked it.' }],
    meta: {
      votes: 12,
      favs: 104
    }
  })
  book.save((err, data) => {
    if (err) console.log(err)

    res.json(data)
  })
})

module.exports = router
