const express = require('express');
const router = express.Router();
const subCategoryCtrl = require('../../controllers/admin/subcategory.controller')
router.get('/',subCategoryCtrl.index);
router.get('/create',subCategoryCtrl.create);
router.get('/:id',subCategoryCtrl.edit);
router.post('/',subCategoryCtrl.store);
router.put('/:id',subCategoryCtrl.update);
router.delete('/:id',subCategoryCtrl.destroy);
module.exports = router;