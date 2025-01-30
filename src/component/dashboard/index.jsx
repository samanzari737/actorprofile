import React from "react";

import { AddNewAgency } from "../addnewagencybtn";
import ProfileVisibilityCard from "../agency";
import { Dashlayout } from "../dashlayout";

export const Dashboard = () => {
  return (
    <Dashlayout>
      <div className=" flex flex-col pt-24 gap-5">
        <div className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-[#303030]">
          Welcome to Splitting Images! 🎉
        </div>

        <div className="bg-white grid grid-cols-12 rounded-[16px] shadow-md">
          <div className="py-[24px] flex col-span-12 xl:col-span-4 flex-col w-full sm:w-[350px] gap-5 px-4 sm:px-[32px]">
            <p className="font-semibold text-[18px] text-[#757575] text-center lg:text-left">
              Your Profile
            </p>
            <img src="/img/dashboard/profile.svg" alt="" className="m-auto" />
            <p className="text-[22px] font-medium text-center text-[#1e1e1e]">
              Juniper Sparrow
            </p>
            <div className="flex items-center justify-between text-center lg:text-left">
              <p className="text-[14px] font-normal text-[#1e1e1e]">
                Measurements Status
              </p>
              <div className="flex gap-[8px] items-center py-[8px] px-[16px] rounded-[8px] bg-custom-green-5">
                <p className="bg-[#0dc268] rounded w-[6px] h-[6px]"></p>
                <p className="text-[14px] font-normal text-[#0dc268]">
                  Up to Date
                </p>
              </div>
            </div>
            <div className="flex items-center w-full sm:w-[286px] border border-[#4459ec] h-[40px] justify-center rounded-[5px] gap-[10px]">
              <p className="text-base font-medium text-[#4459ec]">
                Edit My Info
              </p>
              <img src="/img/dashboard/leftArrow.svg" alt="" />
            </div>
          </div>

          <div className="col-span-12 xl:col-span-8 flex flex-col gap-8 border-t lg:border-l lg:border-t-0 px-4 sm:px-[32px] py-[24px]">
            {/* Header */}
            <div className="flex justify-between items-center flex-wrap">
              <h2 className="text-[#757575] font-semibold text-[18px]">
                Personal Information
              </h2>
              <a className="gap-3 pr-5 flex items-center">
                <img src="/img/dashboard/eye.svg" alt="" />
                <span className="text-[14px] font-medium text-[#4459ec]">
                  View as Member
                </span>
              </a>
            </div>

            {/* Information */}
            <div className="space-y-2 h-[244px] flex flex-col overflow-y-scroll pr-5 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 gap-4 text-base text-[#1e1e1e]">
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Phone:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  (907) 555-0101
                </span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Email:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  debra.holt@example.com
                </span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Date Of Birth:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  31 January, 2024
                </span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Address:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Gender:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  Male
                </span>
              </div>
              <div className="flex justify-between flex-wrap">
                <span className="font-semibold w-[150px] sm:w-[200px]">
                  Website:
                </span>
                <span className="text-base font-normal w-full sm:w-[369px] text-[#5a5a5a]">
                  baomoi.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#fafafa] flex flex-col gap-5 rounded-[16px]  py-[24px] px-4 sm:px-[32px]">
          <div className="flex justify-between items-center flex-wrap">
            <p className="text-[#303030] text-[18px] font-semibold">
              Associated Agencies
            </p>
            <AddNewAgency />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Starlight Talent Agency"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/talent.svg"
            />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Iconic Casting Group"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/iconic.svg"
            />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Nova Talent Management"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/nova.svg"
            />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Blue Wave Casting"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/blue.svg"
            />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Crescent Talent Network"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/talentnatwork.svg"
            />
          </div>

          <div>
            <ProfileVisibilityCard
              agencyName="Radiant Models and Actors"
              email="deanna.curtis@example.com"
              imgSrc="/img/dashboard/talent.svg"
            />
          </div>
          <div className="flex items-center  justify-center">
            <p className="text-base font-medium text-[#4459ec]">
              View All Agencies
            </p>
            <img src="/img/dashboard/send.svg" alt="" />
          </div>
        </div>
      </div>
    </Dashlayout>
  );
};
