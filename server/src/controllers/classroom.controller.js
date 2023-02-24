const Classroom = require('../models/Classroom');
const Teacher = require('../models/Teacher');
const { createValidation } = require('../utils/validation/classroom.validation')

const createClassroom = async (req, res) => {
  // VALIDATING THE CLASSROOM
  const { error } = createValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  // check if document already exists
  const classroomExists = await Classroom.findOne({ name: req.body.name });
  if (classroomExists) return res.json({ error: 'Classroom already exists.' });

  const classroom = new Classroom(req.body);
  try {
    const savedClassroom = await classroom.save();
    res.json({ saved_classroom: savedClassroom._id });
  } catch (err) {
    res.send(err);
  }
};

const getClassroom = async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if(teacher.classes.includes(req.body.classroom_id)) return res.status(400).json({ error: 'Classroom not found.' });

  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  return res.json(classroom);
};

const deleteClassroom = (req, res) => {};
const updateClassroom = (req, res) => {};

const addStudent = (req, res) => {};
const removeStudent = (req, res) => {};
const addAssignment = (req, res) => {};
const removeAssignment = (req, res) => {};

module.exports.createClassroom = createClassroom;
module.exports.getClassroom = getClassroom;
module.exports.deleteClassroom = deleteClassroom;
module.exports.updateClassroom = updateClassroom;
module.exports.addStudent = addStudent;
module.exports.removeStudent = removeStudent;
module.exports.addAssignment = addAssignment;
module.exports.removeAssignment = removeAssignment;