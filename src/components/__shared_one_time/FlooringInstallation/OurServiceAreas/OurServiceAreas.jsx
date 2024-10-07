"use client";
import "./area.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/autoplay";

import { SwiperButton } from "./SwiperButton";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const maps = [
  {
    src: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d51725770.05563921!2d-134.7497658!3d37.6940746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x80dd2e92596bf6ef%3A0xd42cd7add5c15410!2sCypress%2C%20CA%2C%20USA!3m2!1d33.8169366!2d-118.03685069999999!5e0!3m2!1sen!2sbd!4v1726928976493!5m2!1sen!2sbd",
    location: "Cypress",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d220877.23149478514!2d-95.7349797591806!3d30.116897075658045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e0!4m0!4m1!2sSpring!5e0!3m2!1sen!2sbd!4v1727066750287!5m2!1sen!2sbd",
    location: "Spring",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126663.29235390289!2d-95.78339360975055!3d30.100210025719495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8640cd9b23065c93%3A0xef63d4775526b925!2sTomball%2C%20TX%2C%20USA!3m2!1d30.0971621!2d-95.6160549!5e0!3m2!1sen!2sbd!4v1727066593822!5m2!1sen!2sbd",
    location: "Tomball",
  },
  {
    src: "https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d220752.58147180665!2d-95.87648474773002!3d30.172592193827583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e0!4m0!4m1!2sMagnolia!5e0!3m2!1sen!2sbd!4v1727066689362!5m2!1sen!2sbd",
    location: "Magnolia",
  },
];

const OurServiceAreas = () => {
  return (
    <div className="container padding__top">
      <div className="">
        <div>
          <div className="mx-auto flex flex-col items-center justify-center">
          <HeadingIcon
                text={headingIconText.servicesArea__headingIconText}
              />

            <div>
              <h2 className="font-family-primary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[25px] text-center">
              Glitz Floors & More Service Areas
              </h2>
            </div>
          </div>

          {/* //   ======================= map Card ==================// */}
          <>
            <div className="">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2000,
                  pauseOnMouseEnter: false,
                  disableOnInteraction: false,
                  stopOnLastSlide: false,
                }}
                speed={4000}
                allowTouchMove={false}
                breakpoints={breakpoints}
                className="!px-8 !xl:px-0"
              >
                {maps.map((loc, i) => (
                  <SwiperSlide
                    key={i}
                    // className="relative  rounded-xl px-[45px]"
                    className="relative rounded-xl px-7 md:px-8 lg:px-0"
                  >
                    <div>
                      <div className="shadow-md p-0 relative">
                        <iframe
                          src={loc?.src}
                          height="325"
                          style={{ border: 0, width: "100%" }}
                          allowFullScreen={false}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="rounded-xl"
                          title={`Google Maps showing the location of our office at ${loc?.location}`}
                        ></iframe>
                        <div className="absolute rounded-xl inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                          <button
                            aria-label="Visit map"
                            className="bg-white py-2 px-4 rounded-lg shadow-md text-gray-800 hover:bg-gray-200 transition duration-300"
                          >
                            Visit Map
                          </button>
                        </div>
                        <p className="font-family-secondary text-base py-4 px-10 bg-primary text-center lg:text-[18px] absolute bottom-0 left-0 right-0 text-white rounded-b-2xl ">
                          {loc?.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className="block lg:hidden">
                  <SwiperButton />
                </div>
              </Swiper>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default OurServiceAreas;
