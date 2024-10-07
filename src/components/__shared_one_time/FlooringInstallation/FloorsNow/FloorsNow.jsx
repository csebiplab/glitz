import React from "react";
import "./FloorsNow.css";

const FloorsNow = () => {
  return (
    <div className="">
      <div className=" container padding__top">
        {/* large device  */}
        <div className="hidden 5xl:block floorsNow__bg">
          <div className="h-full flex flex-col justify-center items-center">
          <h2 className="font-family-primary text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px]  2xl:text-[38px] 3xl:text-[40px] 4xl:text-[42px] 5xl:text-[44px]  5xl:text-[44px] font-bold text-white">
            FLOORS NOW, PAY OVER TIME
          </h2>
          <p className="font-family-secondary text-lg font-normal text-[25px] text-white pt-[5px]">
            Convenient monthly{" "}
            <span className="font-bold">payments to fit your budget1</span>
          </p>
          <div className="pt-[30px] 5xl:pt-[35px]">
              <button className="font-family-primary text-lg font-normal text-white btn__bg_floor_now pl-[37px] pr-[36px] pt-[17px] pb-[14px] ">View Financing Option</button>
          </div>
          </div>
        </div>
        {/* medium device  */}
        <div className="hidden xl:block 5xl:hidden floorsNow__bg_md">
          <div className="h-full flex flex-col justify-center items-center">
          <h2 className="font-family-primary text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px]  2xl:text-[38px] 3xl:text-[40px] 4xl:text-[42px] 5xl:text-[44px]  5xl:text-[44px] font-bold text-white">
            FLOORS NOW, PAY OVER TIME
          </h2>
          <p className="font-family-secondary text-lg font-normal text-[25px] text-white pt-[5px]">
            Convenient monthly{" "}
            <span className="font-bold">payments to fit your budget1</span>
          </p>
          <div className="font-family-primary pt-[30px] 5xl:pt-[35px]">
              <button className="text-lg font-normal text-white btn__bg_floor_now pl-[37px] pr-[36px] pt-[17px] pb-[14px] ">View Financing Option</button>
          </div>
          </div>
        </div>
        {/* small device  */}
        <div className="block md:hidden floorsNow__bg_sm h-full flex flex-col justify-center items-center ">
          <h2 className="font-family-primary text-3xl font-bold text-white text-center">
            FLOORS NOW, PAY OVER TIME
          </h2>
          <p className="font-family-secondary text-lg font-normal text-[25px] text-white pt-[5px] text-center">
            Convenient monthly{" "} <br/>
            <span className="font-bold">payments to fit your <br/> budget1</span>
          </p>
          <div className="pt-[30px] 5xl:pt-[35px]">
              <button className="font-family-primary text-lg font-normal text-white btn__bg_floor_now pl-[37px] pr-[36px] pt-[17px] pb-[14px] ">View Financing Option</button>
              </div>
        </div>

      </div>
    </div>
  );
};

export default FloorsNow;
