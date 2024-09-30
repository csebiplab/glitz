import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Flooring from "./Flooring/Flooring";
import Gallery from "./Gallery/Gallery";
import YourDream from "./YourDream/YourDream";

const Home = () => {
  return (
    <div className="custom-container">
      <section>
        <HomeBanner />
      </section>

      <section>
        <Flooring />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <YourDream/>
      </section>
    </div>
  );
};

export default Home;
