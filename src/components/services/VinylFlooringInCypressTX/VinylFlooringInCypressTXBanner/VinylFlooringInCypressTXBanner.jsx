import React from "react";
import "./VinylFlooringInCypressTXBanner.css";
import Link from "next/link";
import Image from "next/image";


const VinylFlooringInCypressTXBanner = () => {
  return (
    <div>
      {/* large device  */}
      <div className="hidden md:block">
        <div className="banner__bg container py-[60px] lg:py-[70px] xl:py-[80px] 2xl:py-[95px] 3xl:py-[110px] 4xl:py-[125px] 5xl:py-[137px]">
          <div className="h-full flex flex-col items-start justify-center">
            <h1 className={`font-family-secondary text-[30px] md:text-[33px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] 3xl:text-[44px] 4xl:text-[47px] 5xl:text-[50px] font-extrabold italic text-white leading-normal`}>
            Vinyl Flooring <br />
            in Cypress, TX
            </h1>
            <p className="text-lg font-normal text-white leading-[35px]">
            Experience top-notch vinyl flooring in Cypress, TX, with Glitz <br/> Floors & More—your destination for elegance and durability!
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
      <div className="small__banner__bg container py-[55px] ">
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

export default VinylFlooringInCypressTXBanner;
