import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Trust = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/trust.png" alt='trust iamge' width={788} height={893}/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.trust__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>Expert Kitchen Remodel Contractors You Can Trust</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>At Glitz Floors & More, our expert kitchen remodel contractors are dedicated to delivering exceptional results you can trust. With years of experience in the industry, our team combines skill, creativity, and attention to detail to transform your kitchen into a beautiful and functional space. We understand that remodeling your kitchen is a significant investment, which is why we prioritize open communication and transparency throughout the entire process. From the initial consultation to the final walkthrough, our contractors work closely with you to understand your vision, needs, and budget. Our expertise spans all aspects of kitchen remodeling, including design, cabinetry, countertops, flooring, and lighting. We are committed to using high-quality materials and innovative techniques to ensure that your kitchen looks stunning and stands the test of time. Our team is equipped with the latest tools and technology, enabling us to execute precise installations and renovations with efficiency and care. We pride ourselves on our professionalism, reliability, and dedication to customer satisfaction, ensuring that your experience is as smooth and enjoyable as possible. When you choose Glitz Floors & More, you can trust that your kitchen remodel is in capable hands. Let us help you create the kitchen of your dreams, where style and functionality come together seamlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trust;