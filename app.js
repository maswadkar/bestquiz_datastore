const express = require('express')
const Datastore = require('@google-cloud/datastore');

// Instantiate a datastore client
const datastore = Datastore();

const query = datastore.createQuery('student').limit(10);

app = express()

app.listen(8080)


app.get('/',function(req,res){res.json({"message":"Hello World"})})

app.get('/students',function(req,res){
    datastore.runQuery(query).then(function(results){
	console.log(results)
	res.status(200).json(results)
    });
})
