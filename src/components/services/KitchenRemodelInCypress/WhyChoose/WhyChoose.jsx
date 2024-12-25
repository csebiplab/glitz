"use client";
import "./WhyChoose.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const usualPool = [
  {
    id : 1,
    title: "Lack of Communication",
  },
  {
    id : 2,
    title: "Delays in Project Completion",
  },
  {
    id : 3,
    title: "Poor quality workmanship",
  },
  {
    id : 4,
    title: "Hidden Fees and Costs",
  },
  {
    id : 5,
    title: "Limited Design Options",
  },
  {
    id : 6,
    title: "Inexperienced Contractors",
  },
  {
    id : 7,
    title: "Inflexibility with Changes",
  },
  {
    id : 8,
    title: "Unreliable Timelines",
  },
  {
    id : 9,
    title: "Disorganized Project Management",
  },
  {
    id : 10,
    title: "Insufficient Cleanup After Work",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Experienced and skilled team",
  },
  {
    id : 2,
    title: "Customized Design Solutions",
  },
  {
    id : 3,
    title: "High-Quality Materials",
  },
  {
    id : 4,
    title: "Transparent Pricing",
  },
  {
    id : 5,
    title: "Comprehensive Project Management",
  },
  {
    id : 6,
    title: "Timely project completion",
  },
  {
    id : 7,
    title: "Exceptional Customer Service",
  },
  {
    id : 8,
    title: "Innovative Design Ideas",
  },
  {
    id : 9,
    title: "Attention to Detail",
  },
  {
    id : 10,
    title: "Strong Community Reputation",
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
                <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                Why Choose Us <br/> for Your Kitchen <br/> Makeover
                </h2>
                <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center md:text-left">
                Choosing Glitz Floors & More for your kitchen makeover means partnering with a team dedicated to transforming your space into the kitchen of your dreams. We bring extensive expertise and experience to every project, ensuring that your remodel is visually stunning, functional, and durable. Our designers take the time to understand your unique style and needs, creating customized solutions that reflect your vision while maximizing efficiency. 
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className=" title-bg text-center 2xl:py-[20px] py-[19px] text-primary text-[15px] 2xl:text-base font-bold">
              Usual Kitchen Remodel Company
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
                      <p className=" text-xs 2xl:text-sm text-black font-bold">
                        {usual.title}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="border-2 my-6 md:my-0 cart2">
              <p className=" flex items-center gap-[2px] 5xl:gap-[10px] title-bg2 text-center py-[2px] text-black text-[15px] 2xl:text-base font-bold">
                <Image
                  className="pl-[3px] 5xl:pl-[5px]"
                  src="/assets/glitz/logo/why_chose_us_logo.png"
                  alt="bland logo"
                  width={80}
                  height={80}
                />
                Our Kitchen Remodel
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
                      <p className=" text-xs 2xl:text-sm text-black font-bold">
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
