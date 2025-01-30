import { Modal } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { CustomButton } from "../cusstomProfileButton";

export const BillingHistory = () => {
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
        className="mt-4 py-2 px-4 w-full sm:text-base text-[12px] sm:w-[196px] h-[46px] border-[1.6px] border-[#4459ec] text-[#4459ec] rounded-lg"
      >
        View Billing History
      </button>
      <Modal
        open={isModalOpen}
        footer={null}
        closable={false}
        width="100%" // Full-width modal on mobile
        className="max-w-[90%] sm:max-w-[80%] lg:max-w-[1033px] top-10"
      >
        <div className="flex flex-col py-5 gap-5">
          <div className="px-4 sm:px-8 md:px-16 rounded-lg border shadow-sm pt-8 pb-6 border-[#edeef3]">
            <p className="font-semibold text-[#303030] text-lg sm:text-xl md:text-2xl text-center">
              Your Billing History
            </p>
            <p className="text-sm sm:text-base font-normal w-full sm:w-[613px] mx-auto text-[#757575] text-center">
              Review your billing history below. Stay informed about your past
              payments and plan details.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right rounded-lg border-collapse">
              <thead className="text-xs bg-[#f4f4f4]">
                <tr className="text-sm font-semibold text-[#303030]">
                  <th scope="col" className="px-3 sm:px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-3">
                    Amount
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-3 sm:px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(6)].map((_, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-3 sm:px-6 py-2 text-sm sm:text-base font-normal text-[#303030]">
                      January - 2012
                    </td>
                    <td className="px-3 sm:px-6 py-2 text-sm sm:text-base font-normal text-[#757575]">
                      $ <span className="text-[#151429]">50</span>
                    </td>
                    <td className="px-3 sm:px-6 py-2 flex gap-2 text-sm sm:text-base font-medium text-[#00b247]">
                      <img
                        src="/img/dashboard/Icons (2).svg"
                        alt=""
                        className="w-4 h-4"
                      />{" "}
                      Paid
                    </td>
                    <td className="px-3 sm:px-6 py-2 text-sm sm:text-base font-medium text-[#4459ec]">
                      View Invoice
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-3 mt-4">
            <CustomButton
              onClick={handleCancel}
              label="Close"
              textColor="text-[#4459ec]"
            />
            <CustomButton
              label="Cancel My Subscription"
              bgColor="bg-[#ff4c49]"
              textColor="text-white"
              bordercolor="border-[#ff4c49]"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

const mountNode = document.getElementById("root");
const root = ReactDOM.createRoot(mountNode);
root.render(<BillingHistory />);
