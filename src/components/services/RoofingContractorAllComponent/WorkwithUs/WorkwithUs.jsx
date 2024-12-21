import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const WorkwithUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/work_with_us.png" alt='work with us' width={607} height={763} className="w-full"/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.workWithUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Start With Our Roof Installers</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Start with our roof installers at Glitz Floors & More, where quality and precision lead every project. Our dedicated team ensures your roofing installation is completed, using top-quality materials and proven techniques for long-lasting results. Whether you're building a new or replacing an old roof, we're committed to durability, safety, and customer satisfaction every step of the way. With Glitz Floors & More, you'll experience seamless roofing installations designed to enhance and protect your property.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Our skilled roof installers prioritize every detail, from the initial assessment to the final inspection, ensuring each roof we install meets the highest standards in the industry. We understand that a roof is more than just a structure; it's a vital element of your home's integrity and aesthetic. Our team at Glitz Floors & More offers personalized recommendations on materials and design, guiding you to the best choices for both function and style. Plus, our commitment to transparency means you'll have a clear understanding of project timelines, costs, and maintenance options from day one. Choose Glitz Floors & More, where reliable roofing solutions and exceptional service go hand in hand. Trust Glitz Floors & More for a roofing solution tailored to your needs and delivered on time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkwithUs;