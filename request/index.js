const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({});

module.exports= { 
  loginSchema: Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5)
}),
signupSchema:Joi.object({
  firstname: Joi.string().required().min(2),
  lastname: Joi.string().required().min(2),
  middlename: Joi.string(),
  mobile:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
}),
updateProfileSchema:Joi.object({
  firstname: Joi.string().required().min(2),
  lastname: Joi.string().required().min(2),
  middlename: Joi.string().min(2),
  mobile:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
}),
categorySchema:Joi.object({
  name: Joi.string().required().min(3)
}),
subCategorySchema: Joi.object({
  name: Joi.string().required().min(3),
  category: Joi.string().required()
}),
productSchema: Joi.object({
  name: Joi.string().required().min(4),
  price: Joi.number().precision(2).required(),
  description: Joi.string(),
  quantity: Joi.number().required(),
  discount: Joi.number(),
  category:Joi.string().required()
}),
validator:validator
}