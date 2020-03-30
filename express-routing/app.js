const express = require('express')
const app = express()

// GET, POST, PUT, DELETE, ALL

app.get('/', (req, res) => {
  res.send('Something cool!')
})

/**
 * Some url path definitions
 * ---------------------------------------------------------------------------------------------------------
 * '/cont?act' -> it doesnt matter if there is a 't' char. ['contact', 'conact']
 * '/co(nt)?act' -> it doesnt matter if there is 'nt' word. ['contact', 'coact'] ('conact' will not work now)
 * '/cont*act' -> * means you can type anything there. ['contact', 'contafadfdadfadfact', 'contRANDOMact']
 * '/cont+act' -> + meanst you cant type infinite character that left on plus. ['contact', 'conttact', 'conttttact']
 */

app.listen(3000, () => console.log('Server up!'))
