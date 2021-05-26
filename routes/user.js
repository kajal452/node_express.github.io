const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('express-joi-validation').createValidator({});
// const customSchema = require('../request/index');

router.get('/',userController.home);
router.get('/login',userController.getLogin);
router.get('/signup',userController.getSignup);
router.post('/login', userController.postLogin);
router.post('/signup', userController.postSignup);


module.exports = router;