const mongoose=require("mongoose");

const adminSchema=mongoose.Schema({
    fname:{type:String,required:true},
    sname:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    idnum:{type:Number,required:true}
})

module.exports=mongoose.model("Remoteadmin",adminSchema);