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

router.get('/', async (req, res) => {
  try {
    const data = await Director.aggregate([
      {
        $lookup: {
          from: 'movies',
          localField: '_id',
          foreignField: 'directorId',
          as: 'movies'
        }
      },
      {
        $unwind: {
          path: '$movies',
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $group: {
          _id: {
            _id: '$_id',
            fullname: '$fullname',
            bio: '$bio'
          },
          movies: { $push: '$movies' }
        }
      },
      {
        $project: {
          _id: '$_id._id',
          fullname: '$_id.fullname',
          bio: '$_id.bio',
          movies: '$movies',
        }
      }
    ])
    res.json({ status: true, data })
  } catch (error) {
    res.json({ status: false, error })
  }
})

module.exports = router
