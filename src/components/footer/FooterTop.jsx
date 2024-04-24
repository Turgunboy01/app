import React from "react";
import logo from "../../../public/logo.png";
const FooterTop = () => {
  return (
    <div className="container mx-auto py-[75px] border-b">
      <div className="flex justify-between">
        <div className=" max-w-[391px]">
          <img src={logo} alt="" className="mb-4" />
          <p className=" text-[18px] text-[#848484] font-light mt-[13px]">
            Plan and book your perfect trip with expert advice, travel tips
            destination information from us
          </p>
          <p className=" text-[18px] text-[#848484] font-light mt-[55px]">
            ©2020 Thousand Sunny. All rights reserved
          </p>
        </div>
        <div className="">
          <h3 className="text-[#000] text-[19px] font-bold mb-4">
            {" "}
            Destinations
          </h3>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  cursor-pointer">
            Africa
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            Antarctica
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            Asia
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            Europe
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            America
          </li>
        </div>
        <div className="">
          <h3 className="text-[#000] text-[19px] font-bold mb-4">Shop</h3>

          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  cursor-pointer">
            Destination Guides
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            Pictorial & Gifts
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            Special Offers{" "}
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  my-2 cursor-pointer">
            {" "}
            Delivery Times
          </li>
          <li className=" text-[18px] text-[#848484] font-light hover:text-[#202336]  cursor-pointer">
            {" "}
            FAQs
          </li>
        </div>
        <div className="">
          <h3 className="text-[#000] text-[19px] font-bold mb-4">Interests</h3>

          <li className=" text-[18px] text-[#848484] hover:text-[#202336]  font-light">
            Adventure Travel
          </li>
          <li className=" text-[18px] text-[#848484] hover:text-[#202336]  font-light my-2 cursor-pointer">
            Art And Culture
          </li>
          <li className=" text-[18px] text-[#848484] hover:text-[#202336]  font-light my-2 cursor-pointer">
            {" "}
            Wildlife And Nature{" "}
          </li>
          <li className=" text-[18px] text-[#848484] hover:text-[#202336]  font-light my-2 cursor-pointer">
            Family Holidays
          </li>
          <li className=" text-[18px] text-[#848484] hover:text-[#202336]  font-light cursor-pointer">
            Food And Drink
          </li>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
