"use client";
import "./WhyChoose.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const usualPool = [
  {
    id : 1,
    title: "Lack of attention to detail",
  },
  {
    id : 2,
    title: "Use of low-quality materials",
  },
  {
    id : 3,
    title: "Inconsistent or uneven finishes",
  },
  {
    id : 4,
    title: "Poor preparation of surfaces",
  },
  {
    id : 5,
    title: "Unreliable scheduling",
  },
  {
    id : 6,
    title: "Minimal or no color consultation",
  },
  {
    id : 7,
    title: "Messy work environment",
  },
  {
    id : 8,
    title: "Limited warranty or after-service support",
  },
  {
    id : 9,
    title: "Lack of communicate during the project",
  },
  {
    id : 10,
    title: "Inadequate surface protection",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Skilled and experienced team",
  },
  {
    id : 2,
    title: "High-quality materials",
  },
  {
    id : 3,
    title: "Attention to detail",
  },
  {
    id : 4,
    title: "Clean and efficient work process",
  },
  {
    id : 5,
    title: "Commitment to timelines",
  },
  {
    id : 6,
    title: "Excellent color matching & consultation",
  },
  {
    id : 7,
    title: "Durable and long-lasting finishes",
  },
  {
    id : 8,
    title: "Personalized customer service",
  },
  {
    id : 9,
    title: "Thorough surface preparation",
  },
  {
    id : 10,
    title: "Competitive Pricing",
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
                <NewHeadingIcon
                  text={headingIconText.whyChoose__headingIconText}
                />
              </div>

              <div>
                <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                Why Hire Our Painting Contractors Cypress, TX
                </h2>
              </div>

              <div>
                <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                Choosing our painting contractors in Cypress, TX, means selecting quality, precision, and professionalism. Our team uses premium materials and thorough preparation techniques to deliver smooth, even coats that withstand wear and weather. From color consultations to final touches, we're dedicated to enhancing your space with results that exceed expectations. Trust us for a seamless painting experience that transforms your property beautifully and efficiently.
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="font-family-secondary title-bg text-center 2xl:py-[20px] py-[19px] text-primary text-[15px] 2xl:text-base font-bold">
              Usual Painting Contractors
              </p>
              <div className="grid grid-rows-8 3xl:pt-[35px] pt-[20px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual) => (
                  <div key={usual?.id}>
                    <div className="flex gap-2 items-center leading-none">
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
                    <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 my-6 md:my-0 cart2">
              <p className="font-family-secondary flex items-center gap-[2px] 5xl:gap-[10px] title-bg2 text-center py-[2px] text-black text-[15px] 2xl:text-base font-bold">
                <Image
                  className="pl-[3px] 5xl:pl-[5px]"
                  src="/assets/glitz/logo/why_chose_us_logo.png"
                  alt="bland logo"
                  width={80}
                  height={80}
                />
                Our Painting Contractor
              </p>
              <div className="grid grid-rows-8 3xl:pt-[35px] pt-[25px] px-[20px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual) => (
                  <div key={usual?.id}>
                    <div className="flex gap-2 items-center leading-none  ">
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
                    <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]" />
                  </div>
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
