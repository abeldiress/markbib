const mongoose = require('mongoose');

const Teacher = mongoose.Schema({
    teacher_number: {
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
    profile_picture: {
        type: String,
    },
    school: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    classes: [String],
    deadlines: [String]
});

module.exports = mongoose.model('teacher', Teacher);
