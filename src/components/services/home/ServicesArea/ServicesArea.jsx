import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ServicesArea = () => {
  return (
    <div className="container py-[40px] xl:py-[50px] 5xl:py-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[50px] md:gap-[100px] 5xl:gap-[140px] px-[40px] md:px-[100px]">
        <div className="md:col-span-2">
          <h6 className="text-[24px] 2xl:text-[30px] font-semibold text-center md:text-left text-black leading-[22px] pb-[32px]">
            Service Area
          </h6>
          <ul className=" text-center md:text-left">
            <li className="text-lg font-light text-black leading-[33px]">Glitz Floors & More</li>
            <li className="text-lg font-light text-black leading-[33px] py-[11px]">
              16726 Huffmeister Road, <br />
              D400 <br />
              Cypress, TX 77429
            </li>
            <li className="text-lg font-light text-black leading-[33px] pb-[11px]">(346) 445-6343</li>
            <li className="text-lg font-light text-black leading-[33px]">
              Serving the Cypress, Spring, <br />
              Tomball, Magnolia, Hockley, <br />
              Houston, Conroe, Woodlands, <br />& Pearland areas.
            </li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h6 className="text-[24px] 2xl:text-[30px] text-center md:text-left font-semibold text-black leading-[22px] pb-[32px]">
            Business Hours
          </h6>
          <ul className="text-center md:text-left">
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Monday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] py-[13px]">Tuesday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Wednesday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] py-[13px]">Thursday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Friday <span>10:00AM - 5:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] pt-[13px]">Saturday <span>10:00AM - 2:00PM</span></li>
          </ul>
          
        </div>
        <div className="md:col-span-1">
          <h6 className="text-[24px] 2xl:text-[30px] text-center md:text-left font-semibold text-black leading-[22px] ">
            Social
          </h6>
          <div className="flex items-center justify-center md:justify-start gap-[10px] pt-[36px]">
            <FaFacebook className="w-[27px] h-[27px]"/>
            <FaInstagram className="w-[27px] h-[27px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
