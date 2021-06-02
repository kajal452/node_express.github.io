const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const cartSchema = new mongoose.Schema({
    updated_at:{type:Date,default:Date.now},
    status:{type:Boolean,default:true},
    products:{type:Array,default:[]},
    history:{type:Array,default:[]}
  });



  const Cart = mongoose.model('Cart', cartSchema);

  module.exports =  Cart;