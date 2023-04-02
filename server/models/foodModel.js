const mongoose = require("mongoose");

const foodSchema=mongoose.Schema({
    foodname:{type:String, require:true},
    price:{type:Number, require:true},
    desc:{type:String, require:true},
   // type:{type:String, require:true},
    img1:{type:String, require:true},
    img2:{type:String, require:true}

})

module.exports= mongoose.model('Remotefood',foodSchema);