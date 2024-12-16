
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Experienced = () => {
    return (
        <div>
            <div className='container padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/experienced.png" alt='experienced' width={726} height={597} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.experienced__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Experienced Bathroom <br className="block md:hidden"/> Remodel Contractor</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>As an experienced bathroom remodeling contractor, Glitz Floors & More is your trusted partner for transforming your space. Our skilled team brings years of expertise to every project, ensuring top-notch craftsmanship and attention to detail. From initial design to final touches, we guide you through the entire process, using high-quality materials and innovative techniques. At Glitz Floors & More, we understand that a bathroom remodel is a significant investment. That's why we focus on delivering exceptional value and quality with every project. Our team stays updated on the latest trends and technologies, ensuring your remodel meets and exceeds your expectations. No matter the size or scope of your project, we're equipped to handle it all—from small updates to full-scale renovations. We pride ourselves on our open communication, keeping you informed at every step, and addressing any questions or concerns.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experienced;