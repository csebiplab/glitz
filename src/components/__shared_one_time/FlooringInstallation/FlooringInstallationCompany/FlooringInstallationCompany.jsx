import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const FlooringInstallationCompany = () => {
  return (
    <div>
      <div className="container padding__all">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[35px]">
          <div className="order-2 xl:order-1 xl:col-span-1">
            <div className='flex justify-center xl:justify-start items-center'>
              <HeadingIcon
                text={headingIconText.flooringInstallation__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center xl:text-left">
              Cypress Flooring Installation Company
              </h2>
              <p className="text-lg font-normal text-secondary-50 text-center xl:text-left">
              As the leading Cypress flooring installation company, Glitz Floors & More is dedicated to providing exceptional service and outstanding results. We specialize in a wide range of flooring options, including hardwood, laminate, tile, and luxury vinyl, tailored to meet both aesthetic and functional needs. Our team of skilled professionals ensures precise installation, transforming your space with attention to detail and expertise. Whether you're renovating your home or updating a commercial property, we work closely with you to deliver a flawless finish that enhances the beauty and durability of your floors. At Glitz Floors & More, we pride ourselves on our commitment to customer satisfaction and quality craftsmanship, making us the top choice for flooring installation in Cypress.
              </p>
            </div>
          </div>
          <div className="order-1 xl:order-2 xl:col-span-1">
            <Image
              src="/assets/glitz/images/flooring_installation.png"
              alt="flooring_installation image"
              width={633}
              height={631}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlooringInstallationCompany;
