const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String,required:true},
    description:{type: String,required:true},
    price:{type: String,required:true},
    quantity:{type: Number,required:true},
    discount:{type: String,required:true},
    category:{type:mongoose.Schema.Types.ObjectId,required:true,ref:'Category'},
    image:{type:String,default:''}
  });



  const Product = mongoose.model('Product', productSchema);

  module.exports =  Product;