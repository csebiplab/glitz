import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const YouCanTrust = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/painting-contractors/you-can-trust.png" alt='you can trust' width={777} height={603} className="w-full h-[510px] 5xl:h-[550px]"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.youCanTrust__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Professional Painters, You Can Trust</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Trust is essential when painting your home or buildings, and our professional painters deliver on every level. With years of experience, our team combines skill with a commitment to excellence, providing reliable, high-quality work you can count on. From thorough prep work to seamless finishes, we handle every detail to ensure a beautiful, durable result. We respect your space, maintain a clean work environment, and keep you informed every step of the way.
                            Our dedication to customer satisfaction sets us apart. We understand that each project is unique and tailor our services to meet your needs and preferences. Whether a residential refresh or a commercial makeover, we use premium paints and the latest techniques to bring your vision to life. Our painters are skilled, friendly, and respectful, ensuring open communication and careful attention to your requests. With our team, you can relax, knowing the job will be done right—from start to finish, with a level of quality that truly lasts. Trust our professional painters to make your space beautiful, one brushstroke at a time. Choosing our painters you can trust for a hassle-free experience and stunning transformation every time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YouCanTrust;