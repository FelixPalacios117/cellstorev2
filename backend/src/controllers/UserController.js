const Users=require('../models/User')
let Validator=require('validatorjs')
exports.login=async(req,res)=>{
    try { 
        const {username,password}=req.body
        if(username && password){
            res.json({
                mesagge:"ok"
            })
        }else{ 
            res.status(400).json({
                message:"Ingresa el usuario y contraseña"
            })
        }
    } catch (error) {
        console.log(error)
        res.json({
            message:error
        })
    }
}
exports.create=async(req,res)=>{
    try {
        console.log("si")
        let rules = {
            username: "required|min:5",
            password: "required|string|min:8",
            name:"required|min:5"
          };
        let args = {
            username: req.body.username,
            password: req.body.password,
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
            if(await usuario.save()){
                res.json({
                    message:'Usuario creado correctamente'
                })
            }else{
                console.log("error")
            }
    } catch (error) { 
        res.status(400).json({
            message:""+error
        })
    }
}