import CardAds from "./CardAds";

import bg from "../assets/images/bg.png";
import bg2 from "../assets/images/bg2.png";

function Ads() {
  return (
    <>
      <div className=" mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 text-white md:gap-8">
        {/* Kolom Pertama */}
        <div className="bg-blue-400 rounded-lg">
          <CardAds
            title={
              <>
                The Best Platform <br /> for Car Rental
              </>
            }
            p="Ease of doing a car rental safely and reliably. Of course at a low
              price."
            bg={bg}
            bgButton={"bg-blue-700"}>
            asdas
          </CardAds>
        </div>

        {/* Kolom Kedua */}
        <div className="bg-blue-700 rounded-lg">
          <CardAds
            title={
              <>
                Easy way to rent a <br />
                cv car at a low price
              </>
            }
            p="Ease of doing a car rental safely and reliably. Of course at a low
              price."
            bg={bg2}
            bgButton={"bg-blue-500"}>
            asdas
          </CardAds>
        </div>
      </div>
    </>
  );
}

export default Ads;
