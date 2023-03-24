const express=require("express");
const router=express.Router();
const adminModel=require("../models/adminModel")

//create
router.post("/admin",async(req,res)=>{
     try{
        const newAdmin=new adminModel({
            fname:req.body.fname,
            sname:req.body.sname,
            email:req.body.email,
            phone:req.body.phone,
            idnum:req.body.idnum
        })

        await newAdmin.save();
        res.status(201).json(newAdmin);
     }
     catch(err){
        res.status(401).json({message:err.message})
     }
})
//read
router.get("/admin-list",async(req,res)=>{
    try{
        const adminList=await adminModel.find({});
        res.status(201).json(adminList);
     
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

//read single admin
router.get("/admin/:id",async(req,res)=>{
    try{
        const adminList=await adminModel.findById(req.params.id);
        res.status(201).json(adminList);
       
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})
//update
router.put("/update/admin/:id",async(req,res)=>{
    try{
        const adminUpdate=await adminModel.findByIdAndUpdate(req.params.id,req.body)
        res.status(201).json(adminUpdate);
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})
//delete
router.delete("/delete/admin/:id",async(req,res)=>{
    try{
        await adminModel.findByIdAndDelete(req.params.id)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

module.exports=router;