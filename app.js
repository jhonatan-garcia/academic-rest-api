const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")

const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodeParser = bodyParser.urlencoded({extended: true})

app.use(jsonParser)
app.use(urlEncodeParser)

const ipFn = require("./middleware/getIpAddress")
app.use("*",ipFn)

app.get("/",(req,res,next)=>{
    res.send("welcome")
})

//user routes
const userRoutes = require("./routes/user.route")
userRoutes.UserRoutes(app)
/*
const Tk = require("./middleware/verifyToken")
app.use(Tk)*/


//student routes
const studentRoutes = require("./routes/student.route")
studentRoutes.StudentRoutes(app)

//teacher routes
const teacherRoutes = require("./routes/teacher.route")
teacherRoutes.TeacherRoutes(app)

//course routes
const periodRoutes = require("./routes/period.route")
periodRoutes.PeriodRoutes(app)


//period routes
const courseRoutes = require("./routes/course.route")
courseRoutes.CourseRoutes(app)

//faculty routes
const facultyRoutes = require("./routes/faculty.route")
facultyRoutes.FacultyRoutes(app)

//program routes
const programRoutes = require("./routes/program.route")
programRoutes.ProgramRoutes(app)








app.listen(port,()=>{ console.log("server is running")})