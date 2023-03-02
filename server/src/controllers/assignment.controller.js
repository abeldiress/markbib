const Assignment = require('../models/Assignment');

const createAssignment = async (req, res) => {
    const assignment = new Assignment({
        classroom: req.body.classroom,
        name: req.body.name,
        markband: req.body.markband,
        expectations: req.body.expectations, // can be empty to start with -> teachers will add yk
        scores: req.body.scores
    });
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const getAssignment = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    return res.json(assignment);
}

const deleteAssignment = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    try {
        const deletedAssignment = await Assignment.deleteOne({ _id: req.params.assignment_id });
        return res.json(deletedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const addExpectation = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.expectations.push(req.body.expectation);
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const updateMarkband = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.markband = req.body.markband; // can't use the .push because that doesn't make sense right
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const addScore = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.scores.push(req.body.score);
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const deleteScore = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.scores = assignment.scores.filter(score => score._id !== req.params.score_id);
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const updateScore = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.scores = assignment.scores.map(score => {
        if (score._id === req.params.score_id) {
            score.score = req.body.score;
            score.markbanded_score = req.body.markbanded_score;
        }
        return score;
    });
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}


const updateAssignment = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.params.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    assignment.classroom = req.body.classroom;
    assignment.name = req.body.name;
    assignment.markband = req.body.markband;
    assignment.expectations = req.body.expectations;
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}


module.exports = {
    createAssignment,
    getAssignment,
    deleteAssignment,
    addExpectation,
    updateMarkband,
    addScore,
    deleteScore,
    updateScore,
}

