import Image from "next/image";
import React from "react";
// css file 
import "./VisualizeYourRoom.css";

const VisualizeYourRoom = () => {
  return (
    <div className="container padding__top">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div data-aos="fade-right" className="md:col-span-1">
          <Image
            src="/assets/glitz/newHomePage/visualizeYourRoom.png"
            alt="visualizeYourRoom"
            width={595}
            height={551}
            className="w-full h-[350px] md:h-[495px] 5xl:h-[551px]"
          />
        </div>
        <div data-aos="fade-left" className="md:col-span-1 visualizeYourRoom__bg px-[24px] 3xl:px-[30px] 5xl:pl-[34px] py-[22px] md:py-[26px] lg:py-[30px] xl:py-[34px] 2xl:py-[38px] 3xl:py-[42px] 4xl:py-[45px] 5xl:py-[48px] flex flex-col justify-center md:justify-start">
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-white text-center md:text-left leading-tight">
            How to Visualize Your Room's Floor Plan Easily
          </h2>
          <p className="text-base 5xl:text-lg leading-[30px] text-white font-light text-center md:text-left mt-[10px]">
            Choosing the perfect flooring for your home can be challenging, but
            with our innovative floor visualization tool, you can now see how
            different flooring options will look in your exact room before
            making a decision. Simply upload a photo of your space, and
            instantly preview various styles, colors, and materials. Whether
            you're considering hardwood, tile, or carpet, our tool helps you
            make confident decisions by providing a realistic view of your
            chosen floors in your home.
          </p>
          <div className="mt-[35px] flex items-center justify-center md:justify-start">
            <button className="text-lg text-white font-normal leading-normal py-[16px] px-[44px] contact_form__submit">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualizeYourRoom;
