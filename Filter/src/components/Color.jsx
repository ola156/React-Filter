import React from "react";
import Input from "./Input";

const Color = ({ handleRadioClick }) => {
  return (
    <div className="md-2">
      <h2 className="mb-3"> Colors</h2>

      <div className="flex flex-col ">
        <label>
          <input
            type="radio"
            onClick={handleRadioClick}
            value="white"
            name="test3"
          />{" "}
          White
        </label>

        <Input
          onChange={handleRadioClick}
          value="black"
          title="Black"
          name="test3"
        />
        <Input
          onChange={handleRadioClick}
          value="blue"
          title="Blue"
          name="test3"
        />
        <Input
          onChange={handleRadioClick}
          value="red"
          title="Red"
          name="test3"
        />
        <Input
          onChange={handleRadioClick}
          value="green"
          title="Green"
          name="test3"
        />
      </div>
    </div>
  );
};

export default Color;
