import { useState } from "react";
import ToggleButton from "../toggelbtn"; // Assuming the ToggleButton component is in the same directory

const ProfileVisibilityCard = ({ agencyName, email, imgSrc }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white py-[20px] rounded-[16px] sm:px-[20px] justify-between items-center gap-4 lg:gap-0">
      <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
        <img src={imgSrc} alt="" className="w-12 h-12 rounded-full" />
        <div>
          <p className="font-semibold text-base text-[#353535]">{agencyName}</p>
          <p className="text-[14px] font-normal text-[#989692]">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-center sm:text-left mt-3 lg:mt-0">
        <p className="text-[14px] font-semibold">Profile Visibility</p>
        <div>
          <ToggleButton isOn={isVisible} toggleHandler={toggleHandler} />
        </div>
      </div>
    </div>
  );
};

export default ProfileVisibilityCard;
