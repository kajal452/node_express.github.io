const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/user.controller');
const {validator,loginSchema,signupSchema} = require('../../request/index');
router.post('/login',[validator.body(loginSchema)], userController.postLogin);
router.post('/auth/update-profile',[validator.body(signupSchema)], userController.postUpdateProfile);

module.exports = router;