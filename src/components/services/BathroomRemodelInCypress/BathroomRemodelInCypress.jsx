import React from 'react';
import "./BathroomRemodelInCypress.css";
import BathroomRemodelInCypressBanner from './BathroomRemodelInCypressBanner/BathroomRemodelInCypressBanner';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';

const BathroomRemodelInCypress = () => {
    return (
        <div>
            <section>
                <BathroomRemodelInCypressBanner/>
            </section>

            <section>
                <Brand/>
            </section>
        </div>
    );
};

export default BathroomRemodelInCypress;