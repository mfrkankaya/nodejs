const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('./schema/schema')

const app = express()

app.use('/graphql', expressGraphQL({ schema }))

const onServerup = () => console.log('Server is up!')
app.listen(3000, onServerup)
