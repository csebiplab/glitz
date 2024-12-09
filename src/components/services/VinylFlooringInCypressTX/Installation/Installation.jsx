import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Installation = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/installation.png" alt='installation' width={828} height={788}/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className="flex items-center justify-center md:justify-start">
                    <NewHeadingIcon text={headingIconText.installation__headingIconText}/>
                    </div>
                    <h2 className="common__heading text-center md:text-left">#1 Vinyl Flooring Installation Company in Cypress</h2>
                    <p className='common__paragraph'>Glitz Floors & More is proud to be recognized as the #1 vinyl flooring installation company in Cypress, TX. Specializing in various vinyl flooring solutions, including waterproof vinyl, luxury vinyl planks, and LifeProof vinyl, we bring style and durability to every project. From helping you choose the perfect flooring style to ensuring a precise, professional installation, our team is with you every step. With Glitz Floors & More, you can expect beautiful results and a seamless, stress-free experience. Our team is skilled in the technical aspects of installation and design guidance to help clients make informed decisions based on their space, color schemes, and maintenance preferences. We work efficiently to ensure minimal disruption to your daily life, handling each project with the utmost care and professionalism.</p>
                    <p className="common__paragraph">At Glitz Floors & More, we understand that flooring is a crucial element in any space, impacting both style and functionality. We offer various vinyl flooring options for different tastes, lifestyles, and budgets. Whether you prefer the classic look of wood-inspired vinyl, the durability of Vinyl Composition Tile (VCT), or the modern appeal of luxury vinyl planks, we have the expertise and product selection to meet your needs. Our clients benefit from high-quality materials, expert craftsmanship, and a commitment to long-term satisfaction. Discover why many in Cypress consider us the #1 choice for vinyl flooring installation. Let us create the perfect foundation for your home or business with floors that combine beauty, resilience, and value.</p>
                </div>
            </div>

        </div>
    );
};

export default Installation;