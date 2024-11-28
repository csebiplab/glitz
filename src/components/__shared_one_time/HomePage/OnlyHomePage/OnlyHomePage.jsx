import React from "react";
import Banner from "./Banner/Banner";
import Brand from "../../FlooringInstallation/Brand/Brand";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Review from "./Review/Review";
import ContactUs from "./ContactUs/ContactUs";
import Location from "./Location/Location";
import YourDream from "./YourDream/YourDream";
import AboutUs from "./AboutUs/AboutUs";
import FloorNow from "./FloorNow/FloorNow";
import NewFloor from "./NewFloor/NewFloor";
// import VisualizeYourRoom from "./VisualizeYourRoom/VisualizeYourRoom";
import ServicesArea from "./ServicesArea/ServicesArea";
import Services from "./Services/Services";
import RemodelingServices from "./RemodelingServices/RemodelingServices";

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
        <RemodelingServices />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <NewFloor />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <YourDream />
      </section>

      <section>
        <FloorNow />
      </section>

      {/* <section>
        <VisualizeYourRoom />
      </section> */}

      <section>
        <ProjectGallery />
      </section>

      <section>
        <Review />
      </section>

      <section>
        <ServicesArea />
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
