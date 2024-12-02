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
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  // 1024: {
  //   slidesPerView: 5,
  //   spaceBetween: 65,
  // },
  // 1440: {
  //   slidesPerView: 5,
  //   spaceBetween: 65,
  // },
  // 1536: {
  //   slidesPerView: 5,
  //   spaceBetween: 65,
  // },
};

const slideData = [
  {
    id : 1,
    img : "/assets/glitz/newHomePage/brands/facebook.png",
  },
  {
    id : 2,
    img : "/assets/glitz/newHomePage/brands/google.png",
  },
  {
    id : 3,
    img : "/assets/glitz/newHomePage/brands/nextdoor.png",
  },
  {
    id : 4,
    img : "/assets/glitz/newHomePage/brands/home.png",
  },
  {
    id : 5,
    img : "/assets/glitz/newHomePage/brands/yelp.png",
  },
];

const dimensions = {
  1: "w-[140px] h-[78px]",
  2: "w-[138px] h-[78px]",
  3: "w-[196px] h-[28px]",
  4: "w-[82px] h-[82px]",
  5: "w-[117px] h-[78px]",
};

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
          >
            <SwiperSlide
              className={`px-[30px] md:px-0 py-[15px] !w-full !h-auto !md:h-full`}
            >
              <div className="w-full !flex items-center gap-4 5xl:gap-16">
                <div className="pl-5 5xl:pl-14">
                  <p className="font-family-secondary text-sm 5xl:text-[15px] text-secondary font-bold leading-normal pb-[7px]">
                    Verifying Review From Trusted Site:{" "}
                  </p>
                  <Image
                    src="/assets/glitz/icons/five_star.png"
                    alt="brand image"
                    height={25}
                    width={165}
                    className="w-auto h-auto"
                  />

                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/soap.png"
                    alt="brand image"
                    height={82}
                    width={82}
                    className="w-[82px] h-[82px] transition-all ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/yelp.png"
                    alt="brand image"
                    height={78}
                    width={117}
                    className="w-[117px] h-[78px] transition-all ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/google.png"
                    alt="brand image"
                    height={78}
                    width={138}
                    className="w-[138px] h-[78px] transition-all ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/facebook.png"
                    alt="brand image"
                    height={78}
                    width={140}
                    className="w-[140px] h-[78px] transition-all ease-in-out duration-300 hover:scale-110"
                  />
                </div>
                <div>
                  <Image
                    src="/assets/glitz/brands/next.png"
                    alt="brand image"
                    height={31}
                    width={196}
                    className="w-auto h-[31px] pr-3 transition-all ease-in-out duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* small device start  */}
        <div className="block md:hidden">
          <div className="brand__bg pt-[8px] pb-[1px]" >
            <div className="flex flex-col justify-center items-center">
              <p className="font-family-secondary text-sm sm:text-base text-secondary text-center font-bold leading-normal pb-[7px]">
                Verifying Review From Trusted Site:{" "}
              </p>
              <div className="w-1/5 ">
              <Image
                src="/assets/glitz/icons/five_star.png"
                alt="brand image"
                height={20}
                width={165}
                className="w-auto h-auto mx-auto "
              />
              </div>
            </div>
            <Swiper
              className=""
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
            >
              
              {slideData.map((slideInfo) => (
                <SwiperSlide key={slideInfo?.id} className={`px-[20px] !h-auto !md:h-full`}>
                  <div className="h-full flex justify-center items-center">
                    <div className="bg-white flex items-center">
                    <Image
                      src={slideInfo?.img}
                      alt="brand image"
                      height={82}
                      width={82}
                      className={dimensions[slideInfo.id] || "w-[82px] h-[82px]"}
                    />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Brand;
