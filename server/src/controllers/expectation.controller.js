const Expectation = require('../models/Expectation');
const { createValidation } = require('../utils/validation/expectation.validation');
const { updateValidation } = require('../utils/validation/expectation.validation');

const createExpectation = async (req, res) => {
    /**
     * creates a new expectation
     * @param {string} req.body.name - name of expectation
     * @param {string} req.body.description - description of expectation
     * @param {string} req.body.category - category of expectation
     * @param {string} req.body.level - level of expectation
     * @param {string} req.body.teacher - teacher of expectation
     * @returns {object} - expectation object
     * @returns {string} - error message
     */
    const { error } = createValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    const expectation = new Expectation(req.body);
    try {
        const savedExpectation = await expectation.save();
        return res.json(savedExpectation);
    }
    catch (err) {
        return res.json(err);
    }
}


const deleteExpectation = async(req, res) => {
    /**
     * deletes an expectation
     * @param{string} req.body.expectation_id - expectation id
     * @returns {object} - expectation object
     * @returns {string} - error message
     */
    const expectation = await Expectation.findOne({ _id: req.body.expectation_id });
    if (!expectation) return res.status(400).json({ error: 'Expectation not found.' });
    try {
        const deletedExpectation = await Expectation.deleteOne({ _id: req.body.expectation_id });
        return res.json(deletedExpectation);
    }
    catch (err) {
        return res.json(err);
    }
}

const updateExpectation = async (req, res) => {
    /**
     * updates an expectation
     * @param {string} req.body.expectation_id - id of expectation
     * @param {string} req.body - properties of expectation to update
     * @returns {object} - expectation object
     * @returns {string} - error message
     */
    const {error} = updateValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const expectation = await Expectation.findOne({ _id: req.body.expectation_id });
    if (!expectation) return res.status(400).json({ error: 'Expectation not found.' });
    for(const property in req.body){
        expectation[property] = req.body[property];
    }
    try {
        const savedExpectation = await expectation.save();
        return res.json(savedExpectation);
    }
    catch (err) {
        return res.json(err);
    }
}

module.exports = {
    createExpectation,
    deleteExpectation,
    updateExpectation
}
