const Joi = require('joi')

const loginSchema = () =>{ return Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5)
});
}

const signupSchema =  () =>{ Joi.object({
  firstName: Joi.string().required().min(2),
  lastName: Joi.string().required().min(2),
  middleName: Joi.string().dataUri(''),
  mobile: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(5),
});
}

const categorySchema = () =>{ Joi.object({
  name: Joi.string().required().min(4)
});
}
const subCategorySchema = () =>{ Joi.object({
  name: Joi.string().required(),
  parent: Joi.string().required()

});
}
const productSchema = () =>{ Joi.object({
  name: Joi.string().required().min(4),
  price: Joi.number().required(),
  description: Joi.string().default(''),
  quantity: Joi.number().required(),
  discount: Joi.string().default('0')
});
}
module.exports = {loginSchema,productSchema,subCategorySchema,categorySchema,signupSchema}