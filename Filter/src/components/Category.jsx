import React from "react";
import Input from "./Input";

const Category = ({ handleRadioClick }) => {
  return (
    <div className="md-2">
      <h2 className="mb-3"> Category</h2>

      <div className="flex flex-col ">
        <label>
          <input type="radio" onClick={handleRadioClick} value="" name="test" />{" "}
          All
        </label>

        <Input
          onClick={handleRadioClick}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          onClick={handleRadioClick}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          onClick={handleRadioClick}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          onClick={handleRadioClick}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
