import React from "react";
import ContactBanner from "./ContactBanner/ContactBanner";
import ServicesArea from "@/components/__shared_one_time/HomePage/ServicesArea/ServicesArea";
import ContactUs from "@/components/__shared_one_time/HomePage/ContactUs/ContactUs";

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
