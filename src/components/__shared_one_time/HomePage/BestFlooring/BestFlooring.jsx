import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';
import "./BestFlooring.css";

const BestFlooring = () => {
    return (
        <div className='bg__color'>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[35px]'>
                    <div className='xl:col-span-1'>
                        <Image src="/assets/glitz/images/about_us.png" alt='about us' width={901} height={780}/>
                    </div>
                    <div className='xl:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.bestFlooring__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center xl:text-left'>Best Flooring in Cypress</h2>
                            <p className='text-lg font-normal text-secondary-50 text-center xl:text-left'>We offer an extensive range of high-quality flooring options to suit any style and budget, including elegant hardwood, durable laminate, versatile tile, and luxurious vinyl. Our team is dedicated to helping you find the perfect flooring solution that complements your home or business while meeting your practical needs. Experience the best in flooring with Glitz Floors & More—where quality, style, and customer satisfaction come together seamlessly. At Glitz Floors & More, we understand that choosing the right flooring is crucial for both functionality and aesthetics. That's why we offer personalized consultations to guide you through our extensive selection, ensuring you find the perfect match for your space. Our expert installers bring years of experience to each project, guaranteeing precise installation and a flawless finish. Whether you're enhancing the elegance of your home or upgrading a commercial space, our commitment to quality and attention to detail set us apart.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestFlooring;