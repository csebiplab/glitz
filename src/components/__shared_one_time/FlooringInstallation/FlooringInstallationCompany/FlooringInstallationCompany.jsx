import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const FlooringInstallationCompany = () => {
  return (
    <div>
      <div className="full__section_l_p pr-3 md:pr-0 padding__all">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[35px]">
          <div className="order-2 md:order-1 md:col-span-1">
            <div className='flex justify-center md:justify-start items-center'>
              <NewHeadingIcon
                text={headingIconText.flooringInstallation__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
              Cypress Flooring Installation Company
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
              As the leading Cypress flooring installation company, Glitz Floors & More is dedicated to providing exceptional service and outstanding results. We specialize in a wide range of flooring options, including hardwood, laminate, tile, and luxury vinyl, tailored to meet both aesthetic and functional needs. Our team of skilled professionals ensures precise installation, transforming your space with attention to detail and expertise. Whether you're renovating your home or updating a commercial property, we work closely with you to deliver a flawless finish that enhances the beauty and durability of your floors. At Glitz Floors & More, we pride ourselves on our commitment to customer satisfaction and quality craftsmanship, making us the top choice for flooring installation in Cypress.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-1">
            <Image
              src="/assets/glitz/flooring-installation/flooring-installation-company.png"
              alt="flooring_installation image"
              width={798}
              height={448}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlooringInstallationCompany;
