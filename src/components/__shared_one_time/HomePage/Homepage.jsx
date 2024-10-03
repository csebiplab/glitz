import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Flooring from "./Flooring/Flooring";
import Gallery from "./Gallery/Gallery";
import YourDream from "./YourDream/YourDream";
import ContactUs from "./ContactUs/ContactUs";
import ServicesArea from "./ServicesArea/ServicesArea";

const HomePage = () => {
  return (
    <div className="custom-container">
      <section>
        <HomeBanner />
      </section>

      <section>
        <Flooring />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <YourDream/>
      </section>

      <section>
        <ContactUs/>
      </section>

      <section>
        <ServicesArea/>
      </section>
    </div>
  );
};

export default HomePage;
