const Todo = require("../models/todoSchema");

// ✅ Create a new To-Do
exports.createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({ title, description });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all To-Dos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a single To-Do by ID
exports.getTodoById = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ error: "To-Do not found" });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a To-Do
exports.updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) return res.status(404).json({ error: "To-Do not found" });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete todo - 
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the To-Do exists
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ message: "To-Do not found" });
    }

    // Delete the To-Do
    await Todo.findByIdAndDelete(id);

    res.status(200).json({ message: "To-Do deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}