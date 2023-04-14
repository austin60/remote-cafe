const express=require("express");
const router=express.Router();
const orderModel=require("../models/ordersModel");

//create data
router.post("/make-order",async(req,res)=>{
    try{
       const Order= new orderModel({
       phone:req.body.phone,
       order:req.body.order
       })

       await Order.save();
       res.status(201).json(Order);

    }
    catch(err){
       res.status(401).json({message:err.message})
    }
})
//read data 
router.get("/orders",async(req,res)=>{
    try{
       const Orders=await orderModel.find({date:-1});
       res.status(201).json(Orders)
    }
    catch(err){
       res.status(401).json({message:err.message})
    }
})
//delete data
router.delete("/orders/delete/:id",async(req,res)=>{
    try{
        await orderModel.findByIdAndDelete(req.params.id)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

module.exports=router;