import React from "react";

const Input = ({ onClick, value, title, name }) => {
  return (
    <label>
      <input
        onClick={onClick}
        value={value}
        name={name}
        type="radio"
        className="cursor-pointer mr-2 mb-2"
      />
      {title}
    </label>
  );
};

export default Input;
