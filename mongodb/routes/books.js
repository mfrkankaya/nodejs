const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

/* GET home page. */
router.post('/new', function(req, res, next) {
  const book = new Book({
    title: 'NodeJS',
    published: true,
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

router.get('/', (req, res) => {
  Book.find({}, (err, data) => {
    res.json(data)
  })
})

router.get('/search', (req, res) => {
  Book.find({ published: true, title: 'NodeJS' }, (err, data) => {
    res.json(data)
  })
})

router.get('/searchOne', (req, res) => {
  Book.findOne({ title: 'NodeJS' }, (err, data) => {
    res.json(data)
  })
})

router.get('/searchById', (req, res) => {
  Book.findById('5e8261da66bb3c290bca99e0', (err, data) => {
    res.json(data)
  })
})

router.put('/update', (req, res) => {
  // multi: true -> if it was false, only one record was gonna change, by that every published: false will bi published: true
  // upsert: true -> if there's no record matching, mongo creates a new record as new data
  Book.update({ published: false }, { published: true }, { multi: true }, (err, data) => {
    res.json(data)
  })
})

router.put('/updateById', (req, res) => {
  Book.findByIdAndUpdate('5e8261da66bb3c290bca99e0', { title: 'New Title', 'meta.favs': 99 }, (err, data) => {
    res.json(data)
  })
})

router.delete('/remove', (req, res) => {
  Book.remove({ published: true }, (err, data) => {})
  Book.findByIdAndRemove('5e8261da66bb3c290bca99e0', (err, data) => {})
  Book.findOneAndRemove({ published: true }, (err, data) => {})
})

router.get('/sort', (req, res) => {
  Book.find({}, (err, data) => {
    res.json(data)
  })
    .sort({ 'meta.favs': 1, title: 1 }) // This sorts ascending, -1 sorts descending
    .skip(2)
    .limit(1)
})

router.get('/aggregate', (req, res) => {
  Book.aggregate(
    [
      {
        $match: {
          published: true
        }
      },
      {
        $group: {
          _id: '$category',
          unit: { $sum: 1 }
        }
      }
    ],
    (err, result) => {
      res.json(result)
    }
  )
})

module.exports = router
