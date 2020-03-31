const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send({ example: 'movie router' })
})

module.exports = router
