import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Installation from './Installation/Installation';
import ResidentialCommercial from './ResidentialCommercial/ResidentialCommercial';
import FlooringInstallation from './FlooringInstallation/FlooringInstallation';

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

        </div>
    );
};

export default Homepage;