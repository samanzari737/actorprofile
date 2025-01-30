import React from "react";

// Define the CustomButton component with props
export const CustomButton = ({
  bgColor,
  textColor,
  label,
  onClick,
  bordercolor,
}) => {
  return (
    <button
      className={`${bgColor} ${textColor} ${bordercolor} border-[1.6px] border-[#4459ec] rounded-[5px]  items-center w-full sm:w-[220px] h-[40px] font-medium text-base hover:opacity-90 transition duration-200`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
