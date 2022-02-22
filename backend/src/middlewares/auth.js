const jwt=require("jsonwebtoken")
const User =require('../models/User')
exports.verifyToken=async(req,res,next)=>{
    try {
        const token=req.headers['token']
        console.log(token)
        if(!token){
            return res.status(403).json({
                message:"no hay token"
            })
        }
        const decode=jwt.verify(token,process.env.SECRET_KEY)
        const user=await User.findById(decode.id)
        if(!user)return res.status(404).json({
            message:"no existe"
        })
        next()
    } catch (error) {
        res.json({
            message:""+error
        })
    }
}