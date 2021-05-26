const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String,required:true},
    description:{type: String,required:true},
    price:{type: String,required:true},
    quantity:{type: String,required:true},
    discount:{type: String,required:true},
    categories:{type:Array,required:true}
  });



  const Product = mongoose.model('Product', productSchema);

  module.exports =  Product;