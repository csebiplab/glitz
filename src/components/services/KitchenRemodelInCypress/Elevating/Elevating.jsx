import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Elevating = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/elevating.png" alt='elevating' width={781} height={773} className='w-full h-[620px] 5xl:h-[650px]'/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.elevating__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Elevating Kitchen 
                            Renovations Through Design</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>Elevating kitchen renovations through design is at the core of what we do at Glitz Floors & More. Our approach goes beyond simply updating the space; we focus on creating a kitchen that seamlessly blends functionality with aesthetics. We understand that the kitchen is often the heart of the home, where family and friends gather, so our design process prioritizes both style and practicality. Our talented designers work closely with you to understand your vision, needs, and lifestyle, ensuring that every detail reflects your taste while maximizing efficiency.
                            From selecting the perfect layout to choosing materials, colors, and finishes, we are committed to elevating every aspect of your kitchen renovation. Whether you desire a modern, sleek look or a warm, traditional feel, our team leverages the latest trends and timeless design principles to create a space that you'll love for years to come. Our expertise in space planning ensures that every square inch is utilized effectively, enhancing storage solutions and workflow. We also consider lighting, cabinetry, and appliance placement to create an inviting and functional environment. At Glitz Floors & More, we believe that exceptional design transforms a kitchen into more than just a cooking space; it becomes a true reflection of your lifestyle and personality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elevating;