
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const PremiumProducts = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-1 md:order-2 md:col-span-2'>
                        <Image src="/assets/glitz/painting-contractors/premium-products.png" alt='premium product image' width={551} height={779} className="w-full"/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-3'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.aboutUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Premium Products for Superior Performance</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we believe exceptional results start with top-quality products. That's why we use only premium paints, finishes, and materials that offer superior performance and longevity. Each product we select is carefully chosen for its durability, vibrant color retention, and environmental safety, ensuring a beautiful, lasting finish. We understand that the right products can make all the difference in achieving a flawless finish. Our selection includes a wide range of eco-friendly paints that are low in volatile organic compounds (VOCs), ensuring a healthier environment for your home or business without compromising quality. Whether you prefer matte, satin, or high-gloss finishes, we have options that suit every aesthetic and application. In addition to paints, we also utilize high-grade primers and sealants to enhance adhesion and durability, creating a strong foundation for our work. Our commitment to using only the best materials means you can expect vibrant colors that resist fading and wear, providing a stunning appearance that lasts for years. At Glitz Floors & More, we don’t just focus on the surface; we prioritize the overall performance of our projects. Your satisfaction is our top priority, and we stand behind our work with guarantees that reflect our dedication to excellence. Experience the difference of working with a painting contractor that values quality as much as you do.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PremiumProducts;