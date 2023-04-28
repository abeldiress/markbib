const Assignment = require('../models/Assignment');
const Teacher = require('../models/Teacher');
const { updateValidation } = require('../utils/validation/assignment.validation');
const { createValidation } = require('../utils/validation/assignment.validation');


const createAssignment = async (req, res) => {
    // validation
    const { error } = createValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    
    const assignment = new Assignment(req.body);
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const getAssignment = async (req, res) => {
    // init teacher stuff
    const teacher = await Teacher.findone({_id : req.teacher}) 
    const assignment = await Assignment.findOne({ _id: req.body.assignment_id });
    // teacher verification
    if(!teacher.classes.includes(assignment.classroom)) return res.status(400).json({ error: 'Hey! This assignment doesn\'t belong to you.'},);
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    return res.json(assignment);
}

const deleteAssignment = async (req, res) => {
    const teacher = await Teacher.findone({_id : req.teacher}) 
    const assignment = await Assignment.findOne({ _id: req.body.assignment_id });
    // teacher verification
    if(!teacher.classes.includes(assignment.classroom)) return res.status(400).json({ error: 'Hey! This assignment doesn\'t belong to you.'},);
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    try {
        const deletedAssignment = await Assignment.deleteOne({ _id: req.body.assignment_id });
        return res.json(deletedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}

const addExpectation = async (req, res) => {
    const assignment = await Assignment.findOne({ _id: req.body.assignment_id });
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
    const assignment = await Assignment.findOne({ _id: req.body.assignment_id });
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

const updateScore = async (req, res) => {
    // add score / update score are arbitrary now: will have default for 0 so everything basically uses update score
    // the student is now needed for each score
    const student = await Student.findOne({ _id: req.body.student_id }); 
    const expectation = await Expectation.findOne({ _id: req.body.expectation_id });
    // we get assigment in terms of the student 
    const assignment = await Assignment.findOne({ 'scores.student': studentId, 'scores.expectations.expectation': expectation })
    // find the score 
    const current_score = await assignment.scores.find(score => score.student.toString() === studentId && score.expectations.expectation === expectation);
    if (!current_score) return res.status(400).json({ error: 'current score not found' });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    if(!assignment.expectations.includes(expectation)) return res.status(400).json({ error: 'Expectation not found.' });

    current_score.expectations = current_score.expectations.map(expectation => {
        if (expectation.expectation === req.body.expectation) {
            expectation.score = req.body.score;
        }
        return expectation;
    });
    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
    }
    catch (err) {
        return res.json(err);
    }
}


// this function will serve to basically delete that expectation entirely => only real way to 'delete' a score\
// this is because we can't have a score without an expectation
const deleteScore = async (req, res) => {
    const student = await Student.findOne({ _id: req.body.student_id });
    const expectation = await Expectation.findOne({ _id: req.body.expectation_id });
    const assignment = await Assignment.findOne({ 'scores.student': studentId, 'scores.expectations.expectation': expectation })
    const current_score = await assignment.scores.find(score => score.student.toString() === studentId && score.expectations.expectation === expectation);
    if (!current_score) return res.status(400).json({ error: 'current score not found' });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    if(!assignment.expectations.includes(expectation)) return res.status(400).json({ error: 'Expectation not found.' });

    current_score.expectations = current_score.expectations.filter(expectation => expectation.expectation !== req.body.expectation);

    try {
        const savedAssignment = await assignment.save();
        return res.json(savedAssignment);
      } catch (err) {
        return res.json(err);
      }
}


const updateAssignment = async (req, res) => {
    const teacher = await Teacher.findone({_id : req.teacher}) 
    if(!teacher.classes.includes(assignment.classroom)) return res.status(400).json({ error: 'Hey! This assignment doesn\'t belong to you.'},);
    const assignment = await Assignment.findOne({ _id: req.body.assignment_id });
    if (!assignment) return res.status(400).json({ error: 'Assignment not found.' });
    for(const property in req.body){
        assignment[property] = req.body[property];
    }
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
    deleteScore,
    updateScore,
    updateAssignment
}

