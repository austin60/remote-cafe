const mongoose = require("mongoose");

const orderSchema=mongoose.Schema({
    phone:{type:String, require:true},
    order:{type:[{
                  count:Number,
                  desc:String,
                  foodname:String,
                  img1:String,
                  img2:String,
                  price:Number,
                  _id:String
    }], require:true},
    served:{type:Boolean, default:false},
    date:{type:Boolean, default:Date.now},

})

module.exports= mongoose.model('Remoteorder',orderSchema);