import React from "react";
import "./FloorsNow.css";

const FloorsNow = () => {
  return (
    <div className="">
      <div className=" container padding__top">
        <div className="floorsNow__bg h-full flex flex-col justify-center items-center ">
          <h2 className="text-3xl md:text-[32px] lg:text-[34px] xl:text-[36px]  2xl:text-[38px] 3xl:text-[40px] 4xl:text-[42px] 5xl:text-[44px]  5xl:text-[44px] font-bold text-white">
            FLOORS NOW, PAY OVER TIME
          </h2>
          <p className="text-lg font-normal text-[25px] text-white pt-[5px]">
            Convenient monthly{" "}
            <span className="font-bold">payments to fit your budget1</span>
          </p>
          <div className="pt-[35px]">
              <button className="text-lg font-normal text-white btn__bg pl-[37px] pr-[36px] pt-[17px] pb-[14px] ">View Financing Option</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default FloorsNow;
