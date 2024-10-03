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

// our services nav menu
const our_service_menu_items = {
  interior: [
    {
<<<<<<< HEAD
      title: "Swimming Pool Contractors in Toronto",
      route: "/swimming-pool-contractors-in-toronto",
=======
      title: "Flooring Installation",
      route: "/flooring-installation",
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
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
            aria-expanded={isMenuOpen} // Dynamically set the value based on the menu state
            aria-haspopup="true" // Indicating this element triggers a popup
            id=":RrarjtaH2:"
            role="button"
          >
            <ListItem
              className="flex items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5 -mt-[9px]"
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
<<<<<<< HEAD
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100">
=======
        <MenuList className="hidden max-w-[100vw] w-screen lg:block border-0 outline-0 bg-gray-100 -mt-1">
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
          <div className="container grid grid-cols-3 gap-y-2">
            <div>
              <h3 className="mb-1 text-primary-600 font-semibold">Interior</h3>
              <ul>
                <li>{renderItems(our_service_menu_items.interior)}</li>
              </ul>
            </div>
          </div>
        </MenuList>

        {isMobileMenuOpen ? (
          <>
            <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>
                <h4 className="text-primary-600 mb-1 font-semibold">
                  Interior
                </h4>
                <ul>
                  <li>{renderItems(our_service_menu_items.interior)}</li>
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
<<<<<<< HEAD
        href="/home"
=======
        href="/"
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
        variant="small"
        color="blue-gray"
        className="font-medium rounded-full text-sm lg:text-sm xl:text-base 2xl:text-lg"
      >
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
        <ListItem className="flex items-start md:items-center text-sm xl:text-[15px] 5xl:text-lg text-black font-bold leading-normal px-1 lg:px-3 2xl:px-5">
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
                  src="/assets/glitz/icons/nav_brand.png"
                  alt="nav logo"
                  width={258}
                  height={166}
<<<<<<< HEAD
                  className="w-[200px] 5xl:w-[258px] h-[120px] 5xl:h-[166px]"
=======
                  className="w-[200px] 5xl:w-[258px] h-[100px] 5xl:h-[120px]"
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
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
                        <Image
                          src="/assets/glitz/icons/phone_icon.png"
                          alt="phone icon"
<<<<<<< HEAD
                          width={45}
                          height={45}
                          className="w-[35px] h-[35px] 5xl:w-[45px] 5xl:h-[45px]"
=======
                          width={35}
                          height={35}
                          className="w-[25px] h-[25px] 5xl:w-[35px] 5xl:h-[35px]"
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
                        />{" "}
                        <Link
                          className="text-lg 2xl:text-[20px] 5xl:text-[25px] font-bold text-black leading-normal"
                          href="tel : (281) 758-5450"
                        >
                          (281) 758-5450
                        </Link>
                      </button>
                    </div>
                    {/* second div  */}
                    <div className="flex items-center gap-[8px] 5xl:gap-[15px]">
                      <Image
                        src="/assets/glitz/icons/google_map.png"
                        alt="map icon"
<<<<<<< HEAD
                        width={45}
                        height={45}
                        className="w-[35px] h-[35px] 5xl:w-[45px] 5xl:h-[45px]"
=======
                        width={35}
                        height={35}
                        className="w-[25px] h-[25px] 5xl:w-[35px] 5xl:h-[35px]"
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
                      />
                      <div>
                        <p className="text-sm font-normal text-black leading-normal">
                          Location
                        </p>
<<<<<<< HEAD
                        <p className="text-[15px] 2xl:text-base 5xl:text-lg font-bold text-black leading-normal pt-[3px] 5xl:pt-[5px]">
                          16726 Huffmeister Road, D400, Cypress, Tx 77429
=======
                        <p className="text-sm 5xl:text-base font-bold text-black leading-normal pt-[3px] 5xl:pt-[5px]">
                          <Link href="location : 16726 Huffmeister Road, D400, Cypress, Tx 77429">16726 Huffmeister Road, D400, Cypress, Tx 77429</Link>
                          
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
                        </p>
                      </div>
                    </div>

                    <div>
<<<<<<< HEAD
                      <button className="flex items-center gap-[5px] text-base 5xl:text-lg font-bold text-primary leading-normal pt-[17px] pb-[14px] px-[17px] border-[2px] border-secondary rounded-[6px]">
                        Get Free Quote{" "}
=======
                      <button className="flex items-center gap-[5px] text-sm 5xl:text-base font-bold text-primary leading-normal py-[8px] px-[14px] border-[2px] border-secondary rounded-[6px]">
                        <Link href="tel : (281) 758-5450">Get Free Quote</Link>
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
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
<<<<<<< HEAD
          <div className="bg-secondary py-[10px]">
            <p className="text-lg font-bold text-white leading-normal text-center">FLOORS NOW, PAY OVER TIME</p>
            <p className="text-sm font-bold text-white leading-normal text-center pb-[10px]">Convenient monthly payments to fit your budget1</p>
            <div className="flex justify-center items-center">
            <button className="text-base font-bold leading-normal text-white py-[10px] px-[8px] rounded-[6px] border-[2px] border-white">View Financing Option</button>
=======
          <div className="bg-secondary py-[6px]">
            <p className="text-lg font-bold text-white leading-normal text-center">FLOORS NOW, PAY OVER TIME</p>
            <p className="text-sm font-bold text-white leading-normal text-center pb-[10px]">Convenient monthly payments to fit your budget1</p>
            <div className="flex justify-center items-center">
            <button className="text-base font-bold leading-normal text-white p-[8px] rounded-[6px] border-[2px] border-white">View Financing Option</button>
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
            </div>
          </div>
        </div>

        <div className="w-full bg__color !bg-secondary-400 flex justify-between items-center px-[20px] sm:px-[30px] pb-[6px]">
          <div className="block md:hidden">
            <Image
              src="/assets/glitz/images/sm_nab_logo.png"
              alt="nav logo"
              width={142}
              height={91}
<<<<<<< HEAD
              className="w-[142px] h-[91px]"
=======
              className="w-[142px] h-[80px]"
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
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
        <div className="mb-6 flex items-center justify-between ">
          <Typography variant="p" color="blue-gray">
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
