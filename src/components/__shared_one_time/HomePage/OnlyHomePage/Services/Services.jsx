"use client";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SmallDeviceService from "../SmallDeviceService/SmallDeviceService";

const serviceSlides = [
  {
    image: "/assets/glitz/newHomePage/services/service1.png",
    title: "Flooring Installations",
    description: "We provide expert flooring solutions tailored to your needs.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service2.png",
    title: "Kitchen Remodeling",
    description: "Transform your kitchen with custom designs and remodeling.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service3.png",
    title: "Bathroom Remodeling",
    description: "Bring elegance and functionality to your bathroom.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service4.png",
    title: "Interior Painting",
    description: "Professional painting services for a fresh, vibrant interior.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service5.png",
    title: "Interior Remodeling",
    description: "Innovative remodeling solutions to elevate your living space.",
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
    <div className="padding__top custom-container relative">
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
                className={`font-bold text-lg ${
                  hoveredButtonIndex === index ? "text-yellow-400" : "text-white"
                } transition-colors duration-300`}
              >
                {slide.title}
              </p>

              {/* Tooltip */}
              {hoveredButtonIndex === index && (
                <div className="w-full absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-sm rounded-md px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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


