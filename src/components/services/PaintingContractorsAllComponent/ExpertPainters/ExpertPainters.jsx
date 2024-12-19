
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const ExpertPainters = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-2 md:col-span-1'>
                        <Image src="/assets/glitz/painting-contractors/expert-painter.png" alt='expert painter' width={606} height={732} className="w-full"/>
                    </div>
                    <div className='order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.expertPainters__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Color Your World With Our Expert Painters</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Transform your space with vibrant colors and flawless finishes from our expert painters. We're dedicated to bringing your vision to life with meticulous craftsmanship, high-quality materials, and a keen eye for detail. Whether refreshing a single room or giving your entire property a new look, our team works with precision and care to ensure beautiful, lasting results. With personalized color consultations and a commitment to excellence, we make every project a seamless experience.
                            From modern hues to timeless classics, our painters help you choose the perfect colors that reflect your style and enhance every room. Our commitment to quality means we prepare each surface with care, applying even coats that are smooth, durable, and designed to stand the test of time. We value your satisfaction and make the project stay on schedule with minimal disruption to your daily routine. With our skilled painters by your side, coloring your world has never been easier or more inspiring. Transform your surroundings and elevate your space with the exceptional service and artistry you deserve. Let us color your world with expertise and passion for a space you love</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertPainters;