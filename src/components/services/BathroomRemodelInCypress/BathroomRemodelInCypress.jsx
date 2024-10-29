import React from 'react';
import "./BathroomRemodelInCypress.css";
import BathroomRemodelInCypressBanner from './BathroomRemodelInCypressBanner/BathroomRemodelInCypressBanner';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';
import AboutUs from './AboutUs/AboutUs';
import Contractors from './Contractors/Contractors';

const BathroomRemodelInCypress = () => {
    return (
        <div>
            <section>
                <BathroomRemodelInCypressBanner/>
            </section>

            <section>
                <Brand/>
            </section>

            <section>
                <AboutUs/>
            </section>

            <section>
                <Contractors/>
            </section>
        </div>
    );
};

export default BathroomRemodelInCypress;