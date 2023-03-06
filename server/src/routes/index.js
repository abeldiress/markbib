const router = require('express').Router();
const teacherRoutes = require('./teacher.routes');
const classroomRoutes = require('./classroom.routes');
const studentRoutes = require('./student.routes');

router.use('/teacher', teacherRoutes);
router.use('/classroom', classroomRoutes);
router.use('/student', studentRoutes);

module.exports = router;