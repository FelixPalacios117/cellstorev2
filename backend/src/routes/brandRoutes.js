const express=require('express')
const brandController=require('../controllers/BrandController')
const router=express.Router()
module.exports=function(){
    router.post('/',brandController.create)
    router.delete('/:id',brandController.delete)
    router.put('/:id',brandController.update)
    router.get('/',brandController.getAll)
    router.get('/:id',brandController.getById)
    return router
}