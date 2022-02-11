const express=require("express")
const userController=require("../controllers/UserController")
const router=express.Router() 
module.exports=function(){
    router.post('/login',userController.login)
    router.post('/',userController.create)
    return router
}