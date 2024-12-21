"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UpperNavbar from "./UpperNavbar";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverServices, setHoverServices] = useState(true);
  const [isServiceClick, setIsServiceClick] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <UpperNavbar />
      <div className="bg-secondary-800 py-1">
        <nav className="container">
          <div className="flex items-center justify-between gap-[100px] md:gap-[101px] lg:gap-[111px] xl:gap-[121px] 2xl:gap-[131px] 3xl:gap-[141px] 4xl:gap-[151px] 5xl:gap-[161px]">
            {/* large device  */}
            {/* Left side: Logo */}
            <div className="w-1/5 hidden lg:block text-white text-lg font-bold">
              <Link href="/" aria-label="Home">
                <Image
                  src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
                  alt="nav logo"
                  width={258}
                  height={166}
                  className="w-full h-full"
                />
                <span className="sr-only">Home</span>
              </Link>
            </div>

            {/* right side  */}
            <div className="w-4/5 hidden lg:block py-1">
              {/* first  */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <p className="text-[17px] 3xl:text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold leading-[40px] text-white">
                    Follow Us on:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="bg-primary-50 p-2 rounded-full">
                      <FaInstagram className="text-white " />
                    </div>
                    <div className="bg-primary-50 p-2 rounded-full">
                      <FaYoutube className="text-white " />
                    </div>
                    <div className="bg-primary-50 p-2 rounded-full">
                      <FaLinkedin className="text-white " />
                    </div>
                    <div className="bg-primary-50 p-2 rounded-full">
                      <FaFacebook className="text-white " />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-primary-50 p-2 rounded-lg">
                    <LuPhoneCall className="text-white " />
                  </div>
                  <p className="text-[17px] 3xl:text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold leading-[40px] text-white">
                    (346) 445-6343
                  </p>
                </div>
              </div>

              {/* second  */}
              <div className="hidden lg:flex justify-between items-center bg-primary-50 py-1 rounded-full mt-1 5xl:mt-2">
                <Link
                  href="/"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300]  pl-4 pr-1"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] px-1"
                >
                  About
                </Link>
                <Link
                  href="/gallery"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] px-1"
                >
                  Gallery
                </Link>
                <Link
                  href="/kitchen-remodel-in-cypress"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] px-1"
                >
                  Kitchen Remodeling
                </Link>
                <Link
                  href="/bathroom-remodel-in-cypress-tx"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] px-1"
                >
                  Bathroom Remodeling
                </Link>

                <div className="dropdown">
                  <button
                    className="flex items-center gap-1 text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] px-1"
                    onMouseEnter={() => setHoverServices(false)}
                    onMouseLeave={() => setHoverServices(true)}
                  >
                    Our Services{" "}
                    {hoverServices ? <IoIosArrowDown /> : <IoIosArrowUp />}
                  </button>
                  <div className="dropdown-content">
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal"
                      href="/flooring-installation"
                    >
                      Floor Installation
                    </a>
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal border-t"
                      href="/kitchen-remodel-in-cypress"
                    >
                      Kitchen Remodeling
                    </a>
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal border-t"
                      href="/bathroom-remodel-in-cypress-tx"
                    >
                      Bathroom Remodeling
                    </a>
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal border-t"
                      href="/vinyl-flooring-in-cypress-tx"
                    >
                      Vinyl Flooring
                    </a>
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal border-t"
                      href="/painting-contractors-in-cypress-tx"
                    >
                      Painting Contractors
                    </a>
                    <a
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal border-t"
                      href="/roofing-contractor-in-cypress-tx"
                    >
                      Roofing Contractor
                    </a>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white hover:text-[#ffb300] pl-1 pr-4"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Small Device */}
            <div className="lg:hidden w-full flex justify-between items-center px-[16px] sm:px-[20px]">
              <div>
                {!isOpen && (
                  <Link href="/" aria-label="Home">
                    <Image
                      src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
                      alt="nav logo"
                      width={258}
                      height={166}
                      className="w-full h-full"
                    />
                  </Link>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
                >
                  {isOpen ? (
                    <FiX className="w-6 h-6 text-white" />
                  ) : (
                    <FiMenu className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-4 space-y-2 pb-12">
              <div className="mb-8">
                <Image
                  src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
                  alt="nav logo"
                  width={142}
                  height={91}
                  className="w-full"
                />
              </div>

              <Link
                href="/"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                Gallery
              </Link>
              <Link
                href="/kitchen-remodel-in-cypress"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                Kitchen Remodeling
              </Link>
              <Link
                href="/bathroom-remodel-in-cypress-tx"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                Bathroom Remodeling
              </Link>
              <Link
                href="#"
                onclick={() => setIsServiceClick(!isServiceClick)}
                className="w-full flex justify-between items-center text-base 2xl:text-lg font-normal bg-primary-50 px-3 leading-normal text-white hover:text-[#ffb300] rounded-[8px] py-2"
              >
                Our Services
                {isServiceClick ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </Link>
              {isServiceClick && (
                <div className="bg-primary-50 rounded-[8px] pb-2">
                  <div className="border-y py-1">
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/flooring-installation"
                    >
                      Floor Installation
                    </Link>
                  </div>
                  <div className="border-b py-1">
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/kitchen-remodel-in-cypress"
                    >
                      Kitchen Remodeling
                    </Link>
                  </div>
                  <div className="border-b py-1" >
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/bathroom-remodel-in-cypress-tx"
                    >
                      Bathroom Remodeling
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/vinyl-flooring-in-cypress-tx"
                    >
                      Vinyl Flooring
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/painting-contractors-in-cypress-tx"
                    >
                      Painting Contractors
                    </Link>
                  </div>
                  <div className="py-1">
                    <Link
                      className="text-[13px] 2xl:text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] font-bold leading-normal text-white pl-3"
                      href="/roofing-contractor-in-cypress-tx"
                    >
                      Roofing Contractor
                    </Link>
                  </div>
                </div>
              )}
              <Link
                href="/contact-us"
                className="block text-base 2xl:text-lg font-normal bg-primary-50 rounded-[8px] pl-3 text-white hover:text-[#ffb300] py-2"
              >
                Contact Us
              </Link>
              <div className="mt-12">
                <button className="flex items-center gap-[8px] 5xl:gap-[12px]">
                  <div className="bg-primary-50 p-2 rounded-lg">
                    <LuPhoneCall className="w-[18px] h-[18px] text-white" />
                  </div>
                  <Link
                    className="font-family-primary text-lg font-bold text-white leading-normal"
                    href="tel:(346) 445-6343"
                  >
                    (346) 445-6343
                  </Link>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
