var mongoose=require('mongoose')
var patient=mongoose.model('patient',{
    username:{type:String},
    password:{type:String},
    repeatpassword:{type:String},
    email:{type:String},
    temp:{type:Number}
    
    

})
module.exports={patient}