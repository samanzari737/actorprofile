import React from "react";

const ToggleButton = ({ isOn, toggleHandler }) => {
  return (
    <div className="flex items-center justify-center">
      <label className="relative inline-flex items-center cursor-pointer">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          className="sr-only"
          checked={isOn}
          onChange={toggleHandler}
        />
        {/* Custom toggle track with responsive sizes */}
        <div
          className={`w-12 h-6 sm:w-14 sm:h-8 rounded-full transition-all duration-300 ease-in-out ${
            isOn ? "bg-[#4459ec]" : "bg-[#d1d1d1]"
          }`}
        >
          {/* Custom toggle circle with responsive sizes */}
          <div
            className={`w-5 h-5 sm:w-6 sm:h-6 bg-white rounded-full mt-1  shadow-md transform transition-all duration-300 ease-in-out ${
              isOn ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
