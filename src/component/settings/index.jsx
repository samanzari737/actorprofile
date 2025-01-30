import React from "react";
import { BillingHistory } from "../billingHistory";
import { Dashlayout } from "../dashlayout";
import { DeleteAccount } from "../deleteAccount";

export const Setting = () => {
  return (
    <Dashlayout>
      <div className="flex  flex-col pt-24 lg:flex-row py-8 justify-center  gap-10">
        <div className="lg:w-[304px] bg-white rounded-[16px] py-[18px] px-[32px] h-[164px]">
          <ul className="space-y-2 text-[#757575]">
            <li className="text-base  text-[#1e1e1e] font-bold ">
              Edit Profile
            </li>
            <li className="">Change Password</li>
            <li className="text-base ">Billing History</li>
            <li className="text-[#ec221f] text-base ">Delete My Account</li>
          </ul>
        </div>
        <div className="lg:w-[815px] flex flex-col gap-8">
          <div className="bg-white  rounded-[16px] shadow-md ">
            <div className="border-b border-[#e8e8e8]">
              <div className="flex p-6 flex-col sm:flex-row justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">Edit Profile</h2>
                  <p className="text-[#757575] mt-2">
                    Update your profile details with just a few clicks.
                  </p>
                </div>
                <div className=" w-full sm:w-[78px] h-[36px] mt-4 sm:mt-0 rounded-[8px] flex justify-center items-center">
                  <button className="text-[#4459ec] flex items-center gap-1">
                    <img src="/img/dashboard/edit-2.svg" alt="Edit Icon" /> Edit
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Picture */}

            <div className="flex p-6 flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
              <img
                src="/img/dashboard/settingprofile.svg"
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-[#757575]">
                  At least 80 x 80 px recommended.
                  <br />
                  JPG or PNG and GIF is allowed
                </p>
                <div className="flex flex-col xl:flex-row gap-5 mt-2">
                  <button className="px-4 py-2 sm:text-base text-[12px] w-full sm:w-[208px]  flex items-center gap-2 text-[#4459ec] border border-[#4459ec] rounded-lg">
                    <img src="/img/dashboard/camera.svg" alt="Upload Icon" />{" "}
                    Upload New Image
                  </button>
                  <button className="px-4 py-2 w-full sm:w-[208px]  sm:text-base text-[12px]  items-center text-[#828282] border border-[#828282] rounded-lg">
                    Remove Image
                  </button>
                </div>
              </div>
            </div>

            {/* Profile Form */}
            <div className="mt-5 p-6">
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="w-full">
                  <label className="text-[#303030] font-medium text-base">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Juniper"
                    className="w-full p-3 border border-[#e8e8e8] rounded-[8px] mt-2"
                  />
                </div>
                <div className="w-full">
                  <label className="text-[#303030] font-medium text-base">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Sparrow"
                    className="w-full p-3 border border-[#e8e8e8] rounded-[8px] mt-2"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="text-[#303030] font-medium text-base">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="junipersparrow@gmail.com"
                  className="w-full p-3 border border-[#e8e8e8] rounded-[8px] mt-2"
                />
              </div>
              <button className="w-full sm:w-[158px] mt-4 py-3 bg-[#4459ec] text-white rounded-lg">
                Save Changes
              </button>
            </div>
          </div>
          {/* Change Password Section */}
          <div className="bg-white  rounded-[16px] shadow-md ">
            <div className="border-b border-[#e8e8e8]">
              <div className="flex p-6 flex-col sm:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-xl font-semibold">Change Password</h2>
                  <p className="text-[#757575] mt-2">
                    Stay secure, Change your password if needed.
                  </p>
                </div>
                <div className=" w-full sm:w-[78px] h-[36px] mt-4 sm:mt-0 rounded-[8px] flex justify-center items-center">
                  <button className="text-[#4459ec] flex items-center gap-1">
                    <img src="/img/dashboard/edit-2.svg" alt="Edit Icon" /> Edit
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              <label className="">Your Password</label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full mt-2 p-3 text-[#757575] border border-[#e8e8e8] rounded-[8px]"
                value="*************"
                readOnly
              />
            </div>
          </div>
          {/* Billing History Section */}
          <div className="bg-white p-6 rounded-[16px] shadow-md ">
            <h2 className="text-xl text-[#303030] font-semibold">
              Billing History
            </h2>
            <p className="text-[#757575] mt-2">
              Keep track of your payments and download invoices for your
              records.
            </p>
            <BillingHistory />
          </div>
          {/* Delete Account Section */}
          <div className="bg-white p-6 rounded-[16px] shadow-md">
            <h2 className="text-xl text-[#303030] font-semibold">
              Delete My Account
            </h2>
            <p className="text-[#757575] mt-2">
              Deleting your account will remove all of your data associated with
              it.
            </p>
            <DeleteAccount />
          </div>
        </div>
      </div>
    </Dashlayout>
  );
};
