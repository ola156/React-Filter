import React from "react";
import Button from "./Button";

const Recommended = ({ handleButtonClick }) => {
  return (
    <div className="ml-[15rem]">
      <h2 className="font-semibold mt-4 ">Recommended</h2>
      <div className="flex gap-1 mt-3">
        <Button name="All Product" handleButtonClick={handleButtonClick} />
        <Button
          name="Nike"
          handleButtonClick={handleButtonClick}
          value="Nike"
        />
        <Button
          name="Puma"
          handleButtonClick={handleButtonClick}
          value="Puma"
        />
        <Button
          name="Adidas"
          handleButtonClick={handleButtonClick}
          value="Adidas"
        />
        <Button
          name="Vans"
          handleButtonClick={handleButtonClick}
          value="Vans"
        />
      </div>
    </div>
  );
};

export default Recommended;
