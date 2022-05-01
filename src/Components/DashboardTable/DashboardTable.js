import {
  faAngleLeft,
  faAngleRight,
  faArrowDown,
  faArrowUp,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import fakeData from "../../fakeData.json";

const DashboardTable = () => {
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="border-b-2 bg-orange-100">
            <td className="hidden sm:block md:block p-3">
              <input type="checkbox" name="" id="" className=" mr-2" />
              Date Updated <FontAwesomeIcon icon={faArrowDown} />
            </td>
            <td>
              <div className="flex gap-3 p-3 sm:p-0 md:p-0">
                <span>Title</span>
                <div className="flex flex-col">
                  <FontAwesomeIcon className=" -mb-1" icon={faArrowUp} />
                  <FontAwesomeIcon className=" -mt-1" icon={faArrowDown} />
                </div>
              </div>
            </td>
            <td className="hidden sm:hidden md:block">Details</td>
            <td>
              <span className="hidden sm:block"> Status </span>
              <span className="block sm:hidden"></span>
            </td>
            <td>
              <span className="hidden sm:hidden md:block"> Quantity </span>
              <span className="block sm:block md:hidden"></span>
            </td>
            <td className="hidden sm:hidden md:block text-right ">
              Unit Price
            </td>
            <td>
              <div className="flex gap-3 justify-end p-3">
                <span>Amount</span>
                <div className="flex flex-col">
                  <FontAwesomeIcon className=" -mb-1" icon={faArrowUp} />
                  <FontAwesomeIcon className=" -mt-1" icon={faArrowDown} />
                </div>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((data, index) => (
            <tr key={index}>
              <td className="hidden sm:block md:block p-3">
                <input type="checkbox" name="" id="" className=" mr-2" />
                {data.dateupdated}
              </td>
              <td className="p-3 sm:p-0 md:p-0">{data.Title}</td>
              <td className="hidden sm:hidden md:block">{data.Details}</td>
              <td>
                <div className="flex">
                  <span className="hidden sm:block"> {data.Status}</span>
                  {data.Status === "alright" && (
                    <span className=" block w-2 h-2 my-auto mx-2 rounded-md bg-green-500" />
                  )}
                  {data.Status === "In Progress" && (
                    <span className=" block w-2 h-2 my-auto mx-2 rounded-md bg-orange-500" />
                  )}
                  {data.Status === "Out of Stock" && (
                    <span className=" block w-2 h-2 my-auto mx-2 rounded-md bg-red-600" />
                  )}
                </div>
              </td>
              <td>
                <strong>{data.Quantity.ordered}</strong>/
                {data.Quantity.totalInStock}
              </td>
              <td className="text-right hidden sm:hidden md:block">
                ${data.unitprice}
              </td>
              <td className="text-right p-3">${data.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* bottom pagination */}
      <div className="pl-4 pb-10 pt-10 flex justify-between">
        <div className="hidden sm:block md:block border-2 border-gray-400 p-2 rounded-md text-gray-500">
          10 Items Per page
          <span className="ml-10 pr-2 text-gray-500">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className="flex gap-4 pr-4">
          <div className="border-2 border-gray-400 p-2 rounded-md text-gray-500">
            Page 1 of 5
            <span className="ml-10 pr-2 text-gray-500">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
          <button className="border-2 border-gray-400 px-5 rounded-md text-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className="border-2 border-gray-400 px-5 rounded-md text-gray-500">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
