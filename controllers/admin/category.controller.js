const Category = require('../../models/Category.model');
module.exports.index = async (req, res) => {
    let result = await Category.find({parent: /^\/$/});
    res.render('pages/category/index', { categories: result });
}
module.exports.create = (req, res) => {
    res.render('pages/category/create');
}
module.exports.edit = async (req, res) => {
    const result= await Category.findById(req.params.id);
    res.render('pages/category/edit',{result:result,req:req});
}
module.exports.store = async (req, res) => {
    const name = req.body.name;
    let result = await Category.create({name:name,parent:'/',category:`/${name}`});
    res.redirect('/admin/category');
}
module.exports.update = async (req, res) => {
    const name = req.body.name;
    const id= req.params.id;
    let result = await Category.findByIdAndUpdate(id,{name:name,parent:'/',category:`/${name}`});
    res.redirect('/admin/category');
}
module.exports.destroy = async (req, res) => {
    const id= req.params.id;
    let result = await Category.findByIdAndDelete(id);
    res.redirect('/admin/category');
}