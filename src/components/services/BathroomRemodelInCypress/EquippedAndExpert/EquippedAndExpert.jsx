
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const EquippedAndExpert = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/bathroomRemodel/EquippedAndExpert.png" alt='EquippedAndExpert' width={788} height={733}/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingIcon text={headingIconText.equippedAdnExpert__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left'>Well Equipped & Expert Bathroom Remodeler</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we are a well-equipped and expert bathroom remodeler dedicated to transforming your space into a dream oasis. Our team combines years of experience with advanced tools and techniques to deliver high-quality renovations that reflect your style and needs. We handle every aspect of your project, from design to installation, ensuring a seamless process. Our expertise includes custom cabinetry, luxurious tile work, modern fixtures, and efficient layouts that maximize space and functionality. We prioritize customer satisfaction, providing personalized service and clear communication throughout the remodel.
                            Our commitment to quality and craftsmanship sets us apart as the go-to bathroom remodeler in Cypress, TX. We take the time to understand your vision and work closely with you to create a design that suits your lifestyle. Whether you're looking for a sleek, modern aesthetic or a cozy, traditional vibe, we tailor our approach to match your preferences. Our skilled team is trained in the latest techniques, allowing us to deliver efficient and precise renovations. We go above and beyond to ensure every detail is perfect, from the layout to the finishing touches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EquippedAndExpert;