import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiListBullets } from "react-icons/pi";
import { MdOutlineFormatColorFill, MdOutlineTextFields } from "react-icons/md";
import { CiTextAlignCenter, CiTextAlignLeft, CiTextAlignRight } from "react-icons/ci";

const TodoDetails = ({ selectedTodo, onUpdateTodo, onDeleteTodo }) => {
  const [title, setTitle] = useState(selectedTodo?.title || "");
  const [description, setDescription] = useState(selectedTodo?.description || "");

  // Update state when a different To-Do is selected
  useEffect(() => {
    setTitle(selectedTodo?.title || "");
    setDescription(selectedTodo?.description || "");
  }, [selectedTodo]);

  const handleUpdate = () => {
    if (selectedTodo) {
      onUpdateTodo({ ...selectedTodo, title, description }); // Ensure To-Do ID is sent
    }
  };

  return (
    <div className="w-3/4 p-6 bg-white shadow-lg rounded-lg border border-gray-200 h-[90%] text-black">
      
      {/* Title and Delete Button */}
      <div className="flex flex-col gap-2 justify-center items-center border-b pb-2 px-0 h-[20%]">
        <div className="flex flex-row justify-between items-center px-0 w-full pb-5">
            <input
            type="text"
            className="text-3xl font-bold outline-none w-[90%] h-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleUpdate}
            />
            <button onClick={() => onDeleteTodo(selectedTodo._id)} className="text-gray-500 hover:text-red-500 transition w-[10%] h-full">
            <RiDeleteBin6Line size={25}/>
            </button>
        </div>
        <div className="flex flex-row justify-left items-center w-full gap-3 pb-2">
            <FaBold size={18}/>
            <FaItalic size={18}/>
            <FaUnderline size={18}/>
            <CiTextAlignCenter size={18}/>
            <CiTextAlignLeft size={18}/>
            <CiTextAlignRight size={18}/>
            <PiListBullets size={18}/>
            <MdOutlineFormatColorFill size={18}/>
            <MdOutlineTextFields size={18}/>
        </div>
      </div>

      {/* Editor for Description */}
      <div className="mt-4 h-[80%]">
        <Editor value={description} onChange={setDescription} onBlur={handleUpdate} />
      </div>
      
    </div>
  );
};

export default TodoDetails;
