import React from "react";

const ServicesArea = () => {
  return (
    <div className="container py-[40px] xl:py-[50px] 5xl:py-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[50px] 5xl:gap-[100px] px-[70px]">
        <div className="md:col-span-1">
          <h6 className="text-[24px] 2xl:text-[30px] font-semibold text-black leading-[22px] pb-[32px]">
            Service Area
          </h6>
          <ul className="">
            <li className="text-lg font-light text-black leading-[33px]">Glitz Floors & More</li>
            <li className="text-lg font-light text-black leading-[33px] py-[11px]">
              16726 Huffmeister Road, <br />
              D400 <br />
              Cypress, TX 77429
            </li>
            <li className="text-lg font-light text-black leading-[33px] pb-[11px]">(346) 445-6343</li>
            <li className="text-lg font-light text-black leading-[33px]">
              Serving the Cypress, Spring, <br />
              Tomball, Magnolia, Hockley, <br />
              Houston, Conroe, Woodlands, <br />& Pearland areas.
            </li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h6 className="text-[24px] 2xl:text-[30px] font-semibold text-black leading-[22px] pb-[32px]">
            Business Hours
          </h6>
          <ul>
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Monday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] py-[13px]">Tuesday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Wednesday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] py-[13px]">Thursday <span>10:00AM - 6:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px]">Friday <span>10:00AM - 5:00PM</span></li>
            <li className="flex justify-between text-lg font-light text-black leading-[33px] pt-[13px]">Saturday <span>10:00AM - 2:00PM</span></li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h6 className="text-[24px] 2xl:text-[30px] font-semibold text-black leading-[22px] ">
            Social
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ServicesArea;
