const brand=require('../models/Brand') 
exports.create=async(req,res)=>{
    try {
            if(!req.body.name)  {
               throw new Error("No dejes el campo vacio") 
            }
          const nuevo=await new brand(req.body) 
          nuevo.save() 
            res.json({
                message:"Marca creada correctamente" 
            }) 
    } catch (error) {
        res.status(400).json({
            message:""+error
        })
    }
}
exports.getById=async(req,res)=>{
    try {
        const buscado=await brand.findById(req.params.id)
        res.json({
            encontrado:buscado
        })
    } catch (error) {
        res.status(400).json({
            message:""+error
        })
    }
}
exports.getAll=async(req,res)=>{
    try {
        const brands=await brand.find({})
        res.json({
            marcas:brands
        })
    } catch (error) {
        res.json({
            message:"error"+error
        })
    }
}
exports.update=async(req,res)=>{
    try {
        const nuevo=await brand.findByIdAndUpdate(
            {_id:req.params.id},
            {
                name:req.body.name
            },{
                new:true
            }
        )
        res.json({
            message:"Actualizado correctamente",
            nuevo:nuevo
        })
    } catch (error) {
        res.status(404).json({
            message:"Error"+error
        })
    }
}
exports.delete=async(req,res)=>{
    try {
        await brand.findByIdAndDelete(req.params.id)
        res.json({
            message:"Eliminado correctamente"
        })
    } catch (error) {
        req.status(400).json({
            message:"error"+error
        })
    }
}