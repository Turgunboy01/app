import React from "react";

const FeaturedCard = ({ cartImg, title, desc }) => {
  return (
    <div className=" relative w-[261px] h-[332px]">
      <img
        src={cartImg}
        alt={title}
        className=" w-[100%] h-[100%] rounded-xl object-cover"
      />
      <div className=" absolute bg-white bottom-0 left-0 pt-[10px] w-[120px] rounded-tr-xl ">
        <h3 className="text-[17px] font-semibold">{title}</h3>
        <p className="text-[#888] ">{desc}</p>{" "}
      </div>
    </div>
  );
};

export default FeaturedCard;
