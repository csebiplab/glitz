import Image from "next/image";
import React from "react";

const YourDream = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[60px] lg:gap-[70px] xl:gap-[80px] 2xl:gap-[90px] 3xl:gap-[100px] 4xl:gap-[110px] 5xl:gap-[120px] py-[10px] 5xl:py-[16px] pr-[10px] 5xl:pr-[16px] pl-[69px] lg:pl-[74px] xl:pl-[79px] 2xl:pl-[84px] 3xl:pl-[89px] 4xl:pl-[94px] 5xl:pl-[99px]">
      <div className="md:col-span-1 flex flex-col justify-center">
          <h2 className="text-[29px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[33px] 3xl:text-[34px] 4xl:text-[35px] 5xl:text-[36px] font-extrabold text-black text-center">
            You Dream It . . . We Create It
          </h2>
          <p className="text-lg 5xl:text-[20px] font-light text-black py-[18px] 5xl:py-[38px]">
            Glitz Floors & More offers top-notch flooring and remodeling
            services in Cypress, TX. With more than a decade of experience as a
            top sales and installation service provider, we are the go-to choice
            for all of your flooring and remodeling needs. Whether you're
            looking to upgrade your bathroom, transform your kitchen, or even
            give your home a fresh coat of paint, you've come to the right
            place. Our team of experts specializes in flooring, bathroom
            remodeling, and kitchen remodeling, as well as painting and small
            home interior remodeling. We take pride in delivering high-quality
            workmanship and ensuring your complete satisfaction.
          </p>
        </div>
        <div className="md:col-span-1">
          <Image
            src="/assets/glitz/homePage/youDream.png"
            alt="your dream"
            width={925}
            height={488}
          />
        </div>
        
      </div>
    </div>
  );
};

export default YourDream;
