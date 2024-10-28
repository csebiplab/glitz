import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const StartYourProject = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-[35px]'>
                    <div className='xl:col-span-1'>
                        <Image src="/assets/glitz/images/start_your_project.png" alt='start your project' width={722} height={449}/>
                    </div>
                    <div className='xl:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.startYourProject__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pb-[5px] text-center xl:text-left'>Start Your Project With Glitz Floors & More</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 text-center xl:text-left'>Ready to transform your space? Start your project with Glitz Floors & More today. Our team of experts is here to guide you through every step, from selecting the perfect flooring to flawless installation. Our friendly and knowledgeable staff will assist you in choosing the right materials and provide a clear, detailed plan tailored to your needs. From the moment you reach out to us, you'll receive dedicated support and expert guidance. Don't wait to bring your flooring vision to life—get in touch with Glitz Floors & More today. Let us help you create a space that reflects your style and stands the test of time. Contact us now to schedule a consultation and take the first step toward beautiful, durable flooring that enhances your home or business. Experience the difference at Glitz Floors & More, where your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartYourProject;