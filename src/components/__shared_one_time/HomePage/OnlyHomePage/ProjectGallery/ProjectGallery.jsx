"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
// import { headingIconText } from '@/utils/heading-text';
// import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const galImgs = [
  "/assets/glitz/newHomePage/gallery/gallery1.png",
  "/assets/glitz/newHomePage/gallery/gallery2.png",
  "/assets/glitz/newHomePage/gallery/gallery3.png",
  "/assets/glitz/newHomePage/gallery/gallery4.png",
  "/assets/glitz/newHomePage/gallery/gallery5.png",
  "/assets/glitz/newHomePage/gallery/gallery6.png",
  "/assets/glitz/newHomePage/gallery/gallery7.png",
  "/assets/glitz/newHomePage/gallery/gallery8.png",
  "/assets/glitz/newHomePage/gallery/gallery9.png",
  
];

const galImgs2 = [
  
  "/assets/glitz/newHomePage/gallery/gallery10.png",
  "/assets/glitz/newHomePage/gallery/gallery11.png",
  "/assets/glitz/newHomePage/gallery/gallery12.png",
  "/assets/glitz/newHomePage/gallery/gallery13.png",
  "/assets/glitz/newHomePage/gallery/gallery14.png",
  "/assets/glitz/newHomePage/gallery/gallery15.png",
  "/assets/glitz/newHomePage/gallery/gallery16.png",
  "/assets/glitz/newHomePage/gallery/gallery17.png",
  "/assets/glitz/newHomePage/gallery/gallery18.png",
];

const ProjectGallery = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setShowAll(true);
  };

  return (
    <div className="">
      <div data-aos="zoom-in" className="custom-container padding__top">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
          {/* <NewHeadingIcon text={headingIconText.gallery__headingIconText}/> */}
          <div className="w-full flex flex-col items-center justify-center">
            <p className="text-base text-black font-normal leading-light">Gallery</p>
            <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
            >
              <path
                d="M1 1L70.0646 1"
                stroke="#040273"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            </div>
          </div>
            <div className="">
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
              Glitz Floors & More Gallery
              </h2>
            </div>
          </div>
        </div>

        {isMobileView ? (
          <div>
            <div className="grid grid-cols-1 gap-2">
              {galImgs
                .slice(0, showAll ? galImgs.length : 4)
                .map((imgUrl, idx) => (
                  <div key={idx} className="m-2 px-6">
                    <Image
                      width={370}
                      height={250}
                      src={imgUrl}
                      alt="gallery"
                      className="object-contain w-full h-auto mx-auto"
                    />
                  </div>
                ))}
            </div>
            {!showAll && (
              <div className="flex justify-center text-center mt-4 px-10">
                <button
                  aria-label="See More"
                  onClick={handleLoadMore}
                  className="w-2/3 flex items-center justify-center gap-2 text-base font-bold px-[41px] py-[15px] bg-primary-50 text-white rounded-[99px]"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                reverseDirection: true,
                stopOnLastSlide: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs.map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              className="sample-slider w-full"
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 0,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
              }}
              speed={4000}
              allowTouchMove={false}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}
            >
              {galImgs2.map((imgUrl, i) => (
                <SwiperSlide key={i} className="m-2">
                  <Image
                    width={360}
                    height={280}
                    src={imgUrl}
                    alt="gallery"
                    className="object-contain w-full h-auto mx-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectGallery;
