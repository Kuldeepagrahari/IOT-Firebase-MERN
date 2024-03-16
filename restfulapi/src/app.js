const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")

const Student = require("./models/students")
const studentRouter = require("./routers/student")

// middleware, telling express to use json
app.use(express.json())
// we need to tell we are using router 
app.use(studentRouter)


app.listen( port, ()=>{
    console.log(`success....at port: ${port}`)

})

