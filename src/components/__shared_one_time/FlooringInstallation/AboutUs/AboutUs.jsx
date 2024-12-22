import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[11px]'>
                    <div className='xl:col-span-1'>
                        <Image src="/assets/glitz/flooring-installation/aboutUs.png" alt='about us' width={812} height={488}/>
                    </div>
                    <div className='xl:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>About Our Cypress Flooring Store</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Welcome to Glitz Floors & More, your premier destination for top-quality flooring and remodeling in Cypress, TX. With a passion for excellence and a commitment to customer satisfaction, we offer an extensive selection of premium flooring options, including hardwood, laminate, tile, and luxury vinyl. Whether you're looking to transform a single room or your entire home, our expert team provides professional installation and remodeling services tailored to your unique style and needs. At Glitz Floors & More, we believe that your home should reflect your personality, and we're here to help you achieve the perfect look. Visit our Cypress flooring store today to explore our vast selection and discover how we can bring your vision to life with our exceptional flooring and remodeling solutions. Experience the difference with Glitz Floors & More—where quality meets style, and your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;