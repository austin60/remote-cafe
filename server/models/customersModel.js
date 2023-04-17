const mongoose = require("mongoose");

const customerSchema=mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:{type:String, required:true},
    pass:{type:String, required:true}

})

module.exports= mongoose.model('Remotecustomer',customerSchema);