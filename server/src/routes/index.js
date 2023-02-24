const router = require('express').Router();
const teacherRoutes = require('./teacher.routes');
const classroomRoutes = require('./classroom.routes');

router.use('/teacher', teacherRoutes);
router.use('/classroom', classroomRoutes);

module.exports = router;