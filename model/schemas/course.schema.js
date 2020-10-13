const mongoose = require("mongoose")

 

const courseSchemas = new mongoose.Schema({
    code:{
        type:"String",
        required:true
    },
    name:{
        type:"String",
        required:true
    }

})

module.exports = courseSchemas