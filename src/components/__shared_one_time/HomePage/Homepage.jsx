import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Installation from './Installation/Installation';
import ResidentialCommercial from './ResidentialCommercial/ResidentialCommercial';
import FlooringInstallation from './FlooringInstallation/FlooringInstallation';
import BestFlooring from './BestFlooring/BestFlooring';
import TrustUs from './TrustUs/TrustUs';
import FloorsNow from './FloorsNow/FloorsNow';
import Location from './Location/Location';
import HowToVisualize from './HowToVisualize/HowToVisualize';

const Homepage = () => {
    return (
        <div className="custom-container">

            <section>
                <AboutUs/>
            </section>

            <section>
                <Installation/>
            </section>

            <section>
                <ResidentialCommercial/>
            </section>
            
            <section>
                <FlooringInstallation/>
            </section>

            <section>
                <BestFlooring/>
            </section>

            <section>
                <FloorsNow/>
            </section>

            <section>
                <HowToVisualize/>
            </section>

            <section>
                <TrustUs/>
            </section>

            <section>
                <Location/>
            </section>

        </div>
    );
};

export default Homepage;