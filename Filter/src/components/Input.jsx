import React from "react";

const Input = ({ handleRadioClick, value, title, name }) => {
  return (
    <label>
      <input
        onChange={handleRadioClick}
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
