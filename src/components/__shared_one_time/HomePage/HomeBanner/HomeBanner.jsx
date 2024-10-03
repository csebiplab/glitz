<<<<<<< HEAD
"use client";
import Image from "next/image";
import "./HomeBanner.css";

const HomeBanner = () => {
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[38px] md:text-[40px] lg:text-[42px] xl:text-[44px] 2xl:text-[46px] 3xl:text-[48px] 4xl:text-[49px] 5xl:text-[50px] font-bold text-left text-secondary ">
              Remodeling & <br/>
              Flooring Installation <br/>
              in Cypress, TX
              </h1>
              <p className="leading-9 text-lg font-normal text-black pt-[5px] pb-[35px]">
              Glitz Floors & More provides professional <b>remodeling and flooring</b> installation in Cypress, TX, delivering exceptional results for every project.
              </p>
              <a href="tel:(281) 758-5450">
              <div className="">
              <button className="text-lg font-normal text-primary btn_bg p-[17px]">Get Free Quote</button>
              </div>
              </a>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
            <Image
              width={944}
              height={625}
              src="/assets/glitz/images/hero_bg1.png"
              alt="hero small image"
              className="hero-main-image mb-0 w-[944px] xl:h-[500px] 5xl:h-[625px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
=======
import React from 'react';
import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <div>
            <div className='home_banner_bg flex flex-col items-center justify-center px-[6px] sm:px-[16px] md:px-0'>
                <h1 className='text-[32px] md:text-[34px] lg:text-[37px] xl:text-[40px] 2xl:text-[42px] 3xl:text-[44px] 4xl:text-[46px] 5xl:text-[48px] font-extrabold text-center text-black'>Refresh Your Home <br className="block md:hidden"/> This Summer</h1>
                <p className='text-lg 5xl:text-[20px] font-light text-balck text-center pt-[9px] md:pt-[16px] pb-[9px]'>Flooring & Remodeling Services in Cypress, TX</p>
                <p className='hidden md:block text-[24px] xl:text-[26px] 5xl:text-[30px] font-extrabold text-black text-center pb-[6px] md:pb-[10px]'>(346) 445-6343</p>
                <button className='btn__bg_banner text-lg font-light text-white text-center px-[17px] py-[19px]'>Contact Us</button>
            </div>
        </div>
    );
};

export default HomeBanner;
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
