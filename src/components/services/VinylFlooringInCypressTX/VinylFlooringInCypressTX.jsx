import React from "react";
import "./VinylFlooringInCypressTX.css";
import VinylFlooringInCypressTXBanner from "./VinylFlooringInCypressTXBanner/VinylFlooringInCypressTXBanner";
import Brand from "@/components/__shared_one_time/FlooringInstallation/Brand/Brand";
import Review from "@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review";
import ServicesArea from "@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea";
import Location from "@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location";

const VinylFlooringInCypressTX = () => {
  return (
    <div>
      <section>
        <VinylFlooringInCypressTXBanner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <ServicesArea />
      </section>

      {/* <section>
        <ContactUs />
      </section> */}

      <section>
        <Location />
      </section>

    </div>
  );
};

export default VinylFlooringInCypressTX;
