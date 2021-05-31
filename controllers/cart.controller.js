const Cart = require('../models/Cart.model');
const Product = require('../models/Product.model');
module.exports.index = async (req, res) => {
    try {
        const user = req.session.user;
        const products = await Cart.find();
        res.render('pages/cart/index', { products: products });
      } catch (err) {
        res.status(500);
      }  
}

module.exports.addProduct = async (req, res) => {
    try {
        const productId = req.params.productid;
        const product = await Product.findById(productId);
        const user = req.session.user;
        const userId= user._id;
        const cart = await Cart.findById(userId);
        console.log(cart);
        if(cart){
          const cartProduct= await Cart.find({_id:userId,"products._id":productId});
          console.log(cartProduct);
          if(cartProduct){
            // await Cart.findOneAndUpdate({_id:userId,"products._id":productId},{$inc:{`products.$.quantity`:1}});
          }
          else{
            cart.products.push({_id:product.id,quantity:1,name:product.name,price:product.price});
            cart.save();
          }
          
        }else{
          await Cart.create({_id:userId,updated_at:Date.now(),status:true,products:[{_id:product.id,quantity:1,name:product.name,price:product.price}]});
        }
          res.redirect('/');
      } catch (err) {
        res.status(500);
      }  
      
}