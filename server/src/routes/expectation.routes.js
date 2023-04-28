const router = require('express').Router();

const {
    createExpectation,
    deleteExpectation,
    updateExpectation
} = require('../controllers/expectation.controller');

const { auth } = require('../middlewares/auth');

router.post('/create', auth, createExpectation);
router.delete('/', auth, deleteExpectation);
router.post('/update', auth, updateExpectation);

module.exports = router;