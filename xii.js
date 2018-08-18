const express = require('express')
const Datastore = require('@google-cloud/datastore');

const xii = express.Router();
const datastore = Datastore();
const query_questions = datastore.createQuery('xiiphysics')

// middleware that is specific to this router
xii.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//QUESTION
xii.get('/',function(req,res){
res.render('xii.ejs',{'test':['mytest','yourtest','histest']})
})

// define the about route
xii.get('/xiiphysics', function (req, res) {
  res.render('xiiphysics.ejs',{'test':['mytest','yourtest','histest']})
})


xii.get('/xiichemistry', function (req, res) {
  res.render('xiichemistry.ejs',{'test':['mytest','yourtest','histest']})
})

xii.get('/xiibiology', function (req, res) {
  res.render('xiibiology.ejs',{'test':['mytest','yourtest','histest']})
})

xii.get('/xiienglish', function (req, res) {
  res.render('xiienglish.ejs',{'test':['mytest','yourtest','histest']})
})

xii.get('/xiimathematics', function (req, res) {
  res.render('xiimathematics.ejs',{'test':['mytest','yourtest','histest']})
})
module.exports = xii