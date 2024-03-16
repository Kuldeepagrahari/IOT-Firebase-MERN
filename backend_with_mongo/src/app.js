const mngs = require("mongoose");
const validator = require ( "validator");
mngs
  .connect("mongodb://localhost:27017/student")
  .then(() => console.log("connection success.."))
  .catch((err) => console.log(err));


const marksheetSchema = new mngs.Schema({
  name: {
    type:String,
    required: true,
    unique:true,
    lowercase:true,
    trim : true,
    minlength: [3, "min 3 letters"]

  },
  branch: {
    type: String,
    required: true,
    enum : ["cse", "ece" , "me" , "sm"]
  },

  email:
  { 
    type: String,
    required:true,
    unique: true,
    validate(val){
      if ( !validator.isEmail(val) ){
        throw new Error("Email is invalid ")
      }
    }


  },
  marks: [
    { sub: String, mark:{type:Number,
    validate (val){
      if (val < 0 ){
        throw new console.error("marks can not be negative");
      }
    }} },
    { sub: String, mark:{
      type: Number ,
      validate:{
        validator: function (val ){
          return val.length < 0
        },
        message : "marks can not be neg"
      }
    }},
  ],
  DOB: {
    type: Date,
    default: Date.now(),
  },
});

//collection creation
const Marksheet = mngs.model("marksheet", marksheetSchema);

//create documents
const createDoc = async ()=>{
  try{
    
    const stud3 = new Marksheet({
      name: "abhishek",
      branch: "cse",
      email:"some",
      marks: [
        { sub: "os", mark: 100 },
        { sub: "cn", mark: 100 },
      ],
    })
    const result =await Marksheet.insertMany([stud3]);
    console.log(result)
  }
  catch(err){
    console.log(err);
    
  }
}
createDoc()

// find

// const getDoc = async ()=>{
//   const result2 = await Marksheet.find ({"marks.mark":{$eq:100}}).select({name:1,"marks.sub":1}).limit(2)
//   console.log (result2)
// }
// const getDoc = async ()=>{
//   const result2 = await Marksheet.find ({"marks.mark":{$nin:[91,99]}}).select({name:1,"marks.sub":1}).limit(2)
//   console.log (result2)
// }

// --- $or,$and--> on an array of 2 or more expression
// const getDoc = async ()=>{
//   const result2 = await Marksheet.find ({$and :[{"marks.mark":{$nin:[91,99]}},{name:"sam"}]}).select({name:1,"marks.sub":1}).limit(2)
//   console.log (result2)
// }
// count-> countDocuments() and sort->sort({name:1})
// const getDoc = async ()=>{
//   const result2 = await Marksheet.find ({$and :[{"marks.sub":"os"},{"marks.mark":{$gt:99}}]}).sort({name:1}).limit(2)
//   console.log (result2)
// }
// getDoc()

// ---------update-------

//  const updateDoc = async ()=>{
//   try{
//       const result =await Marksheet.updateMany({name:"samsha"},{$set : {
//         branch:"cse"
//       }})
//       console.log(result)
//   }
//   catch(err){
//     console.log(err)
//   }
//  }

// findByIdAndUpdate
// const updateDoc = async ()=>{
//   try{
//       const result =await Marksheet.findByIdAndUpdate({_id:"65e886e871dbef8e8e927ad1"},{$set : {
//         branch:"cse"
//       }},{new:true})
//       console.log(result)
//   }
//   catch(err){
//     console.log(err)
//   }
//  }
//  updateDoc()

// delete

// const deleteDoc = async ()=>{
//   try{
//         const result = await Marksheet.deleteMany({name:"samsha"})
//         console.log(result)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// const deleteDoc = async ()=>{
//   try{
//         const result = await Marksheet.findByIdAndDelete({_id:"65e888b0b2ac3889c2544141"})
//         console.log(result)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// deleteDoc()
//  const updateDoc = async ()=>{
//   try{
//       const result =await Marksheet.updateMany({name:"sam"},{$set : {
//         branch:"ece"
//       }})
//       console.log(result)
//   }
//   catch(err){
//     console.log(err)
//   }
//  }
//  updateDoc()
