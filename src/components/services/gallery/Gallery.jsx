import React from "react";
import ContactUs from "../../__shared_one_time/HomePage/ContactUs/ContactUs";
import ServicesArea from "../../__shared_one_time/HomePage/ServicesArea/ServicesArea";
import GalleryBanner from "./GalleryBanner/GalleryBanner";
import OurWork from "./OurWork/OurWork";

const Gallery = () => {
  return (
    <div className="custom-container">
      <section>
        <GalleryBanner />
      </section>

      <section>
        <OurWork />
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

export default Gallery;
