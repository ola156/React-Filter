import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div className="py-5 px-4 border border-gray-200 rounded ">
      <img src={img} alt="pro" className="w-[10rem]" />
      <h2 className="font-bold">{title}</h2>
      <div className="flex gap-4 items-center">
        <div className="flex">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
        </div>
        <div className="text-sm mb-3 mt-1">{reviews}</div>
      </div>
      <div className=" flex items-center justify-between">
        <div>
          <del>{prevPrice} </del>
          {newPrice}
        </div>
        <BsCart3 size={22} />
      </div>
    </div>
  );
};

export default Card;
