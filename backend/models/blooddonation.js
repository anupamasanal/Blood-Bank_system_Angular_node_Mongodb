var mongoose=require('mongoose')
var blooddonation=mongoose.model('blooddonation',{
    name:{type:String},
    email:{type:String},
    gender:{type:String},
    phone_number:{type:Number},
    age:{type:Number},
    bloodgroup:{type:String},
    place:{type:String},
    disease:{type:String},
    

})
module.exports={blooddonation}