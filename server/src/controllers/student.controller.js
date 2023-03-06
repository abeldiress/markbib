const Student = require("../models/Student")

const createStudent = async (req, res) => {

    const student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        classroom: req.body.classroom,
        s_number: req.body.s_number,
        grade: req.body.grade,  
        email: req.body.email
    });

    try {
        const savedStudent = await student.save();
        return res.json(savedStudent);
    } catch (err) {
        return res.json(err);
    }
}

const getStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.params.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    return res.json(student);
}

const deleteStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.params.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    try {
        const deletedStudent = await Student.deleteOne({ _id: req.params.student_id });
        return res.json(deletedStudent);
    } catch (err) {
        return res.json(err);
    }
}

const updateStudent = async (req, res) => {
    const student = await Student.findOne({ _id: req.params.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    student.first_name = req.body.first_name;
    student.last_name = req.body.last_name;
    student.classroom = req.body.classroom;
    student.s_number = req.body.s_number;
    student.grade = req.body.grade;
    student.email = req.body.email;
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





