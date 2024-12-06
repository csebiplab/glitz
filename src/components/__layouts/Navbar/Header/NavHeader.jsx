"use client";
import { usePathname } from "next/navigation";
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

import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { IoMenuSharp } from "react-icons/io5";

// our services nav menu
const our_service_menu_items = {
  interior: [
    {
      title: "Flooring Installation",
      route: "/flooring-installation",
    },
    {
      title: "Bathroom Remodel in Cypress, TX",
      route: "/bathroom-remodel-in-cypress-tx",
    },
    {
      title: "Kitchen Remodel in Cypress",
      route: "/kitchen-remodel-in-cypress",
    },
    {
      title: "Vinyl Flooring in Cypress, TX",
      route: "/vinyl-flooring-in-cypress-tx",
    },
  ],
};

function OurServiceManu({setIsServiceClick}) {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = (data = []) => {
    return data?.map(({ route, title }, key) => (
      <Link  href={route} key={key}>
        <MenuItem className={`focus:bg-primary-50 focus:bg-opacity-100 active:bg-primary-50 active:bg-opacity-100 hover:text-[#ffb300] hover:bg-primary-50 text-white font-bold py-2 px-4 rounded rounded-md`} >
          <Typography className={` text-white hover:text-[#ffb300]`}>{title}</Typography>
        </MenuItem>
      </Link>
    ));
  };

  const serviceMenuHandler = ()=>{
    setIsMobileMenuOpen((cur) => !cur)
    setIsServiceClick(true)
  }

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
            onClick={()=> setIsServiceClick(true)}
            className="font-medium text-lg"
            aria-expanded={isMenuOpen}
            aria-haspopup="true"
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className={`${
                pathName === "/kitchen-remodel-in-cypress" || pathName === "/flooring-installation" || pathName === "/bathroom-remodel-in-cypress-tx"
                  ? "text-[#ffb300] hover:underline"
                  : "bg-primary-50 rounded-xl"
              } font-family-primary font-bold leading-normal -mt-[7px] md:py-1 py-[6px] px-[11px] md:px-0 flex justify-between items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white hover:text-[#ffb300] hover:bg-primary-50 hover:bg-opacity-100 focus:bg-red-500 focus:bg-opacity-0 focus:text-white active:bg-primary-50 active:bg-opacity-100 bg-primary-50`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => serviceMenuHandler() }
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
        {/* <hr className="my-1" /> */}

        <MenuList className="border-none !p-0 hidden max-w-[350px] w-full lg:block outline-0 bg-gray-100 -mt-4">
          <div className="!p-0 !outline-none w-full">
            <div className="bg-primary-50 w-full p-4">
              <div className="">
                <ul className="w-full flex justify-start px-4">
                  <li className="font-family-primary text-base font-normal text-white">
                    {renderItems(our_service_menu_items.interior)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </MenuList>

        {isMobileMenuOpen ? (
          <>
            <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>
                {/* <h4
                  className={`${
                    pathName === "/"
                      ? "bg-secondary-900 rounded-[8px]"
                      : "drawer_nav_bg"
                  } font-family-primary text-lg text-white mt-2 font-semibold border-b border-black hover:text-[#ffb300] hover:bg-transparent py-[6px] pl-[11px] md:pl-0`}
                >
                  Services
                </h4> */}
                <ul className="">
                  <li
                    className={`${
                      pathName === our_service_menu_items.interior
                        ? "bg-secondary-900 rounded-[8px]"
                        : "drawer_nav_bg"
                    } font-family-primary text-lg text-white font-bold`}
                  >
                    {renderItems(our_service_menu_items.interior)}
                  </li>
                </ul>

                {/* <hr className="my-1" /> */}
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

// px-1 lg:px-4 2xl:px-6
// our services nav list end

function NavList() {
  const pathName = usePathname();
  const [isServiceClick, setIsServiceClick] = useState(false);
  return (
    <List className={`font-family-primary my-[11px] p-0 lg:mt-0 lg:mb-0 lg:flex-row md:items-center justify-between px-0 md:px-[20px] border-0 outline-none`}>
      <div className="">
        <Typography
          as={Link}
          href="/"
          variant="small"
          color="blue-gray"
          className=" font-medium rounded-full text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div>
            <ListItem
              className={`${
                pathName === "/" && !isServiceClick
                  ? "text-[#ffb300] hover:underline"
                  : "drawer_nav_bg"
              } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
            >
              Home
            </ListItem>
          </div>
        </Typography>
      </div>

      <div className="my-[2px] md:my-0">
        <Typography
          as={Link}
          href="/about-us"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div
            className={`${
              pathName === "/about-us"
                ? "text-[#ffb300] hover:underline "
                : "drawer_nav_bg"
            } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
          >
            About
          </div>
        </Typography>
      </div>

      <div className="">
        <Typography
          as={Link}
          href="/gallery"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full  text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div>
            <div
              className={`${
                pathName === "/gallery"
                  ? "text-[#ffb300] hover:underline"
                  : "drawer_nav_bg"
              } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
            >
              Gallery
            </div>
          </div>
        </Typography>
      </div>

      <div className="my-[2px] md:my-0">
        <Typography
          as={Link}
          href="/kitchen-remodel-in-cypress"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full  text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div>
            <ListItem
              className={` ${
                pathName === "/kitchen-remodel-in-cypress"
                  ? "text-[#ffb300] hover:underline"
                  : "drawer_nav_bg"
              } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
            >
              Kitchen Remodeling
            </ListItem>
          </div>
        </Typography>
      </div>

      <div className="mb-[2px] md:mb-0">
        <Typography
          as={Link}
          href="/bathroom-remodel-in-cypress-tx"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full  text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div>
            <ListItem
              className={`${
                pathName === "/bathroom-remodel-in-cypress-tx"
                  ? "text-[#ffb300] hover:underline"
                  : "drawer_nav_bg"
              } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
            >
              Bathroom Remodeling
            </ListItem>
          </div>
        </Typography>
      </div>

      <div className="mt-[6px]">
        <OurServiceManu setIsServiceClick={setIsServiceClick}/>
      </div>

      <div className="my-[2px] md:my-0">
        <Typography
          as={Link}
          href="/contact-us"
          variant="small"
          color="blue-gray"
          className="font-medium rounded-full  text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px]"
        >
          <div>
            <ListItem
              className={`${
                pathName === "/contact-us"
                  ? "text-[#ffb300] hover:underline"
                  : "drawer_nav_bg"
              } pl-[11px] md:pl-0 py-[6px] md:py-1 font-family-primary flex items-start md:items-center text-[14px] 3xl:text-[15px] 4xl:text-[16px] 5xl:text-[17px] text-white font-bold leading-normal hover:text-[#ffb300] hover:bg-primary-50 rounded-[8px] `}
            >
              Contact Us
            </ListItem>
          </div>
        </Typography>
      </div>
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
        <div className="hidden md:block custom-container ">
          <Navbar className="container main__nav rounded-none py-0 shadow-none max-w-full pb-[6px]">
            <div className="flex justify-between items-center gap-[100px] md:gap-[101px] lg:gap-[111px] xl:gap-[121px] 2xl:gap-[131px] 3xl:gap-[141px] 4xl:gap-[151px] 5xl:gap-[161px]">
              <div className="w-1/5">
                <Link href="/" aria-label="Home">
                  <Image
                    // src="/assets/glitz/newHomePage/nav__logo__glitz.png"
                    src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
                    alt="nav logo"
                    width={258}
                    height={166}
                    className="w-full h-full"
                  />
                  <span className="sr-only">Home</span>
                </Link>
              </div>
              {/* bottom navbar  */}
              <div className="w-full flex flex-col justify-between pl-[8px]">
                <div className="pt-[2px]">
                  <div className=" flex justify-between items-center">
                    <div className="flex items-center gap-[10px]">
                      <p className="text-base font-bold text-white leading-[40px]">
                        Follow Us on:
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="bg-primary-50 p-2 rounded-full">
                          <Link href="/" target="_blank" rel="nofollow">
                            <FaYoutube className="w-[15px] h-[15px] text-white" />
                          </Link>
                        </div>
                        <div className="bg-primary-50 p-2 rounded-full">
                          <Link
                            href="https://www.instagram.com/glitz.floors.and.more/?fbclid=IwAR3YJkB2MW6Wi5tPbL4jMuORAz5g7iV8Qa55RUhn-q9lihiMgr5v7ZRvN6A"
                            target="_blank"
                            rel="nofollow"
                          >
                            <FaInstagram className="w-[15px] h-[15px] text-white" />
                          </Link>
                        </div>
                        <div className="bg-primary-50 p-2 rounded-full">
                          <Link href="/" target="_blank" rel="nofollow">
                            <FaLinkedin className="w-[15px] h-[15px] text-white" />
                          </Link>
                        </div>
                        <div className="bg-primary-50 p-2 rounded-full">
                          <Link
                            href="https://www.facebook.com/p/Glitz-Floors-More-100095651767067/"
                            target="_blank"
                            rel="nofollow"
                          >
                            <FaFacebook className="w-[15px] h-[15px] text-white" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button className="flex items-center gap-[8px] 5xl:gap-[12px]">
                        <div className="bg-primary-50 p-2 rounded-lg">
                          <LuPhoneCall className="w-[16px] h-[16px] text-white" />
                        </div>
                        <Link
                          className="font-family-primary text-base font-bold text-white leading-normal"
                          href="tel:(346) 445-6343"
                        >
                          (346) 445-6343
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block nav__bg mt-[1px]">
                  <NavList className="" />
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
        ></div>

        <div className="block md:hidden w-full bg__color py-[5px] md:py-0 flex justify-between items-center px-[16px] sm:px-[30px] -mt-1">
          <div className=" w-1/3">
            <Image
              src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
              alt="nav logo"
              width={142}
              height={91}
              className="w-full"
            />
          </div>
          <div className="ml-2">
            <button className="flex items-center gap-[4px]">
              <div className="bg-primary-50 p-2 rounded-lg">
                <LuPhoneCall className="w-[13px] h-[13px] text-white" />
              </div>
              <Link
                className="font-family-primary text-sm font-bold text-white leading-normal"
                href="tel:(346) 445-6343"
              >
                (346) 445-6343
              </Link>
            </button>
          </div>

          <div className="">
            <IconButton
              variant="text"
              color="blue-gray"
              className="lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-10 w-10" strokeWidth={2} />
              ) : (
                <IoMenuSharp className="text-white w-[30px] h-[30px]" />
              )}
            </IconButton>
          </div>
        </div>

        {/* small device end  */}
      </header>

      <Drawer
        placement="left"
        open={openNav}
        onClose={() => setOpenNav(false)}
        className="p-4 overflow-y-auto pb-24 !z-[1000000000000000000] bg-secondary-800"
      >
        {/* <div className="font-family-primary mb-6 flex items-center justify-between ">
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
        </div> */}
        <div className="mb-4">
          <Image
            src="/assets/glitz/newHomePage/nav/nav__logo__glitz.png"
            alt="nav logo"
            width={142}
            height={91}
            className="w-full"
          />
        </div>
        <NavList />
        <div className="mt-8">
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
      </Drawer>
    </>
  );
}
