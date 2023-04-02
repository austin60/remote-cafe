const express=require("express");
const router=express.Router();
const foodModel=require("../models/foodModel");

//create food 
router.post('/post',async(req,res)=>{
  try{
    const foodData=new foodModel({
        foodname:req.body.foodname,
        price:req.body.price,
        desc:req.body.desc,
       // type:req.body.type,
        img1:req.body.img1,
        img2:req.body.img2
    })

    await foodData.save();
    res.status(201).json(foodData)
  }
  catch(err){
    res.status(401).json({message:err.message})
  }
})

//read data
router.get("/",async(req,res)=>{
    try{
       const foodItems=await foodModel.find();
       res.status(201).json(foodItems)
    
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

//read individual data
router.get("/foods/:id",async(req,res)=>{
    try{
       const foodItem=await foodModel.find(req.params.id);
       res.status(201).json(foodItem)
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})
//update data
router.put("/update-item/:id",async(req,res)=>{
    try{
         foodItemUpdate=await foodModel.findByIdAndUpdate(req.params.id,req.body);
         res.status(201).json(foodItemUpdate)
    }
    catch(err){
         res.status(401).json({message:err.message})
    }
})
//delete data
router.delete("/delete-item/:id",async(req,res)=>{
    try{
        await foodModel.findByIdAndDelete(req.params.id);
    }
    catch(err){
        res.status(401).json({message:err.message})
    }
})

module.exports=router;