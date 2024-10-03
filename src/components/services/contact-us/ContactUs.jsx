import React from "react";
<<<<<<< HEAD
import ServicesArea from "../home/ServicesArea/ServicesArea";
import ContactUs from "../home/ContactUs/ContactUs";
import ContactBanner from "./ContactBanner/ContactBanner";

const ContactUsPage = () => {
  return (
    <div>
=======
import ContactBanner from "./ContactBanner/ContactBanner";
import ServicesArea from "@/components/__shared_one_time/HomePage/ServicesArea/ServicesArea";
import ContactUs from "@/components/__shared_one_time/HomePage/ContactUs/ContactUs";

const ContactUsPage = () => {
  return (
    <div className="custom-container">
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
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
