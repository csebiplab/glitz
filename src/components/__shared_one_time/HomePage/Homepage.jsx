import React from "react";
import ContactUs from "./ContactUs/ContactUs";
import ServicesArea from "./ServicesArea/ServicesArea";

const HomePage = () => {
  return (
    <div className="custom-container">

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
