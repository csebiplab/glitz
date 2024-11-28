import Image from "next/image";
import React from "react";

const NewFloor = () => {
  return (
    <div className="custom-container padding__top">
      <div className="grid grid-cols-1 md:grid-cols-3 mt-[10px]">
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
          <p className="text-[24px] font-normal text-white leading-normal pl-[18px] 3xl:pl-[24px]">
            You Dream It... We Create It
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewFloor;
