const express = require('express')
const Datastore = require('@google-cloud/datastore');

const questions = express.Router();
const datastore = Datastore();
const query_questions = datastore.createQuery('question')

// middleware that is specific to this router
questions.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})


//QUESTION
questions.get('/',function(req,res){
    datastore.runQuery(query_questions).then(function(results){
        console.log(results)
        res.status(200).json(results)
    });
})


questions.post('/',function(req,res){
        console.log(req.body)
        const entity = {  key:{kind:"question"},data:req.body}
        datastore.insert(entity).then( function(){res.status(200).json("inserted succesfully")});
})

// define the about route
questions.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = questions