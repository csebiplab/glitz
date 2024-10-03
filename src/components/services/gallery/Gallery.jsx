import React from "react";
import GalleryBanner from "./GalleryBanner/GalleryBanner";
import OurWork from "./OurWork/OurWork";
import ContactUs from "@/components/__shared_one_time/HomePage/ContactUs/ContactUs";
import ServicesArea from "@/components/__shared_one_time/HomePage/ServicesArea/ServicesArea";

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
