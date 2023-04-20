const router = require("express").Router();

const {
    createAssignment,
    getAssignment,
    deleteAssignment,
    addExpectation,
    updateMarkband,
    deleteScore,
    updateScore,
    updateAssignment
} = require("../controllers/assignment.controller");

const { auth } = require("../middlewares/auth");

router.post("/create", auth, createAssignment);
router.get("/", auth, getAssignment);
router.delete("/", auth, deleteAssignment);
router.post("/addExpectation", auth, addExpectation);
router.post("/updateMarkband", auth, updateMarkband);
router.delete("/deleteScore", auth, deleteScore);
router.post("/updateScore", auth, updateScore);
router.post("/update", auth, updateAssignment);

module.exports = router;
