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
          <div className="gap-10 mt-5 flex-wrap grid grid-cols-4">
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
          <div className="justify-between flex mt-9">
            <div className="text-slate-600 font-semibold">
              Recommendation Car
            </div>
          </div>
          <div className="gap-10 mt-5 flex-wrap grid grid-cols-4">
            {recommendationCars.length > 0 ? (
              recommendationCars.map((car, index) => (
                <CardCar
                  key={index}
                  title={`${car.brand} ${car.model}`}
                  category="Sedan"
                  image={Koenisegg} // Pakai gambar default jika kosong
                  fuelCap={"70L"}
                  transmission={"Manual"}
                  seat={"4"}
                  price={`Rp ${car.price_per_day.toLocaleString("id-ID")}`}
                />
              ))
            ) : (
              <p>Loading...</p>
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
