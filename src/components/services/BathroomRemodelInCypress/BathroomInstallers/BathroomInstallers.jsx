import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const BathroomInstallers = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/BathroomInstallers.png" alt='BathroomInstallers' width={788} height={603}/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.bathroomInstallers__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>Start With Our Bathroom Installers</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>At Glitz Floors & More, our bathroom installers are committed to transforming your space with exceptional craftsmanship and personalized service. With years of experience, our skilled team ensures every detail is meticulously executed, from planning to installation. We prioritize your vision, using high-quality materials and innovative designs to create a bathroom that reflects your style and meets your needs.
                            Our team at Glitz Floors & More understands that a bathroom remodel is a significant investment in your home, and we're here to guide you every step of the way. Our installers are skilled and respectful of your space, maintaining a clean work environment throughout the project. Whether you're looking for a complete overhaul or just a few updates, we have the expertise to deliver outstanding results. Let's create a bathroom that combines style, comfort, and functionality. Contact Glitz Floors & More today to schedule your consultation and take the first step toward your dream bathroom! Let's get started on your dream renovation today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BathroomInstallers;