const router = require('express').Router();
const teacherRoutes = require('./teacher.routes');
const classroomRoutes = require('./classroom.routes');
const studentRoutes = require('./student.routes');
const expectationRoutes = require('./expectation.routes');
const assignmentRoutes = require('./assignment.routes');


router.use('/teacher', teacherRoutes);
router.use('/classroom', classroomRoutes);
router.use('/student', studentRoutes);
router.use('/expectation', expectationRoutes);
router.use("/assignment", assignmentRoutes);

module.exports = router;