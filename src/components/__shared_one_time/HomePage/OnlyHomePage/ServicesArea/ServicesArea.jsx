"use client";
import { headingIconText } from "@/utils/heading-text";
import "./ServicesArea.css";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

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
    spaceBetween: 30,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
};

const serviceAreaData = [
  {
    id: 1,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56147088.11869144!2d-177.35067335!3d30.804140299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x80dd2e92596bf6ef%3A0xd42cd7add5c15410!2sCypress%2C%20CA%2C%20USA!3m2!1d33.8169366!2d-118.03685069999999!5e0!3m2!1sen!2sbd!4v1732361534416!5m2!1sen!2sbd",
    name: "Cypress",
  },
  {
    id: 2,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55239.96059068274!2d-95.4583599894473!3d30.079934075526474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8640ccc646dfdb4b%3A0x496129fbe4b11b29!2sSpring%2C%20Texas%2077373%2C%20USA!3m2!1d30.0799405!2d-95.41716009999999!5e0!3m2!1sen!2sbd!4v1732361767604!5m2!1sen!2sbd",
    name: "Spring",
  },
  {
    id: 3,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55230.34105023608!2d-95.6572547892429!3d30.097155673312283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8640cd9b23065c93%3A0xef63d4775526b925!2sTomball%2C%20Texas%2C%20USA!3m2!1d30.0971621!2d-95.6160549!5e0!3m2!1sen!2sbd!4v1732361690032!5m2!1sen!2sbd",
    name: "Tomball",
  },
  {
    id: 4,
    url: "https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d220790.17261903858!2d-95.81983859565098!3d30.155805834973776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e0!4m0!4m1!2sMagnolia!5e0!3m2!1sen!2sbd!4v1732361726374!5m2!1sen!2sbd",
    name: "Magnolia",
  },
  {
    id: 5,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d56147088.11869144!2d-177.35067335!3d30.804140299999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x80dd2e92596bf6ef%3A0xd42cd7add5c15410!2sCypress%2C%20CA%2C%20USA!3m2!1d33.8169366!2d-118.03685069999999!5e0!3m2!1sen!2sbd!4v1732361534416!5m2!1sen!2sbd",
    name: "Cypress",
  },
  {
    id: 6,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55239.96059068274!2d-95.4583599894473!3d30.079934075526474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8640ccc646dfdb4b%3A0x496129fbe4b11b29!2sSpring%2C%20Texas%2077373%2C%20USA!3m2!1d30.0799405!2d-95.41716009999999!5e0!3m2!1sen!2sbd!4v1732361767604!5m2!1sen!2sbd",
    name: "Spring",
  },
  {
    id: 7,
    url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d55230.34105023608!2d-95.6572547892429!3d30.097155673312283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x8640cd9b23065c93%3A0xef63d4775526b925!2sTomball%2C%20Texas%2C%20USA!3m2!1d30.0971621!2d-95.6160549!5e0!3m2!1sen!2sbd!4v1732361690032!5m2!1sen!2sbd",
    name: "Tomball",
  },
  {
    id: 8,
    url: "https://www.google.com/maps/embed?pb=!1m19!1m12!1m3!1d220790.17261903858!2d-95.81983859565098!3d30.155805834973776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m4!3e0!4m0!4m1!2sMagnolia!5e0!3m2!1sen!2sbd!4v1732361726374!5m2!1sen!2sbd",
    name: "Magnolia",
  },
];

const ServicesArea = () => {
  const swiperSlide = useRef();
  return (
    <div data-aos="fade-up" className="container padding__top">
      <div className="flex flex-col justify-center items-center pb-[25px]">
        <NewHeadingIcon text={headingIconText.services__headingIconText} />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
          Glitz Floors & More Service Are
        </h2>
      </div>

      <div>
        <Swiper
          ref={swiperSlide}
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          allowTouchMove={true}
          breakpoints={breakpoints}
        >
          {serviceAreaData?.map((location) => {
            return (
              <SwiperSlide key={location?.id}>
                <iframe
                  className="rounded-t-[9px]"
                  src={location?.url}
                  width="300"
                  height="190"
                  style={{ border: 0, width: "100%" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <button className="flex items-center justify-center w-full py-[12px] location__btn__bg text-base font-bold leading-normal text-white">
                <svg className="" xmlns="http://www.w3.org/2000/svg" width="25" height="23" viewBox="0 0 25 23" fill="none">
  <path d="M25 22H1V-7.15256e-07" stroke="white" stroke-width="2"/>
</svg>
                  {location?.name}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="23"
                    viewBox="0 0 25 23"
                    fill="none"
                  >
                    <path d="M0 1H24V23" stroke="white" stroke-width="2" />
                  </svg>
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default ServicesArea;
