const jwt=require("jsonwebtoken")

const SECRET_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjkxNDM0OTNjZTk2ZWMwNmM4MTY2YTIiLCJpYXQiOjE3MjA3OTYwOTAsImV4cCI6MTcyMDk2ODg5MH0.7b7um1E0xqoutOp1J_eIAnmtXR2MNqSyRAsAjaUbvuw";

const generateToken=(userId)=>{
    const token=jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
    return token;
}

const getUserIdFromToken=(token)=>{
    const decodedToken=jwt.verify(token,SECRET_KEY)
    return decodedToken.userId;
}

module.exports={generateToken,getUserIdFromToken}