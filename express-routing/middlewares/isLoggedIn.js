module.exports = (req, res, next) => {
  const isLoggedIn = false
  if (isLoggedIn) next()
  else res.send('Please sign in first!')
}
