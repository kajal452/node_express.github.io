const Product = require('../../models/Product.model');
module.exports.index = async (req, res) => {
    try {
        let result = await Product.find({ deleted_at: null });
        res.json({ 'msg': "All Items", result : result });
    } catch (exception) {
        res.status(500);
    }

}

module.exports.store = async (req, res) => {
    const { photo, ...product } = req.body;
    try {
        let result = await Product.create({ ...product});
        res.json({ 'msg': "Item Created Succefully", "result": result });
    } catch (exception) {
        res.status(500);
    }

}
module.exports.update = async (req, res) => {
    const id = req.params.id;
    const { ...product } = req.body;
    try {
        let result = await Product.findByIdAndUpdate(id, { ...product });
        console.log(result);
        res.json({ 'msg': "Item Updated Succefully", "result": result });
    } catch (exception) {
        res.status(500);
    }

}
module.exports.destroy = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.findByIdAndUpdate(id, { deleted_at: Date.now() });
        res.json({ 'msg': "Item Destroy Succefully", "result": result });
    } catch (exception) {
        res.status(500);
    }

}
module.exports.changeStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        let result = await Product.findByIdAndUpdate(id, { status: status });
        res.json({ 'msg': "Item Change Status Succefully", "result": result });
    } catch (exception) {
        res.status(500);
    }


}