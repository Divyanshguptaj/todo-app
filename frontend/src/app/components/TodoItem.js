import React from "react";

const TodoItem = ({ todo, onSelectTodo, selectedTodo }) => {
  return (
    <div
      className={`p-3 mb-2 border rounded-lg cursor-pointer ${
        selectedTodo?.id === todo.id ? "border-black" : "border-gray-300"
      }`}
      onClick={() => onSelectTodo(todo)}
    >
      <h3 className="font-semibold">{todo.title}</h3>
      <p className="text-sm text-gray-600">{todo.description}</p>
      <p className="text-xs text-gray-400">{todo.date}</p>
    </div>
  );
};

export default TodoItem;
