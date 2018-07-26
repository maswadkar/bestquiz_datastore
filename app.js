const express = require('express')
const Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = Datastore();

const query = datastore.createQuery('student')
const query_questions = datastore.createQuery('question')

app = express()
app.listen(8080)


app.get('/',function(req,res){res.json({"message":"Hello World"})})

app.get('/students',function(req,res){
    datastore.runQuery(query).then(function(results){
	console.log(results)
	res.status(200).json(results)
    });
})


app.get('/questions',function(req,res){
    datastore.runQuery(query_questions).then(function(results){
        console.log(results)
        res.status(200).json(results)
    });
})
