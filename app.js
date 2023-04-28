const express=require('express');
const app=express();
const port=7000;
const mongooo=require('mongoose')

//DataBase Connection
require("./db/conn")

//geting schema and collection 
const Apicol=require('./Models/usermodel')


//For convertion and obtaining data
app.use(express.json());


//For posting data to database
app.post("/api",(req,res)=>{
    // console.log(req.body)
    const createElement=async()=>{
      //Getting data to the doc 
      const doc=new Apicol(req.body)

      //Sending to database
      const result=await doc.save();
      console.log(result)
    }
   createElement();


  res.send("hy baby its first time in api bla blah blah balh blah blah abla")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})