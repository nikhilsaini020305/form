const mongoose = require('mongoose');
 const connect=mongoose.connect('mongodb://localhost:27017/mymen').then (()=>{
     console.log("connected to db");
 })
 module.exports=connect;