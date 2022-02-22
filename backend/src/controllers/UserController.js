const Users=require('../models/User')
const jwt=require('jsonwebtoken') 
let Validator=require('validatorjs')
const { encrypt, decrypt } = require("../middlewares/rsa");
const { json } = require('body-parser');
exports.getAll=async(req,res)=>{
    try {
        const nuevo=await Users.find({})
        res.json({
            todos:nuevo
        })
    } catch (error) {
        res.json({
            error:""+error
        })
    }
}
exports.login=async(req,res)=>{
    try { 
        const {username,password}=req.body
        if(username && password){
            const encontrado=await Users.findOne({username})
            if(!encontrado){
                throw new Error("Usuario o contraseña erroneos")  
            } 
            if(password!==decrypt(encontrado.password)){
                throw new Error("Contraseña erronea")
            }
            const token=jwt.sign({id:encontrado._id},process.env.SECRET_KEY,{expiresIn:86400})
            res.json({
                message:"todo ok",
                token:token 
            })
        }else{ 
            res.status(202).json({
                message:"Ingresa el usuario y contraseña"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(202).json({
            message:""+error
        })
    }
}
exports.getById=async(req,res)=>{
    try {
        const user=await Users.findById(jwt.decode(req.body.token).id)
        res.json({
            user
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:""+error
        })
    }
}
exports.delete=async(req,res)=>{
    try {
        await Users.findByIdAndDelete({
            _id:jwt.decode(req.params.id).id
        })
        res.json({
            message:"Eliminado correctamente"
        })
    } catch (error) {
        console.log(error)
        res.json({
            error:""+error
        })
    }
}
exports.update=async(req,res,next)=>{
    try {
        const {name,email,username,password,type}=req.body
        const buscado=await Users.findById(jwt.decode(req.params.id).id)
        let picture=buscado.picture
        if (req.file && req.file.filename) {
            picture = req.file.filename;
        } 
        const nuevo=await Users.findOneAndUpdate(
            {_id:jwt.decode(req.params.id).id},
            {
                name,
                email,
                username,
                password,
                picture:picture ,
                type
            },{
                new:true
            }
        )
        res.json({
            message:"modificado correctamente",
            nuevo:nuevo
        })
        next()
    } catch (error) {
        console.log(error)
        res.json({
            message:""+error
        })
    }
}
exports.create=async(req,res)=>{
    try { 
        let rules = {
            username: "required|min:5",
            password: "required|string|min:8",
            name:"required|min:5"
          };
        let args = {
            username: req.body.username,
            password: encrypt(req.body.password),
            name:req.body.name,
            email:req.body.email,
            type:req.body.type,
            picture:req.body.picture
          };
          let validation = new Validator(args, rules);
          if(validation.fails()){ 
            throw new Error("Los datos ingresados no cumplen los requisitos")
          }  
          const usuario= new Users(args) 
          if (req.file && req.file.filename) {
            usuario.picture = req.file.filename;
          } 
          const guardar=await usuario.save() 
          const token= jwt.sign({id:guardar._id,username:guardar.username},process.env.SECRET_KEY,{expiresIn:86400})
          res.json({
                message:'Usuario creado correctamente',
                token:token,
                id:jwt.decode(token)
          }) 
    } catch (error) { 
        res.status(400).json({
            message:""+error
        })
    }
}