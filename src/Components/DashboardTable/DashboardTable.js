import {
  faAngleLeft,
  faAngleRight,
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
          <tr className="border-b-2 p-6  h-10 bg-orange-100">
            <td>
              <input type="checkbox" name="" id="" className=" m-3" />
            </td>
            <td>Date Updated</td>
            <td>Title</td>
            <td>Details</td>
            <td>Status</td>
            <td>Quantity</td>
            <td className="text-right">Unit Price</td>
            <td className="text-right pr-4">Amount</td>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((data) => (
            <tr className="h-16">
              <td>
                <input type="checkbox" name="" id="" className=" m-3" />
              </td>
              <td>{data.dateupdated}</td>
              <td>{data.Title}</td>
              <td>
                {data.Details} {data.Details === "" && "-"}
              </td>
              <td className="flex mt-4">
                {data.Status}
                {data.Status === "alright" && (
                  <span className="w-2 h-2 my-auto mx-2 rounded-md bg-green-500" />
                )}
                {data.Status === "In Progress" && (
                  <span className="w-2 h-2 my-auto mx-2 rounded-md bg-orange-500" />
                )}
                {data.Status === "Out of Stock" && (
                  <span className="w-2 h-2 my-auto mx-2 rounded-md bg-red-600" />
                )}
              </td>
              <td>
                <strong>{data.Quantity.ordered}</strong>/
                {data.Quantity.totalInStock}
              </td>
              <td className="text-right">${data.unitprice}</td>
              <td className="text-right pr-4">${data.Amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pl-4 pb-10 pt-5 flex justify-between">
        <div className=" border-2 border-gray-400 p-2 rounded-md text-gray-500">
          10 Items Per page
          <span className="ml-10 pr-2 text-gray-500">
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </div>
        <div className="flex gap-4 pr-4">
          <div className=" border-2 border-gray-400 p-2 rounded-md text-gray-500">
            Page 1 of 5
            <span className="ml-10 pr-2 text-gray-500">
              <FontAwesomeIcon icon={faCaretDown} />
            </span>
          </div>
          <button className=" border-2 border-gray-400 px-5 rounded-md text-gray-500">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button className=" border-2 border-gray-400 px-5 rounded-md text-gray-500">
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;
