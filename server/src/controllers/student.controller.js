const Student = require("../models/Student")
const { createValidation } = require("../utils/validation/student.validation")
const { updateValidation } = require("../utils/validation/student.validation")


const createStudent = async (req, res) => {
    /**
     * creates a new student 
        * @param {string} req.body.name - name of student
        * @param {string} req.body.classroom - classroom of student
        * @param {string} req.body.teacher - teacher of student
        * @returns {object} - student object
        * @returns {string} - error message
     */
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
    /**
     * gets a student
     * @param {string} req.body._id - id of student
     * @returns {object} - student object
     * @returns {string} - error message
     * 
    */
    const student = await Student.findOne({ _id: req.body._id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    return res.json(student);
}

const deleteStudent = async (req, res) => {
    /**
     * deletes a student
     * @param {string} req.body._id - id of student
     * @returns {object} - student object
     * @returns {string} - error message
    */
    const student = await Student.findOne({ _id: req.body._id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    try {
        const deletedStudent = await Student.deleteOne({ _id: req.body._id });
        return res.json(deletedStudent);
    } catch (err) {
        return res.json(err);
    }
}

const updateStudent = async (req, res) => {
    /**
     * updates a student
     * @param {string} req.body._id - id of student
     * @param {string} req.body - properties to update
     * @returns {object} - student object
     * @returns {string} - error message
    */
    const {error} = updateValidation(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const student = await Student.findOne({ _id: req.body._id });
    if (!student) return res.status(400).json({ error: 'Student not found.' });
    
    for(const property in req.body){
        if (property == '_id' && req.body[property] != student._id) {
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





