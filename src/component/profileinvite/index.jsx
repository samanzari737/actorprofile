import { useState } from "react";
import { ProfileCheckBox } from "../profilebox";
import ToggleButton from "../toggelbtn";

const ProfileInvite = ({ agencyName, email, imgSrc }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const toggleHandler = () => {
    setIsVisible(!isVisible);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-white py-4 rounded-lg px-5 sm:px-8 justify-between items-center gap-4 lg:gap-0 shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 text-center sm:text-left w-full lg:w-auto">
        <div className="flex items-center gap-4">
          <ProfileCheckBox
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <img src={imgSrc} alt="" className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-semibold text-base text-gray-800">{agencyName}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 text-center sm:text-left mt-3 lg:mt-0">
        <p className="text-sm font-semibold">Profile Visibility</p>
        <ToggleButton isOn={isVisible} toggleHandler={toggleHandler} />
      </div>
    </div>
  );
};

export default ProfileInvite;
