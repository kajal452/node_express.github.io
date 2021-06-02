const Product = require('../../models/Product.model');
module.exports.index = async (req, res) => {
    let result = await Product.find();
    res.json({ products: result });
}

module.exports.store = async (req, res) => {
    const {photo,...product} = req.body;
    let result = await Product.create({...product,image:req.file.filename});
    res.redirect('/admin/product');
   
}
module.exports.update = async (req, res) => {
    const id= req.params.id;
    const {...product} = req.body;
    let result = await Product.findByIdAndUpdate(id,{...product});
    res.redirect('/admin/product');
}
module.exports.destroy = async (req, res) => {
    const id= req.params.id;
    let result = await Product.findByIdAndDelete(id);
    res.redirect('/admin/product');
}
module.exports.changeStatus = async (req, res) => {
    const {id} = req.body;
    let result = await Product.findByIdAndUpdate(id,{...product});
    res.redirect('/admin/product');
}