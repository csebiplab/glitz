import Image from 'next/image';
import React from 'react';
import "./Flooring.css";

const Flooring = () => {
    return (
        <div className='pt-[40px] md:pt-[42px] lg:pt-[45px] xl:pt-[48px] 2xl:pt-[52px] 3xl:pt-[56px] 4xl:pt-[60px] 5xl:pt-[64px]'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[60px] lg:gap-[70px] xl:gap-[80px] 2xl:gap-[90px] 3xl:gap-[100px] 4xl:gap-[110px] 5xl:gap-[120px] py-[10px] 5xl:py-[16px] pl-[10px] 5xl:pl-[16px] pr-[10px] lg:pr-[74px] xl:pr-[79px] 2xl:pr-[84px] 3xl:pr-[89px] 4xl:pr-[94px] 5xl:pr-[99px]'>
                    <div className='md:col-span-1'>
                         <Image src="/assets/glitz/homePage/FlooringServices.png" alt='flooring services' width={925} height={861}/>
                    </div>
                    <div className='md:col-span-1 flex flex-col justify-center'>
                         <h2 className='text-[29px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[33px] 3xl:text-[34px] 4xl:text-[35px] 5xl:text-[36px] font-extrabold text-black text-center'>Flooring & Remodeling Services In <br className="hidden md:block"/>
                         Cypress, TX</h2>
                         <p className='text-lg 5xl:text-[20px] font-light text-black py-[18px] 5xl:py-[38px]'>Does your home need some unique renovations to fully reflect your style and
                        wishes? Could a fresh splash of color add some warmth to your space? When you
                        want to complete some personalized remodeling projects to breathe new life and
                        excitement into your home, your only call needs to be to Glitz Floors & More. We
                        are your local remodeling experts with the skills and ability to transform your home
                        into the personal oasis of which you've always dreamed. Whether you're looking for
                        new flooring, professional interior painting, or specialized interior remodeling, we
                        have you covered.</p>
                    <ul>
                        <li className='text-[24px] 5xl:text-[30px] font-bold text-black text-center pb-[18px]'>What We Offer</li>
                        <li className='text-[20px] 5xl:text-[24px] font-light text-black text-center'>Flooring Installations</li>
                        <li className='text-[20px] 5xl:text-[24px] font-light text-black text-center py-[12px]'>Kitchen Remodeling</li>
                        <li className='text-[20px] 5xl:text-[24px] font-light text-black text-center'>Bathroom Remodeling</li>
                        <li className='text-[20px] 5xl:text-[24px] font-light text-black text-center py-[12px]'>Interior Painting</li>
                        <li className='text-[20px] 5xl:text-[24px] font-light text-black text-center'>Interior Remodeling</li>
                    </ul>

                    </div>
                </div>
            </div>
    );
};

export default Flooring;