import React from 'react';
import "./KitchenRemodelInCypress.css";
import KitchenRemodelInCypressBanner from './KitchenRemodelInCypressBanner/KitchenRemodelInCypressBanner';
import Location from '@/components/__shared_one_time/FlooringInstallation/Location/Location';
import ContactUs from '@/components/__shared_one_time/FlooringInstallation/ContactUs/ContactUs';
import OurServiceAreas from '@/components/__shared_one_time/FlooringInstallation/OurServiceAreas/OurServiceAreas';
import { titleHeadingTexts } from '@/utils/title-heading-text';
import Brand from '@/components/__shared_one_time/FlooringInstallation/Brand/Brand';
import Faq from './Faq/Faq';
import Review from '@/components/__shared_one_time/FlooringInstallation/Review/Review';
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
                <Review titleHeading={ titleHeadingTexts.bathroomRemodelReviewText} />
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
                <OurServiceAreas />
            </section>

            <section>
                <ContactUs contactUsTitle={titleHeadingTexts.bathroomRemodelContactUsText}/>
            </section>

            <section>
                <Location />
            </section>
        </div>
    );
};

export default KitchenRemodelInCypress;