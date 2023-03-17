const Joi = require('joi');

const createValidation = (data) => {
    const schema = {
        name : Joi.string().min(2).max(50).required(),
        desc : Joi.string().min(2).max(500).required(),
        strand : Joi.string().min(2).max(50).required()
    }
    return Joi.object(schema).validate(data);
}


const updateValidation = (data) => {
    const schema = {
        _id : Joi.string().required(),
        name : Joi.string().min(2).max(50).optional(),
        desc : Joi.string().min(2).max(500).optional(),
        strand : Joi.string().min(2).max(50).optional()
    }
    return Joi.object(schema).validate(data);   
}

module.exports = {
    createValidation,
    updateValidation
}