import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[35px]">
          <div className="order-2 xl:order-1 xl:col-span-1">
            <div className='flex justify-center xl:justify-start items-center'>
              <HeadingIcon
                text={headingIconText.installation__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center xl:text-left">
                #1 Flooring Installation Cypress
              </h2>
              <p className="text-lg font-normal text-secondary-50 text-center xl:text-left">
                As the #1 flooring installation provider in the area, we
                specialize in transforming your space with high-quality
                materials and expert craftsmanship. Whether you're upgrading
                your home with elegant hardwood, durable laminate, or stylish
                tile, our experienced team ensures a flawless installation
                process from start to finish. We pride ourselves on delivering
                exceptional service and results that exceed your expectations.
                At Glitz Floors & More, we understand that flooring is the
                foundation of your home's design. That's why we offer a wide
                variety of options to suit every taste and lifestyle, from
                classic hardwoods to contemporary luxury vinyl. We work closely
                with you to select the perfect flooring material and style that
                complements your home's aesthetic and meets your practical
                needs. With our commitment to excellence and customer care,
                we've earned our reputation as the top flooring installation
                service in Cypress.
              </p>
            </div>
          </div>
          <div className="order-1 xl:order-2 xl:col-span-1">
            <Image
              src="/assets/glitz/images/Installation.png"
              alt="Installation us"
              width={743}
              height={711}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
