import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onSelectTodo, selectedTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <TodoItem todo={todo} onSelectTodo={onSelectTodo} selectedTodo={selectedTodo} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
