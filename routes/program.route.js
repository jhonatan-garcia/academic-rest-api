
const controller = require("../controller/logic/program.controller")

exports.ProgramRoutes = (app)=>{
    app.get("/program",(req,res,next)=>{
        controller.getAll(req,res,next)
    })

    app.post("/program",(req,res,next)=>{
        controller.createProgram(req,res,next)
    })
    
    app.put("/program",(req,res,next)=>{
        controller.updateProgram(req,res,next)
    })

    app.delete("/program",(req,res,next)=>{
        controller.deleteProgram(req,res,next)
    })

}