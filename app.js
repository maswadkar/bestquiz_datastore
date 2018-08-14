const express = require('express')
const bodyParser = require('body-parser');
const Datastore = require('@google-cloud/datastore');

const questions = require('./questions')
const students = require('./students')

// Instantiate a datastore client
const datastore = Datastore();

const query_students = datastore.createQuery('student')
const query_questions = datastore.createQuery('question')

app = express()
app.listen(8080)
app.use(bodyParser.json())
app.use('/questions',questions)
app.use('/students',students)

app.get('/',function(req,res){res.json({"message":"Hello World"})})
app.get('/ping',function(req,res){res.json({"message":"pinging everywhere"})})
