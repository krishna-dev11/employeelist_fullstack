const mongoose = require("mongoose");

const employeeschema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }


})

module.exports = mongoose.model("EMPLOYEE" , employeeschema);