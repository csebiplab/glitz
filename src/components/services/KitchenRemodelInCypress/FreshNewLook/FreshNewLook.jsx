import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FreshNewLook = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/freshNewLook.png" alt='fresh new look' width={788} height={823} className="w-full h-[680px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.freshNewLookWithUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Let Our Kitchen Remodel Contractors Give You a Fresh New Look</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Are you ready to transform your kitchen into a stylish and functional space? At Glitz Floors & More, our kitchen remodel contractors help you achieve a fresh new look that perfectly suits your lifestyle and tastes. We specialize in creating personalized designs that blend beauty and practicality. Whether you're looking for a modern update or a classic renovation, our skilled team will work closely to bring your vision to life. From selecting the right materials to optimizing your layout, we ensure every detail is thoughtfully considered.
                            Our commitment to quality craftsmanship means you can trust us to deliver exceptional results. We use high-quality materials and the latest techniques to ensure your kitchen looks stunning and stands the test of time. With our comprehensive services, we handle everything from cabinetry and countertops to lighting and flooring, making the remodeling process seamless and enjoyable. Communication is key, and we prioritize keeping you informed at every step. Our goal is to minimize disruptions while delivering your dream kitchen on time and within budget. Don't wait any longer to enjoy a kitchen that inspires creativity and gatherings. Let our expert kitchen remodel contractors at <Link className="text-secondary-800 hover:underline" href="https://www.glitzfloorsandmore.com/" target="_blank" rel="nofollow">Glitz Floors & More</Link> give you the fresh new look you've always wanted. Contact us today to schedule your consultation and start your transformation journey!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshNewLook;