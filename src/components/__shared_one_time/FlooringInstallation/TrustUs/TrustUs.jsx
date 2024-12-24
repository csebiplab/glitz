import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const TrustUs = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[35px]'>
                    <div className='order-2 md:col-span-1'>
                        <Image src="/assets/glitz/images/trust_us.png" alt='trust us' width={789} height={551}/>
                    </div>
                    <div className='order-1 md:col-span-1'>
                        <div className='flex justify-center md:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.trustUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Flooring Installation <br className="block md:hidden"/>
                            Service You Can Trust</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we offer a flooring installation service you can trust. Our commitment to quality and customer satisfaction sets us apart as the premier choice for your flooring needs. We use top-quality materials and advanced techniques to ensure your floors are not only beautiful but also durable and long-lasting. Our attention to detail, timely execution, and dedication to exceeding your expectations make us the reliable choice for flooring installation. We take pride in our craftsmanship and stand by our work, offering support and addressing any concerns promptly. With Glitz Floors & More, you can have confidence in a job well done, knowing that we are committed to delivering exceptional results and a positive experience every step of the way. Trust us to transform your space with beautiful, expertly installed flooring that enhances both style and value.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustUs;