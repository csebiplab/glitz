import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const YouCanTrust = () => {
    return (
        <div className="full__section_l_p pr-3 md:pr-0 padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='order-1 md:order-2 md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/youCanTurst.png" alt='you can trust' width={739} height={575} className="w-full h-[520px]"/>
                </div>
                <div className='order-2 md:order-1 md:col-span-1'>
                    <div className="flex items-center justify-center md:justify-start">
                    <NewHeadingIcon text={headingIconText.youCanTrust__headingIconText}/>
                    </div>
                    <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10] text-center md:text-left">Vinyl Flooring Services You <br className="block md:hidden"/> Can Trust</h2>
                    <p className='text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we specialize in providing high-quality vinyl flooring services you can trust. Our team is dedicated to transforming your space with durable, stylish flooring solutions tailored to your needs. We take pride in our extensive selection of vinyl flooring styles, including luxury vinyl planks and tiles that mimic the look of natural materials without the upkeep. Our products are designed to withstand heavy foot traffic, making them ideal for busy households and commercial settings.</p>
                    <p className="text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">At Glitz Floors & More, we understand that flooring is an investment, so we prioritize quality and affordability. We use sustainable materials and techniques that minimize environmental impact while delivering stunning results. Trust Glitz Floors & More for your vinyl flooring needs, and let us help you create a space that reflects your style and stands the test of time. Contact us today for a free consultation and discover the difference quality flooring can make! Choose Glitz Floors & More for your vinyl flooring needs and enjoy a beautiful, long-lasting finish that enhances your environment.</p>
                </div>
            </div>

        </div>
    );
};

export default YouCanTrust;