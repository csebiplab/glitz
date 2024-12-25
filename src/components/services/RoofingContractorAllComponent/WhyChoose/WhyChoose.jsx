"use client";
import "./WhyChoose.css";

import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const usualPool = [
  {
    id : 1,
    title: "Limited warranty options",
  },
  {
    id : 2,
    title: "High upfront costs",
  },
  {
    id : 3,
    title: "Slow response times for repairs",
  },
  {
    id : 4,
    title: "Inconsistent quality of work",
  },
  {
    id : 5,
    title: "Lack of clear communication",
  },
  {
    id : 6,
    title: "Subcontracting without prior notice",
  },
  {
    id : 7,
    title: "Unexpected additional fees",
  },
  {
    id : 8,
    title: "Delays due to supply shortages",
  },
  {
    id : 9,
    title: "Limited variety of roofing materials",
  }
];
const easyPool = [
  {
    id : 1,
    title: "High-quality workmanship",
  },
  {
    id : 2,
    title: "Fast response times for repairs",
  },
  {
    id : 3,
    title: "Transparent pricing with no hidden fees",
  },
  {
    id : 4,
    title: "Wide selection of roofing materials",
  },
  {
    id : 5,
    title: "Excellent customer communication",
  },
  {
    id : 6,
    title: "Professional and experienced team",
  },
  {
    id : 7,
    title: "Timely project completion",
  },
  {
    id : 8,
    title: "Thorough cleanup after job completion",
  },
  {
    id : 9,
    title: "Flexible financing options",
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
                Why Choose Our Roof Installer
                </h2>
              </div>

              <div>
                <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                Choosing Glitz Floors & More means selecting a roof installer committed to quality and customer satisfaction. Our experienced team delivers expert craftsmanship using high-quality materials, ensuring your roof is durable and reliable. We prioritize transparency with clear pricing and comprehensive services, from inspections to installations. With a focus on timely project completion and ongoing support, you can trust us to protect your home with a roof you can depend on for years. Contact us today to experience the difference!
                </p>
              </div>
            </div>

            <div className="w-full border-2 my-6 md:my-0 cart1">
              <p className=" title-bg text-center 2xl:py-[20px] py-[19px] text-primary text-[15px] 2xl:text-base font-bold">
              Usual roofing contractor
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
                Our roofing contractor
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
