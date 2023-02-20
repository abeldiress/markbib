const mongoose = require('mongoose');

const Student = mongoose.Schema({
    student_number: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('student', Student);