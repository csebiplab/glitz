import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./HowToVisualize.css";

const HowToVisualize = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="bg__color grid grid-cols-1 md:grid-cols-2 gap-[35px]">
          <div className="order-2 md:col-span-1 py-[46px]">
            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
              How to Visualize <br/> Your Room's Floor Plan Easily
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
              Choosing the perfect flooring for your home can be challenging, but with our innovative floor visualization tool, you can now see how different flooring options will look in your exact room before making a decision. Simply upload a photo of your space, and instantly preview various styles, colors, and materials. Whether you're considering hardwood, tile, or carpet, our tool helps you make confident decisions by providing a realistic view of your chosen floors in your home.
              </p>
              <div className="pt-[35px] flex items-center justify-center md:justify-start">
              <button className="btn_bg flex items-center gap-[17px] py-[14px] pl-[31px] pr-[9px] text-base font-bold text-white leading-[21px]">
                <Link className="text-white" href="tel:647-449-9512">
                  How it works
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
          <div className="order-1 md:col-span-1">
            <Image
              src="/assets/glitz/images/How.png"
              alt="how to visualize image"
              width={595}
              height={551}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToVisualize;
