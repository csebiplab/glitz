"use client";
import Link from "next/link";

import Image from "next/image";
import "./footer.css";

const socialIons = [
  "/assets/glitz/images/instragram.png",
  "/assets/glitz/images/twitter.png",
  "/assets/glitz/images/facebook.png"
]

const Footer = () => {
  return (
    <footer className="">
      {/* large device  */}
      <div className="hidden xl:block">
        <div className="footer__bg container py-[40px] 5xl:py-[60px]">
          <div className="grid grid-cols-8 gap-10 5xl:gap-[54px]">
            {/* first div  */}
            <div className="col-span-2">
              <Image
                src="/assets/glitz/logo/nav_logo.png"
                alt="footer logo"
                width={144}
                height={148}
                className="w-full"
              />
              <p className="font-family-primary text-base 5xl:text-lg font-normal text-black text-left leading-[30px]">
                If you're in the Cypress area and looking for expert flooring
                and remodeling services, contact us today.
              </p>
            </div>
            {/* second div  */}
            <div className="col-span-2">
              <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg font-bold text-black pb-[15px] 5xl:pb-[17px] leading-[29px]">
                <Image
                  src="/assets/glitz/icons/clock.png"
                  alt="clock icon"
                  width={24}
                  height={24}
                />
                Hours of Operations:
              </p>
              <ul className="text-black font-family-secondary">
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                  Monday to Thursday
                </li>
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 06:00 p.m.
                </li>
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                  Friday{" "}
                </li>
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 05:00 p.m.
                </li>
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                  Saturday
                </li>
                <li className="text-base 5xl:text-lg font-normal text-black leading-[27px] py-[10px] 5xl:py-[14px]">
                  10:00 am - 02:00 p.m.
                </li>
              </ul>
              <p className="font-family-secondary text-sm font-normal text-black leading-[21px]">
                * We remain open during statutoryholidays and operate as per our
                regular hours.
              </p>
            </div>
            {/* third div  */}
            <div className="col-span-2">
              <div className="">
                <p className="font-family-primary flex items-center justify-start gap-[10px] 5xl:gap-[16px] text-lg font-bold text-black pb-[17px] leading-[29px]">
                  <Image
                    src="/assets/glitz/icons/setting.png"
                    alt="setting icon"
                    width={24}
                    height={24}
                  />
                  Our Services
                </p>
                <ul className="font-family-secondary">
                  <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                    &gt; Flooring Installations
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-black leading-[27px] py-[10px] 5xl:py-[14px]">
                    &gt; Kitchen Remodeling
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                    &gt; Bathroom Remodeling
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-black leading-[27px] py-[10px] 5xl:py-[14px]">
                    &gt; Interior Painting
                  </li>
                  <li className="text-base 5xl:text-lg font-normal text-black leading-[27px]">
                    &gt; Interior Remodel
                  </li>
                </ul>
              </div>
            </div>

            {/* fourth div  */}
            <div className="col-span-2">
              <ul className="font-family-secondary">
                <li className="flex items-start gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/glitz/icons/m.png"
                    alt="map icon"
                    width={24}
                    height={24}
                  />
                  <Link
                    className="text-black"
                    href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                  >
                    16726 Huffmeister Rd <br className="hidden xl:block" />{" "}
                    D400, Cypress, TX <br className="hidden xl:block" /> 
                    77429, United States
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[29px] py-[25px] 5xl:py-[27px]">
                  <Image
                    src="/assets/glitz/icons/p.png"
                    alt="phone icon"
                    width={24}
                    height={24}
                  />
                  <Link className="text-black" href="tel:(281) 758-5450">
                  (281) 758-5450
                  </Link>
                </li>
                <li className="flex items-center gap-[12px] 5xl:gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                  <Image
                    src="/assets/glitz/icons/email.png"
                    alt="email icon"
                    width={24}
                    height={18}
                  />
                  <Link
                    className="text-black"
                    href="mail:info@glitzfloors&more.us"
                  >
                    info@glitzfloors&more.us
                  </Link>
                </li>
              </ul>
              <div className="flex items-center gap-[30px] pt-[29px]">
                {
                  socialIons?.map((img, index)=>{
                    return <Image key={index} src={img} alt="social icon" width={21} height={21}/>
                  })
                }
              </div>
            </div>
          </div>
        </div>
        {/* footer bottom  */}
        <div className="bg-primary py-[17px] container flex justify-between items-center">
          <div className="flex items-center gap-[15px]">
            <p className="font-family-primary text-sm 5xl:text-base font-semibold text-white">
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
            <p className="font-family-primary text-sm 5xl:text-base font-medium text-white">
              © All Copyright 2024 by GLITZ FLOORS & MORE
            </p>
          </div>
          <div className="flex items-center justify-between gap-[5px]">
            <p className="font-family-primary text-sm 5xl:text-base font-medium text-white pr-4">
              Terms & Condition
            </p>
            <p className="font-family-primary text-sm 5xl:text-base font-medium text-white">Privacy Policy</p>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        <div className="small_footer_image ">
          {/* first div  */}
          <div className="pt-[35px] px-[30px]">
            <Image
              src="/assets/glitz/logo/nav_logo.png"
              alt="footer logo"
              width={144}
              height={148}
              className="w-1/2 mx-auto"
            />
            <p className="font-family-primary text-lg font-normal text-black leading-[30px] text-center pt-2">
              If you're in the Cypress area and looking for expert flooring and
              remodeling services, contact us today.
            </p>
          </div>
          {/* second div  */}
          <div className="pt-[20px] px-[30px]">
            <p className="font-family-primary flex items-center justify-center gap-[10px] 5xl:gap-[16px] text-lg text-center font-bold text-black pb-[17px] leading-[29px]">
              <Image
                src="/assets/glitz/icons/clock.png"
                alt="clock icon"
                width={24}
                height={24}
              />
              Hours of Operations:
            </p>
            <ul className="text-white font-family-secondary">
              <li className="text-base md:text-lg text-center normal text-black leading-[27px]">
                Monday to Thursday
              </li>
              <li className="text-base md:text-lg text-center font-normal text-black leading-[27px] py-[10px]">
                10:00 am - 06:00 p.m.
              </li>
              <li className="text-base md:text-lg text-center font-normal text-black leading-[27px]">
                Friday{" "}
              </li>
              <li className="text-base md:text-lg text-center font-normal text-black leading-[27px] py-[10px]">
                10:00 am - 05:00 p.m.
              </li>
              <li className="text-base md:text-lg text-center font-normal text-black leading-[27px]">
                Saturday
              </li>
              <li className="text-base md:text-lg text-center font-normal text-black leading-[27px] py-[10px]">
                10:00 am - 02:00 p.m.
              </li>
            </ul>
            <p className="font-family-secondary text-sm font-normal text-center text-black leading-[21px]">
              * We remain open during statutoryholidays and operate as per our
              regular hours.
            </p>
          </div>
          {/* third div  */}
          <div className="pt-[20px] px-[30px]">
            <div className="">
              <p className="font-family-primary flex items-center justify-center gap-[10px] 5xl:gap-[16px] text-lg text-center font-bold text-black pb-[17px] leading-[29px]">
                <Image
                  src="/assets/glitz/icons/setting.png"
                  alt="setting icon"
                  width={24}
                  height={24}
                />
                Our Services
              </p>
              <ul className="font-family-secondary">
                <li className="text-base md:text-lg text-center font-normal text-black leading-[27px]">
                  &gt; Flooring Installations
                </li>
                <li className="text-base md:text-lg text-center font-normal text-black leading-[27px] py-[10px]">
                  &gt; Kitchen Remodeling
                </li>
                <li className="text-base md:text-lg text-center font-normal text-black leading-[27px]">
                  &gt; Bathroom Remodeling
                </li>
                <li className="text-base md:text-lg text-center font-normal text-black leading-[27px] py-[10px]">
                  &gt; Interior Painting
                </li>
                <li className="text-base md:text-lg text-center font-normal text-black leading-[27px]">
                  &gt; Interior Remodel
                </li>
              </ul>
            </div>
          </div>
          {/* fourth div  */}
          <div className="pt-[20px] px-[30px]">
            <ul className="font-family-secondary">
              <li className="flex justify-center items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px]">
                <Image
                  src="/assets/glitz/icons/m.png"
                  alt="map icon"
                  width={21}
                  height={21}
                />
                <Link
                  className="text-black"
                  href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                >
                  16726 Huffmeister Rd <br className="hidden 5xl:block" /> D400,
                  Cypress, TX 77429, <br className="hidden 5xl:block" /> United
                  States
                </Link>
              </li>
              <li className="flex justify-center items-center gap-[24px] text-base 5xl:text-lg font-normal leading-[29px] py-[20px]">
                <Image
                  src="/assets/glitz/icons/p.png"
                  alt="phone icon"
                  width={21}
                  height={21}
                />
                <Link className="text-black" href="tel:(281) 758-5450">
                (281) 758-5450
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
                  className="text-black"
                  href="mail:info@glitzfloors&more.us"
                >
                  info@glitzfloors&more.us
                </Link>
              </li>
            </ul>
            <div className="flex justify-center items-center gap-[30px] pt-[20px]">
            {
                  socialIons?.map((img, index)=>{
                    return <Image key={index} src={img} alt="social icon" width={21} height={21}/>
                  })
                }
              
            </div>
          </div>
          {/* fifth div  */}
          <div className="pt-[40px]">
            <div className="border border-black  mx-[30px]" />
            <p className="font-family-primary text-base font-medium pb-[15px] text-black text-center pt-[20px]">
              © All Copyright 2024 by GLITZ FLOORS & MORE
            </p>
            <div className="flex justify-evenly">
              <p className="font-family-primary text-base font-medium text-black">
                Terms & Condition
              </p>
              <p className="font-family-primary text-base font-medium text-black">Privacy Policy</p>
            </div>
          </div>
          {/* footer bottom  */}
          <div className="flex items-center justify-around pt-[21px] pb-[19px] bg-primary mt-[34px]">
            <p className="font-family-primary text-xs font-semibold text-whtie">
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
