const mongoose = require("mongoose")
const validator = require("validator")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    mobile:{
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
  

    address:{
        type:String,
        required:true
    },
    password : {
         type: String,
         required: true,

    },
    confirmPassword:{
         type: String,
         required: true
    }
})


const Users = new mongoose.model( "User", userSchema );

module.exports = Users;