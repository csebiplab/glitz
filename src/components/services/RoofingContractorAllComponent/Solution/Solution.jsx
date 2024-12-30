
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Solution = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/solution.png" alt='solution' width={788} height={525} className="w-full h-[480px] "/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.solution__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Get a Solution for all Your Roofing Needs</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Glitz Floors & More offers comprehensive roofing solutions to tackle every challenge you may face. From thorough inspections and swift leak repairs to complete roof replacements and preventative maintenance, our experienced team is dedicated to protecting your home. With a focus on quality craftsmanship and customer satisfaction, we provide reliable, long-lasting results. Whether you're dealing with a small repair or a full roof replacement, we have the expertise and materials to ensure your roof is safe and durable.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Our team works closely with you to understand your needs, offering personalized solutions that fit your budget and timeline. With Glitz Floors & More, you can expect transparency in pricing, a commitment to quality, and exceptional customer service every step of the way. Don't wait for issues to escalate—reach out today for a free consultation and let us help you safeguard your home with a roof you can trust!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;