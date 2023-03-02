const Expectation = require('../models/expectation.model');

const createExpectation = async (req, res) => {
    const expectation = new Expectation({
        name: req.body.name,
        description: req.body.description,
        classroom: req.body.classroom,
        assignments: req.body.assignments,
    });
    try {
        const savedExpectation = await expectation.save();
        return res.json(savedExpectation);
    }
    catch (err) {
        return res.json(err);
    }
}


const deleteExpectation = async(req, res) => {
    const expectation = await Expectation.findOne({ _id: req.params.expectation_id });
    if (!expectation) return res.status(400).json({ error: 'Expectation not found.' });
    try {
        const deletedExpectation = await Expectation.deleteOne({ _id: req.params.expectation_id });
        return res.json(deletedExpectation);
    }
    catch (err) {
        return res.json(err);
    }
}

const updateExpectation = async (req, res) => {
    const expectation = await Expectation.findOne({ _id: req.params.expectation_id });
    if (!expectation) return res.status(400).json({ error: 'Expectation not found.' });
    expectation.name = req.body.name;
    expectation.description = req.body.description;
    expectation.classroom = req.body.classroom;
    expectation.assignments = req.body.assignments;
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
