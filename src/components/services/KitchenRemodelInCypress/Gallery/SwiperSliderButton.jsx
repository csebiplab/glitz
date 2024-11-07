"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const SwiperNavButtons = ({ swiper }) => {
  return (
    <div className="flex flex-row md:flex-col justify-center items-center lg:gap-5 gap-3">
      <div>
        <button
          aria-label="prev"
          onClick={() => swiper?.slidePrev()}
          className="p-3 rounded-full border-2 hover:text-white hover:bg-secondary-50 border-secondary"
        >
          <FaChevronLeft />
          <span className="sr-only">Prev</span>
        </button>
      </div>
      <div>
        <button
          aria-label="next"
          onClick={() => swiper?.slideNext()}
          className="hover:text-secondary hover:bg-white text-white hover:text-black border-2 p-3 bg-secondary rounded-full border-secondary"
        >
          <FaChevronRight />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

