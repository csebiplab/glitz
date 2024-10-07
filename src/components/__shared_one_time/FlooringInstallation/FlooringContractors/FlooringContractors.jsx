import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import React from "react";
import Image from "next/image";
import "./FlooringContractors.css";

const flooringData = [
  {
    id: 1,
    img: "/assets/glitz/flooring/flooring1.png",
    title: "Countertops Installation",
    desc: "Elevate your kitchen or bathroom with professional countertop installation from Glitz Floors & More. We offer a wide selection of materials, including granite, quartz, marble, and laminate, to suit your style and needs. Our expert team ensures precise measurements, seamless fitting, and flawless installation, delivering both beauty and durability. Whether you're updating your space or starting a new project, trust us for top-quality countertops and exceptional service.",
  },
  {
    id: 2,
    img: "/assets/glitz/flooring/flooring2.png",
    title: "Bathroom Remodel",
    desc: "Transform your bathroom into a stylish and functional retreat with Glitz Floors & More. Our bathroom remodel services offer custom design, high-quality materials, and expert installation to create a space that reflects your taste and meets your needs. From elegant fixtures to efficient layouts, we ensure a seamless renovation that enhances both beauty and functionality.",
  },
  {
    id: 3,
    img: "/assets/glitz/flooring/flooring3.png",
    title: "Kitchen Remodel",
    desc: "Transform your kitchen with a sleek and functional remodel from Glitz Floors & More. Our expert team will help you design and install high-quality cabinetry, countertops, and flooring, creating a space that blends style and efficiency. Enjoy a modern kitchen that enhances both your cooking experience and your home's value.",
  },
];
const flooringData1 = [
  {
    id: 4,
    img: "/assets/glitz/flooring/flooring4.png",
    title: "Painting Contractors",
    desc: "Revitalize your space with professional painting services from Glitz Floors & More. Our expert painting contractors deliver flawless results for both interior and exterior projects, using high-quality paints and precise techniques. Whether you’re looking to refresh a single room or undertake a complete home makeover, we ensure a smooth finish and vibrant colors that enhance the beauty and atmosphere of your space. Trust us for meticulous preparation, expert application, and timely completion. ",
  },
  {
    id: 5,
    img: "/assets/glitz/flooring/flooring5.png",
    title: "Cabinet Installation",
    desc: "Transform your space with expert cabinet installation from Glitz Floors & More. Our team specializes in installing a wide range of cabinets, from kitchen and bathroom to custom storage solutions. We handle every detail with precision, ensuring a perfect fit and seamless integration with your existing décor. Choose from a variety of styles and finishes to match your design vision, and enjoy a beautifully organized and functional space.",
  },
  {
    id: 6,
    img: "/assets/glitz/flooring/flooring6.png",
    title: "Roofing Contractors",
    desc: "Protect your home with reliable roofing services from Glitz Floors & More. Our expert roofing contractors provide top-notch installation, repair, and maintenance for a variety of roofing systems. Whether you need a new roof, a roof replacement, or repairs to address damage, we use high-quality materials and advanced techniques to ensure durability and performance. From residential to commercial properties, trust us for thorough inspections, efficient service, and a roof",
  },
];

const FlooringContractors = () => {
  return (
    <div>
      <div className="padding__top">
        <div className="container flex flex-col items-center justify-center">
          <HeadingIcon
            text={headingIconText.flooringContractors__headingIconText}
          />
          <h2 className="font-family-primary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px] pb-[5px]">
            Our Flooring Contractors Also Offer
          </h2>
          <p className="font-family-secondary text-lg font-normal text-center text-secondary">
            At Glitz Floors & More, our skilled flooring contractors go beyond
            traditional installations to provide a full spectrum of services
            designed to enhance your flooring experience. In addition to expert
            flooring installation, we also offer:
          </p>
        </div>
        {/* cart first div  */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[80px] md:gap-[44px] pt-[80px] px-[10px] md:px-0">
          {flooringData?.map((data) => {
            return (
              <div
                key={data.id}
                className="cart_bg relative px-[11px] pb-[25px]"
              >
                <Image
                  src={data.img}
                  alt="flooring image"
                  width={104}
                  height={104}
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-secondary-400"
                />
                <p className="font-family-primary text-[25px] font-bold text-center text-black pt-[65px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-normal text-center pt-[5px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* cart second div  */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[80px] md:gap-[44px]  pt-[80px] pb-[25px]  px-[10px] md:px-0">
          {flooringData1?.map((data) => {
            return (
              <div
                key={data.id}
                className="cart_bg relative px-[11px] pb-[25px]"
              >
                <Image
                  src={data.img}
                  alt="flooring image"
                  width={104}
                  height={104}
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-secondary-400"
                />
                <p className="font-family-primary text-[25px] font-bold text-center text-black pt-[65px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-normal text-center pt-[5px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* third div  */}
        <div className="flex flex-col xl:flex-row gap-[80px] md:gap-[60px] 5xl:gap-[75px] pt-[60px] 5xl:pt-[75px]  px-[10px] md:px-0">
          <div className="w-full xl:w-1/3">
            <div className="cart_bg relative px-[11px] pb-[25px]">
              <Image
                src="/assets/glitz/flooring/flooring7.png"
                alt="flooring image"
                width={104}
                height={104}
                className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-secondary-400"
              />
              <p className="font-family-primary text-[25px] font-bold text-center text-black pt-[65px]">
                Shower Glass Installation
              </p>
              <p className="font-family-secondary text-lg font-normal text-center pt-[5px]">
                Elevate your bathroom with sleek and stylish shower glass
                installation from Glitz Floors & More. Our expert team
                specializes in custom glass solutions that enhance the look and
                functionality of your shower space. Whether you're looking for
                framed, semi-frameless, or frameless options, we provide precise
                measurements and professional installation for a seamless and
                modern finish. Enjoy a clear, elegant look that complements your
                bathroom design while offering durability and easy maintenance.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3">
            <div className="cart_bg relative px-[11px] pb-[25px]">
              <Image
                src="/assets/glitz/flooring/flooring8.png"
                alt="flooring image"
                width={104}
                height={104}
                className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-secondary-400"
              />
              <p className="font-family-primary text-[25px] font-bold text-center text-black pt-[65px]">
                Add Rooms
              </p>
              <p className="font-family-secondary text-lg font-normal text-center pt-[5px]">
                Expand your living space with expert room additions from Glitz
                Floors & More. Our skilled team designs and constructs custom
                rooms that seamlessly integrate with your home, enhancing both
                functionality and style. Whether you need an extra bedroom, a
                home office, or a larger living area, we handle every detail
                from design to completion, ensuring a smooth and efficient
                process. Transform your home with beautifully crafted additions
                that meet your needs and elevate your space.
              </p>
            </div>
          </div>
          <div className="w-full xl:w-1/3 h-full">
            <div className="cart_bg px-[11px] pb-[25px]">
              <p className="font-family-primary text-[25px] font-bold text-center text-black pt-[65px]">
                Have a project in mind? <br />
                Contact us!
              </p>
              <div className="flex justify-between items-center pt-[35px]">
              <div className="">
              <button className="font-family-primary text-lg font-normal text-primary flooring_btn_bg p-[10px] md:p-[15px]">Get Free Quote</button>
              </div>
              <p className="font-family-primary text-lg font-bold text-black leading-normal">Or</p>
              <Image
                src="/assets/glitz/flooring/flooring_btn.png"
                alt="flooring btn image"
                width={140}
                height={55}
                className=""
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlooringContractors;
