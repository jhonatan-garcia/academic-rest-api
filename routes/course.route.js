
const controller = require("../controller/logic/course.controller")

exports.CourseRoutes = (app)=>{
    app.get("/course",(req,res,next)=>{
        controller.getAll(req,res,next)
    })

    app.post("/course",(req,res,next)=>{
        controller.createCourse(req,res,next)
    })
    
    app.put("/course",(req,res,next)=>{
        controller.updateCourse(req,res,next)
    })

    app.delete("/course",(req,res,next)=>{
        controller.deleteCourse(req,res,next)
    })

}