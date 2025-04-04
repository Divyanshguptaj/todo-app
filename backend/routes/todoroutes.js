const express = require("express");
const {
  createTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

router.post("/", createTodo); // ✅ Create a To-Do
router.get("/", getAllTodos); // ✅ Get all To-Dos
router.get("/:id", getTodoById); // ✅ Get a specific To-Do
router.put("/:id", updateTodo); // ✅ Update a To-Do

module.exports = router;
