import React from "react";
import ExploreImg from "../../../public/homeImg1.png";
import Select from "react-dropdown-select";
import Button from "../Button";

const options = [
  {
    id: 1,
    name: "Leanne Graham",
  },
  {
    id: 2,
    name: "Ervin Howell",
  },
];

const Explore = () => {
  return (
    <div className="container mx-auto flex justify-between mt-[72px]">
      <div className="">
        <h1
          style={{ fontFamily: "Playfair Display" }}
          className="mb-[74px] text-[64px] font-bold "
        >
          Explore and <br /> Travel
        </h1>
        <h2 className="text-[22px] font-semibold   text-[#202336]">
          Holiday finder
        </h2>
        <div className="w-[32px] mt-[25px] h-[2px] bg-[#202336]"></div>
        <div className="flex flex-col gap-[35px] mt-[48px]">
          <div className="flex gap-[30px]">
            <div className="w-[220px]">
              <Select
                options={options}
                labelField="name"
                valueField="id"
                placeholder="Location"
                className="w-[220px]"
                onChange={(values) => this.setValues(values)}
              />
            </div>
            <div className="w-[220px]">
              <Select
                options={options}
                labelField="name"
                valueField="id"
                placeholder="Activity"
                className="w-full"
                onChange={(values) => this.setValues(values)}
              />
            </div>
          </div>
          <div className="flex gap-[30px]">
            <div className="w-[220px]">
              <Select
                options={options}
                labelField="name"
                valueField="id"
                placeholder="Grade"
                className="w-[220px]"
                onChange={(values) => this.setValues(values)}
              />
            </div>
            <div className="w-[220px]">
              <Select
                options={options}
                labelField="name"
                valueField="id"
                placeholder="Date"
                className="w-full"
                onChange={(values) => this.setValues(values)}
              />
            </div>
          </div>
        </div>
        <div className=" mt-[51px]">
          <Button title={"Explore"} />
        </div>
      </div>
      <img src={ExploreImg} alt="ExploreImg" />
    </div>
  );
};

export default Explore;
