const express = require('express')
const bodyParser = require('body-parser');
const Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = Datastore();

const query = datastore.createQuery('student')
const query_questions = datastore.createQuery('question')

app = express()
app.listen(8080)
app.use(bodyParser.json())


app.get('/',function(req,res){res.json({"message":"Hello World"})})
app.get('/ping',function(req,res){res.json({"message":"pinging everywhere"})})


//STUDENT
app.get('/students',function(req,res){
    datastore.runQuery(query).then(function(results){
	res.status(200).json(results)
    });
})

app.post('/students',function(req,res){
	console.log(req.body)
	const entity = {  key:{kind:"student"},data:req.body}
	datastore.insert(entity).then( function(){res.status(200).json("inserted succesfully")});
})



//QUESTION

app.get('/questions',function(req,res){
    datastore.runQuery(query_questions).then(function(results){
        console.log(results)
        res.status(200).json(results)
    });
})
