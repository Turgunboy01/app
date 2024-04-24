import React from "react";

const TrendingCart = ({ img, title, desc }) => {
  return (
    <div className="w-[266px] ">
      <img
        src={img}
        alt={title}
        className="w-full h-[233px] object-cover rounded-t-lg"
      />
      <h3 className="text-[19px] font-bold text-[#000000] my-[13px]">
        {title}
      </h3>
      <p className="text-[15px] mb-[23px] text-[#7D7987]">{desc}</p>
      <a href="#" className="text-[#FB8F1D] text-[15px] font-semibold">
        Read more
      </a>
    </div>
  );
};

export default TrendingCart;
