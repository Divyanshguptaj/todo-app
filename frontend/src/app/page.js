"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "@/app/components/Sidebar";
import TodoDetails from "@/app/components/TodoDetails";
import addNotes from "@/../public/AddNotes.png";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);

  // ✅ Fetch To-Dos from Backend
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4000/todo"); // Adjust backend URL if needed
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // ✅ Function to add a new To-Do in Backend
  const handleAddTodo = async () => {
    try {
      const response = await axios.post("http://localhost:4000/todo", {
        title: "New To-Do",
        description: "Enter details...",
      });

      setTodos([...todos, response.data]); // Update UI with new To-Do
      setSelectedTodo(response.data); // Select the new To-Do
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // ✅ Function to select a To-Do (Fixed Issue)
  const handleSelectTodo = (todoId) => {
    const todo = todos.find((t) => t._id === todoId);
    if (todo) {
      setSelectedTodo(todo);
    }
  };

  // ✅ Function to update a To-Do in Backend (ID sent as Params)
  const handleUpdateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:4000/todo/${updatedTodo._id}`, updatedTodo);

      setTodos(todos.map((todo) => (todo._id === updatedTodo._id ? response.data : todo)));
      setSelectedTodo(response.data); // Update selected todo with new values
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // ✅ Function to delete a To-Do from Backend
  const handleDeleteTodo = async (todoId) => {
    try {
      await axios.delete(`http://localhost:4000/todo/${todoId}`);

      setTodos(todos.filter((todo) => todo._id !== todoId));
      setSelectedTodo(null);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="flex bg-gray-100 w-full h-screen px-20 py-10 gap-10">
      <div className="flex flex-col w-1/4 h-[90%]">
        <div className="flex items-center justify-between mb-4 bg-gray-100 px-3 h-[5%]">
          {/* ✅ Click to add a new To-Do */}
          <button onClick={handleAddTodo} className="w-1/4 p-3 text-xs text-white bg-black rounded-md flex flex-row gap-2 justify-center items-center">
            <Image src={addNotes} alt="Image" height={16} width={16} />
            TODO
          </button>
          <div className="relative bg-white rounded-md p-3 text-black font-xs">
            <FaSearch />
          </div>
        </div>

        {/* ✅ Sidebar displays the To-Do list */}
        <Sidebar todos={todos} onSelectTodo={handleSelectTodo} selectedTodo={selectedTodo} />
      </div>

      {selectedTodo ? (
        <TodoDetails selectedTodo={selectedTodo} onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
      ) : (
        <div className="w-3/4 p-6 flex justify-center items-center text-gray-500 bg-white rounded-md h-[90%]">
          Select a todo to view details
        </div>
      )}
    </div>
  );
}
