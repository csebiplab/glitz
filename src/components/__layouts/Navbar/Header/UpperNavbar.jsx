import React from "react";
import Image from "next/image";

const UpperNavbar = () => {
  return (
    <div className="container hidden md:block bg-secondary py-[6px]">
      <div className="flex justify-between items-center">
        {/* first div  */}
        <div>
          <p className="font-family-secondary text-sm 5xl:text-base font-bold text-white leading-normal">
            FLOORS NOW, PAY OVER TIME
          </p>
          <p className="font-family-secondary text-xs 5xl:text-sm font-bold text-white leading-normal">
            Convenient monthly payments to fit your budget1
          </p>
        </div>
        {/* second div  */}
        <div className="">
          <p className="font-family-secondary flex items-center justify-end gap-[6px] text-sm 5xl:text-base font-bold text-white leading-normal text-right">
            <Image
              src="/assets/glitz/icons/info.png"
              alt="info icon"
              width={18}
              height={18}
            />
            0% Interest Financing Available
          </p>
          <p className="font-family-secondary text-xs 5xl:text-sm font-normal text-white leading-normal pt-[4px] 5xl:pt-[6px] text-right">
            Ask About 0% Interest Financing with Synchrony Bank
          </p>
        </div>

        {/* <div>
          <button className="font-family-secondary text-sm 5xl:text-base font-bold text-white leading-normal py-[8px] px-[12px] border-[2px] border-white rounded-[4px]">
            View Financing Option
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UpperNavbar;
