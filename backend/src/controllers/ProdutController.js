const Products=require('../models/Product')
exports.create=async(req,res)=>{
    try { 
         const product=new Products(req.body)
         if (req.file && req.file.filename) {
            product.picture = req.file.filename;
          } 
         const nuevo=await product.save()
         res.json({
             message:"Agregado correctamente",
             nuevo:nuevo
         })
    } catch (error) {
        res.json({
            error:""+error
        })
    }
}
exports.getById=async(req,res)=>{
    try {
        const nuevo=await Products.findById({_id:req.params.id})
        .populate({
            path: 'brand',
            model: 'Brand',
         })
         if(!nuevo){
             throw new Error("No se encontró")
         }
        res.json({
            nuevo
        })
    } catch (error) {
        console.log(""+error)
        res.json({
            message:""+error
        })
    }
}
exports.getAll=async(req,res)=>{
    try {
        const productos=await Products.find({}).populate({
            path: 'brand',
            model: 'Brand',
         })
        res.json({
            productos:productos
        })
    } catch (error) {
        res.json({
            message:""+error
        })
    }
}
exports.getLast=async(req,res)=>{
    try {
        const productos=await Products.find({}).limit(6).populate({
            path: 'brand',
            model: 'Brand',
         })
        res.json({
            productos:productos
        })
    } catch (error) {
        res.json({
            message:""+error
        })
    }
}
exports.delete=async(req,res)=>{
    try {
        await Products.findOneAndDelete(req.params.id)
        res.json({
            message:"Eliminado correctamente"
        })
    } catch (error) {
        console.log(""+error)
        res.json({
            message:""+error
        })
    }
}
exports.update=async(req,res)=>{
    try { 
        const {name,description,brand,price,stock}=req.body
        const buscado=await Products.findById(req.params.id)
        let picture=buscado.picture
        if (req.file && req.file.filename) {
            picture = req.file.filename;
        } 
        const nuevo=await Products.findOneAndUpdate(
            {_id:req.params.id},
            {
                name,
                description,
                brand,
                price,
                picture:picture ,
                stock
            },{
                new:true
            }
        )
        res.json({
            message:"modificado correctamente",
            nuevo:nuevo
        }) 
    } catch (error) {
        console.log(error)
        res.json({
            message:""+error
        })
    }
}