import { Modal } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { CustomButton } from "../cusstomProfileButton";
import CurrentToken from "../piechart";
import ProfileInvite from "../profileinvite";

export const AddNewAgency = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        className="bg-[#4459ec] sm:w-[210px] w-full h-[49px] flex items-center justify-center gap-2 rounded-[5px]"
      >
        <img src="/img/dashboard/plus.svg" alt="" />
        <p className="text-white text-[16px] font-medium">Add New Agency</p>
      </button>
      <Modal
        open={isModalOpen}
        footer={null}
        closable={false}
        width="100%"
        className="max-w-[90%] md:max-w-[80%] lg:max-w-[1033px] top-3"
      >
        <button className="flex gap-1 items-center" onClick={handleCancel}>
          <img src="/img/dashboard/back.svg" alt="" />
          <p className="text-[#4459ec] text-[16px] font-semibold">Back</p>
        </button>

        <div className="flex flex-col gap-4 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 sm:gap-0">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <p className="text-[16px] font-semibold text-[#303030]">
                Search Agency
              </p>
              <div className="relative w-full sm:w-auto lg:w-[683px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-8 md:px-10 py-2 rounded-[8px] bg-white text-[#303030] border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3 7.5 7.5 0 0016.65 16.65z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div className="mt-4 sm:mt-0">
              <CurrentToken />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <p className="text-[20px] font-semibold text-[#303030]">
              Agencies Profiles
            </p>
            <div className="h-[310px] px-[24px] py-[20px] flex flex-col gap-5 bg-[#fafafa] rounded-[16px] overflow-y-scroll pr-2 scrollbar-thin scrollbar-thumb-[#4459ec] scrollbar-track-gray-200">
              <ProfileInvite
                agencyName="Starlight Talent Agency"
                email="deanna.curtis@example.com"
                imgSrc="/img/dashboard/talent.svg"
              />
              <ProfileInvite
                agencyName="Iconic Casting Group"
                email="deanna.curtis@example.com"
                imgSrc="/img/dashboard/iconic.svg"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-4">
            <CustomButton
              textColor={"text-[#4459ec]"}
              label="Back"
              onClick={() => console.log("Back button clicked")}
            />
            <CustomButton
              bgColor={"bg-[#4459ec]"}
              textColor={"text-white"}
              label="Add Agencies"
              onClick={() => console.log("Add Agencies button clicked")}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

const mountNode = document.getElementById("root");
const root = ReactDOM.createRoot(mountNode);
root.render(<AddNewAgency />);
