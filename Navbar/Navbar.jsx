import React from "react";
import "../../App.css";
import "preline";
import { Link } from "react-router-dom";
import Logo from "../../assets/sceniuz.svg";
import "./nav.css";
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <header
        className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-6 dark:bg-gray-800"
        style={{ backgroundColor: "#FFECD857" }}
      >
        <nav
          className="max-w-[85rem] w-full mx-auto px-7 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold dark:text-white"
              to="/"
            >
              <img src={Logo} alt="" width={"260px"} />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                data-hs-collapse="#navbar-collapse-basic"
                aria-controls="navbar-collapse-basic"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse-basic"
            className="hidden basis-full grow sm:block"
          >
            <div className="flex flex-col gap-7 mt-2 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              
            <Link
                className="font-medium text-black black dark:text-gray-400 nav-text-data"
                to="/"
                ///case-studies
              >
                <Button  variant="outlined" color="error">    KPI</Button>
           
              </Link>


            {/* <Link
                className="font-medium text-black black dark:text-gray-400 nav-text-data"
                to="/case-studies"
                ///case-studies
              >
                Case Studies
              </Link> */}
              {/* <Link
                className="font-medium text-black black dark:text-gray-400 nav-text-data"
                to="/about"
                //case-studies1
                //about
              >
                About Us
              </Link> */}
              {/* <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-black  font-medium dark:text-gray-400 nav-text-data"
                >
                  Services
                  <svg
                    className="ml-2 w-2.5 h-2.5 text-black"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-3 sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 black nav-text-data"
                    to="/data-analytics"
                  >
                    Data Analytics
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 black nav-text-data"
                    to="/data-engineering"
                  >
                    Data Engineering
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 black nav-text-data"
                    to="/data-advisory"
                  >
                    Data Advisory
                  </Link>
                </div>
              </div>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className="flex items-center w-full text-black  font-medium dark:text-gray-400 nav-text-data"
                >
                   Resources
                  <svg
                    className="ml-2 w-2.5 h-2.5 text-black"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-3 sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5"
                  style={{ backgroundColor: "#fff" }}
                >
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 black nav-text-data"
                    to="/Kpi"
                  >
                    KPI
                  </Link>
                 
                 
                </div>
              </div> */}
              {/* <Link
                className="font-medium text-black nav-text-data"
                to="/career"
                aria-current="page"
              >
                Career
              </Link> */}

              {/* <Link
                className="font-medium text-black dark:text-gray-400 dark:hover:text-gray-500 nav-text-data"
                to="/contact-us"
              >
                Contact Us
              </Link> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
