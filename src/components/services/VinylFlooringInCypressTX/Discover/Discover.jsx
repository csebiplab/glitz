import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Discover = () => {
    return (
        <div className="full__section_r_p pl-3 md:pl-0 padding__top">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] 5xl:gap-[20px]">
                <div className='md:col-span-1'>
                    <Image src="/assets/glitz/vinylFlooringInCypress/discover.png" alt='discover' width={836} height={613} className="w-full h-[560px] 5xl:h-[600px]"/>
                </div>
                <div className='md:col-span-1'>
                    <div className="flex items-center justify-center md:justify-start">
                    <NewHeadingIcon text={headingIconText.discover__headingIconText}/>
                    </div>
                    <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Discover Your New Floor in <br className="block md:hidden"/> Our Vinyl Flooring Store</h2>
                    <p className='text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Step into Glitz Floors & More, your ultimate vinyl flooring destination in Cypress! Our store features an extensive selection of high-quality vinyl flooring options, perfect for any home or business. From luxurious vinyl planks that mimic the beauty of hardwood to stylish tiles that replicate the elegance of stone, we have the ideal flooring to match your aesthetic and functional needs. Our knowledgeable team is dedicated to helping you find the perfect fit, offering personalized service and expert advice to guide you through our diverse range of styles, colors, and textures.</p>
                    <p className="text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">Whether you're looking for durable solutions for high-traffic areas or a chic update for your living space, our vinyl flooring offers the perfect combination of durability and design. Visit us today to explore our vast selection, receive tailored recommendations, and take the first step toward transforming your space with beautiful, long-lasting vinyl flooring! Let us help you bring beauty and functionality to your space with vinyl flooring. Trust Glitz Floors & More for seamless installations, a personalized experience, and floors that truly stand out.</p>
                </div>
            </div>

        </div>
    );
};

export default Discover;