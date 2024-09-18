import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Installation from './Installation/Installation';

const Homepage = () => {
    return (
        <div className="custom-container">

            <section>
                <AboutUs/>
            </section>

            <section>
                <Installation/>
            </section>

        </div>
    );
};

export default Homepage;