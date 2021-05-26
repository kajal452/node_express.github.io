const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userid:{type:String,required:true},
    updated_at:{type:Date,default:Date.now},
    status:{type:Boolean,default:true},
    products:{type:Array,default:[]}
  });



  const Cart = mongoose.model('Cart', cartSchema);

  module.exports =  Cart;