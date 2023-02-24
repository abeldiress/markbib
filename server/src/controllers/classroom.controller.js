const Classroom = require('../models/Classroom');
const { createValidation } = require('../utils/validation/classroom.validation')

const getClassroom = (req, res) => {

};
const deleteClassroom = (req, res) => {};
const updateClassroom = (req, res) => {};

const addStudent = (req, res) => {};
const removeStudent = (req, res) => {};
const addAssignment = (req, res) => {};
const removeAssignment = (req, res) => {};

module.exports.getClassroom = getClassroom;
module.exports.deleteClassroom = deleteClassroom;
module.exports.updateClassroom = updateClassroom;
module.exports.addStudent = addStudent;
module.exports.removeStudent = removeStudent;
module.exports.addAssignment = addAssignment;
module.exports.removeAssignment = removeAssignment;