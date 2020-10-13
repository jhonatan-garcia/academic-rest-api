
const controller = require("../controller/logic/faculty.controller")

exports.FacultyRoutes = (app)=>{
    app.get("/faculty",(req,res,next)=>{
        controller.getAll(req,res,next)
    })

    app.post("/faculty",(req,res,next)=>{
        controller.createFaculty(req,res,next)
    })
    
    app.put("/faculty",(req,res,next)=>{
        controller.updateFaculty(req,res,next)
    })

    app.delete("/faculty",(req,res,next)=>{
        controller.deleteFaculty(req,res,next)
    })

}