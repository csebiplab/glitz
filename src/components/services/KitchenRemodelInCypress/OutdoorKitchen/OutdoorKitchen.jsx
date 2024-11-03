import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const OutdoorKitchen = () => {
    return (
        <div>
            <div className='full__section_l_p pr-3 md:pr-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 5xl:gap-[32px]'>
                    <div className='order-1 md:order-2 md:col-span-1'>
                        <Image src="/assets/glitz/kitchenRemodel/outdoorKitchen.png" alt='outdoor kitchen iamge' width={788} height={683}/>
                    </div>
                    <div className='order-2 md:order-1 md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <HeadingIcon text={headingIconText.outdoorKitchen__headingIconText}/>
                        </div>
                        <div>
                            <h2 className='font-family-secondary text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[37px] 4xl:text-[40px]  5xl:text-[42px] font-bold text-secondary leading-[50px] pb-[10px] text-center xl:text-left'>Outdoor Kitchen Remodel Cypress</h2>
                            <p className='font-family-secondary text-lg font-normal text-secondary-50 leading-[40px] text-center xl:text-left'>Transform your outdoor space into a culinary haven with our outdoor kitchen remodel services in Cypress at Glitz Floors & More. Our expert team specializes in designing and building custom outdoor kitchens that enhance your home's beauty and functionality. We start by collaborating with you to create a personalized design that fits your lifestyle and preferences. Whether you envision a simple grilling area or a fully equipped kitchen with a built-in grill, refrigerator, and ample prep space, we tailor every detail to meet your needs.
                            Using high-quality, weather-resistant materials, we ensure your outdoor kitchen is built to last. Our skilled contractors manage all aspects of the installation, including plumbing, electrical work, and appliance setup, guaranteeing a seamless and efficient process. To further enhance your outdoor cooking experience, we offer guidance on selecting top-of-the-line appliances and incorporating thoughtful features like seating areas, fire pits, and stylish lighting. This creates a welcoming environment perfect for entertaining friends and family. With a focus on quality craftsmanship and attention to detail, our outdoor kitchen remodels are designed to withstand the elements while providing a beautiful and functional space for years to come.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OutdoorKitchen;