const mongoose = require("mongoose");

const orderSchema=mongoose.Schema({
    foodname:{type:String, require:true},
    quantity:{type:Number, require:true},
    spicy:{type:Boolean, require:true},
    cost:{type:Number, require:true},
    phone:{type:String, require:true},
   // paid:{type:Boolean, require:true},
    served:{type:Boolean, default:false},
    date:{type:Boolean, default:Date.now},

})

module.exports= mongoose.model('Remoteorder',orderSchema);