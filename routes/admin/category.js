const express = require('express');
const router = express.Router();
const categoryCtrl = require('../../controllers/admin/category.controller')


router.get('/',categoryCtrl.index);
router.get('/create',categoryCtrl.create);
router.get('/:id',categoryCtrl.edit);
router.post('/',categoryCtrl.store);
router.put('/:id',categoryCtrl.update);
router.delete('/:id',categoryCtrl.destroy);

module.exports = router;