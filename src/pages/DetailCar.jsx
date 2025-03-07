import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Like from "../assets/icon/Like.png";
import star from "../assets/icon/icon-star.svg";

function DetailCar() {
  return (
    <>
      <div className="">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
            <div className="grid grid-cols-1  ">
              <div className="grid grid-cols-2 ">
                <div className="">
                  <div className="w-[492px] h-[360px] rounded-lg bg-red-200"></div>
                  <div className="flex justify-between w-full mt-6">
                    <div className="w-[148px] h-[124px] bg-green-200 rounded-lg"></div>
                    <div className="w-[148px] h-[124px] bg-green-200 rounded-lg"></div>
                    <div className="w-[148px] h-[124px] bg-green-200 rounded-lg"></div>
                  </div>
                </div>
                <div className="w-[450px] h-[510px] rounded-lg bg-violet-200 ms-8 p-6">
                  <div className="">
                    <div className="flex justify-between">
                      <h2 className="text-3xl font-semibold">Nissan GT-R</h2>
                      <img src={Like} alt="" className="w-6 h-6" />
                    </div>
                    <div className="flex text-sm items-center me-[2px]">
                      <img src={star} alt="" className="w-5 h-5" />
                      <img src={star} alt="" className="w-5 h-5" />
                      <img src={star} alt="" className="w-5 h-5" />
                      <img src={star} alt="" className="w-5 h-5" />
                      <img src={star} alt="" className="w-5 h-5" />
                      <p className="ms-2 text-slate-600">440+ Reviewer</p>
                    </div>
                    <p className="mt-8 text-xl text-slate-600">
                      NISMO has become the embodiment of Nissans outstanding
                      performance, inspired by the most unforgiving proving
                      ground, the race track.
                    </p>
                    <div className="grid grid-cols-2 mt-8 gap-11">
                      <div className="">
                        <div className="text-slate-600 mb-4  justify-between flex">
                          <p>Type Car</p>
                          <p className="font-semibold">Sport</p>
                        </div>
                        <div className="text-slate-600  justify-between flex">
                          <p>Steering</p>
                          <p className="font-semibold">Manual</p>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-slate-600 mb-4  justify-between flex">
                          <p>Capacity</p>
                          <p className="font-semibold">2 Person</p>
                        </div>
                        <div className="text-slate-600  justify-between flex">
                          <p>Gasoline</p>
                          <p className="font-semibold">70L</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[68px] ">
                      <h2>$80.00/day</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCar;
