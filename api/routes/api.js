var express = require("express");
var router = express.Router();

const { validateAddTask } = require("../../utils/inputValidations");
const {
  addTask,
  getAllTask,
  getTask,
  editTask,
  deleteTask,
} = require("../controllers/apiController");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.status(201).json({
    message: "API IS WORKING",
  });
});

router.post("/addTask", validateAddTask, addTask);

router.get("/getTasks", getAllTask);

module.exports = router;
