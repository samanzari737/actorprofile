import { Modal } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { CustomButton } from "../cusstomProfileButton";

export const DeleteAccount = () => {
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
        className="mt-4 py-2 px-4 sm:text-base text-white text-[12px] w-full sm:w-[196px] h-[46px] bg-[#ff4c49] text-white-50 rounded-lg"
      >
        Delete My Account
      </button>
      <Modal
        open={isModalOpen}
        footer={null}
        closable={false}
        width="718px" // Full-width modal on mobile
        // Position the modal at the top
        className="max-w-[90%] md:max-w-[80%] lg:max-w-[1033px] " // Responsive width on larger screens
      >
        <div className=" flex flex-col gap-5">
          <div className="w-[106px] h-[106px] border border-[#ff4c49] rounded-full m-auto bg-[#fee9e7]">
            <img
              src="/img/dashboard/danger.svg"
              alt=""
              className=" m-auto pt-5 "
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-base sm:text-[24px] font-semibold text-[#1e1e1e]">
              Sure you want to delete your account?
            </p>
            <p className="text-center sm:text-base text-[12px] font-normal text-[#757575]">
              Deleting your account will remove all of your data associated with
              it.
            </p>
          </div>
          <div className="flex sm:flex-row flex-col justify-center gap-10">
            <CustomButton
              onClick={handleCancel}
              label="No, Cancel"
              bordercolor={"border-[#757575]"}
              textColor={"text-[#757575]"}
            />
            <CustomButton
              label="Yes, Confirm"
              bgColor={"bg-[#ff4c49]"}
              textColor={"text-white"}
              bordercolor={"border-[#ff4c49]"}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

const mountNode = document.getElementById("root");
const root = ReactDOM.createRoot(mountNode);
root.render(<DeleteAccount />);
