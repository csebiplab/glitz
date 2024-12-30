import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ExcellentDesign = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/excellent_design.png" alt='excellent design' width={606} height={773} className="w-full h-[640px] 5xl:h-[720px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.excellentDesign__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Excellent Roof Design by Our Roofing Contractor</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we believe that an excellent roof design goes beyond functionality; it enhances the overall beauty and value of your home. As a premier roofing contractor in Cypress, TX, we specialize in creating stunning roof designs that reflect your unique style while providing maximum protection against the elements. Our team of skilled professionals collaborates closely with you to understand your vision and needs, offering a range of roofing materials and styles. Whether you prefer the timeless elegance of asphalt shingles, the durability of metal roofing, or the classic look of tile, we can craft a roof that complements your home's architecture and enhances its curb appeal.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>We prioritize aesthetics and performance, ensuring that every roof we design is visually appealing and built to withstand Texas weather conditions. Our attention to detail and commitment to quality craftsmanship means that you can trust us to deliver a roof that is both beautiful and durable. Choose Glitz Floors & More for your roofing project and experience the perfect blend of excellent design and superior functionality. Contact us today to schedule a consultation and start bringing your dream roof to life!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExcellentDesign;