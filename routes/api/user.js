const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/user.controller');
const {validator,loginSchema,updateProfileSchema} = require('../../request/index');
router.post('/login',[validator.body(loginSchema)], userController.postLogin);
router.post('/auth/update-profile',[validator.body(updateProfileSchema)], userController.postUpdateProfile);

module.exports = router;