var mongoose=require('mongoose')
mongoose.connect('mongodb://0.0.0.0:27017/',(error)=>{
    if(!error){
        console.log('db connected')
    }
    else{
        console.log('error')
    }
})
module.exports=mongoose