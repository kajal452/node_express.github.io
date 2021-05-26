const Joi = require('joi')

module.exports.loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5)
});

module.exports.signupSchema = Joi.object({
  firstName: Joi.string().required().min(2),
  lastName: Joi.string().required().min(2),
  middleName: Joi.string().dataUri(''),
  mobile: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
});

module.exports.categorySchema = Joi.object({
  name: Joi.string().required().min(4)
});

module.exports.subCategorySchema = Joi.object({
  name: Joi.string().required(),
  parent: Joi.string().required()

});
module.exports.productSchema = Joi.object({
  name: Joi.string().required().min(4),
  price: Joi.number().required(),
  description: Joi.string().default(''),
  quantity: Joi.number().required(),
  discount: Joi.string().default('0')
});
