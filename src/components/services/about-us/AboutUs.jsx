import React from "react";
import ContactUs from "../../__shared_one_time/HomePage/ContactUs/ContactUs";
import ServicesArea from "../../__shared_one_time/HomePage/ServicesArea/ServicesArea";
import AboutBanner from "./AboutBanner/AboutBanner";
import AboutOur from "./AboutOur/AboutOur";
import Dream from "./Dream/Dream";

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
