import Sidebar from "../components/Sidebar";
import SortCard from "../components/SortCard";
import CardCar from "../components/CardCar";

import Koenisegg from "../assets/images/koenisegg.png";
import NissanGTR from "../assets/images/nissan-gtr.png";
import RollsRoyce from "../assets/images/rolls-royce.png";
import Navbar from "../components/Navbar";

function Category() {
  return (
    <div className="">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <div className="grid grid-cols-1 gap-4 ">
            <SortCard />
            <div className="grid grid-cols-3 gap-4">
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
                title={"Nissan GTR"}
                category={"Sport"}
                image={NissanGTR}
                fuelCap={"80L"}
                transmission={"Automatic"}
                seat={"4"}
                price={"89.00"}
              />
              <CardCar
                title={"Rolls Royce"}
                category={"Luxury"}
                image={RollsRoyce}
                fuelCap={"100L"}
                transmission={"Automatic"}
                seat={"4"}
                price={"199.00"}
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
                title={"Nissan GTR"}
                category={"Sport"}
                image={NissanGTR}
                fuelCap={"80L"}
                transmission={"Automatic"}
                seat={"4"}
                price={"89.00"}
              />
              <CardCar
                title={"Rolls Royce"}
                category={"Luxury"}
                image={RollsRoyce}
                fuelCap={"100L"}
                transmission={"Automatic"}
                seat={"4"}
                price={"199.00"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
