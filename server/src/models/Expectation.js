const mongoose = require('mongoose');

const Expectation = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    strand: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('expectation', Expectation);