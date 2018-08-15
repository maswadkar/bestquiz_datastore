const express = require('express');
const Datastore = require('@google-cloud/datastore');



const quiz = express.Router();
datastore = Datastore();

const query_quiz = datastore.createQuery('quiz');



//QUIZ
quiz.get('/',function(req,res){
    datastore.runQuery(query_quiz).then(function(results){
        res.status(200).json(results)
    });
})

quiz.get('/about',function(req,res){
            res.status(200).json({'message':'this is about quiz'})
})


quiz.post('/',function(req,res){
        console.log(req.body)
        const entity = {  key:{kind:"quiz"},data:req.body}
        datastore.insert(entity).then( function(){res.status(200).json("inserted succesfully")});
})

module.exports = quiz
