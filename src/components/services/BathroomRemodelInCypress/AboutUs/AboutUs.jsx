
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/aboutUs.png" alt='about us' width={606} height={613} className="w-full h-[510px] 5xl:h-[570px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">About Our <br/>
                            Bathroom Renovation <br className="block md:hidden"/> Company</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>With years of experience in the industry, Glitz Floors & More is committed to using high-quality materials and the latest techniques to ensure lasting results. We offer various services, including custom cabinetry, luxurious tile work, modern fixtures, and efficient layouts that maximize space.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Our collaborative approach means we work closely with you throughout the renovation process, listening to your ideas and providing expert guidance. We understand that a bathroom remodel is a significant investment, and we strive to deliver exceptional value while maintaining clear communication and timelines. Whether you desire a spa-like sanctuary or a sleek, contemporary look, our skilled team is ready to bring your dream bathroom to life. Trust Glitz Floors & More for a seamless renovation experience that enhances your home's beauty and functionality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;