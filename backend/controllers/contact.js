var express=require('express')
var router=express.Router()
var objectId=require('mongoose').Types.ObjectId
var {mongoose}=require('../db')
var {contact}=require('../models/contact')
router.post('/post',(req,res)=>{
    console.log('posted')
    var a=new contact({
        name:req.body.name,
        email:req.body.email,
        message:req.body.message
    })
    a.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
module.exports=router