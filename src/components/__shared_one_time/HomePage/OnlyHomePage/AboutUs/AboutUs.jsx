import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="container padding__top">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[21px]">
        <div className="md:col-span-1">
          <div className="flex justify-center md:justify-start items-center">
            <HeadingIcon text={headingIconText.aboutUs__headingIconText} />
          </div>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
          Crafting Beautiful Spaces with Quality and Care
          </h2>
          <p className="text-lg leading-[36px] text-black font-light text-center md:text-left">
          At Glitz Floor & More, we believe that every home deserves to shine. With years of experience in flooring installations and interior remodeling, we bring expertise, quality craftsmanship, and attention to detail to each project. Our team is dedicated to delivering exceptional service, whether we're transforming floors, updating kitchens, refreshing bathrooms, or adding new life to your interiors. We work closely with you to understand your vision, using high-quality materials and innovative designs to create spaces that are not only beautiful but built to last. Discover the difference that passion and professionalism make with Glitz Floor & More.
          </p>
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
