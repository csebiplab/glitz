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
                    src="/assets/glitz/icons/map.png"
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
                    src="/assets/glitz/icons/phone.png"
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
                    src="/assets/glitz/icons/email.png"
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
              src="/assets/glitz/icons/gokundu.png"
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
          <div className="pt-[45px] px-[30px]">
          <Image
                src="/assets/glitz/icons/footer_brand_logo.png"
                alt="footer logo"
                width={144}
                height={148}
                className="w-[144px] h-[148px] mx-auto pb-[22px]"
              />
              <p className="text-black text-lg font-bold pb-[5px] text-center">GLITZ FLOORS & MORE</p>
              <p className="text-lg font-bold text-white text-left leading-[30px] text-center">
              If you're in the Cypress area and looking for expert flooring and remodeling services, contact us today.
              </p>
          </div>
          {/* second div  */}
          <div className="pt-[28px] px-[30px]">
          <p className="text-lg text-center font-bold text-white pb-[17px] leading-[29px]">
                Hours of Operations:
              </p>
              <ul className="text-white">
                <li className="text-base md:text-lg text-center normal text-white leading-[27px]">Monday to Thursday</li>
                <li className="text-base md:text-lg text-center font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 06:00 p.m.
                </li>
                <li className="text-base md:text-lg text-center font-normal text-white leading-[27px]">Friday </li>
                <li className="text-base md:text-lg text-center font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 05:00 p.m.
                </li>
                <li className="text-base md:text-lg text-center font-normal text-white leading-[27px]">Saturday</li>
                <li className="text-base md:text-lg text-center font-normal text-white leading-[27px] py-[14px]">
                  10:00 am - 02:00 p.m.
                </li>
              </ul>
              <p className="text-sm font-normal text-center text-white leading-[21px]">
                * We remain open during statutoryholidays and operate as per our
                regular hours.
              </p>
          </div>
          {/* third div  */}
          <div className="pt-[28px] px-[30px]">
          <div className="">
                <p className="text-lg text-center font-bold text-white pb-[17px] leading-[29px]">
                  Our Services
                </p>
                <ul>
                  <li className="text-base md:text-lg text-center font-normal text-white leading-[27px]">&gt; Flooring Installations</li>
                  <li className="text-base md:text-lg text-center font-normal text-white leading-[27px] py-[14px]">&gt; Kitchen Remodeling</li>
                  <li className="text-base md:text-lg text-center font-normal text-white leading-[27px]">&gt; Bathroom Remodeling</li>
                  <li className="text-base md:text-lg text-center font-normal text-white leading-[27px] py-[14px]">&gt; Interior Painting</li>
                  <li className="text-base md:text-lg text-center font-normal text-white leading-[27px]">&gt; Interior Remodel</li>
                </ul>
              </div>
          </div>
          {/* fourth div  */}
          <div className="pt-[28px] px-[30px]">
          <ul className="">
                <li className="flex justify-center items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/glitz/icons/map.png"
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
                <li className="flex justify-center items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px] py-[27px]">
                  <Image
                    src="/assets/glitz/icons/phone.png"
                    alt="phone icon"
                    width={21}
                    height={21}
                  />
                  <Link className="text-white" href="tel : +1 281-758-5450">
                    +1 281-758-5450
                  </Link>
                </li>
                <li className="flex justify-center items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/glitz/icons/email.png"
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
              <div className="flex justify-center items-center gap-[30px] pt-[29px]">
                <FaInstagram className="w-[21px] h-[21px]"/>
                <FaTiktok className="w-[21px] h-[21px]"/>
                <FaFacebookF className="w-[21px] h-[21px]"/>
              </div>
          </div>
          {/* fifth div  */}
          <div className="pt-[50px]">
            <div className="border border-white  mx-[30px]" />
            <p className="text-base font-medium pb-[15px] text-white text-center pt-[20px]">
            © All Copyright 2024 by GLITZ FLOORS & MORE
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
              src="/assets/glitz/icons/gokundu.png"
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
