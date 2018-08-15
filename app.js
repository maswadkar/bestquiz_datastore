const express = require('express')
const bodyParser = require('body-parser');
const Datastore = require('@google-cloud/datastore');

const questions = require('./questions')
const students = require('./students')
const quiz = require('./quiz')
const response = require('./response')

app = express()
app.listen(8080)
app.use(bodyParser.json())
app.use('/questions',questions)
app.use('/students',students)
app.use('/quiz',quiz)
app.use('/response',response)


app.get('/',function(req,res){res.json({"message":"Hello World"})})
app.get('/ping',function(req,res){res.json({"message":"pinging everywhere"})})
