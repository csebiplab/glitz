import React from 'react';
import "./BathroomRemodelInCypress.css";
import BathroomRemodelInCypressBanner from './BathroomRemodelInCypressBanner/BathroomRemodelInCypressBanner';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';
import AboutUs from './AboutUs/AboutUs';
import Contractors from './Contractors/Contractors';
import Location from '@/components/__shared_one_time/FlooringInstallation/Location/Location';
import ContactUs from '@/components/__shared_one_time/FlooringInstallation/ContactUs/ContactUs';
import OurServiceAreas from '@/components/__shared_one_time/FlooringInstallation/OurServiceAreas/OurServiceAreas';
import Review from '@/components/__shared_one_time/FlooringInstallation/Review/Review';
import { titleHeadingTexts } from '@/utils/title-heading-text';
import WhyChoose from './WhyChoose/WhyChoose';
import Faq from './Faq/Faq';
import BathroomInstallers from './BathroomInstallers/BathroomInstallers';
import Experienced from './Experienced/Experienced';
import EquippedAndExpert from './EquippedAndExpert/EquippedAndExpert';
import Elevating from './Elevating/Elevating';

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

            <section>
                <Experienced/>
            </section>

            <section>
                <EquippedAndExpert />
            </section>

            <section>
                <Elevating />
            </section>


            <section>
                <Review titleHeading={ titleHeadingTexts.bathroomRemodelReviewText} />
            </section>

            <section>
                <WhyChoose />
            </section>

            <section>
                <BathroomInstallers />
            </section>

            <section>
                <Faq />
            </section>

            <section>
                <OurServiceAreas />
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

export default BathroomRemodelInCypress;