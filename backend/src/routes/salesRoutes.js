const express=require('express')
const salesController=require('../controllers/SalesController')
const router=express.Router()
module.exports=function(){
    router.post("/",salesController.create)
    router.get('/:id',salesController.getAllById)
    return router
}