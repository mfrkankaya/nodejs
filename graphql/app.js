const express = require('express')
const expressGraphQL = require('express-graphql')

const app = express()

app.use('/graphql', expressGraphQL({
  
}))

const onServerup = () => console.log('Server is up!')
app.listen(3000, onServerup)
