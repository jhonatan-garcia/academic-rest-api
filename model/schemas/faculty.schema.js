const mongoose = require("mongoose")

 

const facultySchemas = new mongoose.Schema({
    code:{
        type:"String",
        required:true
    },
    name:{
        type:"String",
        required:true
    },
    decano:{
        type:"String",
        required:true
    }

})

module.exports = facultySchemas