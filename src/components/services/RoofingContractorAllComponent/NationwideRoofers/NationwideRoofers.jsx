import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const NationwideRoofers = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/nationwide_roofers.png" alt='nationwideRoofers' width={777} height={483} className="w-full h-[445px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.nationwidRoofers__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Nationwide Roofers You Can Realy On</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we are your trusted nationwide roofing experts, dedicated to providing high-quality solutions for all your roofing needs. Whether it's inspections, repairs, or full roof replacements, our experienced team is committed to delivering exceptional service and craftsmanship. Our extensive network of skilled professionals ensures timely and reliable service tailored to your needs. Our roofers prioritize using top-quality materials and the latest techniques to guarantee durable and effective roofing solutions.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>With Glitz Floors & More, you'll enjoy a seamless experience from consultation to completion, with ongoing support to keep your roof in peak condition. Trust us to safeguard your home with a roof you can depend on for years. Reach out today to get started on your roofing project! Contact us today to experience the Glitz Floors & More difference!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NationwideRoofers;