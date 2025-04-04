import React from "react";

const TodoItem = ({ todo, onSelectTodo, selectedTodo }) => {
  return (
    <div
      className={`p-3 mb-2 border rounded-lg cursor-pointer ${
        selectedTodo?._id === todo._id ? "border-black bg-gray-300" : "border-gray-300"
      }`}
      onClick={() => onSelectTodo(todo._id)} 
    >
      <h3 className="font-semibold">{todo.title}</h3>
      <p className="text-sm text-gray-600">{todo.description}</p>
      <p className="text-xs text-gray-400">{todo.date}</p>
    </div>
  );
};

export default TodoItem;
