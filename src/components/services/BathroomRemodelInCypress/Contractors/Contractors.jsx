
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Contractors = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/contractor.png" alt='contractor' width={788} height={533}/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.contractors__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>Cypress
                            Bathroom Remodeling Contractors</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>Our Cypress bathroom remodeling contractors are dedicated to delivering exceptional results on every project. We start with a thorough consultation to understand your preferences and requirements, ensuring that the final design reflects your unique taste.
                            We pride ourselves on our attention to detail, using only the finest materials and innovative techniques to ensure a durable and stylish finish. Whether you're looking to update fixtures, expand your space, or create a complete makeover, we have the expertise to handle projects of any size. At Glitz Floors & More, we also prioritize clear communication and transparency throughout the remodeling process. Our team will keep you informed at every stage, from planning and design to construction and finishing touches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contractors;