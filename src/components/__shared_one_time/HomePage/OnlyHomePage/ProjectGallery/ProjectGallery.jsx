"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const galImgs = [
  "/assets/glitz/newHomePage/gallery/gallery1.png",
  "/assets/glitz/newHomePage/gallery/gallery2.png",
  "/assets/glitz/newHomePage/gallery/gallery3.png",
  "/assets/glitz/newHomePage/gallery/gallery4.png",
  "/assets/glitz/newHomePage/gallery/gallery5.png",
  "/assets/glitz/newHomePage/gallery/gallery6.png",
  "/assets/glitz/newHomePage/gallery/gallery7.png",
  
];

const galImgs2 = [
  "/assets/glitz/newHomePage/gallery/gallery8.png",
  "/assets/glitz/newHomePage/gallery/gallery9.png",
  "/assets/glitz/newHomePage/gallery/gallery10.png",
  "/assets/glitz/newHomePage/gallery/gallery1.png",
  "/assets/glitz/newHomePage/gallery/gallery2.png",
  "/assets/glitz/newHomePage/gallery/gallery3.png",
  "/assets/glitz/newHomePage/gallery/gallery4.png",
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
          <NewHeadingIcon text={headingIconText.gallery__headingIconText}/>
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
                  className="w-2/3 flex items-center justify-center gap-2 text-base font-bold px-[41px] py-[15px] bg-primary-700 text-white rounded-[8px]"
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                  >
                    <path
                      d="M1 5.22461C0.585786 5.22461 0.25 5.5604 0.25 5.97461C0.25 6.38882 0.585786 6.72461 1 6.72461V5.22461ZM21.5303 6.50494C21.8232 6.21205 21.8232 5.73717 21.5303 5.44428L16.7574 0.671309C16.4645 0.378415 15.9896 0.378415 15.6967 0.671309C15.4038 0.964202 15.4038 1.43908 15.6967 1.73197L19.9393 5.97461L15.6967 10.2172C15.4038 10.5101 15.4038 10.985 15.6967 11.2779C15.9896 11.5708 16.4645 11.5708 16.7574 11.2779L21.5303 6.50494ZM1 6.72461H21V5.22461H1V6.72461Z"
                      fill="white"
                    />
                  </svg>
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
