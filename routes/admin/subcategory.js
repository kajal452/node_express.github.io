const express = require('express');
const router = express.Router();
const subCategoryCtrl = require('../../controllers/admin/subcategory.controller')
const { validator, subCategorySchema } = require('../../request/index');
router.get('/', subCategoryCtrl.index);
router.get('/create', subCategoryCtrl.create);
router.get('/:id', subCategoryCtrl.edit);
router.post('/', validator.body(subCategorySchema), subCategoryCtrl.store);
router.put('/:id', validator.body(subCategorySchema), subCategoryCtrl.update);
router.delete('/:id', subCategoryCtrl.destroy);
module.exports = router;