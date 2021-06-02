const express = require('express');
const router = express.Router();
const middleware = require('../middleware')
const cartController = require('../controllers/cart.controller')
router.get('/',middleware.authenticate,cartController.index);
router.get('/:productid',middleware.authenticate,cartController.addProduct);
router.post('/checkout',middleware.authenticate,cartController.checkout);
module.exports = router;