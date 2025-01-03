
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Elevating = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/elevating.png" alt='elevating' width={788} height={733}/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.elevatingDesign__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Elevating 
                            Bathroom Remodel Through Design</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, elevating a bathroom remodel begins with thoughtful design. Our expert team works closely with you to understand your vision, ensuring that every remodel element reflects your style and enhances functionality. We prioritize innovative design solutions that maximize space and create a seamless flow. From selecting luxurious materials and fixtures to optimizing layouts, our goal is to transform your bathroom into a stunning retreat. We stay up-to-date with the latest trends, incorporating modern aesthetics while maintaining timeless elegance.
                            Attention to detail is key. We consider lighting, color palettes, and textures to create an inviting atmosphere. Our collaborative approach ensures you're involved in every step, from initial concepts to final touches. Our team considers storage solutions, accessibility, and energy efficiency, creating a space that is not only beautiful but also functional and sustainable. At Glitz Floors & More, we understand that a well-designed bathroom can significantly enhance your home's value and your daily life. Let us elevate your bathroom remodel through exceptional design and expert execution. Reach out today for your free consultation, and let's start crafting the bathroom you've always dreamed of!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Elevating;