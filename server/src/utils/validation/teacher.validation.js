const Joi = require('joi');

// Register Validation
const registerValidation = (data) => {
  const schema = {
    first_name: Joi.string().min(2).max(50).required(),
    last_name: Joi.string().min(2).max(50).required(),
    profile_picture_url: Joi.string().uri().optional(),
    teacher_number: Joi.string().length(6).required(),
    school: Joi.string().required(),
    password: Joi.string().min(6).max(25).required(),
    email: Joi.string().min(6).email().required(),
  };
  return Joi.object(schema).validate(data);
};

// login Validation
const loginValidation = (data) => {
  const schema = {
    email: Joi.string().min(6).email().required(),
    password: Joi.string().min(6).max(25).required(),
  };
  return Joi.object(schema).validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;