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
              width={928}
              height={782}
              src="/assets/kitchen_renovation/hero_bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
