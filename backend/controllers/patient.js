var express = require('express')
var router = express.Router()
var objectId = require('mongoose').Types.ObjectId
var { mongoose } = require('../db')
var { patient } = require('../models/patient')
router.post('/pat', (req, res) => {
    console.log('posted')
    var e = new patient({
        username: req.body.username,
        password: req.body.password,
        repeatpassword: req.body.repeatpassword,
        email: req.body.email,
        temp: 1

    })
    e.save(function (err, docs) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})
router.post('/don', (req, res) => {
    console.log('entered')
    var d = new patient({
        username: req.body.username,
        password: req.body.password,
        repeatpassword: req.body.repeatpassword,
        email: req.body.email,
        temp: 2

    })
    d.save(function (err, docs) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})
router.post('/login', (req, res) => {
    var uname = req.body.username
    var psd = req.body.password
    patient.find({ $and: [{ username: uname }, { password: psd }] }, (doc, err) => {
        if (!err) {
            data1 = doc;
            data2=data1[0].temp
            data3=JSON.stringify(data2)
            res.send(data3)
        }
        else {
            res.send(err)
        }
    })

})
router.get('/',(req,res)=>{
    patient.find((err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            res.send(err)
        }
    })

})
module.exports = router