import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faHouse,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import DashboardTable from "../DashboardTable/DashboardTable";

const DashBoard = () => {
  return (
    <>
      {/* dashboard Sidebar */}
      <div className="flex bg-neutral-100">
        <div className="hidden sm:block sm:w-20 md:w-52 h-screen border-r-2 border-neutral-200 ">
          <div className="p-4 items-center sm:items-center md:items-start flex flex-col md:p-6 text-left">
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md"
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="hidden sm:hidden md:block lg:block">
                Dashboard
              </span>
            </a>
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className="hidden sm:hidden md:block lg:block">
                Inventory
              </span>
            </a>
            <a
              href=""
              className="p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className="hidden sm:hidden md:block lg:block">
                Documents
              </span>
            </a>
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md"
            >
              <FontAwesomeIcon icon={faGear} />
              <span className="hidden sm:hidden md:block lg:block">
                Settings
              </span>
            </a>
          </div>
        </div>

        {/* Dashboard Body table section */}
        <div className="w-full">
          <h1 className="pl-8 pt-2 h-14 font-bold text-2xl">Inventory</h1>
          <div className=" p-3 sm:p-6 md:p-6 border-t-2 border-neutral-200">
            <div className="bg-white rounded-md">
              <div className="relative flex items-center p-5">
                <FontAwesomeIcon
                  className="absolute mx-3"
                  icon={faMagnifyingGlass}
                />
                <input
                  className="h-10 bg-neutral-100 rounded-md form-input w-80 pl-10"
                  type="text"
                  placeholder="Search"
                />
              </div>
              <div>
                <DashboardTable />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom AppBar for Mobilde Device */}
      <div className="sm:hidden md:hidden lg:hidden w-screen flex justify-evenly items-center fixed bottom-0 h-10 bg-white">
        <a href="" className=" hover:text-green-500">
          <span>
            <FontAwesomeIcon icon={faHouse} />
          </span>
        </a>
        <a href="" className=" hover:text-green-500">
          <span>
            <FontAwesomeIcon icon={faFileLines} />
          </span>
        </a>
        <a href="" className=" hover:text-green-500">
          <span>
            <FontAwesomeIcon icon={faFileLines} />
          </span>
        </a>
        <a href="" className=" hover:text-green-500">
          <span>
            <FontAwesomeIcon icon={faGear} />
          </span>
        </a>
      </div>
    </>
  );
};

export default DashBoard;
