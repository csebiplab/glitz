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

// const slideData = [
//   "/assets/glitz/brands/soap.png",
//   "/assets/glitz/brands/yelp.png",
//   "/assets/glitz/brands/google.png",
//   "/assets/glitz/brands/facebook.png",
//   "/assets/glitz/brands/next.png",
//   "/assets/glitz/brands/soap.png",
//   "/assets/glitz/brands/yelp.png",
//   "/assets/glitz/brands/google.png",
//   "/assets/glitz/brands/facebook.png",
//   "/assets/glitz/brands/next.png",
// ];

const Brand = () => {
  return (
    <div className="homeSection__bg">
      <div className="container pt-[10px]">
        {/* large device  */}
        <div className="hidden md:block">
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
            {/* {slideData.map((slideInfo, index) => (
            <SwiperSlide key={index} className={`px-[30px] md:px-0 py-[15px] !h-auto !md:h-full`}>
              <div className="">
                <Image src={slideInfo} alt="brand image" height={78} width={138} className="w-auto h-[50px] "/>
              </div>
            </SwiperSlide>
          ))} */}
            <SwiperSlide
              className={`px-[30px] md:px-0 py-[15px] !w-full !h-auto !md:h-full`}
            >
              <div className="w-full !flex items-center gap-6 5xl:gap-16">
                <div className="pl-6 5xl:pl-14">
                  <p className="text-xs 5xl:text-sm text-secondary font-bold leading-normal pb-[7px]">Verifying Review From Trusted Site: </p>
                  <Image
                    src="/assets/glitz/icons/five_star.png"
                    alt="brand image"
                    height={25}
                    width={165}
                    className="w-auto h-[25px]"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/soap.png"
                    alt="brand image"
                    height={82}
                    width={82}
                    className="w-auto h-[82px]"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/yelp.png"
                    alt="brand image"
                    height={78}
                    width={117}
                    className="w-auto h-[78px] "
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/google.png"
                    alt="brand image"
                    height={78}
                    width={138}
                    className="w-auto h-[78px] "
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/facebook.png"
                    alt="brand image"
                    height={78}
                    width={140}
                    className="w-auto h-[78px] "
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/next.png"
                    alt="brand image"
                    height={31}
                    width={196}
                    className="w-auto h-[31px] pr-4"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* small device start  */}
        <div className="block md:hidden">
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
            <SwiperSlide
              className={`px-[30px] md:px-0 py-[15px] !w-full !h-auto !md:h-full`}
            >
              <div className="w-full">
                <div className="">
                  <p className="text-base text-secondary text-center font-bold leading-normal pb-[7px]">Verifying Review From Trusted Site: </p>
                  <Image
                    src="/assets/glitz/icons/five_star.png"
                    alt="brand image"
                    height={25}
                    width={165}
                    className="w-auto h-[25px] mx-auto"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <Image
                    src="/assets/glitz/brands/soap.png"
                    alt="brand image"
                    height={82}
                    width={82}
                    className="w-auto h-[82px]"
                  />
                  <Image
                    src="/assets/glitz/brands/yelp.png"
                    alt="brand image"
                    height={78}
                    width={117}
                    className="w-auto h-[78px] "
                  />
                </div>
                {/* <div>
                  <Image
                    src="/assets/glitz/brands/google.png"
                    alt="brand image"
                    height={78}
                    width={138}
                    className="w-auto h-[78px] "
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/facebook.png"
                    alt="brand image"
                    height={78}
                    width={140}
                    className="w-auto h-[78px] "
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/next.png"
                    alt="brand image"
                    height={31}
                    width={196}
                    className="w-auto h-[31px] pr-4"
                  />
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Brand;
