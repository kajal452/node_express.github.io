const express = require('express');
const router = express.Router();
const multer = require('multer');
const helpers = require('../../util/helpers');
const productCtrl = require('../../controllers/api/product.controller')
// const {validator,productSchema} = require('../../request/index');
var upload = multer({ storage: helpers.multer_storage });
router.get('/',productCtrl.index);
router.post('/',upload.single('photo'),productCtrl.store);
router.post('/change-status',productCtrl.changeStatus);
router.put('/:id',productCtrl.update);
router.delete('/:id',productCtrl.destroy);

module.exports = router;