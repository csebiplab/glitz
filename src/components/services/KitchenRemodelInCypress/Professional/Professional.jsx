import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Professional = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/professional.png" alt='professional image' width={606} height={733} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.professional__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Professional Kitchen Remodeling Contractor</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, our professional kitchen remodeling contractors are committed to transforming your kitchen into a stunning and functional space that suits your lifestyle. With years of experience and a keen eye for design, we offer a comprehensive range of services tailored to meet your specific needs. We believe in a collaborative approach, working closely with you to create a design that reflects your style while maximizing the efficiency of the space. Whether you're looking for a modern update or a classic renovation, our contractors have the expertise to bring your ideas to life.
                            We handle every aspect of the remodeling process, from layout planning and material selection to installation and finishing touches. Our commitment to quality is evident in our choice of durable materials and meticulous craftsmanship. We use advanced tools and techniques to ensure precision in every detail, resulting in a polished and professional finish. Our professional kitchen remodeling contractors respect your time and home, working efficiently to minimize disruption to your daily routine.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Professional;