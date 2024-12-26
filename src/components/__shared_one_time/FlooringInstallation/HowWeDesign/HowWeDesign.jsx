import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./HowWeDesign.css";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const howWeDesginData = [
  {
    id: 1,
    title: "Initial Consultation",
    desc: "Our process begins with a detailed consultation, during which we listen to your needs and assess your space. We take into consideration factors such as room size, natural light, and the overall look you're aiming for.",
  },
  {
    id: 2,
    title: "Design Selection",
    desc: "Based on your preferences, we present a range of flooring materials, including hardwood, laminate, tile, vinyl, and carpet. We'll provide expert advice on the benefits of each, ensuring you find the perfect match for your home in Cypress.",
  },
  {
    id: 3,
    title: "Measurement & Custom",
    desc: "We take precise measurements of your space to guarantee the perfect fit and offer any customization options, such as patterns or textures, to enhance the final design.",
  },
];

const HowWeDesign = () => {
  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <NewHeadingCenterIcon
          text={headingIconText.howWeDesign__headingIconText}
        />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
          How We Design Your Floor in Cypress
        </h2>
        <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          At Glitz Floors & More, we make your flooring vision a reality with
          our personalized design process. Starting with a consultation, we
          assess your space, style preferences, and budget. Our experts will
          guide you through a variety of flooring options, from hardwood to tile
          and everything in between. We'll help you select the perfect materials
          and designs that suit your aesthetic, lifestyle, and home needs. Once
          chosen, our team ensures precision installation, using top-quality
          products for a flawless finish. Thanks to Glitz Floors & More, your
          Cypress home will have stylish and durable floors. At Glitz Floors &
          More, we pride ourselves on making every step of the flooring process
          hassle-free, delivering a result that reflects your unique style and
          stands the test of time.
        </p>
      </div>
      <p className="text-[20px] md:text-[25px] 5xl:text-[30px] font-bold text-center text-black leading-[35px] py-[20px] md:py-[25px]">
        Step-by-Step Process
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] 5xl:gap-[38px]">
        {howWeDesginData?.map((data) => {
          return (
            <div
              key={data.id}
              className="how_we_cart___bg pt-[14px] pb-[21px] px-2"
            >
              <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                {data.title}
              </p>
              <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
      {/* second part  */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-[20px] md:gap-[30px] 5xl:gap-[38px] mt-[20px] md:mt-[30px]  5xl:mt-[38px]">
        <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
          <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
            Installation
          </p>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
            Our professional team takes care of every detail during the
            installation process, ensuring a smooth and efficient experience. We
            prioritize quality workmanship and respect your home by keeping it
            clean and organized.
          </p>
        </div>

        <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
          <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
            Final Walkthrough
          </p>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
            After installation, our flooring contractors will do a final
            walkthrough with you to ensure everything meets your expectations.
            Our goal is to provide you with a floor that not only enhances the
            beauty of your home but also adds long-lasting value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWeDesign;
