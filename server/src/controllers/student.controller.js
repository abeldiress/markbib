const Student = require("../models/Student")

const createStudent = async (req, res) => {

    const student = new Student({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
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
    const student = await Student.findOne({ _id: req.body.student_id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    
    for(const property in req.body){
        if (property == '_id') {
            return res.status(400).json({ error: 'Can not change id of student!' });
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





