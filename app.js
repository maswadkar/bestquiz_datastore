const express = require('express')
const bodyParser = require('body-parser');
const Datastore = require('@google-cloud/datastore');

const questions = require('./questions')
const students = require('./students')
const quiz = require('./quiz')
const response = require('./response')
const xii = require('./xii')


app = express()
app.listen(8080)
app.use(bodyParser.json())
app.use('/questions', questions)
app.use('/students', students)
app.use('/quiz', quiz)
app.use('/response', response)
app.use('/xii', xii)

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');

app.get('/', function (req, res) { res.render('home.ejs', { 'test': ['mytest', 'yourtest', 'histest'] }) })
app.get('/ping', function (req, res) { res.json({ "message": "pinging everywhere" }) })
app.get('/test', function (req, res) { res.render('index.ejs', { 'test': ['mytest', 'yourtest', 'histest'] }) })