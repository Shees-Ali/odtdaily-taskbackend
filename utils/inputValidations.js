const { body } = require("express-validator");

module.exports = {
  validateAddTask: [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Name is required"),
    body("start_date").notEmpty().withMessage("Name is required"),
    body("end_date").notEmpty().withMessage("Name is required"),
  ],
};
