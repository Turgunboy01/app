import React from "react";
import testimonialImg from "../../../public/photo.png";
import Button from "../Button";

const Testimonials = () => {
  return (
    <div className="  container mx-auto my-[200px]">
      <h1
        style={{ fontFamily: "Playfair Display" }}
        className="text-[36px] text-[#000000] font-bold leading-[50px]"
      >
        Testimonials
      </h1>
      <div className="flex justify-between gap-[100px] items-center">
        <div className="max-w-[480px]">
          <h1 className="text-[36px] text-[#000000] font-bold leading-[50px]">
            ⭐⭐⭐⭐⭐
          </h1>
          <p className="mt-[20px] mb-[40px] text-[#000000] leading-8 text-[24px]">
            “Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus
            ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet
            turpis nec”
          </p>
          <div className="">
            <h2 className="text-[22px] text-[#000000] font-bold">
              Edward Newgate
            </h2>
            <h3 className=" leading-[48px] text-[18px]">Founder Circle</h3>
          </div>
        </div>
        <div className="w-[400px] relative">
          <img
            src={testimonialImg}
            className="w-[100%]  h-[500px] rounded-2xl object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
