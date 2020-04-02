const express = require('express')
const expressGraphQL = require('express-graphql')

const schema = require('./schema/schema')

const app = express()

app.use('/graphql', expressGraphQL({ schema, graphiql: true }))

const onServerup = () => console.log('Server is up!')
app.listen(3000, onServerup)
