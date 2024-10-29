"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import "./WhyChoose.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";

const usualPool = [
  {
    id : 1,
    title: "Unreliable Project Timelines",
  },
  {
    id : 2,
    title: "Poor quality workmanship",
  },
  {
    id : 3,
    title: "Hidden costs and fees",
  },
  {
    id : 4,
    title: "Lack of Communication",
  },
  {
    id : 5,
    title: "Limited Design Options",
  },
  {
    id : 6,
    title: "Subpar Customer Service",
  },
  {
    id : 7,
    title: "Inconsistent Materials",
  },
  {
    id : 8,
    title: "Messy Job Sites",
  },
  {
    id : 9,
    title: "Failure to Meet Codes",
  },
  {
    id : 10,
    title: "Unsatisfactory Warranty Policies",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Timely project completion",
  },
  {
    id : 2,
    title: "Exceptional Craftsmanship",
  },
  {
    id : 3,
    title: "Transparent Pricing Structure",
  },
  {
    id : 4,
    title: "Customized Design Solutions",
  },
  {
    id : 5,
    title: "Outstanding Customer Support",
  },
  {
    id : 6,
    title: "High-Quality Materials",
  },
  {
    id : 7,
    title: "Expert Installation Team",
  },
  {
    id : 8,
    title: "Impressive Portfolio of Work",
  },
  {
    id : 9,
    title: "Comprehensive Project Management",
  },
  {
    id : 10,
    title: "Satisfaction Guaranteed",
  } 
];

const WhyChoose = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className=" md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            
          <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <HeadingIcon
                text={headingIconText.whyChoose__headingIconText}
              />
              </div>

              <div>
                <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal py-[5px] text-center xl:text-left">
                Why Choose Our Bathroom Remodelers
                </h2>
              </div>

              <div>
                <p className="font-family-secondary text-lg font-normal md:text-start text-center text-secondary-50">
                Our best bathroom remodelers are dedicated professionals who combine expertise, creativity, and a customer-centric approach to transform your space. We bring years of experience and a skilled team to ensure high-quality craftsmanship and innovative designs tailored to your preferences. Our strong reputation, supported by positive customer reviews and comprehensive services, guarantees a seamless remodeling experience.
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="font-family-secondary title-bg text-center 2xl:py-[20px] py-[19px] text-primary text-[15px] 2xl:text-base font-bold">
              Usual Bathroom Remodelers
              </p>
              <div className="grid grid-rows-8 3xl:pt-[35px] pt-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual) => (
                  <>
                  <div
                    key={usual?.id}
                    className="flex gap-2 items-center leading-none"
                  >
                    <Image
                      src="/assets/glitz/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="font-family-secondary text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </>
                  
                  
                ))}
              </div>
            </div>

            <div className="border-2 my-6 md:my-0 cart2">
              <p className="font-family-secondary flex items-center gap-[2px] 5xl:gap-[10px] title-bg2 text-center py-[2px] text-black text-[15px] 2xl:text-base font-bold">
              <Image className="pl-[3px] 5xl:pl-[5px]" src="/assets/glitz/logo/why_chose_us_logo.png" alt="bland logo" width={80} height={80}/>
              Our Bathroom Remodelers
              </p>
              <div className="grid grid-rows-8 3xl:pt-[35px] pt-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual) => (
                  <>
                  <div
                    key={usual?.id}
                    className="flex gap-2 items-center leading-none  "
                  >
                    <Image
                      src="/assets/glitz/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="font-family-secondary text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </>
                  
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
