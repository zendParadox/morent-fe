/* eslint-disable react/prop-types */
import Button from "./Button";

import Like from "../assets/icon/Like.png";

import Car from "../assets/icon/Car.png";
import GasStation from "../assets/icon/gas-station.png";
import User from "../assets/icon/user.png";
function CardCar({
  title,
  category,
  image,
  fuelCap,
  transmission,
  seat,
  price,
}) {
  return (
    <>
      <div className="group min-w-64 bg-white px-5 py-5 rounded-lg shadow-sm">
        <div className="w-full h-full ">
          <div className="flex justify-between items-center">
            <div className="">
              <div className="font-semibold text-xl">{title}</div>
              <div className="font-semibold text-sm text-slate-400">
                {category}
              </div>
            </div>
            <div className="">
              <img src={Like} alt="" className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-16  flex justify-center">
            <img
              src={image}
              alt=""
              className="group-hover:scale-110 transition-all duration-300 ease-in-out  "
            />
          </div>
          <div className="mt-16">
            <div className="flex justify-around ">
              <div className="flex gap-[6px] text-slate-400 items-center">
                <img src={GasStation} alt="" className="w-4 h-4" />
                <div className="">{fuelCap}</div>
              </div>
              <div className="flex gap-[6px] text-slate-400 items-center">
                <img src={Car} alt="" className="w-4 h-4" />
                <div className="">{transmission}</div>
              </div>
              <div className="flex gap-[6px] text-slate-400 items-center">
                <img src={User} alt="" className="w-4 h-4" />
                <div className="">{seat}</div>
              </div>
            </div>
          </div>
          <div className="flex mt-6 items-center justify-between">
            <div className="font-bold">
              {price}/ <span className="text-sm text-slate-400">day</span>
            </div>
            <Button text="Rent Now" bgColor="#3563E9" onClick="#" />
          </div>
        </div>
      </div>
    </>
  );
}
export default CardCar;
