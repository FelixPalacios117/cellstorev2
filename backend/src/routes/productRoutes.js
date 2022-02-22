const express=require('express')
const router=express.Router()
const productController=require('../controllers/ProdutController')
const multer=require('multer')
const shortid=require('shortid')
const Products=require('../models/Product')
const fs=require('fs') 
const path=require('path')
const verifyToken  = require('../middlewares/auth')
const dirPath = path.join(__dirname, '..', '/../images')
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
    router.post('/',verifyToken.verifyToken, upload.single('picture'),productController.create)
    router.get('/',productController.getAll)
    router.get('/last',productController.getLast)
    router.get('/:id',productController.getById)
    router.delete('/:id', async(req,res,next)=>{ 
        try {
          const nuevo= await Products.findById(req.params.id) 
          console.log(nuevo)
          if(!nuevo){
            throw new Error("Producto no encontrado")
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
      },productController.delete)
    router.put('/:id',upload.single('picture'),async(req,res,next)=>{ 
        try {
        if(req.file && req.file.filename){  
            const nuevo= await Products.findById(req.params.id) 
            if(!nuevo){
              throw new Error("Producto no encontrado")
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
      },productController.update)
      
      return router
}