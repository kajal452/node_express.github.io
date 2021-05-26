const Category = require('../../models/Category.model');
module.exports.index = async (req, res) => {
    let result = await Category.find();
    res.render('pages/category/index', { categories: result });
}
module.exports.create = (req, res) => {
    res.render('pages/category/create');
}
module.exports.edit = async (req, res) => {
    const result= await Category.findById(req.params.id);
    res.render('pages/category/edit',{result:result});
}
module.exports.store = async (req, res) => {
    const name = req.body.name;
    let result = await Category.create({name:name,parent:'/',category:`/${name}`});
    console.log(result);
   res.redirect('/category');
}
module.exports.update = async (req, res) => {

}
module.exports.destroy = async (req, res) => {

}