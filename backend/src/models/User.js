const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please enter a valid email",
        ],
    },
    type:{
        type:String
    },
    username:{
        unique:true,
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    picture:{
        type:String
    }
})
module.exports=mongoose.model('User',userSchema)