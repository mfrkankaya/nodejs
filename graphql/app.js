const express = require('express')

const app = express()

const onServerup = () => console.log('Server is up!')
app.listen(3000, onServerup)
