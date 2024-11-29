"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

import React from "react";
import "./RemodelingServices.css";
import { FaArrowRightLong } from "react-icons/fa6";

const RemodelingServices = () => {
  const [showBathroomOverlay, setShowBathroomOverlay] = useState(false);
  const [showKitchenOverlay, setShowKitchenOverlay] = useState(false);

  useEffect(() => {
    let bathroomTimer;
    if (showBathroomOverlay) {
      bathroomTimer = setTimeout(() => {
        setShowBathroomOverlay(false);
      }, 5000);
    }
    return () => clearTimeout(bathroomTimer);
  }, [showBathroomOverlay]);

  useEffect(() => {
    let kitchenTimer;
    if (showKitchenOverlay) {
      kitchenTimer = setTimeout(() => {
        setShowKitchenOverlay(false);
      }, 5000);
    }
    return () => clearTimeout(kitchenTimer);
  }, [showKitchenOverlay]);

  return (
    <div className="container padding__top">
      {/* large device  */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
          <div data-aos="fade-right" className="md:col-span-1">
            <div className="relative">
              {/* Main Image */}
              <Image
                src="/assets/glitz/newHomePage/bathroomRemodel.png"
                alt="bathroom remodel"
                width={660}
                height={442}
                className="w-full object-cover"
              />

              {/* Overlay Button */}
              <div className="absolute inset-y-0 left-0 flex items-center px-4 bg-black/40">
                <button className="flex flex-col items-center justify-center text-yellow-400 font-bold text-lg">
                  <span className="text-[20px] font-bold text-info-100 leading-[40px] rotate-180 writing-mode-vertical-rl">
                    Bathroom Remodeling
                  </span>
                  <span
                    className="mt-[20px]"
                    onClick={() => setShowBathroomOverlay(true)}
                  >
                    <Image
                      src="/assets/glitz/newHomePage/icons/remodeling_arrow_icon.png"
                      alt="arrow icon"
                      width={32}
                      height={32}
                    />
                  </span>
                </button>
              </div>

              {/* Overlay Content */}
              {/* {showBathroomOverlay && (
            <div className="w-1/2 absolute inset-0 bg-black/90 text-white p-6 flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Bathroom Remodeling</h2>
              <p className="mb-6">
                Your bathroom should be more than just functional—it should be a
                relaxing sanctuary that combines style and comfort.
              </p>
            </div>
          )} */}
              {/* Overlay Content */}
              <div
                className={`w-1/2 absolute inset-0 bg-black/90 text-white p-3  ${
                  showBathroomOverlay
                    ? "flex flex-col justify-center "
                    : "hidden"
                }`}
              >
                <h2 className="text-lg 5xl:text-[20px] font-bold leading-[40px] text-center text-white ">Bathroom Remodeling</h2>
                <p className="text-base 5xl:text-lg text-center font-normal leading-normal text-white mb-2">
                Your bathroom should be more than just functional—it should be a relaxing sanctuary that combines style and comfort. At Glitz Floors & More, we specialize in transforming outdated bathrooms into modern, 
                </p>
                <button className="flex justify-center items-center gap-2 text-white text-sm font-bold leading-[20px] underline">Bathroom Remodeling <FaArrowRightLong className="mt-1"/> </button>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="md:col-span-1">
            <div className="relative">
              {/* Main Image */}
              <Image
                src="/assets/glitz/newHomePage/kitchenRemodel.png"
                alt="kitchen remodel"
                width={660}
                height={442}
                className="w-full object-cover"
              />

              {/* Overlay Button */}
              <div className="absolute inset-y-0 left-0 flex items-center px-4 bg-black/40">
                <button className="flex flex-col items-center justify-center text-yellow-400 font-bold text-lg">
                  <span className="text-[20px] font-bold text-info-100 leading-[40px] rotate-180 writing-mode-vertical-rl">
                    Kitchen Remodeling
                  </span>
                  <span
                    className="mt-[20px]"
                    onClick={() => setShowKitchenOverlay(true)}
                  >
                    <Image
                      src="/assets/glitz/newHomePage/icons/remodeling_arrow_icon.png"
                      alt="arrow icon"
                      width={32}
                      height={32}
                    />
                  </span>
                </button>
              </div>

              {/* Overlay Content */}
              {showKitchenOverlay && (
                <div className="w-1/2 absolute inset-0 bg-black/90 text-white p-6 flex flex-col justify-center">
                  <h2 className="text-lg 5xl:text-[20px] font-bold leading-[40px] text-white text-center">
                  Kitchen Remodeling
                  </h2>
                  <p className="text-base 5xl:text-lg font-normal text-center leading-normal text-white mb-2">
                  The kitchen is the heart of your home—a place where meals are shared, memories are made, and creativity comes to life. At Glitz Floors & More, we specialize in crafting kitchens that are as functional as they are beautiful.
                  </p>
                  <button className="flex justify-center items-center gap-2 text-white text-sm font-bold leading-[20px] underline">Kitchen Remodeling <FaArrowRightLong className="mt-1"/></button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden">
        {/* Bathroom Remodel */}
        <div data-aos="fade-right" className="relative">
          {/* Image */}
          <Image
            src="/assets/glitz/newHomePage/bathroomRemodel.png"
            alt="bathroom remodel"
            width={660}
            height={442}
            className="w-full object-cover"
          />

          {/* Overlay Button */}
          <div className="absolute inset-x-0 bottom-0 bg-black/40 py-3 text-center">
            <button
              className="w-full flex justify-center items-center gap-[21px] text-yellow-400 font-bold text-lg"
              onClick={() => setShowBathroomOverlay(true)}
            >
              Bathroom Remodeling{" "}
              <span className="" onClick={() => setShowBathroomOverlay(true)}>
                <Image
                  src="/assets/glitz/newHomePage/icons/remodeling_arrow_icon.png"
                  alt="arrow icon"
                  width={32}
                  height={32}
                />
              </span>
            </button>
          </div>

          {/* Overlay Content */}
          {showBathroomOverlay && (
            <div className="h-2/3 absolute top-[33%] inset-0 bg-black/90 text-white p-4 flex flex-col justify-center">
              <h2 className="text-lg 5xl:text-[20px] font-bold leading-[40px] text-white text-center">Bathroom Remodeling</h2>
              <p className="text-base 5xl:text-lg font-normal text-center leading-normal text-white">
              Your bathroom should be more than just functional—it should be a relaxing sanctuary that combines style and comfort. At Glitz Floors & More, we specialize in transforming outdated bathrooms into modern,
              </p>
              <button className="mt-3 flex justify-center items-center gap-2 text-white text-sm font-bold leading-[20px] underline">Bathroom Remodeling <FaArrowRightLong className="mt-1"/></button>
            </div>
          )}
        </div>
        <div className="mt-[25px]">
          {/* Kitchen Remodel */}
          <div data-aos="fade-left" className="relative">
            {/* Image */}
            <Image
              src="/assets/glitz/newHomePage/kitchenRemodel.png"
              alt="kitchen remodel"
              width={660}
              height={442}
              className="w-full object-cover"
            />

            {/* Overlay Button */}
            <div className="absolute inset-x-0 bottom-0 bg-black/40 py-3 text-center">
              <button
                className="w-full flex justify-center items-center gap-[21px] text-yellow-400 font-bold text-lg"
                onClick={() => setShowKitchenOverlay(true)}
              >
                Kitchen Remodeling{" "}
                <span className="" onClick={() => setShowKitchenOverlay(true)}>
                  <Image
                    src="/assets/glitz/newHomePage/icons/remodeling_arrow_icon.png"
                    alt="arrow icon"
                    width={32}
                    height={32}
                  />
                </span>
              </button>
            </div>

            {/* Overlay Content */}
            {showKitchenOverlay && (
              <div className="h-2/3 absolute top-[33%] inset-0 bg-black/90 text-white p-4 flex flex-col justify-center">
                <h2 className="text-lg 5xl:text-[20px] font-bold leading-[40px] text-white text-center">Kitchen Remodeling</h2>
                <p className="text-base 5xl:text-lg font-normal text-center leading-normal text-white">
                The kitchen is the heart of your home—a place where meals are shared, memories are made, and creativity comes to life. At Glitz Floors & More, we specialize in crafting kitchens that are as functional as they are beautiful.
                </p>
                <button className="mt-3 flex justify-center items-center gap-2 text-white text-sm font-bold leading-[20px] underline">Kitchen Remodeling <FaArrowRightLong className="mt-1"/></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemodelingServices;
