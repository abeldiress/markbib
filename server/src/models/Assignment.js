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
        expectation: String,
        score: String,
        markbanded_score: String
    }]
});

module.exports = mongoose.model('assignment', Assignment);