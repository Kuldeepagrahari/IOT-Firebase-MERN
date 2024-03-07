const mngs = require("mongoose");
mngs
  .connect("mongodb://localhost:27017/student")
  .then(() => console.log("connection success.."))
  .catch((err) => console.log(err));

/* The code `const marksheetSchema = new mngs.Schema({ ... })` is creating a Mongoose schema for a
collection called "marksheet" in the MongoDB database. */
const marksheetSchema = new mngs.Schema({
  name: String,
  branch: String,
  marks: [
    { sub: String, mark: Number },
    { sub: String, mark: Number },
  ],
  DOB: {
    type: Date,
    default: Date.now(),
  },
});

//collection creation
const Marksheet = mngs.model("marksheet", marksheetSchema);

//create documents
// const createDoc = async ()=>{
//   try{
//     const stud1 = new Marksheet({
//       name: "prateek",
//       branch: "cse",
//       marks: [
//         { sub: "os", mark: 99 },
//         { sub: "cn", mark: 91 },
//       ],
//     })
//     const stud2 = new Marksheet({
//       name: "sahil",
//       branch: "cse",
//       marks: [
//         { sub: "os", mark: 100 },
//         { sub: "cn", mark: 99 },
//       ],
//     })
//     const stud3 = new Marksheet({
//       name: "abhishek",
//       branch: "cse",
//       marks: [
//         { sub: "os", mark: 100 },
//         { sub: "cn", mark: 100 },
//       ],
//     })
//     const result =await Marksheet.insertMany([stud1,stud2,stud3]);
//     console.log(result)
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// createDoc()

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
const deleteDoc = async ()=>{
  try{
        const result = await Marksheet.findByIdAndDelete({_id:"65e888b0b2ac3889c2544141"})
        console.log(result)
  }
  catch(err){
    console.log(err)
  }
}
deleteDoc()