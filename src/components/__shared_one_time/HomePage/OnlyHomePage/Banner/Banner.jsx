import React from "react";
import "./Banner.css";
import Link from "next/link";
import Image from "next/image";
// import { robotoSerif } from './../../../../../app/(pages)/layout';


const Banner = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden md:block">
        <div className="banner__bg container py-[62px] md:py-[75px] lg:py-[88px] xl:py-[101px] 2xl:py-[114px] 3xl:py-[127px] 4xl:py-[140px] 5xl:py-[158px]">
          <div className=" h-full flex flex-col items-start justify-center">
            <h1 className={`font-family-secondary text-[30px] md:text-[33px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] 3xl:text-[44px] 4xl:text-[47px] 5xl:text-[50px] font-extrabold italic text-white leading-normal`}>
              Refresh Your Home <br />
              This Summer
            </h1>
            <p className="text-lg font-normal text-white leading-[35px]">
              Flooring & Remodeling Services in Cypress, TX
            </p>
            <div className="mt-[35px]">
              <button className="btn_bg flex items-center gap-[17px] py-[14px] pl-[31px] pr-[9px] text-base font-bold text-white leading-[21px]">
                <Link className="text-white" href="tel:647-449-9512">
                  Get Consultant
                </Link>
                <Image
                  className="p-2 rounded-full bg-white w-[24px] h-[24px]"
                  src="/assets/glitz/newHomePage/icons/banner_btn_arrow.png"
                  alt="arrow icon"
                  width={10}
                  height={10}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden">
      <div className="small__banner__bg container py-[62px] ">
          <div className=" h-full flex flex-col items-start justify-center">
            <h1 className="font-family-secondary text-[30px] font-extrabold italic text-white leading-normal">
              Refresh Your Home <br />
              This Summer
            </h1>
            <p className="font-family-primary text-lg font-normal text-white leading-[35px]">
              Flooring & Remodeling Services in Cypress, TX
            </p>
            <div className="mt-[35px]">
              <button className="btn_bg flex items-center gap-[17px] py-[14px] pl-[31px] pr-[9px] text-base font-bold text-white leading-[21px]">
                <Link className="text-white" href="tel:647-449-9512">
                  Get Consultant
                </Link>
                <Image
                  className="p-2 rounded-full bg-white w-[24px] h-[24px]"
                  src="/assets/glitz/newHomePage/icons/banner_btn_arrow.png"
                  alt="arrow icon"
                  width={10}
                  height={10}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
