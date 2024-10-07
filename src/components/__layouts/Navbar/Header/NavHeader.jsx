"use client";

import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import UpperNavbar from "./UpperNavbar";
import "./NavHeader.css";

import { LuPhoneCall } from "react-icons/lu";
import { FaMapMarkerAlt } from "react-icons/fa";

// our services nav menu
const our_service_menu_items = {
  interior: [
    {
      title: "Flooring Installation",
      route: "/flooring-installation",
    },
  ],
};

function OurServiceManu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link href={route} key={key}>
        <MenuItem className="rounded-md">
          <Typography color="blue-gray">{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
        className="bg-gray-100"
      >
        <MenuHandler>
          <div
            className="font-medium text-lg"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className="font-family-primary flex items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6 -mt-[9px]"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Our Services
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </div>
        </MenuHandler>

        <MenuList className="!p-0 hidden max-w-[300px] w-full lg:block outline-0 bg-gray-100 -mt-4">
          <div className="!p-0 !border-none !outline-none w-full">
            <div className="w-full p-4">
              <h3 className="font-family-primary mb-1 text-primary-600 text-lg font-semibold text-left border-b-[1.5px] border-primary">Services</h3>
              <div>
              <ul className="w-full flex justify-start list-disc marker:text-black px-4">
                <li className="font-family-primary text-base font-normal text-black">{renderItems(our_service_menu_items.interior)}</li>
              </ul>
              </div>
              
            </div>
          </div>
        </MenuList>

        {isMobileMenuOpen ? (
          <>
            <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>
                <h4 className="font-family-primary text-primary-600 mb-1 font-semibold">
                Services
                </h4>
                <ul>
                  <li className="font-family-primary">{renderItems(our_service_menu_items.interior)}</li>
                </ul>
                <hr className="my-1" />
              </Collapse>
            </div>
          </>
        ) : (
          ""
        )}
      </Menu>
    </>
  );
}

// our services nav list end
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center border-0 outline-none">
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          Home
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/about-us"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          About
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/gallery"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          Gallery
        </ListItem>
      </Typography>

      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          Kitchen Remodeling
        </ListItem>
      </Typography>
      <Typography
        as={Link}
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center  text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          Bathroom Remodeling
        </ListItem>
      </Typography>

      <div className="mt-[6px]">
        <OurServiceManu />
      </div>

      <Typography
        as={Link}
        href="/contact-us"
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm md:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="font-family-primary flex items-start md:items-center text-base 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-4 2xl:px-6">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavHeader() {
  const [openNav, setOpenNav] = React.useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <>
      <UpperNavbar />
      <header className="sticky top-0 z-50">
        <div className="hidden md:block custom-container main__nav">
          <Navbar className="container rounded-none py-0 shadow-none max-w-full">
            <div className="flex items-center gap-[5px] text-blue-gray-900">
              <Link href="/" aria-label="Home">
                <Image
                  src="/assets/glitz/logo/nav_logo.png"
                  alt="nav logo"
                  width={258}
                  height={166}
                  className="w-full"
                />
                <span className="sr-only">Home</span>
              </Link>
              {/* bottom navbar  */}
              <div className="w-full flex flex-col justify-between pl-[4px]">
                <div className="">
                  <div className=" flex justify-between items-center">
                    <div>
                      <button className="flex items-center gap-[8px] 5xl:gap-[18px]">
                        {" "}
                        <LuPhoneCall className="w-[25px] h-[25px] 5xl:w-[35px] 5xl:h-[35px] text-primary"/>
                        <Link
                          className="font-family-primary text-lg 2xl:text-[20px] 5xl:text-[25px] font-bold text-black leading-normal"
                          href="tel : (281) 758-5450"
                        >
                          (281) 758-5450
                        </Link>
                      </button>
                    </div>
                    {/* second div  */}
                    <div className="flex items-center gap-[8px] 5xl:gap-[15px]">
                      <FaMapMarkerAlt className="w-[25px] h-[25px] 5xl:w-[35px] 5xl:h-[35px] text-primary" />
                      <div>
                        <p className="font-family-primary text-sm font-normal text-black leading-normal">
                          Location
                        </p>
                        <p className="font-family-primary text-sm 5xl:text-base font-bold text-black leading-normal pt-[3px] 5xl:pt-[5px]">
                          <Link href="location : 16726 Huffmeister Road, D400, Cypress, Tx 77429">
                            16726 Huffmeister Road, D400, Cypress, Tx 77429
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div>
                      <button className="font-family-primary flex items-center gap-[5px] text-sm 5xl:text-base font-bold text-primary leading-normal py-[8px] px-[14px] border-[2px] border-secondary rounded-[6px]">
                        <Link href="tel : (281) 758-5450">Get Free Quote</Link>
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
                  </div>
                </div>
                <div className="hidden lg:block">
                  <NavList />
                </div>
              </div>
            </div>
          </Navbar>
        </div>

        {/* small device start  */}
        <div
          id="hideOnScroll"
          className={`block md:hidden pt-1 bg-secondary-400 ${
            hideOnScroll ? "hidden" : ""
          }`}
        >
          <div className="bg-secondary py-[6px]">
            <p className="font-family-primary text-lg font-bold text-white leading-normal text-center">
              FLOORS NOW, PAY OVER TIME
            </p>
            <p className="font-family-primary text-sm font-bold text-white leading-normal text-center pb-[10px]">
              Convenient monthly payments to fit your budget1
            </p>
            <div className="flex justify-center items-center">
              <button className="font-family-primary text-base font-bold leading-normal text-white p-[8px] rounded-[6px] border-[2px] border-white">
                View Financing Option
              </button>
            </div>
          </div>
        </div>

        <div className="w-full bg__color !bg-secondary-400 flex justify-between items-center px-[20px] sm:px-[30px] pb-[6px]">
          <div className="block md:hidden">
            <Image
              src="/assets/glitz/logo/nav_logo.png"
              alt="nav logo"
              width={142}
              height={91}
              className="w-full"
            />
          </div>

          <div className="block md:hidden">
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Image
                  src="/assets/glitz/icons/menu_icon.png"
                  width={33}
                  height={33}
                  alt="Menu"
                  className="w-[33px] h-[33px]"
                />
              )}
            </IconButton>
          </div>
        </div>

        {/* small device end  */}
      </header>

      <Drawer
        placement="right"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000] bg-secondary-400"
      >
        <div className="font-family-primary mb-6 flex items-center justify-between ">
          <Typography variant="paragraph" color="blue-gray">
            Glitz Floors & More
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            className="!pl-4"
            aria-label="Menu"
            onClick={() => setOpenNav(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Menu</span>
          </IconButton>
        </div>
        <NavList />
      </Drawer>
    </>
  );
}
