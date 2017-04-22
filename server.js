const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema/schema')

const app = express()
app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema
}))

app.listen(8080, () => {
  console.log('Listening on http://localhost:8080')
})
