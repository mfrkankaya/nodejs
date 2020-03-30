const express = require('express')
const app = express()

const signIn = require('./routes/signIn')
const signUp = require('./routes/signUp')

app.use('/user', signIn)
app.use('/kullanici', signUp)

// Middlewares
// app.use('/user', (req, res, next) => {
//   const isLoggedIn = false
//   if (isLoggedIn) next()
//   else res.send('Please sign in first!')
// })

// GET, POST, PUT, DELETE, ALL

// app.get('/', (req, res) => {
//   res.send('Something cool!')
// })

// app.get('/users/:id', (req, res) => { // '/users/:id/:postId?' -> ? means postId is not required
//   res.send(req.params.id)
// })

/**
 * Some url path definitions
 * ---------------------------------------------------------------------------------------------------------
 * '/cont?act' -> it doesnt matter if there is a 't' char. ['contact', 'conact']
 * '/co(nt)?act' -> it doesnt matter if there is 'nt' word. ['contact', 'coact'] ('conact' will not work now)
 * '/cont*act' -> * means you can type anything there. ['contact', 'contafadfdadfadfact', 'contRANDOMact']
 * '/cont+act' -> + meanst you cant type infinite character that left on plus. ['contact', 'conttact', 'conttttact']
 */

app.listen(3000, () => console.log('Server up!'))
