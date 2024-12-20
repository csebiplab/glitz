// import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";
// import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const YourDream = () => {
  return (
    <div className="container padding__top">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[10px]">
        <div data-aos="fade-right" className="order-2 md:order-1 md:col-span-3">
          {/* <div className="flex justify-center md:justify-start items-center">
            <NewHeadingIcon text={headingIconText.yourDream__headingIconText} />
          </div> */}

          <div className="w-full flex flex-col items-center md:items-start justify-center">
            <p className="text-black text-base font-light leading-normal">You Dream It... We Create It</p>
            <div className="flex justify-center md:justify-start items-center">
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
          
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-tight">
          Your Trusted Flooring and Remodeling Experts in Cypress, TX
          </h2>
          <p className="text-base 5xl:text-lg leading-[30px] text-black font-light text-center md:text-left mt-[10px]">
            Glitz Floors & More offers top-notch flooring and remodeling
            services in Cypress, TX. With over a decade of experience as a
            leading sales and installation provider, we're your go-to choice for
            all your flooring and remodeling needs. Whether you're upgrading
            your bathroom, transforming your kitchen, or refreshing your home
            with a new coat of paint, our team of experts is here to bring your
            vision to life. Specializing in flooring, bathroom remodeling,
            kitchen remodeling, painting, and small home interior renovations,
            we take pride in delivering exceptional craftsmanship and ensuring
            your complete satisfaction.
          </p>
        </div>
        <div data-aos="fade-left" className="order-1 md:order-2 md:col-span-2 flex items-center justify-end">
          <Image
            src="/assets/glitz/newHomePage/yourDream.png"
            alt="your dream"
            width={550}
            height={393}
            className="w-full h-[345px] 5xl:h-[393px]"
          />
        </div>
      </div>
    </div>
  );
};

export default YourDream;
