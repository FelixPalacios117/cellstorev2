const sales=require('../models/Sales')
exports.create=async(req,res)=>{
    try {
        const factura=new sales(req.body)
        const guardar=await factura.save()
        res.json({
            message:"Factura creada",
            guardar
        })
    } catch (error) {
        res.json({
            message:""+error
        })
    }
}
exports.getAllById=async(req,res)=>{
    try {
        const factura=await sales.find({customer:req.params.id})
        res.json({
            facturas:factura
        })
    } catch (error) {
        res.json({
            message:""+error
        })
    }
}