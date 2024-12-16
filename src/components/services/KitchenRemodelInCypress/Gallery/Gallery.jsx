"use client";
import React, { useState } from "react";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "./SwiperSliderButton";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  // Add more breakpoints as needed
};

const galleryData1 = [
  "/assets/glitz/bathroomRemodel/gallery/gallery1.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery2.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery3.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery4.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery5.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery6.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery7.jpg",
];
const galleryData2 = [
  "/assets/glitz/bathroomRemodel/gallery/gallery8.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery9.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery10.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery11.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery12.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery13.jpg",
  "/assets/glitz/bathroomRemodel/gallery/gallery14.jpg",
];

const Gallery = () => {
  // State to hold swiper instances
  const [swiper1, setSwiper1] = useState(null);
  const [swiper2, setSwiper2] = useState(null);

  return (
    <div className="container padding__top">
      <div className="flex flex-col items-center justify-center">
        <NewHeadingCenterIcon text={headingIconText.gallery__headingIconText} />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[25px] text-center">
        Gallery Of Kitchen Remodel in Cypress, TX
        </h2>
      </div>
      {/* gallery image */}
      <div className="grid grid-cols-1 md:grid-cols-9 gap-5">
        <div className="md:col-span-4">
          {/* Swiper Slider 1 */}
          <Swiper
            onSwiper={setSwiper1} // Set the swiper instance
            // modules={[Autoplay]}
            loop={true}
            // autoplay={{
            //   delay: 3000,
            //   pauseOnMouseEnter: false,
            //   disableOnInteraction: false,
            //   stopOnLastSlide: false,
            // }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={12}
          >
            {galleryData1.map((img, index) => (
              <SwiperSlide key={index} className="!w-full !h-auto !md:h-full">
                <Image
                  width={615}
                  height={440}
                  src={img}
                  alt="hero small image"
                  className="w-[615px] h-[350px] 2xl:h-[440px] rounded-t-[16px]"
                />
                <p className="rounded-b-[16px] bg-[#905C4C] py-[12px] 5xl:py-[16px] text-center text-white text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold leading-normal">Before</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* swiper slider button */}
        <div className="md:col-span-1 h-full flex justify-center items-center">
          <SwiperNavButtons swiper={swiper1}/>
        </div>
        <div className="md:col-span-4">
          {/* Swiper Slider 2 */}
          <Swiper
            onSwiper={setSwiper2} // Set the swiper instance
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
            {galleryData2.map((img, index) => (
              <SwiperSlide key={index} className="!w-full !h-auto !md:h-full">
                <p className="rounded-t-[16px] bg-[#905C4C] py-[12px] 5xl:py-[16px] text-center text-white text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold leading-normal mt-1">After</p>
                <Image
                  width={615}
                  height={440}
                  src={img}
                  alt="hero small image"
                  className="w-[615px] h-[350px] 2xl:h-[440px] rounded-b-[16px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

