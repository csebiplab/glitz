import Image from "next/image";
import React from "react";
import "./HowToVisualize.css";

const HowToVisualize = () => {
  return (
    <div className="">
      <div className="container padding__top">
        <div className="bg__color grid grid-cols-1 xl:grid-cols-2 gap-[35px]">
          <div className="order-2 xl:col-span-1 py-[46px]">
            <div>
              <h2 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pb-[5px] text-center xl:text-left">
              How to Visualize <br/> Your Room's Floor Plan Easily
              </h2>
              <p className="text-lg font-normal text-secondary-50 text-center xl:text-left">
              Choosing the perfect flooring for your home can be challenging, but with our innovative floor visualization tool, you can now see how different flooring options will look in your exact room before making a decision. Simply upload a photo of your space, and instantly preview various styles, colors, and materials. Whether you're considering hardwood, tile, or carpet, our tool helps you make confident decisions by providing a realistic view of your chosen floors in your home.
              </p>
              <div className="pt-[35px]">
              <button className="text-lg font-normal text-[#905C4C] btn_bg px-[46px] py-[15px]">See How It Works</button>
              </div>
              
            </div>
          </div>
          <div className="order-1 xl:col-span-1">
            <Image
              src="/assets/glitz/images/How.png"
              alt="how to visualize image"
              width={595}
              height={551}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToVisualize;
