import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Revitalize = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/revitalize.png" alt='revitalize' width={788} height={823} className="w-full h-[570px] 5xl:h-[600px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.revitalize__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Ready to Revitalize Your Kitchen</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>We understand that a kitchen remodel is not just about aesthetics; it's about improving functionality and creating a space where you and your loved ones can gather. Our experienced designers will work closely with you to understand your lifestyle and preferences, ensuring every element of your new kitchen is tailored to your needs. From selecting the perfect cabinetry and countertops to incorporating innovative storage solutions and modern appliances, we pay attention to every detail. Our team is dedicated to providing exceptional customer service, keeping you informed throughout the process, and addressing any questions or concerns you may have. With a focus on quality craftsmanship and timely project completion, we strive to minimize disruptions to your daily routine.
                            At Glitz Floors & More, we're here to help you transform your kitchen into a vibrant and functional space that meets your needs and reflects your style. Whether you're dreaming of a modern update or a classic refresh, our expert team is ready to bring your vision to life. With our comprehensive design services, high-quality materials, and skilled craftsmanship, we ensure a seamless remodeling experience from start to finish. Let us help you create a kitchen that inspires culinary creativity and enhances your home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Revitalize;