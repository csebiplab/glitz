"use client";
import Image from "next/image";
import "./KitchenRemodelInCypressBanner.css";

const KitchenRemodelInCypressBanner = () => {
  return (
    <>
      <div className="custom-container py-12">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[60%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="text-[34px] md:text-[37px] lg:text-[40px] xl:text-[43px] 2xl:text-[46px] 3xl:text-[49px] 4xl:text-[52px] 5xl:text-[55px] leading-[48px] 5xl:leading-[60px] font-bold text-left text-dark">
                Kitchen Remodel <br/> in Cypress
              </h1>
              <p className="text-[20px] font-semibold leading-6 mt-[5px] text-dark">
                Transform your home with a stunning{" "}
                <strong>kitchen remodel</strong> in Cypress by Glitz Floors &
                More, where elegance meets functionality.
              </p>
              <div className="mt-[35px] md:mt-[40px] xl:mt-[45px] 3xl:mt-[50px] 5xl:mt-[55px]">
                <a href="tel:(281) 758-5450">
                  <div className="">
                    <button className="flex items-center gap-2 font-family-secondary text-lg font-bold leading-normal text-primary btn_bg p-[17px]">
                      Get Free Quote{" "}
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
                </a>
              </div>
            </div>
          </div>
          <div className="hero__right__markham relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/glitz/kitchenRemodel/hero__bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default KitchenRemodelInCypressBanner;