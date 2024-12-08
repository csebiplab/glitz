import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 padding__top">
            <div className="grid grid-cols-1 grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/aboutUs.png" alt='about us' width={836} height={741}/>
                </div>
                <div className='md:col-span-1'>
                    <div>
                    <NewHeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                    </div>
                    <h2 className="common__heading">About Our Cypress Vinyl Flooring Contractors</h2>
                    <p className='common__paragraph'>At Glitz Floors & More, we pride ourselves on delivering expert vinyl flooring solutions in Cypress, TX. Our team specializes in waterproof vinyl, luxury vinyl planks, wood-look vinyl, and Vinyl Composition Tile (VCT) installation. Known for our meticulous attention to detail and commitment to high-quality craftsmanship, we work with each client to ensure their flooring perfectly matches their vision and lifestyle needs. From consultations to custom installations, our Cypress vinyl flooring contractors bring a wealth of knowledge and experience to every project. We focus on durability, style, and affordability to help create beautiful, lasting spaces in both residential and commercial settings.</p>
                    <p className="common__paragraph">Whether you want to revamp a single room or transform an entire property, Glitz Floors & More is here to make your flooring dreams a reality. Our contractors are fully trained in the latest installation techniques and trends, ensuring each vinyl floor we install is visually stunning and built to withstand the demands of daily life. We use top-quality materials from trusted brands to provide flooring solutions that offer style without compromising resilience. Our selection includes LifeProof vinyl flooring, known for its remarkable durability and water-resistant properties—perfect for kitchens, bathrooms, and high-traffic areas. With options that mimic the elegance of natural wood or the sleekness of stone, our vinyl flooring options can suit any aesthetic preference or practical need.</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;