const Joi = require('joi');

const createValidation = (data) => {
    const schema = {
        name: Joi.string().min(2).max(50).required(),
        school_year: Joi.string().min(2023).max(2100).required()
    };
    return Joi.object(schema).validate(data);
};

module.exports.createValidation = createValidation;