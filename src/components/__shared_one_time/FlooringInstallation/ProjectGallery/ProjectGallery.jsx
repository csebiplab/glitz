"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./ProjectGallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const galImgs = [
  "/assets/glitz/gallery/gallery1.png",
  "/assets/glitz/gallery/gallery2.png",
  "/assets/glitz/gallery/gallery3.png",
  "/assets/glitz/gallery/gallery4.png",
  "/assets/glitz/gallery/gallery5.png",
  "/assets/glitz/gallery/gallery6.png",
];

const galImgs2 = [
  "/assets/glitz/gallery/gallery7.png",
  "/assets/glitz/gallery/gallery8.png",
  "/assets/glitz/gallery/gallery9.png",
  "/assets/glitz/gallery/gallery10.png",
  "/assets/glitz/gallery/gallery11.png",
  "/assets/glitz/gallery/gallery12.png",
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
    <div className="bg_swimmingPool">
      <div className="custom-containe padding__top">
        <div className="container">
          <div className="flex flex-col justify-center items-center">
            <HeadingIcon text={headingIconText.gallery__headingIconText} />
            <div className="pb-5">
              <h2 className="text-black text-[32px] md:text-[33px] xl:text-[34px] 2xl:text-[36px] 3xl:text-[38px]4xl:text-[40px] 5xl:text-[42px] font-bold text-center">
                Gallery of Our Past Projects
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
                  className="btn__bg flex items-center justify-center gap-[5px] text-sm font-bold py-[16px] px-[41px] bg-secondary-700 text-primary"
                >
                  See More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75Z"
                      fill="#905C4C"
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
