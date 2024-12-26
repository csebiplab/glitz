import React from "react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="relative w-full h-[375px] md:h-[460px] lg:h-[475px] xl:h-[490px] 2xl:h-[505px] 3xl:h-[520px] 4xl:h-[535px] 5xl:h-[549px] overflow-hidden">
        <div className="hidden md:block">
          <Image
            src="/assets/glitz/newHomePage/lg_hero.png"
            alt="Banner Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="block md:hidden">
          <Image
            src="/assets/glitz/newHomePage/sm_hero.png"
            alt="Small Banner Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="container absolute inset-0 flex flex-col items-start justify-center">
          <h1 className="font-family-secondary text-[30px] md:text-[33px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] 3xl:text-[44px] 4xl:text-[47px] 5xl:text-[50px] font-extrabold italic text-white leading-normal px-[10px] md:px-0">
            Refresh Your Home <br />
            This Summer
          </h1>
          <p className="text-lg font-normal text-white leading-[35px] px-[10px] md:px-0">
            Flooring & Remodeling Services in Cypress, TX
          </p>
          <div className="mt-[35px] md:mt-[30px] xl:mt-[30px] 5xl:mt-[35px] px-[10px] md:px-0">
            <button className="rounded-full bg-[#005799] shadow-lg flex items-center gap-[17px] py-[14px] pl-[31px] pr-[9px] text-base font-bold text-white">
              <Link className="text-white" href="tel:647-449-9512">
                Get Consultant
              </Link>
              <Image
                className="p-2 rounded-full bg-white w-[24px] h-[24px]"
                src="/assets/glitz/newHomePage/icons/banner_btn_arrow.png"
                alt="arrow icon"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
