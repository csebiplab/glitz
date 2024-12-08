"use client";

import "./TheBestChoice.css";
import Image from "next/image";
import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from '@/utils/heading-text';
import Link from "next/link";

const benefitsData = [
  {
    id: 1,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice1.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  },
  {
    id: 2,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice2.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice3.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  },
  {
    id: 4,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice4.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice5.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice6.png",
    title : "Vinyl Flooring",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Highly durable; resists scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; waterproof options available</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance; easy to clean</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft underfoot; often has padding options</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Installation: Easy and quick; DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong>  Wide range of colors, patterns, and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> All areas, especially kitchens and bathrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Available in eco-friendly options</span>
      </>
    ),
  }
];

const TheBestChoice = () => {
  return (
    <div className=" ">
      <div
        data-aos="zoom-in"
        className="container padding__top"
      >
        <div className="!overflow-hidden">
          <div className="flex flex-col items-center">
            <div className="flex justify-center lg:justify-normal items-center">
            <NewHeadingIcon text={headingIconText.whyItTheBestChoice__headingIconText}/>
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Vinyl Flooring vs. Other Options: Why It's the Best Choice
            </h2>
            <p className='text-lg font-normal leading-[35px] text-black text-center mt-[5px] md:mt-[10px]'>When selecting flooring, it's essential to weigh the pros and cons of different materials to find the best fit for your space. Vinyl flooring has become a popular choice, and here's how it compares to other common flooring options:</p>
          </div>
          {/* first div  */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-[25px]">
            {benefitsData?.map((data) => {
              return (
                <div
                  key={data.id}
                  className="cart__bg__theBestChoice px-[18px] pt-[16px] pb-[22px]"
                >
                  <Image
                    src={data.img}
                    alt="benefits image"
                    width={62}
                    height={62}
                    className="w-[62px] h-[62px]"
                  />
                  <p className="text-lg font-bold text-black text-left leading-normal mt-[5px]">
                    {data.title}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.cost}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.durability}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.water}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.maintenance}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.comfort}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.installation}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.style}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.best}
                  </p>
                  <p className="text-lg font-normal text-black text-left leading-normal mt-[5px]">
                    {data.eco}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TheBestChoice;
