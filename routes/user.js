const express = require('express');
const router = express.Router();
const Joi = require('joi');
const userController = require('../controllers/user.controller');
const { validator, loginSchema, signupSchema } = require('../request/index');
const middleware = require('../middleware')
router.get('/', userController.home);
router.get('/login', middleware.guest, userController.getLogin);
router.get('/signup', middleware.guest, userController.getSignup);
router.post('/login', [middleware.guest, validator.body(loginSchema)], userController.postLogin);
router.post('/signup', [middleware.guest, validator.body(signupSchema)], userController.postSignup);
router.get('/logout', middleware.authenticate, userController.getLogout);

module.exports = router;