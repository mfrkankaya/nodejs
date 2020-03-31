const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers['x-access-token'] || req.body.token || req.query.token

  if (!token) res.json({ status: false, error: { message: 'No token provided' } })
  else {
    jwt.verify(token, req.app.get('API_SECRET_KEY'), (error, decoded) => {
      if (error) res.json({ status: false, error })
      else {
        req.deccode = decoded
        next()
      }
    })
  }
}
