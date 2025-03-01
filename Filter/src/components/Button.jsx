import React from "react";

const Button = ({ name, handleButtonClick, value }) => {
  return (
    <button onClick={handleButtonClick} value={value}>
      {name}
    </button>
  );
};

export default Button;
