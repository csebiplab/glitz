"use client"
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const serviceSlides = [
  "/assets/glitz/newHomePage/services/service1.png",
  "/assets/glitz/newHomePage/services/service2.png",
  "/assets/glitz/newHomePage/services/service3.png",
  "/assets/glitz/newHomePage/services/service4.png",
  "/assets/glitz/newHomePage/services/service5.png",
]

const Services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(()=>{
    const slideIntervalId = setInterval(()=>{
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % serviceSlides.length);
    }, 2000);
    return ()=>{
      clearInterval(slideIntervalId)
    }
  },[])
  return (
    <div className="padding__top">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.services__headingIconText} />
      </div>
      <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
        What Services We Offer
      </h2>
      <div className="mt-[15px]">
      <Image src={serviceSlides[currentSlideIndex]} alt="services image" width={1920} height={604}/>
      </div>
    </div>
  );
};

export default Services;
