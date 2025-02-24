import { useState, useEffect } from "react";

import Ads from "../components/Ads";
import CardCar from "../components/CardCar";
import SortCard from "../components/SortCard";
import Button from "../components/Button";

import Koenisegg from "../assets/images/koenisegg.png";
import NissanGTR from "../assets/images/nissan-gtr.png";
import RollsRoyce from "../assets/images/rolls-royce.png";

function Home() {
  const [recommendationCars, setRecommendationCars] = useState([]);

  // Fetch data dari API
  useEffect(() => {
    fetch("http://localhost:8080/cars/")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200 && data.data) {
          setRecommendationCars(data.data);
        }
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  return (
    <>
      <div className="bg-slate-100">
        <div className="mx-4 md:mx-8 lg:mx-16 ">
          <Ads />
          <SortCard />
          <div className="justify-between flex mt-9">
            <div className="text-slate-600 font-semibold">Popular Car</div>
            <div className="text-blue-500">
              <a href="">View All</a>
            </div>
          </div>
          <div className="overflow-x-auto w-full scrollbar-hide">
            <div className="flex gap-10 mt-5 whitespace-nowrap">
              <CardCar
                title={"Koenisegg"}
                category={"Sport"}
                image={Koenisegg}
                fuelCap={"90L"}
                transmission={"Manual"}
                seat={"2"}
                price={"99.00"}
              />
              <CardCar
                title={"Koenisegg"}
                category={"Sport"}
                image={Koenisegg}
                fuelCap={"90L"}
                transmission={"Manual"}
                seat={"2"}
                price={"99.00"}
              />
              <CardCar
                title={"Koenisegg"}
                category={"Sport"}
                image={Koenisegg}
                fuelCap={"90L"}
                transmission={"Manual"}
                seat={"2"}
                price={"99.00"}
              />
              <CardCar
                title={"Nissan GT-R"}
                category={"Sport"}
                image={NissanGTR}
                fuelCap={"80L"}
                transmission={"Auto"}
                seat={"2"}
                price={"80.50"}
              />
              <CardCar
                title={"Rolls Royce "}
                category={"Sedan"}
                image={RollsRoyce}
                fuelCap={"70L"}
                transmission={"Manual"}
                seat={"4"}
                price={"100.00"}
              />
              <CardCar
                title={"Rolls Royce "}
                category={"Sedan"}
                image={RollsRoyce}
                fuelCap={"70L"}
                transmission={"Manual"}
                seat={"4"}
                price={"100.00"}
              />
            </div>
          </div>
          <div className="justify-between flex mt-9 px-4 md:px-6">
            <div className="text-slate-600 font-semibold text-lg md:text-xl">
              Recommendation Car
            </div>
          </div>

          {/* Grid Responsive */}
          <div className="gap-6 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
            {recommendationCars.length > 0 ? (
              recommendationCars.map((car, index) => (
                <CardCar
                  key={index}
                  title={`${car.brand} ${car.model}`}
                  category={car.type_car}
                  image={Koenisegg} // Pakai gambar default jika kosong
                  fuelCap={car.gasoline_cap}
                  transmission={car.steering}
                  seat={car.capacity}
                  price={`Rp ${car.price_per_day.toLocaleString("id-ID")}`}
                />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500 text-lg sm:text-xl">
                Loading...
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button text="Load More" bgColor="#3563E9" onClick="#" />
        </div>
      </div>
    </>
  );
}

export default Home;
