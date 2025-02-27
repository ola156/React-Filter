import React from "react";
import { BsCart3 } from "react-icons/bs";
import Category from "./Category";
import Price from "./Price";
import Color from "./Color";
const SideBar = ({ handleRadioClick }) => {
  return (
    <div className="sidebar pt-6">
      <div>
        <BsCart3 className="font-bold mb-6" size={33} />
      </div>

      <Category handleRadioClick={handleRadioClick} />
      <Price handleRadioClick={handleRadioClick} />
      <Color handleRadioClick={handleRadioClick} />
    </div>
  );
};

export default SideBar;
