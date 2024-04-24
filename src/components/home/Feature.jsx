import React from "react";
import FeaturedCard from "./FeaturedCard";
import fetured1 from "../../../public/featured1.png";
import fetured2 from "../../../public/featured2.png";
import fetured3 from "../../../public/featured3.png";
import fetured4 from "../../../public/featured4.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const Feature = () => {
  return (
    <div className=" container mx-auto ">
      <div className="mb-[50px] flex justify-between items-center">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-[36px] text-[#000000] font-bold leading-[50px]"
        >
          Featured destinations
        </h1>
        <button className="text-[#FB8F1D] flex items-center gap-3 text-[17px] font-semibold">
          View all <MdKeyboardArrowRight className="text-[17px]" />
        </button>
      </div>
      <div className="flex justify-between">
        <FeaturedCard
          cartImg={fetured1}
          title={"Raja Ampat"}
          desc={"Indonesia"}
        />
        <FeaturedCard cartImg={fetured2} title={"Fanjingshan"} desc={"China"} />
        <FeaturedCard cartImg={fetured3} title={"Vevey"} desc={"Switzerland"} />
        <FeaturedCard cartImg={fetured4} title={"Skadar"} desc={"Montenegro"} />
      </div>
    </div>
  );
};

export default Feature;
