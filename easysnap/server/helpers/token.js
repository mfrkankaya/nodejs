const jwt = require('jsonwebtoken')

const token = {
  generate: ({ user, expiresIn }) => jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn })
}

module.exports = token