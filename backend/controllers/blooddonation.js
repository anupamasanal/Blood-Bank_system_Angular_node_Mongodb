var express=require('express')
var router=express.Router()
var objectId=require('mongoose').Types.ObjectId
var {mongoose}=require('../db')
var {blooddonation}=require('../models/blooddonation')
router.post('/donate',(req,res)=>{
    console.log('posted')
    var b=new blooddonation({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        phone_number:req.body.phone_number,
        age:req.body.age,
        bloodgroup:req.body.bloodgroup,
        place:req.body.place,
        disease:req.body.disease
        
    })
    b.save(function(err,docs){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})
module.exports=router