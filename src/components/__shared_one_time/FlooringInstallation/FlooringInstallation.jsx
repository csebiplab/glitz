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
import Faq from './Faq/Faq';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import OurServiceAreas from './OurServiceAreas/OurServiceAreas';
import Services from './Services/Services';
import Brand from './Brand/Brand';
import HomeBanner from './HomeBanner/HomeBanner';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import FlooringContractors from './FlooringContractors/FlooringContractors';
import ContactUs from './ContactUs/ContactUs';

const FlooringInstallationServices = () => {
    return (
        <div className="custom-container">

            <section>
                <HomeBanner/>
            </section>

            <section>
                <Brand/>
            </section>

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
                <Services/>
            </section>

            <section>
                <FlooringContractors/>
            </section>

            <section>
                <ProjectGallery/>
            </section>

            <section>
                <WorkingProcess/>
            </section>

            <section>
                <HowToVisualize/>
            </section>

            <section>
                <TrustUs/>
            </section>

            <section>
                <WhyChooseUs/>
            </section>

            <section>
                <Faq/>
            </section>

            <section>
                <OurServiceAreas/>
            </section>

            <section>
                <ContactUs/>
            </section>

            <section>
                <Location/>
            </section>

        </div>
    );
};

export default FlooringInstallationServices;