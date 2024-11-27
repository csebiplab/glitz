"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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

const SmallDeviceService = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Function to move to the next slide
  const handleNextSlide = () => {
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex + 1) % serviceSlides.length
    );
  };

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 2000); // 2000ms = 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const currentSlide = serviceSlides[currentSlideIndex];

  return (
    <div className="padding__top custom-container relative">
      {/* Slider Section */}
      <div className="relative group w-full">
        {/* Background Image */}
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          width={1920}
          height={604}
          className="w-full h-[300px] md:h-[400px] object-cover"
        />

        {/* Tooltip on Hover */}
        <div className="h-1/2 absolute mt-[23%] inset-0 bg-black/70 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-bold text-lg mb-2">{currentSlide.title}</h3>
          <p className="text-sm text-center px-6">{currentSlide.description}</p>
        </div>

        {/* Service Button */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/80 text-white py-3 px-5 rounded-lg text-center shadow-md w-11/12 sm:w-auto">
          <span className="font-bold">{currentSlide.title}</span>
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceService;