const router = require('express').Router();
const {
    getTeacher,
    deleteTeacher,
    updateTeacher,
    loginTeacher,
    registerTeacher
} = require('../controllers/teacher.controller');

const { auth } = require('../middlewares/auth');

router.get('/', auth, getTeacher);
router.delete('/', auth, deleteTeacher);
router.post('/update', auth, updateTeacher);
router.post('/login', loginTeacher);
router.post('/register', registerTeacher);

module.exports = router;