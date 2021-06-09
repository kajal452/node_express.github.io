const express = require('express');
const router = express.Router();
const multer = require('multer');
const helpers = require('../../util/helpers');
const productCtrl = require('../../controllers/admin/product.controller')
var upload = multer({ storage: helpers.multer_storage });
router.get('/', productCtrl.index);
router.get('/create', productCtrl.create);
router.get('/:id', productCtrl.edit);
router.post('/', upload.single('photo'), productCtrl.store);
router.put('/:id', productCtrl.update);
router.delete('/:id', productCtrl.destroy);

module.exports = router;