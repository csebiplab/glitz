"use client";
import Link from "next/link";

import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="">
      {/* large device  */}
      <div className="hidden xl:block">
        <div className="footer__bg container py-[60px]">
          <div className="grid grid-cols-8 gap-10 5xl:gap-[54px]">
            {/* first div  */}
            <div className="col-span-2">
              <Image
                src="/assets/glitz/icons/footer_brand_logo.png"
                alt="footer logo"
                width={144}
                height={148}
                className="w-[144px] h-[148px] mx-auto pb-[22px]"
              />
              <p className="text-black text-lg font-bold pb-[5px]">GLITZ FLOORS & MORE</p>
              <p className="text-lg font-bold text-white text-left leading-[30px]">
              If you're in the Cypress area and looking for expert flooring and remodeling services, contact us today.
              </p>
            </div>
            {/* second div  */}
            <div className="col-span-2">
              <p className="text-lg font-bold text-white pb-[17px] leading-[29px]">
                Hours of Operations:
              </p>
              <ul className="text-white">
                <li className="text-base md:text-lg normal text-white leading-[27px]">Monday to Thursday</li>
                <li className="text-base md:text-lg font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 06:00 p.m.
                </li>
                <li className="text-base md:text-lg font-normal text-white leading-[27px]">Friday </li>
                <li className="text-base md:text-lg font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 05:00 p.m.
                </li>
                <li className="text-base md:text-lg font-normal text-white leading-[27px]">Saturday</li>
                <li className="text-base md:text-lg font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 02:00 p.m.
                </li>
              </ul>
              <p className="text-sm font-normal text-white leading-[21px]">
                * We remain open during statutoryholidays and operate as per our
                regular hours.
              </p>
            </div>
            {/* third div  */}
            <div className="col-span-2">
              <div className="">
                <p className="text-lg font-bold text-white pb-[17px] leading-[29px]">
                  Our Services
                </p>
                <ul>
                  <li className="text-base md:text-lg font-normal text-white leading-[27px]">&gt; Flooring Installations</li>
                  <li className="text-base md:text-lg font-normal text-white leading-[27px] py-[14px]">&gt; Kitchen Remodeling</li>
                  <li className="text-base md:text-lg font-normal text-white leading-[27px]">&gt; Bathroom Remodeling</li>
                  <li className="text-base md:text-lg font-normal text-white leading-[27px] py-[14px]">&gt; Interior Painting</li>
                  <li className="text-base md:text-lg font-normal text-white leading-[27px]">&gt; Interior Remodel</li>
                </ul>
              </div>
            </div>

            {/* fourth div  */}
            <div className="col-span-2">
              <ul>
                <li className="flex items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/icons/map.png"
                    alt="map icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="location : 16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                  >
                    16726 Huffmeister Rd <br className="hidden 5xl:block"/> D400, Cypress, TX 77429, <br className="hidden 5xl:block" />{" "}
                    United States
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px] py-[27px]">
                  <Image
                    src="/assets/icons/phone.png"
                    alt="phone icon"
                    width={21}
                    height={21}
                  />
                  <Link className="text-white" href="tel : +1 281-758-5450">
                    +1 281-758-5450
                  </Link>
                </li>
                <li className="flex items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/icons/email.png"
                    alt="email icon"
                    width={21}
                    height={21}
                  />
                  <Link
                    className="text-white"
                    href="mail : info@glitzfloors&more.us"
                  >
                    info@glitzfloors&more.us
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-[30px] pt-[29px]">
                <FaInstagram className="w-[21px] h-[21px]"/>
                <FaTiktok className="w-[21px] h-[21px]"/>
                <FaFacebookF className="w-[21px] h-[21px]"/>
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[17px] container flex justify-between items-center">
          <div className="flex items-center gap-[15px]">
            <p className="text-base font-semibold text-white">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/images/goKundu__fb.png"
              alt="gokundu logo"
              width={141}
              height={36}
            />
          </div>
          <div>
            <p className="text-base font-medium text-white">
              © All Copyright 2024 by GLITZ FLOORS & MORE
            </p>
          </div>
          <div className="flex items-center justify-between gap-[5px]">
            <p className="text-base font-medium text-white">
              Terms & Condition
            </p>
            <p className="text-base font-medium text-white">Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small_footer_image ">
          {/* first div  */}
          <div className="pt-[37px]">
            <Image
              src="/assets/images/footer_logo.png"
              alt="footer logo icon"
              width={228}
              height={65}
              className="w-[228px] h-[65px] mx-auto"
            />
            <p className="text-center pt-[15px] text-lg font-semibold px-[30px]">
              Find the best nail salon in Mississauga for impeccable manicures &
              pedicures. Expert service & stunning results await! Book now.
            </p>
          </div>
          {/* second div  */}
          <div className="pt-[30px]">
            <p className="text-center text-[25px] font-semibold">Navigation</p>
            <ul className="text-center">
              <li className="pt-[20px] pb-[10px] text-lg font-medium">Blogs</li>
              <li className="py-[10px] text-lg font-medium">Contact Us</li>
              <li className="py-[10px] text-lg font-medium">Testimonial</li>
              <li className="py-[10px] text-lg font-medium">Gallery</li>
              <li className="pt-[10px] text-lg font-medium">Sitemap</li>
            </ul>
          </div>
          {/* third div  */}
          <div className="pt-[30px]">
            <p className="text-center text-[25px] font-semibold">Contact Us</p>
            <ul className="text-center ">
              <li className="py-[22px] text-lg font-medium">
                <Link
                  className="text-white"
                  href="location : 1100 Burnhamthorpe Rd W Unit 16, Mississauga, ON L5C 4G4, Canada"
                >
                  1100 Burnhamthorpe Rd W Unit 16, <br /> Mississauga, ON L5C
                  4G4, Canada
                </Link>
              </li>
              <li className="text-lg font-medium">
                <Link className="text-white" href="tel : (905) 973-6669">
                  (905) 973-6669
                </Link>
              </li>
              <li className="pt-[20px] text-lg font-medium">
                <Link
                  className="text-white"
                  href="mail : manager@lavishluxnailsandspa.com"
                >
                  manager@lavishluxnailsandspa.com
                </Link>
              </li>
            </ul>
          </div>
          {/* fourth div  */}
          <div className="pt-[30px] ">
            <div className="border-4 border-primary rounded-lg pt-[17px] pb-[23px] mx-[30px]">
              <p className="text-center text-[25px] font-semibold">
                Open Hours
              </p>
              <span className="flex justify-center pt-[12px] pb-[24px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="318"
                  height="24"
                  viewBox="0 0 318 24"
                  fill="none"
                >
                  <path
                    d="M0.452994 12.4258L12 23.9728L23.547 12.4258L12 0.878776L0.452994 12.4258ZM317.547 12.4258L306 0.878776L294.453 12.4258L306 23.9728L317.547 12.4258ZM12 14.4258H306V10.4258H12V14.4258Z"
                    fill="#C7A43C"
                  />
                </svg>
              </span>
              <p className="text-center text-lg font-medium">
                Mon. ~ Fri. <br /> 10:00am ~ 7:00pm <br /> Sat. <br /> 9:00am ~
                6:00pm <br /> Sun.
                <br /> 11:00am ~ 5:00pm
              </p>
            </div>
          </div>
          {/* fifth div  */}
          <div className="pt-[50px]">
            <div className="border border-white  mx-[30px]" />
            <p className="text-base font-medium pb-[15px] text-white text-center pt-[20px]">
              © All Copyright 2024 by Lavish Lux Nail & Spa
            </p>
            <div className="flex justify-evenly">
              <p className="text-base font-medium text-white">
                Terms & Condition
              </p>
              <p className="text-base font-medium text-white">Privacy Policy</p>
            </div>
          </div>
          {/* footer bottom  */}
          <div className="flex items-center justify-around pt-[21px] pb-[19px] bg-primary mt-[44px]">
            <p className="text-xs font-semibold text-whtie">
              WEBSITE DESIGN AND SEO BY :-
            </p>
            <Image
              src="/assets/images/goKundu__fb.png"
              alt="company logo"
              width={112}
              height={28}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
