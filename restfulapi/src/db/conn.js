const mongoose = require("mongoose")
// connecting to students-api db
mongoose.connect("mongodb://localhost:27017/students-api").then(()=>{
    console.log("connection is successful..")
})
.catch((err)=>{
    console.log(err)
})

