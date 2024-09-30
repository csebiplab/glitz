import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Flooring from "./Flooring/Flooring";

const Home = () => {
  return (
    <div className="custom-container">
      <section>
        <HomeBanner />
      </section>
      <section>
        <Flooring />
      </section>
    </div>
  );
};

export default Home;
