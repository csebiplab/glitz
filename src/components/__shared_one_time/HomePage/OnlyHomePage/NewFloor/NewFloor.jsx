import Image from "next/image";
import React from "react";

const NewFloor = () => {
  return (
    <div className="custom-container padding__top">
      <div
        data-aos="zoom-in"
        className="grid grid-cols-1 md:grid-cols-3 mt-[10px]"
      >
        <div className="full__section_l_p md:col-span-1 bg-secondary-800 flex justify-center items-center">
          <p className="text-[24px] text-center md:text-left font-normal text-white leading-normal pr-[30px] 3xl:pr-[40px] py-4 md:py-2">
            Get new floors with{" "}
            <span className="font-bold">0% Interest Financing!</span> Pay over
            time with easy monthly payments. <strong>Ask us today!</strong>
          </p>
        </div>
        <div className="md:col-span-1 ">
          <Image
            className="w-full h-full"
            src="/assets/glitz/newHomePage/You Dream It... We Create It.png"
            alt="floor now"
            width={628}
            height={260}
          />
        </div>
        <div className="md:full__section_r_p md:col-span-1 bg-secondary-800 flex justify-center items-center py-[25px] md:py-1">
          <p className="flex items-center text-[24px] font-normal text-white leading-normal pl-[18px] 3xl:pl-[24px]">
            <svg
              className="-mr-8"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
            >
              <path d="M39.5 34.5H1V0.5" stroke="white" stroke-width="2" />
            </svg>{" "}
            You Dream It... We Create It{" "}
            <svg
              className="-ml-8"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="36"
              viewBox="0 0 40 36"
              fill="none"
            >
              <path d="M0 1.5H38.5V35.5" stroke="white" stroke-width="2" />
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFloor;
