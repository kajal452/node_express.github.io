const Products = require('../../models/Product.model');
module.exports.index = async (req,res) =>{
    let result = await Products.find();
    res.render('pages/products/index',{categories:result});
}
module.exports.store = async (req,res) => {

}
module.exports.update = async (req,res) =>{
    
}
module.exports.destroy = async (req,res) =>{
    
}