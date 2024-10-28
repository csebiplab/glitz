"use client";
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
                Remodeling & <br />
                Flooring Installation <br />
                in Cypress, TX
              </h1>
              <p className="font-family-secondary leading-9 text-lg font-normal text-black pt-[5px] pb-[35px]">
                Glitz Floors & More provides professional{" "}
                <b>remodeling and flooring</b> installation in Cypress, TX,
                delivering exceptional results for every project.
              </p>
              <a href="tel:(281) 758-5450">
                <div className="">
                  <button className="font-family-secondary text-lg font-normal text-primary btn_bg p-[17px]">
                    Get Free Quote
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
