import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const WorkWithUs = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className='order-2 md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/workWithUs.png" alt='work with us image' width={607} height={813} className="w-full"/>
                    </div>
                    <div className='order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.workWithUs__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>Work with the Best Kitchen Remodel Contractor</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>Choosing the right contractor for your kitchen remodel is crucial to ensuring a successful transformation. At Glitz Floors & More, we pride ourselves on being the best kitchen remodeling contractor in the area, dedicated to delivering exceptional results that exceed your expectations. We understand that each kitchen is unique, and we work closely with you to create a design that reflects your style and meets your needs. From the initial consultation to the final touches, we are committed to providing personalized service and attention to detail.
                            We use only high-quality materials and the latest techniques to ensure your remodel is beautiful, durable, and functional. Our comprehensive approach means we handle every aspect of the project, including design, installation, plumbing, and electrical work, ensuring a seamless experience. Timeliness and transparency are our priorities. We keep you informed throughout the process, respecting your time and home. With a strong focus on customer satisfaction, we go above and beyond to make sure you're thrilled with the final result. When you work with Glitz Floors & More, you're choosing a partner dedicated to making your kitchen dreams a reality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkWithUs;