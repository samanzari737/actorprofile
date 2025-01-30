import React from "react";
import { AddNewAgency } from "../addnewagencybtn";
import ProfileVisibilityCard from "../agency";
import { Dashlayout } from "../dashlayout";
import CurrentToken from "../piechart";

export const AssociatedAgencies = () => {
  return (
    <Dashlayout>
      <div className="pt-24 flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row py-[12px] border border-[#e8e8e8] items-center px-4 sm:px-8 lg:px-[32px] bg-[#fcfcfc] rounded-[16px] justify-between gap-4 lg:gap-0">
          {/* Left Section */}
          <div className="w-full flex flex-col gap-3 lg:w-[637px] text-center lg:text-left">
            <p className="text-lg sm:text-xl lg:text-[24px] font-bold text-[#000000]">
              Your Associated Agencies
            </p>
            <p className="text-sm sm:text-base font-normal text-[#5a5a5a]">
              You're currently connected with the agencies listed below. Keep
              growing your network for more opportunities!
            </p>
          </div>

          {/* Right Section */}
          <div className="">
            <CurrentToken />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm md:text-base font-semibold text-[#303030]">
            Search Agency
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
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
            <div className="w-full sm:w-auto">
              <AddNewAgency />
            </div>
          </div>
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
        <div className="flex items-center justify-center   px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav className="isolate  flex gap-3  " aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center font-bold text-[#ababac]  rounded-[4px] px-2 py-2 bg-[#d1d1d1]"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex font-bold items-center rounded-[4px]  px-4 py-2 text-[14px] text-[#4459ec]  ring-1 ring-inset ring-[#4459ec] bg-white hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-[4px] px-4 py-2 text-[14px] bg-white font-bold text-[#828282] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>

                <span className="relative inline-flex rounded-[4px] items-center px-4 py-2 text-[14px]  bg-white font-bold text-[#828282] ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>

                <a
                  href="#"
                  className="relative inline-flex items-center rounded-[4px] px-4 py-2 text-[14px] bg-white font-bold text-[#828282] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-[4px] px-4 py-2 text-[14px] font-bold  bg-white text-[#828282] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-[4px] rounded-r-md px-2 bg-[#4459ec] py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Dashlayout>
  );
};
