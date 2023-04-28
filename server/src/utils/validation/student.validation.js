const Joi = require('joi');

const createValidation = (data) => {
    const schema = {
        first_name : Joi.string().min(2).max(50).required(),
        last_name : Joi.string().min(2).max(50).required(),
        student_number : Joi.string().length(10).required(),
        grade : Joi.number().min(9).max(12).required(),
    }
    return Joi.object(schema).validate(data);
}

const updateValidation = (data) => {
    const schema = {
        _id : Joi.string().required(),
        first_name : Joi.string().min(2).max(50).optional(),
        last_name : Joi.string().min(2).max(50).optional(),
        student_number : Joi.string().length(10).optional(),
        grade : Joi.number().min(9).max(12).optional(),
    }
    return Joi.object(schema).validate(data);
}

module.exports = {
    createValidation,
    updateValidation
}

