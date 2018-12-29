'use strict'

const express = require('express')
const apiRouter = require('./api')

const app = express()

app.use('/api/posts', apiRouter)
app.get('/', (req, res) => res.redirect('/api/posts'))

const server = app.listen(3000, function () {
  console.log(`Listening http://localhost:${server.address().port}`)
})
