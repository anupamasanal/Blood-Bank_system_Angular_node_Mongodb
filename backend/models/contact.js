var mongoose=require('mongoose')
var contact=mongoose.model('contact',{
    name:{type:String},
    email:{type:String},
    message:{type:String}
})
module.exports={contact}