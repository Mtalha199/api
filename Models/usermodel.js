const { default: mongoose } = require('mongoose');


const schema=mongoose.Schema;
const apiSchema=new schema({
    username:{
        type:String,
        required:true 
    },
    fathername:{
        type:String,
        required:true
    }
})
const Apicol= new mongoose.model('Apiuser',apiSchema)

module.exports=Apicol;