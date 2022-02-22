const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser') 
const userRouter=require('./routes/userRoutes')
const productRouter=require('./routes/productRoutes')
const brandRouter=require('./routes/brandRoutes')
const salesRouter=require('./routes/salesRoutes')
async function setup(){
    const app=express() 
    app.listen(process.env.PORT || 4000)
    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/users',userRouter())
    app.use('/products',productRouter())
    app.use('/brands',brandRouter())
    app.use('/sales',salesRouter())
    app.use("/images", express.static("images"));
    console.log("Escuchando en el puerto",process.env.PORT)
}
module.exports={setup}