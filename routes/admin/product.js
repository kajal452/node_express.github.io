const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/admin/product.controller')

router.get('/',productCtrl.index);
router.get('/create',productCtrl.create);
router.get('/:id',productCtrl.edit);
router.post('/',productCtrl.store);
router.put('/:id',productCtrl.update);
router.delete('/:id',productCtrl.destroy);

module.exports = router;