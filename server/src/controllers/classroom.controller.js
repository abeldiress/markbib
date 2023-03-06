const Classroom = require('../models/Classroom');
const Teacher = require('../models/Teacher');
const { createValidation } = require('../utils/validation/classroom.validation')

// TODO: simplify add/remove functions to one add and one remove 
// that adds depending on the vlaue of the key: 'student', 'assignment', or 'expectation'

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
  if(!teacher.classes.includes(req.body.classroom_id)) return res.status(400).json({ error: 'Classroom not found.' }); // shouldn't there be a not infront of this one

  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  return res.json(classroom);
};

const deleteClassroom =async (req, res) => {
  const classroom = await Classroom.deleteOne({ _id: req.teacher });
  if (!classroom) return res.status(400).json({ error: 'Classroom not found.' });

  res.json({ success: 'Classroom successfully deleted :(' });
};

const updateClassroom = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.classroom_id });
  if (!classroom) return res.status(400).json({ error: 'Classroom not found.' });

  for(const property in req.body) {
    teacher[property] = req.body[property];   
  }

  const updatedClassroom = await teacher.save();
  res.json(updatedClassroom);
};

const addStudent = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });

  classroom.students.push(req.body.student_id);

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
  
};

const removeStudent = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });
  if(!teacher.classes.includes(classroom._id)) return res.status(400).json({ error: 'Hey! This classroom doesn\'t belong to you.' });
  if(!classroom.students.includes(req.body.student_id)) return res.status(400).json({ error: 'Student not found.' });

  classroom.students = classroom.students.filter(student => {return student != req.body.student_id});

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
};

const addAssignment = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });

  classroom.assignments.push(req.body.assignment_id);

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
};

const removeAssignment = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });
  if(!teacher.classes.includes(classroom._id)) return res.status(400).json({ error: 'Hey! This classroom doesn\'t belong to you.' });
  if(!classroom.students.includes(req.body.assignment_id)) return res.status(400).json({ error: 'Assignment not found.' });

  classroom.students = classroom.students.filter(student => {return student != req.body.assignment_id});

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
};

const addExpectation = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });
  if(!teacher.classes.includes(classroom._id)) return res.status(400).json({ error: 'Hey! This classroom doesn\'t belong to you.' });

  classroom.expectations.push(req.body.expectation_id);

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
};

const removeExpectation = async (req, res) => {
  const classroom = await Classroom.findOne({ _id: req.body.classroom_id });
  if(!classroom) return res.status(400).json({ error: 'Classroom not found.' });
  if(!classroom.students.includes(req.body.expectation_id)) return res.status(400).json({ error: 'Expectation not found.' });

  classroom.students = classroom.students.filter(student => {return student != req.body.expectation_id});

  try {
    const savedClassroom = await classroom.save();
    return res.json(savedClassroom);
  } catch (err) {
    return res.json(err);
  }
};

module.exports.createClassroom = createClassroom;
module.exports.getClassroom = getClassroom;
module.exports.deleteClassroom = deleteClassroom;
module.exports.updateClassroom = updateClassroom;
module.exports.addStudent = addStudent;
module.exports.removeStudent = removeStudent;
module.exports.addAssignment = addAssignment;
module.exports.removeAssignment = removeAssignment;
module.exports.addExpectation = addExpectation;
module.exports.removeExpectation = removeExpectation;