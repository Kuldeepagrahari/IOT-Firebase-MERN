const express = require("express");
// inbuid module in node like express is framework of node
//connecting public folder
// step:p1
const path = require("path")

const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")

// path.join(__dirname) is giving the path of root directory (src)
// console.log(path.join(__dirname))
// step:p2
const  static_path = path.join(__dirname, "../public")// it is gining path of public directory

// use static path
// step:p3
app.use(express.static(static_path))
// ------------------- end,  express is now using static folder public   ----------

app.get("/", (req,res) => {
     res.send("hello from the sam")
})

app.listen( port, ()=>{
    console.log(`success....at port: ${port}`)

})

