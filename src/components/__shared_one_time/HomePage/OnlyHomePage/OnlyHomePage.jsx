import React from "react";
import Banner from "./Banner/Banner";
import Brand from "../../FlooringInstallation/Brand/Brand";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Review from "./Review/Review";
import ContactUs from "./ContactUs/ContactUs";
import Location from "./Location/Location";
import YourDream from "./YourDream/YourDream";

const OnlyHomePage = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <YourDream />
      </section>

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <ContactUs />
      </section>

      <section>
        <Location />
      </section>
    </div>
  );
};

export default OnlyHomePage;
