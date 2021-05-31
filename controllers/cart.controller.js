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
        const userId= user.id;
        const cart= await  Cart.update(
            { _id: userId, status: true }
          , {
              $set: { updated_at: new Date() }
            , $push: { products: {
                _id: productId
              , quantity: 1
              , name: product.name
              , price: product.price
            }}
          }, true);
          res.redirect('/');
      } catch (err) {
        res.status(500);
      }  
      
}