import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const ResidentialCommercial = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[35px]">
          <div className="order-2 xl:col-span-1">
            <div className='flex justify-center xl:justify-start items-center'>
              <HeadingIcon
                text={headingIconText.residentialAndCommercial__headingIconText}
              />
            </div>
            <div>
              <h2 className="font-family-primary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px]  5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[5px] text-center xl:text-left">
              Residential & Commercial Flooring Cypress
              </h2>
              <p className="font-family-secondary text-lg font-normal text-secondary-50 text-center xl:text-left">
              At Glitz Floors & More, we proudly serve both residential and commercial clients in Cypress, TX, with top-quality flooring solutions. Whether you're looking to enhance the beauty of your home or upgrade your commercial space, we have the expertise and products to meet your needs. Our extensive selection includes a variety of flooring options such as hardwood, laminate, tile, and luxury vinyl, each carefully chosen for its durability and aesthetic appeal. For homeowners, we offer personalized service to help you select and install the perfect flooring that matches your style and lifestyle. For businesses, we provide durable and stylish flooring solutions that can withstand heavy foot traffic while enhancing the professional look of your space. With Glitz Floors & More, you can trust that your flooring project, whether residential or commercial, will be completed with precision, care, and the highest standards of quality.
              </p>
            </div>
          </div>
          <div className="order-1 xl:col-span-1">
            <Image
              src="/assets/glitz/images/residentialCommercial.png"
              alt="residentialCommercial image"
              width={633}
              height={671}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialCommercial;
