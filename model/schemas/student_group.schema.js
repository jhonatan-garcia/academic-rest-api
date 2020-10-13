const mongoose = require("mongoose")
const validator = require("mongoose-unique-validator")
 

const studentGroupSchema = new mongoose.Schema({
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_student",
        required:true
    },
    group_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_group",
        required:true
    }

})

studentGroupSchema.plugin(validator)
module.exports = studentGroupSchema