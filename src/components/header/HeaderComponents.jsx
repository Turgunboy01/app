import React from "react";
import logo from "../../../public/logo.png";
import Button from "../Button";
const HeaderComponents = () => {
  return (
    <div className="container mx-auto flex justify-between py-[21px] my-[30px] items-center">
      <a href="/">
        <img src={logo} alt="" />
      </a>
      <div className="flex items-center gap-[35px]">
        <div className="flex items-center gap-[35px]">
          <li className=" text-[16px] cursor-pointer text-[#B8BECD]  hover:text-[#202336] ">
            Home
          </li>
          <li className=" text-[16px] cursor-pointer text-[#B8BECD] hover:text-[#202336] ">
            Destinations
          </li>
          <li className=" text-[16px]  cursor-pointer text-[#B8BECD] hover:text-[#202336] ">
            About
          </li>
          <li className=" text-[16px] cursor-pointer text-[#B8BECD] hover:text-[#202336] ">
            Partner
          </li>
        </div>
        <div className="flex gap-[18px]">
          <Button title={"Login"} />
          <Button title={"Regster"} />
        </div>
      </div>
    </div>
  );
};

export default HeaderComponents;
