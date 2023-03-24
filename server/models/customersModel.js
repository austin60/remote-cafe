const mongoose = require("mongoose");

const customerSchema=mongoose.Schema({
    name:{type:String, require:true},
    phone:{type:Number, require:true},
    email:{type:String, require:true},
    pass:{type:String, require:true}

})

module.exports= mongoose.model('Remotecustomer',customerSchema);