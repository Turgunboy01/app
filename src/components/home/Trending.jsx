import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import TrendingCart from "./TrendingCart";
import trending1 from "../../../public/trending.png";
import trending2 from "../../../public/trending2.png";
import trending3 from "../../../public/trending3.png";
import trending4 from "../../../public/trending4.png";
const Trending = () => {
  return (
    <div className=" container mx-auto mb-[75px]">
      <div className="mb-[50px] flex justify-between items-center">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="text-[36px] text-[#000000] font-bold leading-[50px]"
        >
          Trending stories
        </h1>
        <button className="text-[#FB8F1D] flex items-center gap-3 text-[17px] font-semibold">
          View all <MdKeyboardArrowRight className="text-[17px]" />
        </button>
      </div>
      <div className="flex justify-between">
        <TrendingCart
          img={trending1}
          title={"The many benefits of  taking a healing holiday"}
          desc={
            "‘Helaing holidays’ are on the rise tohelp maximise your health and happines..."
          }
        />
        <TrendingCart
          img={trending2}
          title={"The best Kyoto restaurantto try Japanese food"}
          desc={
            "From tofu to teahouses, here’s our guide to Kyoto’s best restaurants to visit..."
          }
        />
        <TrendingCart
          img={trending3}
          title={"Skip Chichen Itza and head to this remote Yucatan"}
          desc={
            "It’s remote and challenging to get, but braving the jungle and exploring these ruins without the..."
          }
        />
        <TrendingCart
          img={trending4}
          title={"Surf’s up at these beginner spots around the world"}
          desc={
            "If learning to surf has in on your todo list for a while, the good news is: it’s never too late..."
          }
        />
      </div>
    </div>
  );
};

export default Trending;
