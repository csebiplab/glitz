"use client";
import Image from "next/image";
import "./BathroomRemodelInCypressBanner.css";

const BathroomRemodelInCypressBanner = () => {
  return (
    <>
      <div className="hero-section custom-container">
        <div className="md:flex items-center relative">
          <div className="w-full md:w-[50%] pl-3 md:pl-5 lg:pl-10 xl:pl-20 2xl:pl-28 3xl:pl-40 4xl:pl-52 5xl:pl-[285px]">
            <div className="py-14 md:py-0 px-4 md:pl-0">
              <h1 className="leading-normal text-[35px] md:text-[37px] xl:text-[39px] 2xl:text-[41px] 3xl:text-[43px] 4xl:text-[46px] 5xl:text-[50px] text-secondary font-bold text-left">
                Bathroom Remodel <br /> in Cypress, TX
              </h1>
              <p className="text-base lg:text-lg font-normal mb-5 leading-[35px] mt-4 text-secondary">
                Glitz Floors & More offers <strong>premier bathroom remodel</strong> <br className="hidden md:block"/> in Cypress,
                TX, for modern elegance and comfort.
              </p>
              <div className="mb-4 md:mb-0">
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
          <div className="hero-right relative hidden md:block">
            <Image
              width={858}
              height={832}
              src="/assets/glitz/bathroomRemodel/hero__bg.png"
              alt="hero small image"
              className="hero-main-image mb-0"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BathroomRemodelInCypressBanner;
