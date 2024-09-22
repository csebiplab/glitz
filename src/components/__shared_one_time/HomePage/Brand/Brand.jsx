
"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Brand.css";

const breakpoints = {
  0: {
    slidesPerView: 2,
    spaceBetween: 65,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 65,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 65,
  },
  1440: {
    slidesPerView: 5,
    spaceBetween: 65,
  },
  1536: {
    slidesPerView: 5,
    spaceBetween: 65,
  },
};

const slideData = [
    "/assets/glitz/brands/soap.png",
    "/assets/glitz/brands/yelp.png",
    "/assets/glitz/brands/google.png",
    "/assets/glitz/brands/facebook.png",
    "/assets/glitz/brands/next.png",
    "/assets/glitz/brands/soap.png",
    "/assets/glitz/brands/yelp.png",
    "/assets/glitz/brands/google.png",
    "/assets/glitz/brands/facebook.png",
    "/assets/glitz/brands/next.png",
]

const Brand = () => {
  return (
    <div className="homeSection__bg">
      <div className="container pt-[10px]">
      <div className="">
    
        {/* ==================== swiper slider ================ */}
        <Swiper
        className="brand__bg border-2 border-gray-200 shadow-lg" 
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 3000,
            pauseOnMouseEnter: false,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }}
          speed={3000}
          allowTouchMove={false}
          breakpoints={breakpoints}
          spaceBetween={12}
        >
          {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
              <div className="">
                <Image src={slideInfo} alt="brand image" height={78} width={138} className="w-auto h-[78px] "/>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    
  );
};

export default Brand;
