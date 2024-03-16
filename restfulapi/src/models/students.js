const mongoose = require("mongoose")
const validator = require("validator")

const STDschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email: {
        type:String,
        required:true,
        unique: [ true, "already present"],
        validate(value){
            if ( !validator.isEmail(value)){
                throw new Error ("invalid email")
            }
        }
    },
    phone:{
        type:String,
        minlength:10,
        maxlength:10,
        required:true,
        validate(val){
            if( !validator.isMobilePhone(val) ){
                throw new Error("invalid phone number")
            }
        }
    },

    address:{
        type:String,
        required:true
    }
})

/* This line of code is creating a model named "Student" using Mongoose. The `mongoose.model()`
function takes two arguments - the name of the model ("Student" in this case) and the schema
definition (`STDschema` in this case). This line essentially creates a model named "Student" with
the specified schema, which can then be used to interact with a MongoDB database using Mongoose
methods such as `find`, `create`, `update`, `delete`, etc. */

// creating collection Student
// Student is a class so it should be start with capital letter
const Student = new mongoose.model( "Student", STDschema );

module.exports = Student;