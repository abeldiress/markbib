const router = require('express').Router();
const {
    getClassroom,
    deleteClassroom,
    updateClassroom,
    addStudent,
    removeStudent,
    addAssignment,
    removeAssignment
} = require('../controllers/classroom.controller');

const { auth } = require('../middlewares/auth');

router.get('/', auth, getClassroom);
router.delete('/', auth, deleteClassroom);
router.post('/update', auth, updateClassroom);
router.post('/add/student', auth, addStudent);
router.post('/remove/student', auth, removeStudent);
router.post('/add/assignment', auth, addAssignment);
router.post('/remove/assignment', auth, removeAssignment);

module.exports = router;