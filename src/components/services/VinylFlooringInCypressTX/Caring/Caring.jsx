import React from "react";
import "./Caring.css";
import Image from "next/image";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const workingData = [
  {
    id : 1,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring1.png",
    title : "Regular cleaning:",
    desc : "Sweep with a soft broom or vacuum with a floor attachment to remove dirt and prevent buildup. Use a damp mop with a pH-balanced vinyl cleaner to clean your floors. Mopping should be done weekly or as needed, especially in high-traffic areas."
  },
  {
    id : 2,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring2.png",
    title : "Address spills immediately:",
    desc : "For sticky substances, use a vinyl-safe cleaner to remove residue without damaging the surface."
  },
  {
    id : 3,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring3.png",
    title : "Use appropriate cleaning products:",
    desc : "Avoid harsh chemicals, abrasive cleaners, or wax products that can dull the finish of your vinyl flooring. Stick to cleaners specifically formulated for vinyl to maintain its appearance and integrity."
  },
  {
    id : 4,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring4.png",
    title : "Prevent discoloration:",
    desc : "Protect your vinyl flooring from direct sunlight, which can cause fading or discoloration."
  },
  {
    id : 5,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring5.png",
    title : "Maintain humidity levels:",
    desc : "Vinyl flooring performs best in controlled humidity environments. Use a dehumidifier to prevent mold and mildew growth in damp areas like basements."
  },
  {
    id : 6,
    img : "/assets/glitz/vinylFlooringInCypress/caring/caring6.png",
    title : "Regular inspections:",
    desc : "Inspect your floors for any signs of damage, such as tears, lifting edges, or discoloration. Addressing issues early can prevent more extensive damage and costly repairs."
  },
]

const Caring = () => {
  return (
    <div className="container padding__top">
      <div className="flex justify-center items-center">
      <NewHeadingCenterIcon text={headingIconText.caring__headingIconText}/>
      </div>
      <div className="pb-[25px]">
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
        Caring for Vinyl Flooring
        </h2>
        <p className="text-base 5xl:text-lg text-black font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
        Vinyl flooring is popular for its durability, affordability, and wide range of styles. Proper care and maintenance are essential to keep your vinyl floors looking great and to extend their lifespan. Here's a comprehensive guide to help you care for your vinyl flooring: Following these caring tips, you can keep your vinyl flooring looking beautiful and functional for years. For more specialized advice or to encounter any issues, don't hesitate to contact Glitz Floors & More for expert guidance and services tailored to your needs.
        </p>
      </div>

      {/* working data  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 5xl:grid-cols-4 gap-[20px] md:gap-[25px] 5xl:gap-[30px]">
        {
          workingData?.map((data)=>{
              return <div key={data.id} className="caring_cart__bg relative mt-10 px-[10px] pb-[24px]">
                  <Image src={data.img} alt="caring image" width={92} height={92} className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border border-[#CBCBCB] bg-white rounded-full"/>
                  <p className="text-center text-lg 5xl:text-[20px] font-bold leading-normal text-black mt-12">{data.title}</p>
                  <p className="text-center text-lg 5xl:text-[20px] font-normal leading-normal text-black">{data.desc}</p>
              </div>
          })
        }
      </div>
      {/* second div  */}
      <div className="w-full flex justify-center items-center mt-6">
      <div className="w-full md:w-1/2  lg:w-1/3 caring_cart__bg relative mt-12 px-[10px] pb-[34px]">
                  <Image src="/assets/glitz/vinylFlooringInCypress/caring/caring7.png" alt="caring image" width={92} height={92} className="absolute -top-12 left-0 right-0  w-[92px] h-[92px] mx-auto p-2 border border-[#CBCBCB] bg-white rounded-full"/>
                  <p className="text-center text-lg 5xl:text-[20px] font-bold leading-normal text-black mt-12">Professional maintenance:</p>
                  <p className="text-center text-lg 5xl:text-[20px] font-normal leading-normal text-black">Consider scheduling periodic professional cleanings and maintenance. Professionals can provide deep cleaning and check for any underlying issues.</p>
              </div>
      </div>
    </div>
  );
};

export default Caring;
