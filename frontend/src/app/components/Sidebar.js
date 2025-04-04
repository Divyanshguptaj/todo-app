import React from "react";
import TodoList from "./TodoList";

const Sidebar = ({ todos, onSelectTodo, selectedTodo }) => {
  return (
    <aside className="p-4 bg-white rounded-md h-[95%] text-black overflow-y-scroll">
      <TodoList todos={todos} onSelectTodo={onSelectTodo} selectedTodo={selectedTodo} />
    </aside>
  );
};

export default Sidebar;
