const Student = require("../models/Student")
const { createValidation } = require("../utils/validation/student.validation")
const { updateValidation } = require("../utils/validation/student.validation")


const createStudent = async (req, res) => {
    const {error} = createValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const student = new Student(req.body);
    try {
        const savedStudent = await student.save();
        return res.json(savedStudent);
    } catch (err) {
        return res.json(err);
    }
}

const getStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.body.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    return res.json(student);
}

const deleteStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.body.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    try {
        const deletedStudent = await Student.deleteOne({ _id: req.body.student_id });
        return res.json(deletedStudent);
    } catch (err) {
        return res.json(err);
    }
}

const updateStudent = async (req, res) => {
    const {error} = updateValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const student = await Student.findOne({ _id: req.body.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    
    for(const property in req.body){
        if (property == '_id') {
            return res.status(400).json({ error: 'Cannot change id of student!' });
        }
        student[property] = req.body[property];
    }
    
    try {
        const savedStudent = await student.save();
        return res.json(savedStudent);
    } catch (err) {
        return res.json(err);
    }
}

module.exports = {
    createStudent,
    getStudent,
    deleteStudent,
    updateStudent
}





