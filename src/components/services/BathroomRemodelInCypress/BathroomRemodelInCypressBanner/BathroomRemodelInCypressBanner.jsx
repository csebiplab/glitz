"use client";
import Image from "next/image";
import "./BathroomRemodelInCypressBanner.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // 768: {
  //   slidesPerView: 2,
  //   spaceBetween: 20,
  // },
  // 1024: {
  //   slidesPerView: 2,
  //   spaceBetween: 20,
  // },
};

const bannerimages = [
  "/assets/glitz/images/hero_bg1.png",
  "/assets/glitz/images/hero_bg2.png",
  "/assets/glitz/images/hero_bg3.png",
  "/assets/glitz/images/hero_bg4.png",
];

const BathroomRemodelInCypressBanner = () => {
  return (
    <>
      <div className="hero-section full__section_l_p">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="font-family-secondary leading-normal text-[38px] md:text-[40px] lg:text-[42px] xl:text-[44px] 2xl:text-[46px] 3xl:text-[48px] 4xl:text-[49px] 5xl:text-[50px] font-bold text-left text-secondary ">
              Bathroom Remodel <br/> in Cypress, TX
              </h1>
              <p className="font-family-secondary leading-9 text-lg font-normal text-black pt-[5px] pb-[35px]">
              Glitz Floors & More offers <strong>premier bathroom remodel </strong> <br/>
              in Cypress, TX, for modern elegance and comfort.
              </p>
              <a href="tel:(281) 758-5450">
                <div className="">
                  <button className="flex items-center gap-2 font-family-secondary text-lg font-bold leading-normal text-primary btn_bg p-[17px]">
                  Get Free Quote <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
                  <path d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75Z" fill="#905C4C"/>
                </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-right relative hidden md:block">
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
                {bannerimages.map((img, index) => (
                  <SwiperSlide key={index} className={`!w-full !h-auto !md:h-full`}>
                    <Image
                      width={944}
                      height={625}
                      src={img}
                      alt="hero small image"
                      className="hero-main-image mb-0 w-[944px] xl:h-[500px] 5xl:h-[625px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BathroomRemodelInCypressBanner;
