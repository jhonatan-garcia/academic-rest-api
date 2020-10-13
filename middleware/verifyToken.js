const jwt = require("jsonwebtoken")
const config = require("config")

module.exports=(req,res,next)=>{
    let tk = req.headers["access-token"]
    
    if(tk){
        let secrtKey = config.get("secretkeys").jwt
        let decoded =  jwt.verify(tk,secrtKey)
        let currentDate = Math.floor(Date.now()/1000)

        if(decoded.exp>=currentDate){
            next()
        }else{
            return res.status(400).json({
                message: "This token is not valid"
            })
        }
    }else{
        return res.status(400).json({
            message: "not access token set"
        })
    }
}