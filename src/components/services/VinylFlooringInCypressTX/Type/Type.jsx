import React from "react";
import { headingIconText } from '@/utils/heading-text';
import "./Type.css";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/vinylFlooringInCypress/type/type1.png",
    title: "Luxury Vinyl Plank (LVP)",
    desc: "LVP mimics the look of natural wood with realistic textures and grain patterns. It's highly durable, water-resistant, and comfortable underfoot, ideal for high-traffic areas. LVP is best for living rooms, kitchens, and hallways where the warmth of wood is desired without the high maintenance. At Glitz Floors & More, we specialize in the professional installation of Luxury Vinyl Plank (LVP) flooring, offering Cypress, TX, homeowners a beautiful, durable, and affordable flooring option that mimics the look of natural wood. Our skilled team ensures a seamless installation with precision, providing a high-quality finish that's water-resistant and easy to maintain. Whether updating a single room or an entire home, Glitz Floors & More delivers exceptional results that elevate any space.",
  },
  {
    id: 2,
    img: "/assets/glitz/vinylFlooringInCypress/type/type2.png",
    title: "Luxury Vinyl Tile (LVT)",
    desc: "LVT is designed to resemble natural stone or ceramic tiles, often featuring grout lines and textures that add to its realistic look. LVT is waterproof, stain-resistant, and softer than traditional tiles. LVT is best for bathrooms, kitchens, and basements. At Glitz Floors & More, we specialize in professional luxury vinyl tile (LVT) installation, bringing the look and feel of high-end stone and ceramic to your space with added durability and comfort. Our skilled team ensures precise, quality installation for a flawless finish that's waterproof, stain-resistant, and perfect for any room. Whether for a home or business in Cypress, TX, count on us for exceptional LVT installations that combine elegance and functionality.",
  },
  {
    id: 3,
    img: "/assets/glitz/vinylFlooringInCypress/type/type3.png",
    title: "Sheet Vinyl",
    desc: "It's an affordable option with various colors, patterns, and textures available. Sheet vinyl is best for bathrooms and laundry rooms. Glitz Floors & More in Cypress, TX, offers professional sheet vinyl installation services, bringing style and durability to any space. Glitz Floors & More ensures a smooth, water-resistant finish that enhances comfort and resilience. For quality installation and a wide range of design options, trust Glitz Floors & More to deliver vinyl flooring solutions that fit your lifestyle and budget.",
  },
  {
    id: 4,
    img: "/assets/glitz/vinylFlooringInCypress/type/type4.png",
    title: "Rigid Core Vinyl (SPC and WPC)",
    desc: "Rigid-core vinyl includes two popular subtypes—Stone Plastic Composite (SPC) and Wood Plastic Composite (WPC). SPC is highly durable and waterproof, while WPC offers a softer feel underfoot. It is best for basements, kitchens, and commercial spaces where durability and water resistance are essential. Glitz Floors & More offers expert rigid-core vinyl flooring, featuring SPC (stone plastic composite) and WPC (wood plastic composite) options. These floors provide exceptional durability, water resistance, and comfort, perfect for high-traffic and moisture-prone areas. With Glitz Floors & More, Cypress, TX, homeowners can count on precision installation and quality materials for a long-lasting, beautiful floor that enhances any room."
  },
  {
    id: 5,
    img: "/assets/glitz/vinylFlooringInCypress/type/type5.png",
    title: "Vinyl Composition Tile (VCT)",
    desc: "VCT is a durable, resilient tile often used in commercial settings due to its toughness and low maintenance. It requires occasional waxing but is a long-lasting, economical option. Transform your space with professional Vinyl Composition Tile (VCT) installation from Glitz Floors & More. Our skilled team specializes in laying durable, resilient VCTs perfect for high-traffic areas, such as commercial spaces, schools, and retail environments. With various colors and patterns, VCT provides a stylish and economical flooring solution that can withstand heavy use while maintaining its appearance. Trust Glitz Floors & More to deliver quality installation with exceptional attention to detail, ensuring your flooring lasts for years to come",
  },
  {
    id: 6,
    img: "/assets/glitz/vinylFlooringInCypress/type/type6.png",
    title: "LifeProof Vinyl Flooring",
    desc: "Transform your space with LifeProof vinyl flooring from Glitz Floors & More. Known for its exceptional durability and stunning designs, LifeProof offers a variety of styles that mimic the look of natural wood and stone while providing superior water and scratch resistance. Our expert team ensures a seamless installation process, delivering a flawless finish that enhances any room in your home. Choose LifeProof vinyl flooring for an elegant, long-lasting solution. Trust Glitz Floors & More for quality craftsmanship and exceptional service in Cypress, TX.",
  },
  {
    id: 7,
    img: "/assets/glitz/vinylFlooringInCypress/type/type4.png",
    title: "Vinyl Flooring Waterproof",
    desc: "At Glitz Floors & More, we specialize in professional waterproof vinyl flooring installation tailored to meet your needs. Our high-quality vinyl flooring options are designed to withstand moisture, making them ideal for kitchens, bathrooms, and basements. You can achieve the look you desire without compromising durability. Our expert team ensures a seamless installation process, delivering a beautiful and resilient floor that will enhance your home for years. Trust Glitz Floors & More for all your waterproof vinyl flooring needs!",
  },
  {
    id: 8,
    img: "/assets/glitz/vinylFlooringInCypress/type/type5.png",
    title: "Wood Vinyl Flooring",
    desc: "Transform your space with Glitz Floors & More's premium wood vinyl flooring installation services. Our luxury vinyl planks mimic the beauty of natural hardwood while offering enhanced durability and water resistance. Ideal for any room, our expert team ensures a seamless and professional installation, bringing warmth and elegance to your home without the high maintenance of traditional wood. Choose Glitz Floors & More for an exceptional flooring experience that combines style, functionality, and affordability!",
  },
  {
    id: 9,
    img: "/assets/glitz/vinylFlooringInCypress/type/type6.png",
    title: "Vinyl Basement Flooring",
    desc: "Transform your basement into a stylish and functional space with Glitz Floors & More's vinyl flooring installation services. Our expert team specializes in high-quality vinyl flooring that is both durable and water-resistant, making it the perfect choice for basements. With various designs and styles, including luxury vinyl planks and tiles, we ensure your new flooring complements your home's aesthetic. Enjoy the comfort of soft, warm floors underfoot, easy maintenance, and long-lasting performance. Trust Glitz Floors & More to elevate your basement with beautiful vinyl flooring tailored to your needs.",
  },
];


const Type = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex justify-center items-center">
        <NewHeadingCenterIcon text={headingIconText.type__headingIconText}/>
        </div>
        <div className="">
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Types of Vinyl Flooring
          </h2>
          <p className='text-base 5xl:text-lg text-black font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px] text-center'>Vinyl flooring has evolved to offer a variety of styles and formats to fit different needs, aesthetics, and budgets. Here's an overview of the main types of vinyl flooring to help you choose the right option for your space:
          </p>
        </div>
        {/* cart data  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px] mt-[20px] xl:mt-[25px] 5xl:mt-[30px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id}>
                <Image
                  src={data.img}
                  alt={data.title}
                  width={433}
                  height={250}
                />
                <div className="type__cart__bg px-[8px] pt-[4px] pb-[16px] h-[580px] 2xl:h-[650px]">
                  <h3 className="text-lg 5xl:text-[20px] font-bold text-black leading-[30px] text-center pb-[5px]">
                    {data.title}
                  </h3>
                  <p className="text-base font-normal text-black leading-[26px] 5xl:leading-[30px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
};

export default Type;
