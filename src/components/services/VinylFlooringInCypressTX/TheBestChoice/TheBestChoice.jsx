"use client";

import "./TheBestChoice.css";
import Image from "next/image";
import { headingIconText } from '@/utils/heading-text';
import Link from "next/link";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

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
        <span><strong>Installation:</strong> Easy and quick; DIY-friendly</span>
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
    title : "Hardwood",
    cost : (
      <>
        <span><strong>Cost:</strong> High</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Durable but prone to scratches and dents</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Poor; can warp with moisture</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> High; requires refinishing and polishing</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Hard underfoot</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Professional installation recommend</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong> Limited; natural wood grains only</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> Living areas, bedrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong> Natural material</span>
      </>
    ),
  },
  {
    id: 3,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice3.png",
    title : "Tile",
    cost : (
      <>
        <span><strong>Cost:</strong> Moderate to high</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Very durable</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Excellent; water-resistant</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Hard and cold underfoot</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Labor-intensive and professionally recommended</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong> Variety of colors and textures</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> Bathrooms, kitchens, entryways</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong> Often eco-friendly if natural materials are used.</span>
      </>
    ),
  },
  {
    id: 4,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice4.png",
    title : "Carpet",
    cost : (
      <>
        <span><strong>Cost:</strong> Moderate to high</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Prone to wear and staining</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Poor; absorbs moisture</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> High; requires frequent vacuuming and cleaning</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Soft and warm underfoot</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Easy to install</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong> Limited variety</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> Bedrooms, living rooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong> Limited eco-friendly options</span>
      </>
    ),
  },
  {
    id: 5,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice5.png",
    title : "Laminate",
    cost : (
      <>
        <span><strong>Cost:</strong> Budget-friendly</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Durable but less resistant to moisture</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Moderate; some resistance, but not waterproof</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> Low maintenance</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Hard underfoot</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> DIY-friendly</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong> Moderate variety</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> Living areas, bedrooms</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong>  Limited eco-friendly options</span>
      </>
    ),
  },
  {
    id: 6,
    img: "/assets/glitz/vinylFlooringInCypress/bestChoice/bestChoice6.png",
    title : "Natural Stone",
    cost : (
      <>
        <span><strong>Cost:</strong> High</span>
      </>
    ),
    durability : (
      <>
        <span><strong>Durability:</strong> Very durable, but can crack or chip</span>
      </>
    ),
    water : (
      <>
        <span><strong>Water Resistance:</strong> Good; requires sealing for full protection.</span>
      </>
    ),
    maintenance : (
      <>
        <span><strong>Maintenance:</strong> High; needs sealing and regular care</span>
      </>
    ),
    comfort : (
      <>
        <span><strong>Comfort:</strong> Hard and cold underfoot</span>
      </>
    ),
    installation : (
      <>
        <span><strong>Installation:</strong> Complex; requires professional installation</span>
      </>
    ),
    style : (
      <>
        <span><strong>Style Options:</strong> Unique natural patterns</span>
      </>
    ),
    best : (
      <>
        <span><strong>Best for Areas:</strong> Kitchens, bathrooms, entryway</span>
      </>
    ),
    eco : (
      <>
        <span><strong>Eco-Friendliness:</strong> Natural material; some eco-friendly options</span>
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
            <NewHeadingCenterIcon text={headingIconText.whyItTheBestChoice__headingIconText}/>
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
            Vinyl Flooring vs. Other <br className="block md:hidden"/>  Options: Why It's the Best <br className="block md:hidden"/> Choice
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
