import { useState } from "react";
import Swap from "../assets/icon/Swap.svg";

function SortCard() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="">
      <div className="flex gap-11 group">
        <div className="w-[582px] h-[132px] bg-white mt-8 rounded-lg">
          <div className="my-6 mx-12">
            <div className="flex">
              <input type="radio" name="Pick-Up" id="" />
              <h2 className="ms-2">Pick - Up</h2>
            </div>
            <div className="mt-4 justify-between flex">
              <div className="">
                <div className="font-semibold ">Location</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("location")}
                    className="mt-2 inline-flex w-full items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "location"}>
                    Select your city
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "location" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "location" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <div className="font-semibold">Date</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("date")}
                    className="mt-2 inline-flex items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "date"}>
                    Select your date
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "date" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "date" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <div className="font-semibold">Time</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("time")}
                    className="mt-2 inline-flex items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "time"}>
                    Select your time
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "time" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "time" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <div className="w-[60px] h-[60px] mt-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <button type="button" className="">
              <img src={Swap} alt="" className="w-full h-full" />
            </button>
          </div>
        </div>
        <div className="w-[582px] h-[132px] bg-white mt-8 rounded-lg">
          <div className="my-6 mx-12">
            <div className="flex">
              <input type="radio" name="Pick-Up" id="" />
              <h2 className="ms-2">Drop - Off</h2>
            </div>
            <div className="mt-4 justify-between flex">
              <div className="">
                <div className="font-semibold ">Location</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("location")}
                    className="mt-2 inline-flex w-full items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "location"}>
                    Select your city
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "location" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "location" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <div className="font-semibold">Date</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("date")}
                    className="mt-2 inline-flex items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "date"}>
                    Select your date
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "date" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "date" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
              <div className="">
                <div className="font-semibold">Time</div>
                <div className="relative inline-flex">
                  <button
                    type="button"
                    onClick={() => handleDropdownToggle("time")}
                    className="mt-2 inline-flex items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none "
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "time"}>
                    Select your time
                    <svg
                      className={`size-4 text-gray-600 transition-transform ${
                        openDropdown === "time" ? "rotate-180" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {openDropdown === "time" && (
                    <div
                      className="absolute z-10 mt-2 top-10 w-56 bg-white shadow-md rounded-lg p-2"
                      role="menu"
                      aria-orientation="vertical">
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Newsletter
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Purchases
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Downloads
                      </a>
                      <a
                        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100"
                        href="#">
                        Team Account
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SortCard;
