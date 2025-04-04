import React from "react";

const Editor = ({ value, onChange, onBlur }) => {
  return (
    <textarea
      className="w-full h-full p-3 rounded-lg"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default Editor;