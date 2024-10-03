import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutOur from "./AboutOur/AboutOur";
import Dream from "./Dream/Dream";
import ServicesArea from "@/components/__shared_one_time/HomePage/ServicesArea/ServicesArea";
import ContactUs from "@/components/__shared_one_time/HomePage/ContactUs/ContactUs";

const AboutUs = () => {
  return (
    <div className="custom-container">
      <section>
        <AboutBanner />
      </section>

      <section>
        <AboutOur />
      </section>

      <section>
        <Dream />
      </section>

      <section>
        <ContactUs />
      </section>

      <section>
        <ServicesArea />
      </section>
    </div>
  );
};

export default AboutUs;
