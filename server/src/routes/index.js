const router = require('express').Router();
const teacherRoutes = require('./teacher.routes');

router.use('/teachers', teacherRoutes);

module.exports = router;