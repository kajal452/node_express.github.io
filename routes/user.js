const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('express-joi-validation').createValidator({});
// const customSchema = require('../request/index');
const middleware = require('../middleware')
router.get('/',userController.home);
router.get('/login',middleware.guest,userController.getLogin);
router.get('/signup',middleware.guest,userController.getSignup);
router.post('/login',middleware.guest, userController.postLogin);
router.post('/signup',middleware.guest, userController.postSignup);
router.get('/logout',middleware.authenticate,userController.getLogout);

module.exports = router;