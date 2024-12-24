import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const StartYourProject = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[35px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/images/start_your_project.png" alt='start your project' width={722} height={449}/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center md:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.startYourProject__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Start Your Project With Glitz Floors & More</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Ready to transform your space? Start your project with Glitz Floors & More today. Our team of experts is here to guide you through every step, from selecting the perfect flooring to flawless installation. Our friendly and knowledgeable staff will assist you in choosing the right materials and provide a clear, detailed plan tailored to your needs. From the moment you reach out to us, you'll receive dedicated support and expert guidance. Don't wait to bring your flooring vision to life—get in touch with Glitz Floors & More today. Let us help you create a space that reflects your style and stands the test of time. Contact us now to schedule a consultation and take the first step toward beautiful, durable flooring that enhances your home or business. Experience the difference at Glitz Floors & More, where your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartYourProject;