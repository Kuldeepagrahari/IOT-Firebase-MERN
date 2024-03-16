const express = require("express")
const router = new express.Router()
// create a router
const Student = require("../models/students")

// we need to define a router
router.get("/my_commit", (req,res) => {
    res.send("i am the king of my world!");
})
// server hamko de raha h
router.get("/students", async(req,res) => {
    // res.send ( "hello from get side");
    try{
         const studentsData = await Student.find()
         res.send( studentsData)
    }catch(err){
          res.send(err)
    }
})

// find by id
router.get("/students/:id", async(req,res) => {
    // res.send ( "hello from get side");
    // console.log("asm")
    try{ 
         const _id = req.params.id;
         console.log(_id)
         const studentsData = await Student.findById(_id)
         console.log(studentsData)
         if ( !studentsData ){
            return res.status(404).send()
         }else{
            res.status(201).send(studentsData)
         }
        //  res.status().send( studentsData)
    }catch(err){
          res.send(err)
    }
})



// creating a new students
// "/students" is a route
// hum server ko de rahe h
// app.post( "/students", (req,res) => {
//     // jo hum postman se req bheje the uska body means jo json body hamne likhi thi ek user ki
//     console.log(req.body)
//     // making a document of Student collection
//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((err)=>{
//          res.status(404).send(err)
//     })
//      // ek baar me ek hi send likh sakte h
//     // res.send( " hello from post ")
// }) 

// through async await
router.post( "/students", async(req,res) => {
    // jo hum postman se req bheje the uska body means jo json body hamne likhi thi ek user ki
    console.log(req.body)
    // making a document of Student collection
    const user = new Student(req.body)
   try{
        const createdUser = await user.save()
        res.status(201).send(createdUser)

    }catch(err){
        res.status(404).send(err)
    }
}) 

// update a student by its id

router.patch("/students/:id", async(req,res) => {
    try{
        // to get endpoint-> params
        const _id = req.params.id;
        console.log(_id)
        const studentDataUpdate = await Student.findByIdAndUpdate(_id,req.body )
        res.send(studentDataUpdate)
        console.log(studentDataUpdate)

    }catch(err){
        res.send(err)
    }
})

router.delete("/students/:id", async(req,res) => {
    try{
        // to get endpoint-> params
        const _id = req.params.id;
        console.log(_id)
        const studentDataDelete = await Student.findByIdAndDelete(_id)
        res.send(studentDataDelete)
        console.log(studentDataDelete)

    }catch(err){
        res.send(err)
    }
})



module.exports = router