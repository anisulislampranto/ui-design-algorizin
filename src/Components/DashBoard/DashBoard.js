import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="flex bg-neutral-100">
        <div className="hidden sm:block sm:w-20 md:w-52 h-screen border-r-2 border-neutral-200 ">
          <div className="p-4 items-center sm:items-center md:items-start flex flex-col md:p-6 text-left">
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md md:hover:w-40"
            >
              <FontAwesomeIcon icon={faHouse} />
              <span className="hidden sm:hidden md:block lg:block">
                Dashboard
              </span>
            </a>
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md md:hover:w-40"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className="hidden sm:hidden md:block lg:block">
                Inventory
              </span>
            </a>
            <a
              href=""
              className="p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md md:hover:w-40"
            >
              <FontAwesomeIcon icon={faFileLines} />
              <span className="hidden sm:hidden md:block lg:block">
                Documents
              </span>
            </a>
            <a
              href=""
              className=" p-3 h-10 flex gap-2 items-center hover:bg-white hover:text-green-500 hover:rounded-md md:hover:w-40"
            >
              <FontAwesomeIcon icon={faGear} />
              <span className="hidden sm:hidden md:block lg:block">
                Settings
              </span>
            </a>
          </div>
        </div>
        <div>
          <div>Headline</div>
          <div>
            <input type="text" placeholder="Search" />
            <p>Table</p>
          </div>
        </div>
      </div>
      <div className="sm:hidden md:hidden lg:hidden w-screen flex justify-evenly fixed bottom-0 h-10 bg-white">
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
