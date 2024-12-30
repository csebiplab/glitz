import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="full__section_r_p pl-3 md:pl-0 padding__top">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] 2xl:gap-[33px]">
          <div className=" md:col-span-1">
            <Image
              src="/assets/glitz/kitchenRemodel/aboutUs.png"
              alt="about us"
              width={726}
              height={597}
              className="w-full h-[450px] 5xl:h-[520px]"
            />
          </div>
          <div className="md:col-span-1">
            <div className="flex justify-center xl:justify-start items-center">
              <NewHeadingCenterIcon
                text={headingIconText.aboutUs__headingIconText}
              />
            </div>
            <div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center md:text-left">
                About Our Kitchen Remodeling Contractors
              </h2>
              <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center md:text-left leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
                At Glitz Floors & More, our kitchen remodeling contractors are
                dedicated to transforming your kitchen into the heart of your
                home. With a team of experienced professionals, we bring
                creativity, expertise, and a keen eye for detail to every
                project. We understand that the kitchen is not just a place for
                cooking; it's a gathering space for family and friends. That's
                why we work closely with you to design a kitchen that meets your
                needs and reflects your style. Our design options are tailored
                to fit your vision, from modern and sleek to warm and inviting.
                Our contractors are well-versed in the latest trends and
                technologies, ensuring that your remodel incorporates functional
                layouts, high-quality materials, and innovative solutions. We
                handle every aspect of the project, from initial design and
                planning to installation and finishing touches, all while
                maintaining clear communication throughout the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
