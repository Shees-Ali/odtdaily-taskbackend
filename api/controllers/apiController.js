const { validationResult } = require("express-validator");

module.exports = {
  addTask: async (req, res) => {
    console.log(req.body);
  },

  getTask: async (req, res) => {},

  getAllTask: async (req, res) => {},

  editTask: async (req, res) => {},

  deleteTask: async (req, res) => {},
};
