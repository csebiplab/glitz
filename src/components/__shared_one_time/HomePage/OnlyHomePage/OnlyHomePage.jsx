import React from "react";
import Banner from "./Banner/Banner";
import Brand from "../../FlooringInstallation/Brand/Brand";
import ProjectGallery from "./ProjectGallery/ProjectGallery";
import Review from "./Review/Review";

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
        <ProjectGallery />
      </section>

      <section>
        <Review />
      </section>
    </div>
  );
};

export default OnlyHomePage;
