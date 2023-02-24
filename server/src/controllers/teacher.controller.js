const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Teacher = require('../models/Teacher');
const {
  loginValidation,
  registerValidation,
} = require('../utils/validation/teacher.validation');

// TODO: MAKE POTENTIAL GETTEACHERBYID FUNCTION??
// TODO: fix so that auth-token is given on registration

const getTeacher = async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if (!teacher) return res.status(400).json({ error: 'Teacher not found.' });

  res.json(teacher);
};

const deleteTeacher = async (req, res) => {
  const teacher = await Teacher.deleteOne({ _id: req.teacher });
  if (!user) return res.status(400).json({ error: 'Teacher not found.' });

  res.json({ success: 'Account successfully deleted :(' });
};

const updateTeacher = async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.teacher });
  if (!teacher) return res.status(400).json({ error: 'Teacher not found.' });

  for(const property in req.body) {
    if (property == 'password') {
      const salt = await bcrypt.genSalt(10);
      const hashPwd = await bcrypt.hash(req.body.password, salt);
      teacher.password = hashPwd;
    } else {
      teacher[property] = req.body[property];
    }   
  }

  console.log(teacher);
  const updatedTeacher = await teacher.save();
  res.json(updatedTeacher);
};

const registerTeacher = async (req, res) => {
  // VALIDATING THE TEACHER
  const { error } = registerValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  // check if document already exists
  const emailExist = await Teacher.findOne({ email: req.body.email });
  if (emailExist) return res.json({ error: 'Email already exists' });

  // hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(req.body.password, salt);

  const teacher = new Teacher({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    school: req.body.school,
    teacher_number: req.body.teacher_number,
    password: hashPwd,
  });

  try {
    const savedTeacher = await teacher.save();
    res.json({ saved_teacher: savedTeacher._id });
  } catch (err) {
    res.send(err);
  }
};

const loginTeacher = async (req, res) => {
  // VALIDATING THE TEACHER
  const { error } = loginValidation(req.body);
  if (error) return res.json({ error: error.details[0].message });

  // check if document already exists
  const teacher = await Teacher.findOne({ email: req.body.email });
  if (!teacher) return res.json({ error: 'Account doesn\'t exist.' });

  // check if password is correct
  const validPass = await bcrypt.compare(req.body.password, teacher.password);
  if (!validPass) return res.json({ error: 'Invalid password' });

  // Create and assign jwt
  const token = jwt.sign({ _id: teacher._id }, process.env.TOKEN_SECRET);

  res.json({ success: 'Login successful!', token: token });
};

module.exports.getTeacher = getTeacher;
module.exports.deleteTeacher = deleteTeacher;
module.exports.updateTeacher = updateTeacher;
module.exports.registerTeacher = registerTeacher;
module.exports.loginTeacher = loginTeacher;
