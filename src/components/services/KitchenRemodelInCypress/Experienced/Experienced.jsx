import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Experienced = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/experienced.png" alt='experienced' width={788} height={893} className='h-[468px] md:h-[893px] w-[788px]'/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.experiencedAndWellEquipped__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Experienced and Well-Equipped Kitchen Remodelers</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, our kitchen remodelers are dedicated to transforming your kitchen into a stunning and functional space. With extensive experience and a comprehensive skill set, our team is equipped to handle all aspects of your remodel, ensuring a seamless process from start to finish. Our remodelers bring years of industry knowledge, specializing in everything from design and layout to installation and finishing touches. We pride ourselves on delivering high-quality workmanship that enhances your kitchen's beauty and functionality. Understanding that every kitchen is unique, we collaborate closely with you to create personalized designs that reflect your style and meet your needs. Whether you're looking for a modern makeover or a classic update, we have the expertise to bring your vision to life. We believe in using only the best materials to ensure durability and long-lasting appeal. From premium cabinetry to stylish countertops and fixtures, our selections enhance aesthetics and functionality. Equipped with the latest tools and technology, our remodelers execute precise installations and renovations, resulting in a polished finish that you can be proud of. Respecting your time is important to us, which is why we strive to complete projects on schedule. Our experienced team works efficiently, minimizing disruptions to your daily routine while maintaining a focus on quality. Your satisfaction is our top priority, and we are committed to open communication and responsiveness throughout the remodeling process, ensuring that your experience is as smooth and enjoyable as possible.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experienced;