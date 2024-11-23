"use client";
import HeadingIcon from '@/components/__ui/HeadingIcon';
import { headingIconText } from '@/utils/heading-text';

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
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

const reviewData = [
  {
    id: 1,
    sort_name: "S",
    name: "Steven Norris",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "I can't say enough about Glitz Floors and More. From start to finish Zaid, our salesman, was great. He was informative, proactive, helpful, attentive, caring, and patient - Never pushy.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 2,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 3,
    sort_name: "S",
    name: "Suchithra Nagarajan",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "We had our entire downstairs flooring redone with Glitz Floors and More. We also had the walls of the kitchen, dining room and study painted. We had them sand and paint the kitchen cabinets and also replace the hinges and knobs.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  
  {
    id: 4,
    sort_name: "S",
    name: "Steven Norris",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "I can't say enough about Glitz Floors and More. From start to finish Zaid, our salesman, was great. He was informative, proactive, helpful, attentive, caring, and patient - Never pushy.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 5,
    sort_name: "L",
    name: "Lauren McKinley",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "Karim and his team are absolutely phenomenal. They were the perfect crew to work with to modernize our 90s home. They put in new floors and completed painting throughout the house.  Their professionalism is top-notch.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  {
    id: 6,
    sort_name: "S",
    name: "Suchithra Nagarajan",
    star: "/assets/glitz/newHomePage/orange_small_start.png",
    date: "31 August 2024",
    review:
      "We had our entire downstairs flooring redone with Glitz Floors and More. We also had the walls of the kitchen, dining room and study painted. We had them sand and paint the kitchen cabinets and also replace the hinges and knobs.",
    g: "/assets/glitz/newHomePage/g.png",
    post: "Posted on",
    google: "Google",
  },
  
];

const Review = () => {
  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center"
        className="container padding__top"
      >
        <div className="flex flex-col justify-center items-center pb-[25px]">
        <HeadingIcon text={headingIconText.review__headingIconText}/>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Glitz Floors & More Review
          </h2>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-4 gap-[35px]">
            {/* <div className="hidden md:block md:col-span-1">
              <Image
                src="/assets/primeBasementHomePage/review_location.png"
                alt="glitz floor map"
                width={306}
                height={655}
                className="h-full"
              />
            </div> */}
            <div className="md:col-span-4 right__side__bg py-[30px] md:py-[15px] px-[7px] md:px-[30px]">
              {/* medium device  */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between">
                  {/* left side  */}
                  <div>
                    {/* first div  */}
                    <div className="flex items-center gap-[10px]">
                      <Image
                        src="/assets/glitz/newHomePage/google.png"
                        alt="google logo"
                        width={198}
                        height={67}
                        className="w-[198px] h-[67px]"
                      />
                      <p className="font-family-secondary text-[35px] font-normal text-black leading-normal">
                        {" "}
                        Rating
                      </p>
                    </div>
                    {/* second div  */}
                    <div className="flex items-center gap-[15px] pt-[7px]">
                      <p className="font-family-secondary text-[25px] font-normal text-black leading-normal">
                        5.0
                      </p>
                      <Image
                        src="/assets/glitz/newHomePage/orange_five_star.png"
                        alt="five star icon"
                        width={152}
                        height={23}
                        className="w-[152px] h-[23px]"
                      />
                      <p className="font-family-secondary text-base font-bold text-dark-300 leading-normal">
                        70 Reviews
                      </p>
                    </div>
                  </div>
                  {/* right side  */}
                  <div>
                    <button className="btn__bg_review text-lg font-normal text-white leading-normal py-[15px] px-[51px]">
                      <Link
                        className="font-family-secondary text-white"
                        href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.447281997168!2d-95.679383325182!3d29.99531067494835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1732205338949!5m2!1sen!2sbd"
                        rel="nofollow"
                        target="_blank"
                      >
                        Write a Review
                      </Link>
                    </button>
                  </div>
                </div>
              </div>

              {/* small device  */}
              <div className="block md:hidden flex flex-col items-center justify-between">
                {/* left side  */}
                <div>
                  {/* first div  */}
                  <div className="flex items-center gap-[10px]">
                    <Image
                      src="/assets/glitz/newHomePage/google.png"
                      alt="google logo"
                      width={198}
                      height={67}
                      className="w-[198px] h-[67px]"
                    />
                    <p className="font-family-secondary text-[35px] font-normal text-black leading-normal">
                      {" "}
                      Rating
                    </p>
                  </div>
                  {/* second div  */}
                  <div className="flex items-center gap-[15px] pt-[7px]">
                    <p className="font-family-secondary text-[25px] font-normal text-black leading-normal">
                      5.0
                    </p>
                    <Image
                      src="/assets/glitz/newHomePage/orange_five_star.png"
                      alt="five star icon"
                      width={152}
                      height={23}
                      className="w-[152px] h-[23px]"
                    />
                    <p className="font-family-secondary text-base font-bold text-dark-300 leading-normal">
                      70 Reviews
                    </p>
                  </div>
                </div>
                {/* right side  */}
                <div className="py-[30px]">
                  <button className="btn__bg_review text-lg font-normal text-white leading-normal py-[15px] px-[51px]">
                    <Link
                      className="font-family-secondary text-white"
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.447281997168!2d-95.679383325182!3d29.99531067494835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1732205338949!5m2!1sen!2sbd"
                      rel="nofollow"
                      target="_blank"
                    >
                      Write a Review
                    </Link>
                  </button>
                </div>
              </div>

              {/* review data  */}
              <div className="pt-[15px] pb-[20px]">
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
                      className={` px-[12px] md:pl-[20px] py-[15px] !h-auto !md:h-full`}
                    >
                      <div className="px-2">
                        <div className="flex items-center gap-[10px]">
                          <p className="font-family-secondary bg-secondary-500 py-[3px] px-[15px] rounded-[50px] text-white text-[25px] font-normal text-white leading-normal">
                            {data.sort_name}
                          </p>
                          <div>
                            <p className="font-family-secondary text-lg font-bold text-black leading-normal">
                              {data.name}
                            </p>
                            <div className="flex items-center gap-[10px]">
                              <Image
                                src={data.star}
                                alt="star icon"
                                width={102}
                                height={15}
                              />
                              <p className="font-family-secondary text-xs text-dark-300 font-bold leading-normal">
                                {data.date}
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className="font-family-secondary py-[15px] text-base font-normal text-black leading-normal">
                          {data.review}
                        </p>
                        <div className="flex items-center gap-[5px]">
                          <Image
                            src={data.g}
                            alt="google icon"
                            width={41}
                            height={41}
                          />
                          <div>
                            <p className="font-family-secondary text-sm font-normal text-dark-400 leading-normal">
                              {data.post}
                            </p>
                            <p className="font-family-secondary text-lg font-normal text-dark-500 leading-normal">
                              {data.google}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* iframe part  */}
              <div>
                <iframe
                  className="w-full h-[232px] md:h-[241px] mx-auto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.447281997168!2d-95.679383325182!3d29.99531067494835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1732205338949!5m2!1sen!2sbd"
                  width="854"
                  height="241"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
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
