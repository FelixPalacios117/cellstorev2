const mongoose=require('mongoose')
const ProductSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        ref:"Brand",
        type:mongoose.Schema.Types.ObjectId
    },
    image:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
})
module.exports=mongoose.model('Product',ProductSchema)