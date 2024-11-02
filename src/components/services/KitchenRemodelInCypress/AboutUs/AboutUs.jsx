import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/aboutUs.png" alt='about us' width={726} height={597} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>About Our Kitchen Remodeling Contractors</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>At Glitz Floors & More, our kitchen remodeling contractors are dedicated to transforming your kitchen into the heart of your home. With a team of experienced professionals, we bring creativity, expertise, and a keen eye for detail to every project.
                            We understand that the kitchen is not just a place for cooking; it's a gathering space for family and friends. That's why we work closely with you to design a kitchen that meets your needs and reflects your style. Our design options are tailored to fit your vision, from modern and sleek to warm and inviting. Our contractors are well-versed in the latest trends and technologies, ensuring that your remodel incorporates functional layouts, high-quality materials, and innovative solutions. We handle every aspect of the project, from initial design and planning to installation and finishing touches, all while maintaining clear communication throughout the process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;