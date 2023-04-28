const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/apii",{
    // useCreateIndex:true,
    // useNewUrlParse:true,
    // useUnifiedTopology:true,
    family:4
}).then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err)
})