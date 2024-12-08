import React from "react";
import "./VinylFlooringInCypressTX.css";
import VinylFlooringInCypressTXBanner from "./VinylFlooringInCypressTXBanner/VinylFlooringInCypressTXBanner";
import Brand from "@/components/__shared_one_time/FlooringInstallation/Brand/Brand";
import Review from "@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review";
import ServicesArea from "@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea";
import Location from "@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location";
import ContactUs from "./ContactUs/ContactUs";
import Faq from "./Faq/Faq";
import AboutUs from "./AboutUs/AboutUs";
import Installation from "./Installation/Installation";
import BlendsStyle from "./BlendsStyle/BlendsStyle";
import Discover from "./Discover/Discover";
import YouCanTrust from "./YouCanTrust/YouCanTrust";
import Repair from "./Repair/Repair";
import Cleaner from "./Cleaner/Cleaner";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Mistakes from "./Mistakes/Mistakes";
import Type from "./Type/Type";
import Benefits from "./Benefits/Benefits";
import TheBestChoice from "./TheBestChoice/TheBestChoice";

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
        <AboutUs />
      </section>

      <section>
        <Installation />
      </section>

      <section>
        <BlendsStyle />
      </section>

      <section>
        <TheBestChoice />
      </section>

      <section>
        <Benefits />
      </section>

      <section>
        <Type />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Repair />
      </section>

      <section>
        <Cleaner />
      </section>

      <section>
        <Mistakes />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <Discover />
      </section>

      <section>
        <YouCanTrust />
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

export default VinylFlooringInCypressTX;
