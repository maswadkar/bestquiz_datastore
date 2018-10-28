const express = require('express')
const bodyParser = require('body-parser');
const Datastore = require('@google-cloud/datastore');

const books = require('./books')
datastore = Datastore({ namespace: 'quiz' });

const xxx = datastore.createQuery('classes').order('sorter');
let globalguy = [{ link: '/x/mathematics', name: 'MATHEMATICS' }, { link: '/x/physics', name: 'PHYSICS' },
{ link: '/x/chemistry', name: 'CHEMISTRY' }, { link: '/x/biology', name: 'BIOLOGY' }, { link: '/x/english', name: 'ENGLISH' }];

app = express()
app.listen(8080)
app.use(bodyParser.json())
app.use('/books', books)

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    datastore.runQuery(xxx).then(function (results) {
        res.render('home.ejs', { 'test': results[0] })
    });
})

app.get('/ping', function (req, res) { res.json({ "message": "pinging everywhere" }) })

app.get('/:classid/:subjectid', function (req, res) {
    const classes = datastore.createQuery('classes').filter('link', '=', req.params.classid);

    datastore.runQuery(classes).then(function (results) {
        globalguy = results[0][0].subjects;
    });

    const books = datastore.createQuery('books').filter('class', '=', req.params.classid)
        .filter('subject', '=', req.params.subjectid)
        .order("sorter");
    datastore.runQuery(books).then(function (results) {
        let test = results[0];
        res.render('books.ejs', { 'results': test, 'class': req.params.classid, 'menuitems': globalguy });
    });
})

app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/:classid', function (req, res) {
    const myclass = datastore.createQuery('classes').filter('link', '=', req.params.classid);
    datastore.runQuery(myclass).then(function (results) {
        let test = results[0][0]
        res.render('classes.ejs', { 'test': test })
    });
})