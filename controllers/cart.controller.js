const Cart = require('../models/Cart.model');
const Product = require('../models/Product.model');
module.exports.index = async (req, res) => {
    try {
        const userId = req.session.user._id;
        const cart = await Cart.findById(userId);
        res.render('pages/cart/index', { cart: cart });
      } catch (err) {
        res.status(500);
      }  
}

module.exports.addProduct = async (req, res) => {
    try {
        const userId=  req.session.user._id;
        const productId = req.params.productid;
        const product = await Product.findById(productId);
        if(product.quantity>0){
        const updateRet= await Cart.updateOne({_id:userId,"products._id":productId},{$inc:{"products.$.quantity":1}});
        if(updateRet.nModified<1){
          await Cart.findOneAndUpdate(
            {_id:userId},
            {$push:{products:{_id:product.id,quantity:1,name:product.name,price:product.price}}},
            {upsert:true,setDefaultsOnInsert:{updated_at:Date.now(),status:true}}
          );
        }
       
      }
        res.redirect('/');
      } catch (err) {
        res.status(500);
      }  
      
}

module.exports.checkout = async (req, res) => {
  try {
    const {cartId,productId,total} = req.body;
    const product = await Product.findByIdAndUpdate(productId,{$inc:{quantity:-total}});
    const price = total * product.price;

   const cart = await Cart.findOneAndUpdate(
      {_id:cartId,"products._id":productId},
      {$pull:{products:{_id:productId}},
      $push:{history:{_id:productId,quantity:total,name:product.name,price:price}}
    }
    );
    res.redirect('/');
  }catch(err){
    res.status(500);
  }
}