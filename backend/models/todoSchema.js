const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    default: "New Assignment",
    minlength: 1,
    maxlength: 20,
  },
  description: {
    type: String,
    default: "This is a newly generated todo item you can edit it .",
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
