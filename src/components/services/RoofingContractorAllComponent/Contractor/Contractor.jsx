
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Contractor = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/roofing-contractor/contractor.png" alt='contractor' width={761} height={644} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.contractor__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">#1 Cypress Roofing Contractor</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>As the #1 Cypress roofing contractor, Glitz Floors & More is committed to delivering exceptional roofing services tailored to your needs. Our reputation for quality craftsmanship, reliable materials, and outstanding customer service sets us apart. Whether you're looking for a new roof installation, timely repairs, or a complete replacement, our experienced team is here to ensure your project is completed to the highest standards. We take a comprehensive approach to every project, starting with a thorough inspection to assess your roofing needs accurately. Our skilled professionals use advanced techniques and high-quality materials, ensuring that your roof looks great and stands the test of time.</p>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we believe in building long-lasting relationships with our clients. We work closely with you from the initial consultation to the final inspection, providing updates and guidance throughout the process. As the leading roofing contractor in Cypress, TX, we are proud to offer competitive pricing without sacrificing quality. Whether you need residential or commercial roofing solutions, trust Glitz Floors & More to deliver unparalleled service and exceptional results. Contact us today to schedule a consultation and discover why we are the #1 choice for roofing in Cypress!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contractor;