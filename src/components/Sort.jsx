// import { cities } from "../api/locations";
// import { generateTimeOptions } from "../api/time";
// import { addDays, format } from "date-fns";
// import { useState } from "react";
// import { DateRange } from "react-date-range";
// import "react-date-range/dist/styles.css"; // Default style
// import "react-date-range/dist/theme/default.css"; // Theme style
// import Select from "react-select";

// function Sort() {
//   const [openDropdownPickUp, setOpenDropdownPickUp] = useState(null);
//   const [openDropdownDate, setOpenDropdownDate] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("Select your city");
//   const [selectedTime, setSelectedTime] = useState(null);

//   const handleDropdownTogglePickUp = (dropdownName) => {
//     setOpenDropdownPickUp(
//       openDropdownPickUp === dropdownName ? null : dropdownName
//     );
//   };

//   const handleSelectCity = (city) => {
//     setSelectedCity(city);
//     // setOpenDropdownPickUp(null); // Tutup dropdown setelah memilih kota
//   };

//   // State untuk date range
//   const [dateRange, setDateRange] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);
//   return (
//     <>
//       <div className="w-full md:w-[582px] h-auto md:h-[145px] bg-white mt-8 rounded-lg">
//         <div className="my-6 mx-4 md:mx-12">
//           <div className="flex">
//             <input type="radio" name="Pick-Up" id="" />
//             <h2 className="ms-2">Pick - Up</h2>
//           </div>
//           <div className="mt-4 flex flex-col md:flex-row justify-between gap-4 md:gap-0">
//             <div className="w-full md:w-auto">
//               <div className="font-semibold">Location</div>
//               <div className="relative inline-flex w-full">
//                 <button
//                   type="button"
//                   onClick={() => handleDropdownTogglePickUp("location")}
//                   className="mt-2 inline-flex w-full items-center gap-x-2 text-sm text-slate-500 hover:bg-gray-50 focus:outline-none"
//                   aria-haspopup="true"
//                   aria-expanded={openDropdownPickUp === "location"}>
//                   {selectedCity}
//                   <svg
//                     className={`size-4 text-gray-600 transition-transform ${
//                       openDropdownPickUp === "location" ? "rotate-180" : ""
//                     }`}
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round">
//                     <path d="m6 9 6 6 6-6"></path>
//                   </svg>
//                 </button>

//                 {openDropdownPickUp === "location" && (
//                   <div
//                     className="absolute z-10 mt-2 top-10 w-full md:w-56 bg-white shadow-md rounded-lg p-2"
//                     role="menu"
//                     aria-orientation="vertical">
//                     {cities.map((city, index) => (
//                       <button
//                         key={index}
//                         onClick={() => handleSelectCity(city)}
//                         className="flex w-full items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100">
//                         {city}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Dropdown Date Range */}
//             <div className="">
//               <div className="font-semibold">Date Range</div>
//               <div className="relative">
//                 <button
//                   onClick={() => setOpenDropdownDate(!openDropdownDate)}
//                   className="w-full flex justify-between items-center text-sm text-slate-500 py-2 ">
//                   {`${format(dateRange[0].startDate, "dd/MM/yyyy")} - ${format(
//                     dateRange[0].endDate,
//                     "dd/MM/yyyy"
//                   )}`}
//                   <span
//                     className={`transition-transform ${
//                       openDropdownDate ? "rotate-180" : ""
//                     }`}>
//                     <svg
//                       className={`size-4 text-gray-600 transition-transform ${
//                         openDropdownPickUp === "location" ? "rotate-180" : ""
//                       }`}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="24"
//                       height="24"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round">
//                       <path d="m6 9 6 6 6-6"></path>
//                     </svg>
//                   </span>
//                 </button>

//                 {openDropdownDate && (
//                   <div className="absolute z-10 mt-2 bg-white shadow-md rounded-lg p-2">
//                     <DateRange
//                       ranges={dateRange}
//                       onChange={(ranges) => setDateRange([ranges.selection])}
//                       moveRangeOnFirstSelection={false}
//                       rangeColors={["#3b82f6"]} // Warna primary
//                     />
//                   </div>
//                 )}
//               </div>
//             </div>
//             {/* Dropdown Time */}
//             <div className="">
//               <div className="font-semibold">Time</div>
//               <div className="">
//                 {
//                   <Select
//                     options={generateTimeOptions()}
//                     value={selectedTime}
//                     onChange={setSelectedTime}
//                     placeholder="Select time"
//                     className="text-sm"
//                   />
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Sort;
