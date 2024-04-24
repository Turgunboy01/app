import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-[46px] border py-[14px] text-[#fff] border-[#FB8F1D] rounded-lg bg-[#FB8F1D] hover:bg-[#fff] hover:text-[#FB8F1D]">
      {title}
    </button>
  );
};

export default Button;
