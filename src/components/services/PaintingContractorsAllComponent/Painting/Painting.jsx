
import NewHeadingCenterIcon from '@/components/__ui/NewHeadingCenterIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from 'next/image';
import React from 'react';

const Painting = () => {
    return (
        <div>
            <div className='full__section_r_p pl-3 md:pl-0 padding__top'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]'>
                    <div className=' md:col-span-1'>
                        <Image src="/assets/glitz/painting-contractors/parinting.png" alt='parinting image' width={770} height={691} className="w-full"/>
                    </div>
                    <div className='md:col-span-1'>
                        <div className='flex justify-center xl:justify-start items-center'>
                            <NewHeadingCenterIcon text={headingIconText.painting__headingIconText}/>
                        </div>
                        <div>
                            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">Mind-Blowing Painting Contractors, Built to Last</h2>
                            <p className='text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]'>At Glitz Floors & More, we specialize in transforming spaces with our exceptional painting services. Our team of skilled contractors is dedicated to delivering stunning results that reflect your unique style and stand the test of time. Whether you're revamping your home or enhancing your business, we bring artistry and precision to every project. Our painting services go beyond mere color; we create captivating environments that elevate your space. From bold accent walls to intricate finishes, we use high-quality paints and techniques that ensure durability and vibrancy. We listen closely to your vision, providing personalized solutions that make your ideas come to life.
                            In addition to our painting expertise, we offer a wide range of flooring options. Whether you prefer the elegance of hardwood, the durability of laminate, or the warmth of carpet, our flooring specialists are here to guide you in selecting the perfect materials for your needs. We prioritize quality craftsmanship, ensuring that your floors not only look stunning but are built to withstand everyday wear. What sets Glitz Floors & More apart is our commitment to customer satisfaction. We believe in creating beautiful spaces that are also safe for the environment. Let Glitz Floors & More transform your home or business into a masterpiece you'll love for years.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Painting;