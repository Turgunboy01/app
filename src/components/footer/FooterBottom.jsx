import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <div className="flex justify-center items-center gap-[35px] py-[32px]">
      <a href="#">
        <FaTwitter className="text-[25px] hover:text-[#FB8F1D]" />
      </a>
      <a href="#">
        <FaFacebookF className="text-[25px] hover:text-[#FB8F1D]" />
      </a>
      <a href="#">
        <BsInstagram className="text-[25px] hover:text-[#FB8F1D]" />
      </a>
      <a href="#">
        <FaLinkedinIn className="text-[25px] hover:text-[#FB8F1D]" />
      </a>
      <a href="#">
        <FaYoutube className="text-[25px] hover:text-[#FB8F1D]" />
      </a>
    </div>
  );
};

export default FooterBottom;
