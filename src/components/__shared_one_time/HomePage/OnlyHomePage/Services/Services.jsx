"use client";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SmallDeviceService from "../SmallDeviceService/SmallDeviceService";
import { FaArrowRightLong } from "react-icons/fa6";

const serviceSlides = [
  {
    image: "/assets/glitz/newHomePage/services/service1.png",
    title: "Flooring Installations",
    description: "Transform any room with expertly installed flooring, available in a range of materials like hardwood, vinyl, and tile for lasting style and durability.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service2.png",
    title: "Kitchen Remodeling",
    description: "Upgrade your kitchen with beautiful, functional designs and high-quality finishes to create a space you'll love to cook and gather in.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service3.png",
    title: "Bathroom Remodeling",
    description: "From sleek tile to modern fixtures, we bring elegance and functionality to your bathroom with expertly crafted remodeling solutions.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service4.png",
    title: "Interior Painting",
    description: "Refresh your home's look with professional interior painting that brings color, warmth, and style to every room.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service5.png",
    title: "Interior Remodeling",
    description: "Reimagine your living spaces with our comprehensive interior remodeling services, designed to elevate your home's style and comfort.",
  },
];

const Services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  useEffect(() => {
    const slideIntervalId = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % serviceSlides.length
      );
    }, 2000);
    return () => {
      clearInterval(slideIntervalId);
    };
  }, []);

  return (
    <div data-aos="fade-up" className="padding__top custom-container relative">
      <div className="flex justify-center items-center">
        <NewHeadingIcon text={headingIconText.services__headingIconText} />
      </div>
      <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:text-[42px] font-bold text-black text-center leading-normal">
        What Services We Offer
      </h2>
      {/* large device  */}
      <div className="hidden md:block relative mt-[15px]">
        {/* Background Image */}
        <Image
          src={serviceSlides[currentSlideIndex].image}
          alt="services image"
          width={1920}
          height={604}
          className="w-full h-[400px] object-cover"
        />

        {/* Buttons Below Image */}
        <div className="absolute bottom-0 left-0 w-full flex justify-evenly bg-black/60 py-4">
          {serviceSlides.map((slide, index) => (
            <div
              key={index}
              className="relative group text-center text-white cursor-pointer px-4"
              onMouseEnter={() => setHoveredButtonIndex(index)}
              onMouseLeave={() => setHoveredButtonIndex(null)}
            >
              <p
                className={`flex items-center gap-2 font-bold text-sm 5xl:text-base ${
                  hoveredButtonIndex === index ? "text-yellow-400" : "text-white"
                } group transition-colors duration-300`}
              >
                <svg className="-mr-8" xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none"> <path d="M39.5 34H1V0" stroke="white" stroke-width="2"/> </svg> 
                {slide.title} <FaArrowRightLong className="hidden group-hover:block"/> 
                <svg className="-ml-8" xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 40 35" fill="none"> <path d="M0.5 1H39V35" stroke="white" stroke-width="2"/> </svg>
              </p>

              {/* Tooltip */}
              {hoveredButtonIndex === index && (
                <div className="group w-full absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-base 5xl:text-lg font-normal leading-normal rounded-md px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-[20px] font-bold leading-normal group-hover:text-yellow-400">{slide.title}</span> <br/>
                  {slide.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* small device  */}
      <div className="block md:hidden -mt-[40px] md:mt-0">
        <SmallDeviceService/>
      </div>

    </div>
  );
};

export default Services;


