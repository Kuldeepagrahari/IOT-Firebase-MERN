const mngs = require("mongoose")
mngs.connect("mongodb://localhost:27017/student")
.then(()=>console.log("connection success.."))
.catch((err)=>console.log(err));

const marksheetSchema= new mngs.Schema({
    name:String,
    branch:String,
    marks:[{sub:String,mark:Number},{sub:String,mark:Number}],
    DOB:{
        type:Date,
        default:Date.now()
    }
})

//collection creation
const Marksheet=mngs.model("marksheet",marksheetSchema);

//create documents

const stud1=new Marksheet({
    name:"sam",
    branch:"ece",
    marks:[{sub:"os",mark:89},{sub:"cn",mark:99}],
    
})
stud1.save()