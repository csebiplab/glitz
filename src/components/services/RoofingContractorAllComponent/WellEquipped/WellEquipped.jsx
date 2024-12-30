import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const WellEquipped = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/well_equipped.png" alt='well equipped' width={788} height={614} className="w-full h-[550px] 5xl:h-[600px]"/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.wellEquipped__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Well Equipped Roofing <br className="block md:hidden"/> Company, Cypress, TX</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Glitz Floors & More is ready to handle all your roofing needs with efficiency and expertise as a well-equipped roofing company in Cypress, TX. Our team is equipped with the latest tools, technology, and materials to ensure every project is completed to the highest standards. Our skilled professionals undergo continuous training to stay updated with the latest industry practices and safety standards, allowing us to tackle even the most challenging roofing projects confidently. We take pride in our attention to detail and commitment to quality, ensuring that your roof meets and exceeds your expectations.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we understand that a strong roof is essential for your home's protection and value. That's why we focus on delivering durable and aesthetically pleasing solutions that enhance your property's curb appeal. With our well-equipped team, you can trust that your roofing project will be completed on time and within budget. Contact us today to learn more about our services and experience the difference of working with a leading roofing company in Cypress, TX!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WellEquipped;