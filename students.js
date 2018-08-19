const express = require('express');
const Datastore = require('@google-cloud/datastore');



const students = express.Router();
datastore = Datastore();

const query_students = datastore.createQuery('student');



//STUDENT
students.get('/', function (req, res) {
    datastore.runQuery(query_students).then(function (results) {
        res.status(200).json(results)
    });
})

students.get('/about', function (req, res) {
    res.status(200).json({ 'message': 'this is about students' })
})


students.post('/', function (req, res) {
    console.log(req.body)
    const entity = { key: { kind: "student" }, data: req.body }
    datastore.insert(entity).then(function () { res.status(200).json("inserted succesfully") });
})

module.exports = students
