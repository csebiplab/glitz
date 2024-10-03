import React from "react";
import ServicesArea from "../../__shared_one_time/HomePage/ServicesArea/ServicesArea";
import ContactUs from "../../__shared_one_time/HomePage/ContactUs/ContactUs";
import ContactBanner from "./ContactBanner/ContactBanner";

const ContactUsPage = () => {
  return (
    <div className="custom-container">
      <section>
        <ContactBanner />
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

export default ContactUsPage;
