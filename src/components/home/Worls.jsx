import React from "react";
import worldImg from "../../../public/homeImg2.png";
import Button from "../Button";
const Worls = () => {
  return (
    <div className=" container mx-auto flex  justify-between gap-[100px] my-[200px] items-center">
      <img src={worldImg} alt="" />
      <div className="max-w-[480px]">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-[36px] text-[#000000] font-bold leading-[50px]"
        >
          A new way to explore the world{" "}
        </h1>
        <p className="mt-[20px] mb-[40px] text-[#7D7987] leading-8">
          For decades travellers have reached for Lonely Planet books when
          looking to plan and execute their perfect trip, but now, they can also
          let Lonely Planet Experiences lead the way
        </p>
        <Button title={"Learn more"} />
      </div>
    </div>
  );
};

export default Worls;
