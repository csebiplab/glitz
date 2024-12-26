import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";
import "./BestFlooring.css";
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const BestFlooring = () => {
  return (
    <div className="bg__color">
      <div className="full__section_r_p pl-3 md:pl-0 pt-[19px] pb-[14px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
          <div className="md:col-span-1">
            <Image
              src="/assets/glitz/images/about_us.png"
              alt="about us"
              width={901}
              height={780}
              className="h-[565px] 5xl:h-[600px]"
            />
          </div>
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start items-center">
              <NewHeadingIcon
                text={headingIconText.bestFlooring__headingIconText}
              />
            </div>
            <div className="">
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                Best Flooring in Cypress
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                We offer an extensive range of high-quality flooring options to
                suit any style and budget, including elegant hardwood, durable
                laminate, versatile tile, and luxurious vinyl. Our team is
                dedicated to helping you find the perfect flooring solution that
                complements your home or business while meeting your practical
                needs. Experience the best in flooring with Glitz Floors &
                More—where quality, style, and customer satisfaction come
                together seamlessly. At Glitz Floors & More, we understand that
                choosing the right flooring is crucial for both functionality
                and aesthetics. That's why we offer personalized consultations
                to guide you through our extensive selection, ensuring you find
                the perfect match for your space. Our expert installers bring
                years of experience to each project, guaranteeing precise
                installation and a flawless finish. Whether you're enhancing the
                elegance of your home or upgrading a commercial space, our
                commitment to quality and attention to detail set us apart.
              </p>
              <div className="flex justify-start items-center gap-[25px] 5xl:gap-[35px] pt-[20px] xl:pt-[30px] 5xl:pt-[40px]">
                <div className="">
                  <button className="flex items-center gap-[5px] text-base md:text-lg font-bold md:font-normal text-primary leading-normal best_flooring_btn_bg px-[10px] md:px-[30px] 5xl:px-[35px] py-[14px] md:py-[17px]">
                    Contact Us{" "}
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
                <p className=" text-base font-bold text-black leading-normal">
                  Or
                </p>
                <Image
                  src="/assets/glitz/flooring/flooring_btn.png"
                  alt="flooring btn image"
                  width={140}
                  height={55}
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestFlooring;
