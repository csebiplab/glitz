import React from 'react';
import "./KitchenRemodelInCypress.css";
import KitchenRemodelInCypressBanner from './KitchenRemodelInCypressBanner/KitchenRemodelInCypressBanner';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';
import Faq from './Faq/Faq';
import AboutUs from './AboutUs/AboutUs';
import Experienced from './Experienced/Experienced';
import Elevating from './Elevating/Elevating';
import Trust from './Trust/Trust';
import Professional from './Professional/Professional';
import FreshNewLook from './FreshNewLook/FreshNewLook';
import Revitalize from './Revitalize/Revitalize';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import OutdoorKitchen from './OutdoorKitchen/OutdoorKitchen';
import WhyChoose from './WhyChoose/WhyChoose';
import Innovative from './Innovative/Innovative';
import Cost from './Cost/Cost';
import Services from './Services/Services';
import Gallery from './Gallery/Gallery';
import OurRenovators from './OurRenovators/OurRenovators';
import ServicesArea from '@/components/__shared_one_time/HomePage/OnlyHomePage/ServicesArea/ServicesArea';
import ContactUs from '@/components/__shared_one_time/HomePage/OnlyHomePage/ContactUs/ContactUs';
import Location from '@/components/__shared_one_time/HomePage/OnlyHomePage/Location/Location';
import Review from '@/components/__shared_one_time/HomePage/OnlyHomePage/Review/Review';

const KitchenRemodelInCypress = () => {
    return (
        <div>
            <section>
                <KitchenRemodelInCypressBanner/>
            </section>

            <section>
                <Brand />
            </section>

            <section>
                <AboutUs />
            </section>

            <section>
                <Experienced />
            </section>

            <section>
                <Elevating />
            </section>

            <section>
                <Trust />
            </section>

            <section>
                <Professional />
            </section>

            <section>
                <OurRenovators />
            </section>

            <section>
                <Gallery />
            </section>

            <section>
                <Services />
            </section>

            <section>
                <OutdoorKitchen />
            </section>

            <section>
                <Innovative />
            </section>
            
            <section>
                <Cost />
            </section>

            <section>
                <Review />
            </section>

            <section>
                <WhyChoose />
            </section>

            <section>
                <Revitalize />
            </section>

            <section>
                <WorkWithUs />
            </section>

            <section>
                <FreshNewLook />
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

export default KitchenRemodelInCypress;