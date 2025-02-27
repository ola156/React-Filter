import React from "react";
import Input from "./Input";

const Price = ({ handleRadioClick }) => {
  return (
    <div>
      <div>
        <h2 className="mgb-3">Price</h2>

        <div className="flex flex-col ">
          <label onClick={handleRadioClick} value="" name="test2">
            <input type="radio" /> All
          </label>

          <Input
            onChange={handleRadioClick}
            value={50}
            title="$0-$50"
            name="test2"
          />
          <Input
            onChange={handleRadioClick}
            value={100}
            title="$50-$100"
            name="test2"
          />
          <Input
            onChange={handleRadioClick}
            value={150}
            title="$100-$150"
            name="test2"
          />
          <Input
            onChange={handleRadioClick}
            value={200}
            title="$150-$200"
            name="test2"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
