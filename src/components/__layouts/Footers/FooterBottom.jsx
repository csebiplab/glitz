import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Image from "next/image";

const FooterBottom = () => {
  return (
    <>
      <div className="bg-secondary-800 py-[8px] container">
        <div className="flex justify-between items-center">
          <p className="text-sm 4xl:text-[15px] 5xl:text-base font-bold text-white leading-normal">
            © All Copyright 2024 by GLITZ FLOORS & MORE
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="bg-primary-50 p-2 rounded-full">
              <FaYoutube className="w-[21px] h-[21px]" />
            </div>
            <div className="bg-primary-50 p-2 rounded-full">
              <FaLinkedin className="w-[21px] h-[21px]" />
            </div>
            <div className="bg-primary-50 p-2 rounded-full">
              <FaFacebook className="w-[21px] h-[21px]" />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <p className="text-sm 4xl:text-[15px] 5xl:text-base font-bold text-white leading-normal">
              Terms & Condition
            </p>
            <p className="text-sm 4xl:text-[15px] 5xl:text-base font-bold text-white leading-normal">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
      <div className="bg-secondary-400 flex justify-center items-center gap-[15px] py-1">
        <p className="text-dark-800 text-sm 4xl:text-[15px] 5xl:text-base font-bold leading-normal">
          WEBSITE DESIGN AND SEO BY :-
        </p>
        <Image
          src="/assets/glitz/icons/gokundu.png"
          alt="gokundu logo"
          width={141}
          height={36}
        />
      </div>
    </>
  );
};

export default FooterBottom;
