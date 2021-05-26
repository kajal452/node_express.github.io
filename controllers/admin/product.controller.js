const Product = require('../../models/Product.model');
const Category= require('../../models/Category.model')

module.exports.index = async (req, res) => {
    let result = await Product.find();
    res.render('pages/products/index', { products: result });
}
module.exports.create = async (req, res) => {
    const subcategories= await Category.find({parent: {$ne:'/'}});
    res.render('pages/products/create',{subcategories:subcategories});
}
module.exports.edit = async (req, res) => {
    const result= await Product.findById(req.params.id);
    const subcategories= await Category.find({parent: {$ne:'/'}});
    res.render('pages/products/edit',{result:result,req:req,subcategories:subcategories});
}
module.exports.store = async (req, res) => {
    console.log(req.body) // form fields
    console.log(req.file) // form files
    const {photo,...product} = req.body;
    let result = await Product.create({...product,image:req.file.filename});
    res.redirect('/admin/product');
   
}
module.exports.update = async (req, res) => {
    const id= req.params.id;
    let result = await Product.findByIdAndUpdate(id,{...req.body});
    res.redirect('/admin/product');
}
module.exports.destroy = async (req, res) => {
    const id= req.params.id;
    let result = await Product.findByIdAndDelete(id);
    res.redirect('/admin/product');
}