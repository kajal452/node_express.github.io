const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/admin/category.controller')
const { validator, categorySchema } = require('../../request/index');

router.get('/', categoryCtrl.index);
router.get('/create', categoryCtrl.create);
router.get('/:id', categoryCtrl.edit);
router.post('/', validator.body(categorySchema), categoryCtrl.store);
router.put('/:id', validator.body(categorySchema), categoryCtrl.update);
router.delete('/:id', categoryCtrl.destroy);

module.exports = router;