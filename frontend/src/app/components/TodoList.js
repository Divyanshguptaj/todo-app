import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onSelectTodo, selectedTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onSelectTodo={onSelectTodo} selectedTodo={selectedTodo} />
      ))}
    </div>
  );
};

export default TodoList;
