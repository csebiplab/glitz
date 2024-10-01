import React from "react";
import "./AboutOur.css";
import Image from "next/image";

const AboutOur = () => {
  return (
    <>
      <div className="py-[40px] md:py-[44px] lg:py-[48px] xl:py-[52px] 2xl:py-[56px] 3xl:py-[59px] 4xl:py-[62px] 5xl:py-[64px] px-[10px] md:px-[270px] lg:px-[300px] xl:px-[330px] 2xl:px-[360px] 3xl:px-[390px] 4xl:px-[420px] 5xl:px-[448px]">
        <div>
          <h2 className="text-[29px] md:text-[30px] lg:text-[31px] xl:text-[32px] 2xl:text-[33px] 3xl:text-[34px] 4xl:text-[35px] 5xl:text-[36px] font-extrabold text-balck text-center leading-[40px]">
            About Our Local Remodeling Professionals
          </h2>
          <p className="text-lg md:text-[20px] font-light leading-[36px] pt-[25px] 5xl:pt-[36px]">
            Here at Glitz Floors & More, we have a commitment to excellence and
            serving our clients with the highest levels of craftsmanship and
            integrity. Our expert team members give high attention to detail,
            never cut corners, and use superior-quality materials with every
            project. We provide exemplary service, full communication from
            purchase to installation, competitive pricing, and accountability
            for the quality of work and product. That's why you should choose us
            over the competition. We're never happy until you're 100 percent
            satisfied with your project.
          </p>
          <div className="flex justify-center items-center pt-[25px] 5xl:pt-[30px] pb-[30px] md:pb-[35px] 5xl:pb-[40px]">
            <button className="btn__bg_aboutOur text-lg font-light text-white text-center px-[17px] py-[19px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* about our image  */}
      <div className="flex justify-center items-center pb-[40px] md:pb-[44px] lg:pb-[48px] xl:pb-[52px] 2xl:pb-[56px] 3xl:pb-[59px] 4xl:pb-[62px] 5xl:pb-[64px]">
        <Image src="/assets/glitz/images/aboutOur.png" alt="about our image" width={800} height={534}/>
      </div>
    </>
  );
};

export default AboutOur;
