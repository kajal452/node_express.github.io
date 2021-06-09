const Category = require('../../models/Category.model');
module.exports.index = async (req, res) => {
    let result = await Category.find({ parent: { $ne: '/' } });
    res.render('pages/subcategory/index', { subcategories: result });
}
module.exports.create = async (req, res) => {
    let result = await Category.find({ parent: /^\/$/ });
    res.render('pages/subcategory/create', { categories: result });
}
module.exports.edit = async (req, res) => {
    let categories = await Category.find({ parent: /^\/$/ });
    const result = await Category.findById(req.params.id);
    res.render('pages/subcategory/edit', { result: result, req: req, categories: categories });
}
module.exports.store = async (req, res) => {
    const { name, category } = req.body;
    let result = await Category.create({ name: name, parent: category, category: `/${name}` });
    res.redirect('/admin/subcategory');
}
module.exports.update = async (req, res) => {
    const { name, category } = req.body;
    const id = req.params.id;
    let result = await Category.findByIdAndUpdate(id, { name: name, parent: category, category: `/${name}` });
    res.redirect('/admin/subcategory');
}
module.exports.destroy = async (req, res) => {
    const id = req.params.id;
    let result = await Category.findByIdAndDelete(id);
    res.redirect('/admin/subcategory');
}