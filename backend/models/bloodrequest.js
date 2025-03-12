var mongoose=require('mongoose')
var bloodrequest=mongoose.model('bloodrequest',{
    name:{type:String},
    email:{type:String},
    gender:{type:String},
    phone_number:{type:Number},
    age:{type:Number},
    bloodgroup:{type:String},
    place:{type:String},
    disease:{type:String},
    

})
module.exports={bloodrequest}