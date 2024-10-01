import React from "react";
import ServicesArea from "../home/ServicesArea/ServicesArea";
import ContactUs from "../home/ContactUs/ContactUs";
import ContactBanner from "./ContactBanner/ContactBanner";

const ContactUsPage = () => {
  return (
    <div>
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
