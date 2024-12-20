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
import AboutUs from "./AboutUs/AboutUs";
import Contractor from "./Contractor/Contractor";
import WellEquipped from "./WellEquipped/WellEquipped";
import ExcellentDesign from "./ExcellentDesign/ExcellentDesign";
import Solution from "./Solution/Solution";
import NationwideRoofers from "./NationwideRoofers/NationwideRoofers";
import WorkwithUs from "./WorkwithUs/WorkwithUs";

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
        <AboutUs />
      </section>

      <section>
        <Contractor />
      </section>

      <section>
        <WellEquipped />
      </section>

      <section>
        <ExcellentDesign />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <BestRoofingService />
      </section>

      <section>
        <Solution />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <NationwideRoofers />
      </section>

      <section>
        <WhyChoose />
      </section>

      <section>
        <WorkwithUs />
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
