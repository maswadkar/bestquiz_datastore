const express = require('express')
const Datastore = require('@google-cloud/datastore');

const response = express.Router();
const datastore = Datastore();
const query_response = datastore.createQuery('response')

// middleware that is specific to this router
response.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//RESPONSE
response.get('/', function (req, res) {
  datastore.runQuery(query_response).then(function (results) {
    console.log(results)
    res.status(200).json(results)
  });
})


response.post('/', function (req, res) {
  console.log(req.body)
  const entity = { key: { kind: "response" }, data: req.body }
  datastore.insert(entity).then(function () { res.status(200).json("inserted succesfully") });
})

// define the about route
response.get('/about', function (req, res) {
  res.send('About response')
})

module.exports = response
