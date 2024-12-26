"use client";
import Link from "next/link";

import Image from "next/image";
import "./footer.css";

import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";
import { IoSettingsSharp } from "react-icons/io5";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="font-family-primary">
      {/* large device  */}
      <div className="hidden lg:block">
        <div className="footer__bg container py-[40px] 5xl:py-[60px]">
          <div className="grid grid-cols-8 gap-10 5xl:gap-[54px]">
            {/* first div  */}
            <div className="col-span-2">
              <Image
                src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
                alt="footer logo"
                width={144}
                height={148}
                className="w-full"
              />
              <p className="mt-2 font-family-primary text-base 5xl:text-lg font-normal text-white text-left leading-[30px]">
               If you're in the Cypress area and looking for expert flooring
                and remodeling services, contact us today.
              </p>
            </div>
            {/* second div  */}
            <div className="col-span-2">
              <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg font-bold text-white pb-[15px] 5xl:pb-[17px] leading-[29px]">
                <CiClock2 className="w-[24px] h-[24px]" />
                Hours of Operations:
              </p>
              <ul className="text-white font-family-primary pl-[34px] 5xl:pl-[40px]">
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                  Monday to Thursday
                </li>
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 06:00 p.m.
                </li>
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                  Friday{" "}
                </li>
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 05:00 p.m.
                </li>
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                  Saturday
                </li>
                <li className="text-base 5xl:text-lg font-normal text-white leading-[20px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 02:00 p.m.
                </li>
              </ul>
              <p className="font-family-primary text-sm font-normal text-white leading-[21px] pl-[34px] 5xl:pl-[40px]">
                <span className="text-danger-50">*</span> We remain open during statutoryholidays and operate as per our
                regular hours.
              </p>
            </div>
            {/* third div  */}
            <div className="col-span-2">
              <div className="">
                <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg font-bold text-white pb-[17px] leading-[29px]">
                  <IoSettingsSharp className="w-[24px] h-[24px]" />
                  Our Services
                </p>
                <ul className="font-family-primary pl-[34px] 5xl:pl-[40px]">
                  <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                    &gt; Flooring Installations
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-white leading-[20px] py-[10px] 5xl:py-[14px]">
                    &gt; Kitchen Remodeling
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                    &gt; Bathroom Remodeling
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-white leading-[20px] py-[10px] 5xl:py-[14px]">
                    &gt; Interior Painting
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-white leading-[20px]">
                    &gt; Interior Remodel
                  </li>
                </ul>
              </div>
            </div>

            {/* fourth div  */}
            <div className="col-span-2">
              <ul className="font-family-primary">
                <li className="flex items-start gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[20px]">
                  <FaLocationDot className="w-[24px] h-[24px] mt-2" />
                  <Link
                    className="text-white"
                    href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                  >
                    16726 Huffmeister Rd <br className="hidden xl:block" />{" "}
                    D400, Cypress, TX <br className="hidden xl:block" />
                    77429, United States
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[20px] py-[20px] 5xl:py-[24px]">
                  <FaPhoneVolume className="w-[24px] h-[18px]" />
                  <Link className="text-white" href="tel:(281) 758-5450">
                    (281) 758-5450
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[20px]">
                  <MdOutlineEmail className="w-[24px] h-[24px]" />
                  <Link
                    className="text-white"
                    href="mail:info@glitzfloors&more.us"
                  >
                    info@glitzfloors&more.us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <FooterBottom />
      </div>

      {/* small device  */}
      <div className="block lg:hidden">
        <div className="small_footer_image ">
          {/* first div  */}
          <div className="pt-[35px] px-[30px]">
            <Image
              src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
              alt="footer logo"
              width={144}
              height={148}
              className="w-2/3"
            />
            <p className="font-family-primary text-lg font-normal text-white leading-[30px] pt-2">
              If you're in the Cypress area and looking for expert flooring and
              remodeling services, contact us today.
            </p>
          </div>
          {/* second div  */}
          <div className="pt-[20px] px-[30px]">
            <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg text-center font-bold text-white pb-[17px] leading-[29px]">
              <CiClock2 className="w-[24px] h-[24px]" />
              Hours of Operations:
            </p>
            <ul className="text-white font-family-primary">
              <li className="text-base md:text-lg text-left normal text-white leading-[20px]">
                Monday to Thursday
              </li>
              <li className="text-base md:text-lg text-left font-normal text-white leading-[20px] py-[10px]">
                10:00 am - 06:00 p.m.
              </li>
              <li className="text-base md:text-lg text-left font-normal text-white leading-[20px]">
                Friday{" "}
              </li>
              <li className="text-base md:text-lg text-left font-normal text-white leading-[20px] py-[10px]">
                10:00 am - 05:00 p.m.
              </li>
              <li className="text-base md:text-lg text-left font-normal text-white leading-[20px]">
                Saturday
              </li>
              <li className="text-base md:text-lg text-left font-normal text-white leading-[20px] py-[10px]">
                10:00 am - 02:00 p.m.
              </li>
            </ul>
            <p className="font-family-primary text-sm font-normal text-left text-white leading-[21px]">
              <span className="text-danger-50">*</span> We remain open during <br /> statutoryholidays and operate as{" "}
              <br /> per our regular hours.
            </p>
          </div>
          {/* third div  */}
          <div className="pt-[20px] px-[30px]">
            <div className="">
              <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg text-center font-bold text-white pb-[17px] leading-[29px]">
                <IoSettingsSharp className="w-[24px] h-[24px]" />
                Our Services
              </p>
              <ul className="font-family-primary">
                <li className="text-base md:text-lg text-left font-normal text-white leading-[20px]">
                  &gt; Flooring Installations
                </li>
                <li className="text-base md:text-lg text-left font-normal text-white leading-[20px] py-[10px]">
                  &gt; Kitchen Remodeling
                </li>
                <li className="text-base md:text-lg text-left font-normal text-white leading-[20px]">
                  &gt; Bathroom Remodeling
                </li>
                <li className="text-base md:text-lg text-left font-normal text-white leading-[20px] py-[10px]">
                  &gt; Interior Painting
                </li>
                <li className="text-base md:text-lg text-left font-normal text-white leading-[20px]">
                  &gt; Interior Remodel
                </li>
              </ul>
            </div>
          </div>
          {/* fourth div  */}
          <div className="py-[20px] px-[30px]">
            <ul className="font-family-primary">
              <li className="flex justify-left items-start gap-[14px] text-base 5xl:text-lg font-normal leading-[20px]">
                <FaLocationDot className="w-[24px] h-[24px] mt-2" />
                <Link
                  className="text-white"
                  href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                >
                  16726 Huffmeister Rd <br className="hidden 5xl:block" /> D400,
                  Cypress, TX 77429, <br className="hidden 5xl:block" /> United
                  States
                </Link>
              </li>
              <li className="flex justify-start items-center gap-[14px] text-base 5xl:text-lg font-normal leading-[20px] py-[20px]">
                <FaPhoneVolume className="w-[24px] h-[18px]" />
                <Link className="text-white" href="tel:(281) 758-5450">
                  (281) 758-5450
                </Link>
              </li>
              <li className="flex justify-start items-center gap-[14px] text-base 5xl:text-lg font-normal leading-[20px]">
                <MdOutlineEmail className="w-[24px] h-[24px]" />
                <Link
                  className="text-white"
                  href="mail:info@glitzfloors&more.us"
                >
                  info@glitzfloors&more.us
                </Link>
              </li>
            </ul>
          </div>
          {/* footer bottom  */}
          <div className="bg-secondary-800 py-[6px] container">
            <div className="flex flex-col justify-center items-center gap-[8px] sm:gap-[10px]">
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
          <div className="bg-secondary-400 flex justify-center items-center gap-[10px] py-1">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
