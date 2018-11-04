const express = require('express')
const Datastore = require('@google-cloud/datastore');

const books = express.Router();
const datastore = Datastore();
const query_xiiphysics = datastore.createQuery('xiiphysics').order('sorter');


// middleware that is specific to this router
books.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//QUESTION
books.get('/', function (req, res) {
  res.render('books.ejs', { 'test': ['mytest', 'yourtest', 'histest'] })
})

// define the about route
books.get('/xiiphysics', function (req, res) {
  datastore.runQuery(query_xiiphysics).then(function (results) {
    res.render('xii_subjects.ejs', { 'physics_results': results[0] })
    console.log(results[0])
  });

})

module.exports = books
