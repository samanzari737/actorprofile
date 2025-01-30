import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Dashlayout = ({ children }) => {
  const location = useLocation();
  const [activeItems, setActiveItems] = useState("Dashboard");

  useEffect(() => {
    // Set active item based on the current path
    if (location.pathname === "/dashboard") {
      setActiveItems("Dashboard");
    } else if (location.pathname === "/accosiated") {
      setActiveItems("Associated Agencies");
    } else if (location.pathname === "/settings") {
      setActiveItems("Settings");
    }
  }, [location]);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className={`fixed top-14 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform bg-white ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:top-0 sm:h-screen sm:translate-x-0`} // Show on larger screens and toggle on smaller screens
        aria-label="Sidebar"
      >
        {" "}
        <div className="h-full border border-[#eef4f9]  flex flex-col justify-between py-4 overflow-y-auto">
          <div className="">
            <img
              src="/img/sidebar/logo.svg"
              alt="Logo"
              className="sm:flex hidden ps-[32px] py-[16px]"
            />
            <ul className="space-y-3 py-12 text-base font-medium text-[#1d1d1d]">
              <Link to="/dashboard" onClick={() => setActiveItems("Dashboard")}>
                <li>
                  <div
                    className={`flex items-center ps-[32px] h-[56px] cursor-pointer ${
                      activeItems === "Dashboard"
                        ? "text-[#4459ec] bg-[#ebf0fe]"
                        : "text-[#1d1d1d]"
                    }`}
                  >
                    <img
                      src={
                        activeItems === "Dashboard"
                          ? "/img/sidebar/home.svg"
                          : "/img/sidebar/home-2.svg"
                      }
                      alt="Dashboard Icon"
                    />
                    <span className="ms-3">Dashboard</span>
                  </div>
                </li>
              </Link>

              <Link
                to="/accosiated"
                onClick={() => setActiveItems("Associated Agencies")}
              >
                <li>
                  <div
                    className={`flex items-center h-[56px] ps-[32px] cursor-pointer ${
                      activeItems === "Associated Agencies"
                        ? "text-[#4459ec] bg-[#ebf0fe]"
                        : "text-[#1d1d1d]"
                    }`}
                  >
                    <img
                      src={
                        activeItems === "Associated Agencies"
                          ? "/img/sidebar/activebriefcase.svg"
                          : "/img/sidebar/briefcase.svg"
                      }
                      alt="Associated Agencies Icon"
                    />
                    <span className="ms-3">Associated Agencies</span>
                  </div>
                </li>
              </Link>

              <Link to="/settings" onClick={() => setActiveItems("Settings")}>
                <li>
                  <div
                    className={`flex items-center h-[56px] ps-[32px] cursor-pointer ${
                      activeItems === "Settings"
                        ? "text-[#4459ec] bg-[#ebf0fe]"
                        : "text-[#1d1d1d]"
                    }`}
                  >
                    <img
                      src={
                        activeItems === "Settings"
                          ? "/img/sidebar/setting-2.svg"
                          : "/img/sidebar/setting.svg"
                      }
                      alt="Settings Icon"
                    />
                    <span className="ms-3">Settings</span>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-base font-medium ps-[32px] text-[#1d1d1d]">
                <a href="/" className="flex items-center  ">
                  <img src="/img/sidebar/help.svg" alt="Help Center Icon" />
                  <span className="ms-3">Help Center</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1  sm:ml-64 flex flex-col">
        <header className="flex p-[32px] fixed sm:w-[calc(100%-241px)] w-full h-[80px] items-center justify-between z-50 bg-white">
          {/* Menu Button for smaller screens */}
          <button
            onClick={toggleMenu}
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-gray-500 rounded-lg sm:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <img src="/img/sidebar/menu.svg" alt="Menu Icon" />
          </button>
          <h1 className="text-[24px] font-semibold text-[#4459ec]">
            {activeItems}
          </h1>
          <div className="sm:flex hidden items-center space-x-4">
            <img
              src="/img/sidebar/Profile Picture (1).svg"
              alt="Profile"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div>
              <h2 className="text-base font-semibold text-[#1e1e1e] sm:text-lg">
                John Doe
              </h2>
              <p className="text-[12px] sm:text-[14px] font-normal text-[#757575]">
                debbie.baker@example.com
              </p>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="flex-1 md:p-[32px] p-5 bg-[#eef4f9] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};
