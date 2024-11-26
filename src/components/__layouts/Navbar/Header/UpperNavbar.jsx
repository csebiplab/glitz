"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const slideData = [
  <div className="flex justify-center items-center gap-2">
    <Image
      src="/assets/glitz/icons/info.png"
      alt="info icon"
      width={18}
      height={18}
    />
    <span>0% Interest Financing Available</span>
  </div>,
  "Ask About 0% Interest Financing with Synchrony Bank",
  "FLOORS NOW, PAY OVER TIME",
  "Convenient monthly payments to fit your budget",
];

const UpperNavbar = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    // Change slide every second
    const slideIntervalId = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 4000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(slideIntervalId);
    };
  }, []);
  return (
    <div className="container bg-dark-700 py-[4px]">
      <div className="text-center text-sm md:text-base font-bold text-black leading-normal">
        {slideData[currentSlideIndex]}
      </div>
    </div>
  );
};

export default UpperNavbar;
