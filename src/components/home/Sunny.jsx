import React from "react";
import worldImg from "../../../public/sunny.png";
import Button from "../Button";

const Sunny = () => {
  return (
    <div className=" container mx-auto grid grid-cols-2 justify-between gap-[100px] my-[200px] items-center">
      <div className="max-w-[480px]">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-[36px] text-[#000000] font-bold leading-[50px]"
        >
          Guides by Thousand Sunny
        </h1>
        <p className="mt-[20px] mb-[40px] text-[#7D7987] leading-8">
          Packed with tips and advice from our on-the-ground experts, our city
          guides app (iOS and Android) is the ultimate resource before and
          during a trip.
        </p>
        <Button title={"Download"} />
      </div>
      <img src={worldImg} alt="" />
    </div>
  );
};

export default Sunny;
