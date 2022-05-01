import {
  faBell,
  faCaretDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import userImage from "../../assets/Ellipse 1.png";

const Navbar = () => {
  return (
    <div className="border-2">
      <nav className="flex items-center justify-between gap-5 mx-7 h-16 bg-white">
        <div className="flex items-center gap-10">
          <h1 className="flex gap-2 items-center">
            <span>Starbucks </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </h1>
          <div className="relative flex items-center">
            <FontAwesomeIcon
              className="absolute mx-3 hidden sm:block md:block"
              icon={faMagnifyingGlass}
            />
            <input
              className="hidden sm:block h-10 bg-neutral-100 rounded-md form-input w-80 pl-10"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon icon={faBell} />
          <img src={userImage} alt="" />
          <h1 className=" text-sm sm:text-lg">John Doe</h1>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
