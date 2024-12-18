
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/painting-contractors/aboutUs.png" alt='about us' width={829} height={699} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">About Our Cypress Painting Contractors</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, our Cypress painting contractors are dedicated to transforming homes and businesses with precision and style. With a commitment to quality and attention to detail, our team brings each space to life, using premium materials and techniques that ensure long-lasting, vibrant finishes. Whether a residential refresh or a commercial renovation, we tailor our services to meet your needs and deliver seamless, beautiful results. Our Cypress painting contractors take pride in delivering more than just a fresh coat of paint; we provide a full-service experience from start to finish. Beginning with an in-depth consultation, we help you select the perfect colors and finishes to suit your style and vision. Each project is carefully planned and executed with the utmost respect for your time and property, maintaining clean, organized workspaces and minimizing disruptions. At Glitz Floors & More, we use only high-quality, eco-friendly paints and materials to ensure your space looks stunning and stands up to the test of time. Our experienced painters are trained in the latest techniques, allowing us to achieve flawless finishes on every surface, whether interior walls, exterior siding, or detailed trim work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;