const router = require('express').Router();
const {
  createStudent,
  getStudent,
  deleteStudent,
  updateStudent
} = require('../controllers/student.controller');

const { auth } = require('../middlewares/auth');

router.post('/create', auth, createStudent);
router.post('/', auth, getStudent);
router.delete('/', auth, deleteStudent);
router.post('/update', auth, updateStudent);

module.exports = router;