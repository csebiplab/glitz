import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Installation from './Installation/Installation';
import ResidentialCommercial from './ResidentialCommercial/ResidentialCommercial';
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
import Review from './Review/Review';
import FlooringInstallationCompany from './FlooringInstallationCompany/FlooringInstallationCompany';
import StartYourProject from './StartYourProject/StartYourProject';
import HowWeDesign from './HowWeDesign/HowWeDesign';
import { titleHeadingTexts } from '@/utils/title-heading-text';
import CostComparison from './CostComparison/CostComparison';

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
                <FlooringInstallationCompany/>
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
                <CostComparison />
            </section>

            <section>
                <HowWeDesign/>
            </section>

            <section>
                <ProjectGallery/>
            </section>
            
            <section>
                <Review titleHeading={ titleHeadingTexts.flooringInstallationReviewText} />
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
                <StartYourProject/>
            </section>

            <section>
                <OurServiceAreas/>
            </section>

            <section>
                <ContactUs  contactUsTitle={titleHeadingTexts.flooringInstallationContactUsText}/>
            </section>

            <section>
                <Location/>
            </section>

        </div>
    );
};

export default FlooringInstallationServices;