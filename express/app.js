const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { name: 'Furkan', surname: 'Kaya' })
})

app.listen(3000, () => console.log('Server up!'))
