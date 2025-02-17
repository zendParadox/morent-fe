import Ads from "../src/components/Ads";
import CardCar from "./components/CardCar";
import SortCard from "./components/SortCard";

import Koenisegg from "../src/assets/images/koenisegg.png";
import NissanGTR from "../src/assets/images/nissan-gtr.png";
import RollsRoyce from "../src/assets/images/rolls-royce.png";

function App() {
  return (
    <div className="bg-slate-100">
      <div className="mx-4 md:mx-8 lg:mx-16 ">
        <Ads />
        <div className="flex gap-8">
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
        </div>
        <SortCard />
      </div>
    </div>
  );
}

export default App;
