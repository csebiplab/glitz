import Brand from "@/components/__shared_one_time/FlooringInstallation/Brand/Brand";
import ContactUs from "@/components/__shared_one_time/HomePage/OnlyHomePage/ContactUs/ContactUs";
import Location from "@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location";
import Review from "@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review";
import ServicesArea from "@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea";
import React from "react";

const PaintingContractorsAllComponent = () => {
  return (
    <div>
      <section>
        <Brand />
      </section>

      <section>
        <Review />
      </section>
      
      <section>
        <ServicesArea />
      </section>

      <section>
        <ContactUs />
      </section>

      <section>
        <Location />
      </section>
    </div>
  );
};

export default PaintingContractorsAllComponent;
