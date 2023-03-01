const router = require('express').Router();
const {
  createClassroom,
  getClassroom,
  deleteClassroom,
  updateClassroom,
  addStudent,
  removeStudent,
  addAssignment,
  removeAssignment
} = require('../controllers/classroom.controller');

const { auth } = require('../middlewares/auth');

router.post('/create', auth, createClassroom);
router.post('/', auth, getClassroom);
router.delete('/', auth, deleteClassroom);
router.post('/update', auth, updateClassroom);
router.post('/add/student', auth, addStudent);
router.post('/remove/student', auth, removeStudent);
router.post('/add/assignment', auth, addAssignment);
router.post('/remove/assignment', auth, removeAssignment);

module.exports = router;