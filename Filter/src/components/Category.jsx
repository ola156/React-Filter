import React from "react";
import Input from "./Input";

const Category = ({ handleRadioClick }) => {
  return (
    <div className="md-2">
      <h2 className="mb-3"> Category</h2>

      <div className="flex flex-col ">
        <label onClick={handleRadioClick} value="" name="test">
          <input type="radio" /> All
        </label>

        <Input
          onChange={handleRadioClick}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          onChange={handleRadioClick}
          value="falts"
          title="Falts"
          name="test"
        />
        <Input
          onChange={handleRadioClick}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          onChange={handleRadioClick}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
