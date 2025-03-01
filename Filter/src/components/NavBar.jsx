import React from "react";

import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";

const NavBar = ({ query, handleChange }) => {
  return (
    <nav className="flex px-2 py-3 w-full items-center justify-around z-10 border border-gray-200">
      <div>
        <input
          type="text"
          className="px-3 py-2 outline-0 border border-gray-200"
          placeholder="Enter Your Search Shoes"
          value={query}
          onChange={handleChange}
        />
      </div>

      <div className="w-[200px] flex gap-4 ">
        <CiHeart size={22} />
        <BsCart3 size={21} />
        <IoPersonOutline size={21} />
      </div>
    </nav>
  );
};

export default NavBar;
