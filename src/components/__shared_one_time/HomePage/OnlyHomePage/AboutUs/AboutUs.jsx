import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./AboutUs.css";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const AboutUs = () => {
  return (
    <div className="container padding__top">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px]">
        <div className="md:col-span-1">
          <div className="flex justify-start items-center">
            <NewHeadingIcon text={headingIconText.aboutUs__headingIconText} />
          </div>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-left leading-normal">
            Crafting Beautiful Spaces with Quality and Care
          </h2>
          <p className="text-lg leading-[36px] text-black font-light text-left">
            At Glitz Floor & More, we believe that every home deserves to shine.
            With years of experience in flooring installations and interior
            remodeling, we bring expertise, quality craftsmanship, and attention
            to detail to each project. Our team is dedicated to delivering
            exceptional service, whether we're transforming floors, updating
            kitchens, refreshing bathrooms, or adding new life to your
            interiors. We work closely with you to understand your vision, using
            high-quality materials and innovative designs to create spaces that
            are not only beautiful but built to last. Discover the difference
            that passion and professionalism make with Glitz Floor & More.
          </p>
          <div className="w-full border border-info-200 mt-[25px] mb-[10px]" />
          <div className="w-full md:flex justify-between md:gap-[10px] 3xl:gap-[20px]">
            <div className="w-full md:w-1/4">
              <p className="text-[55px] font-bold leading-[40px] text-secondary-800">
                15+
              </p>
              <p className="text-base text-black font-light leading-[36px]">
                Years on Market
              </p>
            </div>
            <div className="w-full md:w-3/4 ">
              <div className="flex items-center justify-between">
                <p className="text-[22px] 4xl:text-[25px] font-bold text-black leading-[33px]">
                  Working Completion
                </p>
                <p className="text-[22px] 4xl:text-[25px] font-normal text-black leading-[33px]">
                  90%
                </p>
              </div>
              <div className="flex items-center slider_bg2 mt-[14px] 3xl:mt-[19px]">
                <div className="slider_bg w-4/5 h-[18px]" />
                <div className=" w-1/5 h-[18px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <Image
            src="/assets/glitz/newHomePage/aboutUs.png"
            alt="about us"
            width={921}
            height={595}
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
