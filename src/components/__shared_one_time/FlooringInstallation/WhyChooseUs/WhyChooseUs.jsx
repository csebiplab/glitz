"use client";
import "./WhyChooseUs.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const usualPool = [
  {
    id : 1,
    title: "Higher upfront cost",
  },
  {
    id : 2,
    title: "Potential for dust and odor",
  },
  {
    id : 3,
    title: "Disruption of daily activities",
  },
  {
    id : 4,
    title: "Limited availability during peak times",
  },
  {
    id : 5,
    title: "Need for furniture removal",
  },
  {
    id : 6,
    title: "Delays due to unforeseen issues",
  },
  {
    id : 7,
    title: "Requirements after refinishing",
  },
  {
    id : 8,
    title: "Lack of access to certain areas",
  },
  {
    id : 9,
    title: "Inconsistent results with DIY attempts",
  },
  {
    id : 10,
    title: "Potential for uneven application",
  }
];
const easyPool = [
  {
    id : 1,
    title: "Reliable and punctual service",
  },
  {
    id : 2,
    title: "Efficient and thorough process",
  },
  {
    id : 3,
    title: "Enhanced durability and finish",
  },
  {
    id : 4,
    title: "Skilled and experienced team",
  },
  {
    id : 5,
    title: "Customizable options",
  },
  {
    id : 6,
    title: "Fast turnaround time",
  },
  {
    id : 7,
    title: "Professional and friendly staff",
  },
  {
    id : 8,
    title: "Commitment to excellence",
  },
  {
    id : 9,
    title: "Expert craftsmanship",
  },
  {
    id : 10,
    title: "High-quality materials",
  } 
];

const WhyChooseUs = () => {
  return (
    <div className="">
      <div className="bg_vinylPool container padding__top">
        <div className="shadow-sm md:mx-0 xs:mx-[35px] ">
          <div className=" grid md:grid-cols-3 2xl:gap-[40px] md:gap-[30px] ">
            
            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className="title-bg text-center py-[19px] text-secondary-800 text-base 5xl:text-lg font-bold">
              Usual Flooring Company
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[20px] pl-[20px] pr-[5px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {usualPool?.map((usual) => (
                  <div key={usual?.id}>
                  <div
                  
                    className="flex gap-4 items-center leading-none"
                  >
                    <Image
                      src="/assets/glitz/icons/x.png"
                      alt="x"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm md:text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                  
                ))}
              </div>
            </div>
            <div className="border-2 my-6 md:my-0 cart2">
              <p className=" flex items-center gap-[5px] 5xl:gap-[10px] title-bg2 text-center text-black text-base 5xl:text-lg font-bold">
              <Image className="pl-[3px] 5xl:pl-[5px]" src="/assets/glitz/logo/why_chose_us_logo.png" alt="bland logo" width={80} height={80}/>
              Our Flooring Company
              </p>
              <div className="grid grid-rows-8 3xl:py-[35px] py-[25px] pl-[20px] pr-[5px] 2xl:text-[16px] lg:text-sm xs:text-[9px]">
                {easyPool.map((usual) => (
                  <div key={usual?.id}>
                  <div
                    
                    className="flex gap-4 items-center leading-none  "
                  >
                    <Image
                      src="/assets/glitz/icons/r.png"
                      alt="r"
                      width={20}
                      height={20}
                      className="2xl:h-[20px] 2xl:w-[20px] h-[15px] w-[15px]"
                    />
                    <p className="text-sm md:text-xs 2xl:text-sm text-black font-bold">
                      {usual.title}
                    </p>
                  </div>
                  <div className="w-full h-[1px] bg-secondary-100 my-[16px] 5xl:my-[22px]"/>
                  </div>
                  
                ))}
              </div>
            </div>
            <div className="mx-auto flex flex-col items-center justify-center">
              <div className="w-full flex md:justify-start justify-center md:items-start items-center">
              <NewHeadingIcon
                text={headingIconText.whyChooseUs__headingIconText}
              />
              </div>

              <div>
                <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                Why Choose Our Floor Refinishing Service
                </h2>
              </div>

              <div>
                <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                Choose our floor refinishing service for a professional, efficient, and high-quality solution that revitalizes your floors and enhances the beauty of your space. Experience the difference between professionally refinished floors. Contact us today for a free consultation and let us help you bring new life to your home or business!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
