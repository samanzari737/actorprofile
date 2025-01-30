import React from "react";

export const ProfileCheckBox = ({ checked, onChange }) => {
  return (
    <label className="flex items-center space-x-2">
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-[22.2px] h-[22.2px] rounded-[4px] border-2 
          ${
            checked
              ? "bg-[#4459ec] border-[#4459ec]"
              : "bg-white border-[#4459ec]"
          }
          peer-checked:bg-[#d6edff] peer-checked:border-[#4459ec]`}
      >
        {checked && (
          <img src="/img/dashboard/tick.svg" alt="" className="m-auto pt-1" />
        )}
      </div>
    </label>
  );
};
