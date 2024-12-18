import ContactUs from "@/components/__shared_one_time/HomePage/OnlyHomePage/ContactUs/ContactUs";
import Location from "@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location";
import ServicesArea from "@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea";
import React from "react";
import Faq from "./Faq/Faq";
import Brand from "@/components/__shared_one_time/FlooringInstallation/Brand/Brand";
import RoofingContractorBanner from "./RoofingContractorBanner/RoofingContractorBanner";
import Gallery from "./Gallery/Gallery";
import Review from "@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review";
import WhyChoose from "./WhyChoose/WhyChoose";
import BestRoofingService from "./BestRoofingService/BestRoofingService";

const RoofingContractorAllComponent = () => {
  return (
    <div>
      <section>
        <RoofingContractorBanner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <BestRoofingService />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <Faq />
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

export default RoofingContractorAllComponent;
