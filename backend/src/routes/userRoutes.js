const express=require("express")
const userController=require("../controllers/UserController")
const shortid=require('shortid')
const multer=require('multer') 
const router=express.Router() 
const fs=require('fs')
const Users=require('../models/User')
const path=require('path')
const dirPath = path.join(__dirname, '..', '/../images')
const jwt=require('jsonwebtoken')
module.exports=function(){
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './images')//destino
        },
        filename: function (req, file, cb) {
          // obtener la extensión del archivo
          const extension = file.mimetype.split('/')[1];
          // generar ID para ponerlo como nombre de imagen y no se repitan
          cb(null, `${shortid.generate()}.${extension}`);
        }
      })
    var upload = multer({ storage: storage })//necesario para acceder a carpetas

    router.post('/login',userController.login)
    router.post('/',upload.single('picture'),userController.create)
    router.get('/perfil',userController.getById)
    router.put('/:id',upload.single('picture'),async(req,res,next)=>{ 
      try {
      if(req.file && req.file.filename){ 
          console.log("si"+req.body.picture)
          const nuevo= await Users.findById(jwt.decode(req.params.id).id) 
          if(!nuevo){
            throw new Error("Usuario no encontrado")
          } 
          fs.unlink(path.join(dirPath, nuevo.picture), (err) => {
            if (err) {
              console.log(err) 
              res.status(400).json({
                message:"error"+err
              })
            } else {
              console.log("Eliminado correctamente")
              next()
            }
          }) 
      }else{
        next()
      }
    }
        catch (error) {
         console.log(error)
         res.json({
           message:""+error
         }) 
        } 
    },userController.update)

    router.delete('/:id', async(req,res,next)=>{ 
      try {
        const nuevo= await Users.findById(jwt.decode(req.params.id).id) 
        if(!nuevo){
          throw new Error("Usuario no encontrado")
        } 
        fs.unlink(path.join(dirPath, nuevo.picture), (err) => {
          if (err) {
            console.log(err) 
            res.status(400).json({
              message:"error"+err
            })
          } else {
            console.log("Eliminado correctamente")
            next()
          }
        })
      } catch (error) {
       console.log(error)
       res.json({
         message:""+error
       }) 
      }
    },userController.delete)
    return router
}