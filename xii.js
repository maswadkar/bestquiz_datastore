const express = require('express')
const Datastore = require('@google-cloud/datastore');

const xii = express.Router();
const datastore = Datastore();
const query_xiiphysics =  datastore
                    .createQuery('books')
                    .filter('subject','=','physics');

var physics_results

// middleware that is specific to this router
xii.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//QUESTION
xii.get('/',function(req,res){
var physics_results
res.render('xii.ejs',{'test':['mytest','yourtest','histest']})
})

// define the about route
xii.get('/xiiphysics', function (req, res) {
  datastore.runQuery(query_xiiphysics).then(function(results){
    res.render('xiiphysics.ejs',{'physics_results':results[0]})
    console.log(results[0])
  });
  
})


xii.get('/xiichemistry', function (req, res) {
  res.render('xiichemistry.ejs',{'subject':'Chemistry'})
})

xii.get('/xiibiology', function (req, res) {
  res.render('xiibiology.ejs',{'subject':'Biology'})
})

xii.get('/xiienglish', function (req, res) {
  res.render('xiienglish.ejs',{'subject':'English'})
})

xii.get('/xiimathematics', function (req, res) {
  res.render('xiimathematics.ejs',{'subject':'Mathematics'})
})
module.exports = xii