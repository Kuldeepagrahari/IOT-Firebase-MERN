const express = require("express");
// inbuid module in node like express is framework of node
//connecting public folder
// step:p1
const path = require("path")

// req to use partials in our express app
// UsingPartials:1
const hbs = require("hbs")

const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")

// path.join(__dirname) is giving the path of root directory (src)
// console.log(path.join(__dirname))
// step:p2
const  static_path = path.join(__dirname, "../public")// it is gining path of public directory

// using views (inside templates) agar viewa directly registration folder ke andar hota to ye likhne ki jarurat nhi padti
const  views_path = path.join(__dirname, "../templates/views")
// partials ka path
const partials_path = path.join(__dirname, "../templates/partials")


// use static path
// step:p3
app.use(express.static(static_path))
// ------------------- end,  express is now using static folder public   ----------

// seting view engine
// step:ve1
// kyuki ab index.html nhi h to hbs render hoga
app.set("view engine", "hbs")

//step2 to use views jo ki ab templates ke andar h
app.set("views", views_path)

// app ko batana padega ki hum partials use kar rahe aur vo kaha hai
// UsingPartials: 2
hbs.registerPartials(partials_path)


app.get("/", (req,res) => {
    //  res.send("hello from the sam")
    // step:ve2
    res.render("index")

})

app.listen( port, ()=>{
    console.log(`success....at port: ${port}`)

})

