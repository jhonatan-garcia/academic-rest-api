
const CryptoJS = require("crypto-js");
const config= require("config")
const jwt = require("jsonwebtoken")

exports.EncryptPassword =(password)=>{
    let secretKey= config.get("secretkeys").cryptojs
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword

}

exports.DecryptPassword =(cryptPassword)=>{
    let secretKey= config.get("secretkeys").cryptojs
    let bytes= CryptoJS.AES.decrypt(cryptPassword, secretKey)
    let password = bytes.toString(CryptoJS.enc.Utf8)
    return password

}

exports.GenerateToken=(user)=>{
    let secrtKey = config.get("secretkeys").jwt
    let token = jwt.sign({
        exp : Math.floor(Date.now()/1000)+ (60 * 60),
        data : { username: user.username, id: user._id, role: user.role}
    },secrtKey)
    return token

}