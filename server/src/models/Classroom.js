const mongoose = require('mongoose');

const Classroom = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ib: {
    type: Boolean,
    required: true,
  },
  // really necessary? tbd
  school_year: {
    type: Number
  },
  assignments: [String],
  students: [String],
  expectations: [String]
});

module.exports = mongoose.model('classroom', Classroom);