var express = require('express')
var questions = express.Router()

// middleware that is specific to this router
questions.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
questions.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
questions.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = questions
