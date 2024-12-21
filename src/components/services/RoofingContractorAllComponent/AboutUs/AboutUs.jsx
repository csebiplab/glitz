
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/aboutUs.png" alt='about us' width={774} height={573} className="w-full"/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">About Our Cypress Roofing Company</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, our Cypress roofing company is dedicated to providing top-quality roofing solutions that protect your home and enhance its curb appeal. With years of experience serving Cypress, TX, we specialize in roof installations, repairs, and replacements tailored to each client's unique needs. Our skilled team uses only premium materials and the latest techniques to ensure durability, safety, and satisfaction.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>We take pride in delivering personalized service and clear communication throughout your roofing project. Our commitment to excellence means we prioritize quality and affordability, ensuring each roofing solution fits your budget without compromising durability or style. At Glitz Floors & More, customer satisfaction is our top priority, and we're always available to answer questions, provide transparent quotes, and offer expert guidance on selecting the best materials and options for your home. Whether you need minor repairs or a complete roof overhaul, trust Glitz Floors & More for reliable, professional service that stands the test of time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;