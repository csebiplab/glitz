import React from "react";
import "./Benefits.css";
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Image from "next/image";

const benefitsData = [
  {
    id: 1,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit1.png",
    title: "Exceptional Durability",
    desc: "Vinyl flooring is designed to withstand daily wear and tear, making it an excellent choice for high-traffic areas in homes and commercial spaces. It resists scratches, dents, and stains, ensuring it looks great for years, even in busy households with children or pets.",
  },
  {
    id: 2,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit2.png",
    title: "Waterproof & Moisture",
    desc: "Vinyl flooring is highly water-resistant, and many options are completely waterproof, making it ideal for moisture-prone areas such as kitchens, bathrooms, and basements.",
  },
  {
    id: 3,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit3.png",
    title: "Low Maintenance",
    desc: "Keeping vinyl floors looking new is simple. Unlike hardwood, which requires refinishing, or carpet, which needs regular deep cleaning, vinyl requires only basic sweeping and occasional mopping. Its stain-resistant surface makes it easy to maintain, saving time and effort.",
  },
  {
    id: 4,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit4.png",
    title: "Versatile Styles & Designs",
    desc: "Vinyl flooring comes in an extensive range of colors, patterns, and textures, allowing you to achieve almost any look you desire. From wood-look planks to stone-inspired tiles, vinyl can suit any decor style, whether modern, rustic, or traditional. This versatility makes it easy to match vinyl",
  },
  {
    id: 5,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit5.png",
    title: "Cost-Effective Option",
    desc: "Vinyl flooring is more affordable than hardwood or natural stone without sacrificing appearance or quality. This cost-effectiveness makes vinyl an attractive option for homeowners and businesses seeking high-quality, stylish flooring on a budget.",
  },
  {
    id: 6,
    img: "/assets/glitz/vinylFlooringInCypress/benefit/benefit6.png",
    title: "Easy & Fast Installation",
    desc: "Vinyl flooring is known for straightforward installation for DIY projects. The installation process is quick, which means less disruption to your daily life. Professional installation is also affordable and can be completed with minimal downtime.",
  }
];

const Benefits = () => {
  return (
    <div>
      <div data-aos="zoom-in" className="container padding__top">
        <div className="flex flex-col justify-center items-center">
        <NewHeadingIcon text={headingIconText.benefits__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          The Benefits of Vinyl Flooring for Your Cypress Property
          </h2>
          <p className="text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]">
          Vinyl flooring offers numerous advantages for Cypress homeowners and business owners looking to enhance their spaces with style, durability, and practicality. Here are some of the top benefits of choosing vinyl flooring for your property: With Glitz Floors & More, you can explore various vinyl options that elevate your space while providing the practical benefits you need.
          </p>
        </div>
        {/* first div  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] 5xl:gap-[83px] pt-[25px]">
          {benefitsData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working img"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="text-[25px] text-center font-bold leading-9 text-black pt-[15px] pb-[10px]">
                  {data.title}
                </p>
                <p className="text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
