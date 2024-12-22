import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Installation from './Installation/Installation';
import ResidentialCommercial from './ResidentialCommercial/ResidentialCommercial';
import BestFlooring from './BestFlooring/BestFlooring';
import TrustUs from './TrustUs/TrustUs';
import FloorsNow from './FloorsNow/FloorsNow';
import HowToVisualize from './HowToVisualize/HowToVisualize';
import Faq from './Faq/Faq';
import ProjectGallery from './ProjectGallery/ProjectGallery';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import Services from './Services/Services';
import Brand from './Brand/Brand';
import WorkingProcess from './WorkingProcess/WorkingProcess';
import FlooringContractors from './FlooringContractors/FlooringContractors';
import FlooringInstallationCompany from './FlooringInstallationCompany/FlooringInstallationCompany';
import StartYourProject from './StartYourProject/StartYourProject';
import HowWeDesign from './HowWeDesign/HowWeDesign';
import CostComparison from './CostComparison/CostComparison';
import FlooringInstallationBanner from './FlooringInstallationBanner/FlooringInstallationBanner';
import ServicesArea from '../HomePage/OnlyHomePage/ServicesArea/ServicesArea';
import ContactUs from '../HomePage/OnlyHomePage/ContactUs/ContactUs';
import Location from '../HomePage/OnlyHomePage/Location/Location';
import Review from '../HomePage/OnlyHomePage/Review/Review';

const FlooringInstallationServices = () => {
    return (
        <div className="custom-container">

            <section>
                <FlooringInstallationBanner/>
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
                <Review />
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

export default FlooringInstallationServices;