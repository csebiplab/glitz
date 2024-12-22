import NewHeadingIcon from '@/components/__ui/NewHeadingIcon';
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const Installation = () => {
  return (
    <div>
      <div className="full__section_l_p pr-3 md:pr-0 padding__top">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[25px]">
          <div className="order-2 xl:order-1 xl:col-span-1">
            <div className='flex justify-center xl:justify-start items-center'>
              <NewHeadingIcon
                text={headingIconText.installationCompany__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                #1 Flooring Installation Cypress
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
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
              src="/assets/glitz/flooring-installation/installation-company.png"
              alt="Installation us"
              width={798}
              height={488}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
