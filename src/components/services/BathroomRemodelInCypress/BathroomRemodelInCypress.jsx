import React from 'react';
import "./BathroomRemodelInCypress.css";
import BathroomRemodelInCypressBanner from './BathroomRemodelInCypressBanner/BathroomRemodelInCypressBanner';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';
import AboutUs from './AboutUs/AboutUs';
import Contractors from './Contractors/Contractors';
import { titleHeadingTexts } from '@/utils/title-heading-text';
import WhyChoose from './WhyChoose/WhyChoose';
import Faq from './Faq/Faq';
import BathroomInstallers from './BathroomInstallers/BathroomInstallers';
import Experienced from './Experienced/Experienced';
import EquippedAndExpert from './EquippedAndExpert/EquippedAndExpert';
import Elevating from './Elevating/Elevating';
import Benefits from './Benefits/Benefits';
import Process from './Process/Process';
import Services from './Services/Services';
import ConsiderationAndLimiting from './ConsiderationAndLimiting/ConsiderationAndLimiting';
import Gallery from './Gallery/Gallery';
import Cost from './Cost/Cost';
import Review from '@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review';
import ServicesArea from '@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea';
import Location from '@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location';
import ContactUs from '@/components/__shared_one_time/HomePage/OnlyHomePage/ContactUs/ContactUs';

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
                <Benefits />
            </section>

            <section>
                <Gallery />
            </section>

            <section>
                <Process />
            </section>

            <section>
                <Services />
            </section>
            
            <section>
                <Review />
            </section>

            <section>
                <Cost />
            </section>

            <section>
                <ConsiderationAndLimiting />
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

export default BathroomRemodelInCypress;