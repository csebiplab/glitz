import React from "react";
import "./Banner.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="banner__bg container py-[62px] md:py-[75px] lg:py-[88px] xl:py-[101px] 2xl:py-[114px] 3xl:py-[127px] 4xl:py-[140px] 5xl:py-[158px]">
      <div className=" h-full flex flex-col items-start justify-center">
        <h1 className="text-[30px] md:text-[33px] lg:text-[36px] xl:text-[39px] 2xl:text-[41px] 3xl:text-[44px] 4xl:text-[47px] 5xl:text-[50px] font-extrabold italic text-white leading-normal">
          Refresh Your Home <br />
          This Summer
        </h1>
        <p className="text-lg font-normal text-white leading-[35px]">
          Flooring & Remodeling Services in Cypress, TX
        </p>
        <div className="mt-[35px]">
          <button className="btn_bg flex items-center gap-[17px] py-[14px] pl-[31px] pr-[9px] text-base font-bold text-white leading-[21px]">
            <Link className="text-white" href="tel:647-449-9512">
              Get Consultant
            </Link>
            <svg
            className="p-[10px] rounded-[15px] bg-white"
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
            >
              <g clipPath="url(#clip0_335_4982)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.88144 2.02197V2.784H4.74339H7.60534L4.36249 6.027L1.11963 9.26999L1.66007 9.81046L2.2005 10.3508L5.4435 7.10801L8.68649 3.86515V6.7271V9.58905H9.44851H10.2105V5.4245V1.25995H6.04599H1.88144V2.02197Z"
                  fill="#0F59A5"
                />
              </g>
              <defs>
                <clipPath id="clip0_335_4982">
                  <rect
                    width="10"
                    height="10"
                    fill="white"
                    transform="translate(0.359863 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
