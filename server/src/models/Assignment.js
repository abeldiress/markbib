const mongoose = require('mongoose');

const Assignment = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    markband: [{
        lower_bound: Number,
        upper_bound: Number
    }],
    expectations: [String],
    scores: [{
        student: mongoose.Schema.Types.ObjectId,
        expectation: String,
        score: String,
        markbanded_score: String
    }],
    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'classroom'
    }
});

module.exports = mongoose.model('assignment', Assignment);