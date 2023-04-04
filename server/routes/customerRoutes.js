const express=require("express");
const router=express.Router();
const customerModel=require("../models/customersModel");


//create data
router.post("/signup",async(req,res)=>{
    try{
        const SignUp=new customerModel({
            name:req.body.name,
            phone:req.body.phone,
            email:req.body.email,
            pass:req.body.pass
        })

        await SignUp.save();
        res.status(201).json(SignUp)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

router.post("/client",async(req,res)=>{
    try{
        const {phone,email}=req.body
        const client= await customerModel.find({phone:phone,email:email});
        res.status(201).json(client)
        console.log(client)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})
//read data
router.get("/customers",async(req,res)=>{
    try{
        const Customers=await customerModel.find({});
        res.status(201).json(Customers)
  
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

//update data
router.put("/profile/:id",async(req,res)=>{
    try{
      const profUpdate=await customerModel.findByIdAndUpdate(req.params.id,req.body)
      res.status(201).json(profUpdate)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

//delete data
router.delete("/customers/delete/:id",async(req,res)=>{
    try{
       await customerModel.findByIdAndDelete(req.params.id)

    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

module.exports=router;