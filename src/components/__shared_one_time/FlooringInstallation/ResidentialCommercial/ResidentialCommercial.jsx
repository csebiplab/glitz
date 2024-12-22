import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const ResidentialCommercial = () => {
  return (
    <div>
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[25px]">
          <div className="order-2 xl:col-span-1">
            <div className='flex justify-center xl:justify-start items-center'>
              <NewHeadingIcon
                text={headingIconText.residentialAndCommercial__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
              Residential & Commercial Flooring Cypress
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
              At Glitz Floors & More, we proudly serve both residential and commercial clients in Cypress, TX, with top-quality flooring solutions. Whether you're looking to enhance the beauty of your home or upgrade your commercial space, we have the expertise and products to meet your needs. Our extensive selection includes a variety of flooring options such as hardwood, laminate, tile, and luxury vinyl, each carefully chosen for its durability and aesthetic appeal. For homeowners, we offer personalized service to help you select and install the perfect flooring that matches your style and lifestyle. For businesses, we provide durable and stylish flooring solutions that can withstand heavy foot traffic while enhancing the professional look of your space. With Glitz Floors & More, you can trust that your flooring project, whether residential or commercial, will be completed with precision, care, and the highest standards of quality.
              </p>
            </div>
          </div>
          <div className="order-1 xl:col-span-1">
            <Image
              src="/assets/glitz/flooring-installation/residential-commercial.png"
              alt="residentialCommercial image"
              width={797}
              height={543}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialCommercial;
