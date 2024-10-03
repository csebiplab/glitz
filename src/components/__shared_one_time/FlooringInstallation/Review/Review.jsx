"use client";

import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./Review.css";
import Link from "next/link";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 65,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 65,
  },
  1024: {
    slidesPerView: 2,
    spaceBetween: 65,
  },
};

const reviewData = [
  {
    id: 1,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/icons/orange_small_start.png",
    date: "02 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/icons/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 2,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/icons/orange_small_start.png",
    date: "02 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/icons/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 3,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/icons/orange_small_start.png",
    date: "02 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/icons/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 4,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/icons/orange_small_start.png",
    date: "02 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/icons/g.png",
    post: "Posted on",
    google: "Google",
  },
];

const Review = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col justify-center items-center pb-[25px]">
          <HeadingIcon text={headingIconText.review__headingIconText} />
          <h2 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center">
            Reviews for Our Flooring Installation
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[35px]">
            <div className="md:col-span-1">
              <Image
                src="/assets/glitz/images/glitz_floor_map.png"
                alt="glitz floor map"
                width={306}
                height={655}
              />
            </div>
            <div className="md:col-span-3 right__side__bg py-[15px] px-[30px]">
              <div className="flex items-center justify-between">
                {/* left side  */}
                <div>
                  {/* first div  */}
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src="/assets/glitz/icons/google.png"
                      alt="google logo"
                      width={198}
                      height={67}
                      className="w-[198px] h-[67px]"
                    />
                    <p className="text-[35px] font-normal text-black leading-normal">
                      {" "}
                      Rating
                    </p>
                  </div>
                  {/* second div  */}
                  <div className="flex items-center gap-[15px] pt-[7px]">
                    <p className="text-[25px] font-normal text-black leading-normal">
                      5.0
                    </p>
                    <Image
                      src="/assets/glitz/icons/orange_five_star.png"
                      alt="five star icon"
                      width={152}
                      height={23}
                      className="w-[152px] h-[23px]"
                    />
                    <p className="text-base font-bold text-dark-300 leading-normal">
                      70 Reviews
                    </p>
                  </div>
                </div>
                {/* right side  */}
                <div>
                  <button className="btn__bg_review text-lg font-normal text-white leading-normal py-[15px] px-[51px]">
                    <Link
                      className="text-white"
                      href="https://www.google.com/maps/place/Glitz+Floors+%26+More/@29.9959279,-95.6764372,18z/data=!4m6!3m5!1s0x8640d57b61c6fd8d:0x2ba2182f0ab40249!8m2!3d29.9953107!4d-95.6768084!16s%2Fg%2F11ks0hzyn5?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D"
                      rel="nofollow"
                      target="_blank"
                    >
                      Write a Review
                    </Link>
                  </button>
                </div>
              </div>

              {/* review data  */}
              <div className="pt-[50px] pb-[30px]">
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
                  {reviewData.map((data) => (
                    <SwiperSlide
                      key={data.id}
                      className={`px-[30px] md:px-0 py-[15px] !h-auto !md:h-full`}
                    >
                      <div className="px-2">
                        <div className="flex items-center gap-[10px]">
                          <p className="bg-secondary-500 py-[3px] px-[15px] rounded-[50px] text-white text-[25px] font-normal text-white leading-normal">
                            {data.sort_name}
                          </p>
                          <div>
                            <p className="text-lg font-bold text-black leading-normal">{data.name}</p>
                            <div className="flex items-center gap-[10px]">
                              <Image
                                src={data.star}
                                alt="star icon"
                                width={102}
                                height={15}
                              />
                              <p className="text-xs text-dark-300 font-bold leading-normal">{data.date}</p>
                            </div>
                          </div>
                        </div>

                        <p className="py-[15px] text-base font-normal text-black leading-normal">{data.review}</p>
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={data.g}
                            alt="google icon"
                            width={41}
                            height={41}
                          />
                          <div>
                            <p className="text-sm font-normal text-dark-400 leading-normal">{data.post}</p>
                            <p className="text-lg font-normal text-dark-500 leading-normal">{data.google}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* {reviewData?.map((data) => {
                  return (
                    <div key={data.id}>
                      <div>
                        <div className="flex items-center gap-[10px]">
                          <p className="bg-secondary-500 py-[3px] px-[15px] rounded-[50px] text-white text-[25px] font-normal text-white leading-normal">{data.sort_name}</p>
                          <div>
                            <p>{data.name}</p>
                            <div className="flex items-center gap-[10px]">
                              <Image
                                src={data.star}
                                alt="star icon"
                                width={102}
                                height={15}
                              />
                              <p>{data.date}</p>
                            </div>
                          </div>
                        </div>

                        <p>{data.review}</p>
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={data.g}
                            alt="google icon"
                            width={41}
                            height={41}
                          />
                          <div>
                            <p>{data.post}</p>
                            <p>{data.google}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })} */}
              </div>

              {/* iframe part  */}
              <div>
                <iframe
                  className="w-[650px] 5xl:w-[854px] h-[241px] mx-auto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.447120258608!2d-95.67938332584252!3d29.995315320899294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1727966194157!5m2!1sen!2sbd"
                  width="854"
                  height="241"
                  allowFullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
