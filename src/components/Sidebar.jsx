import { useState } from "react";

function Sidebar() {
  const [filters, setFilters] = useState({
    sedan: false,
    suv: false,
    electric: false,
    manual: false,
    automatic: false,
  });

  const handleCheckboxChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="float-start mb-4">
      <div className="w-64 h-full  bg-white p-5 rounded-br-lg shadow-sm text-sm">
        <h2 className="text-sm font-semibold text-slate-400 mb-2">TYPE</h2>
        <div className="space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="sedan"
              checked={filters.sedan}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              Sport <span className="text-slate-400">(10)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="suv"
              checked={filters.suv}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              SUV <span className="text-slate-400">(12)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="electric"
              checked={filters.electric}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              MPV <span className="text-slate-400">(16)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="manual"
              checked={filters.manual}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              Sedan <span className="text-slate-400">(20)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="automatic"
              checked={filters.automatic}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              Coupe <span className="text-slate-400">(14)</span>
            </span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="automatic"
              checked={filters.automatic}
              onChange={handleCheckboxChange}
              className="w-4 h-4"
            />
            <span>
              Hatchback <span className="text-slate-400">(14)</span>
            </span>
          </label>
        </div>

        {/*  */}
        <div className="">
          <h2 className="text-sm font-semibold text-slate-400 mb-2 mt-8">
            CAPACITY
          </h2>
          <div className="space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sedan"
                checked={filters.sedan}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>
                2 Person <span className="text-slate-400">(10)</span>
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sedan"
                checked={filters.sedan}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>
                4 Person <span className="text-slate-400">(14)</span>
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sedan"
                checked={filters.sedan}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>
                6 Person <span className="text-slate-400">(12)</span>
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="sedan"
                checked={filters.sedan}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>
                8 or More <span className="text-slate-400">(16)</span>
              </span>
            </label>
          </div>

          <h2 className="text-sm font-semibold text-slate-400 mb-2 mt-8">
            PRICE
          </h2>
          <div className="">
            <label htmlFor="basic-range-slider-usage" className="sr-only">
              Example range
            </label>
            <input
              type="range"
              className="w-full bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
    [&::-webkit-slider-thumb]:w-2.5
    [&::-webkit-slider-thumb]:h-2.5
    [&::-webkit-slider-thumb]:-mt-0.5
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:bg-white
    [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:transition-all
    [&::-webkit-slider-thumb]:duration-150
    [&::-webkit-slider-thumb]:ease-in-out
    [&::-webkit-slider-thumb]:

    [&::-moz-range-thumb]:w-2.5
    [&::-moz-range-thumb]:h-2.5
    [&::-moz-range-thumb]:appearance-none
    [&::-moz-range-thumb]:bg-white
    [&::-moz-range-thumb]:border-4
    [&::-moz-range-thumb]:border-blue-600
    [&::-moz-range-thumb]:rounded-full
    [&::-moz-range-thumb]:transition-all
    [&::-moz-range-thumb]:duration-150
    [&::-moz-range-thumb]:ease-in-out

    [&::-webkit-slider-runnable-track]:w-full
    [&::-webkit-slider-runnable-track]:h-2
    [&::-webkit-slider-runnable-track]:bg-gray-100
    [&::-webkit-slider-runnable-track]:rounded-full
    [&::-webkit-slider-runnable-track]:

    [&::-moz-range-track]:w-full
    [&::-moz-range-track]:h-2
    [&::-moz-range-track]:bg-gray-100
    [&::-moz-range-track]:rounded-full"
              id="basic-range-slider-usage"
              aria-orientation="horizontal"></input>
          </div>
          <div className="text-slate-600">Max. $100.00</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
