const Joi = require("joi")

const createValidation = (data) => {
    const schema = {
        name : Joi.string().min(2).max(50).required(),
        markband : Joi.array().items({
            lower_bound: Joi.number().required(),
            upper_bound: Joi.number().required().greater(Joi.ref('lower_bound'))
        }).length(7).required()  
    }
    return Joi.object(schema).validate(data);
}

const updateValidation = (data) => {
    const schema = {
        _id : Joi.string().required(),
        name : Joi.string().min(2).max(50).optional(),
        markband : Joi.array().items({
            lower_bound: Joi.number().optional(),
            upper_bound: Joi.number().optional().greater(Joi.ref('lower_bound'))
        }).length(7).required()  
    }
    return Joi.object(schema).validate(data);
}


module.exports = {
    createValidation,
    updateValidation
}

