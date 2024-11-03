import React from "react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";

const processData = [
  {
    id: 1,
    img: "/assets/glitz/bathroomRemodel/process1.png",
    title: "Consultation & Design Plan",
    desc: "Our process starts with a detailed consultation to understand your vision, needs, and budget. We help you select high-quality materials, fixtures, and design elements that align with your style. Our design experts work closely with you to develop a tailored plan"
  },
  {
    id: 2,
    img: "/assets/glitz/bathroomRemodel/process2.png",
    title: "Project Preparation",
    desc: "Before starting the remodel, we handle all necessary permits and inspections to ensure a smooth, compliant process. We prepare the space by protecting surrounding areas to minimize disruption and keep your home clean and organized throughout the project",
  },
  {
    id: 3,
    img: "/assets/glitz/bathroomRemodel/process3.png",
    title: "Demolition & site prepare",
    desc: "Once prepared, our team handles the demolition of existing structures safely and efficiently. We remove old fixtures, flooring, and outdated elements, ensuring a clean slate for your new bathroom design."
  },
  {
    id: 4,
    img: "/assets/glitz/bathroomRemodel/process4.png",
    title: "Structural & Plumbing",
    desc: "Glitz Floors & More prioritizes quality, so we upgrade necessary plumbing, wiring, and structural elements to meet modern standards and support your new fixtures and layout. Our skilled professionals ensure that each installation is built to last.",
  },
  {
    id: 5,
    img: "/assets/glitz/bathroomRemodel/process5.png",
    title: "Install & finish touches",
    desc: "With a strong foundation, we install all new components, from flooring and tiles to vanities and lighting. Our team handles every detail, ensuring your bathroom remodel is flawless and precisely to your specifications.",
  },
  {
    id: 6,
    img: "/assets/glitz/bathroomRemodel/process6.png",
    title: "Final Walk & Quality Check",
    desc: "After completing the remodel, we conduct a thorough quality check and a walkthrough with you to ensure everything meets your satisfaction. We address any final touches to ensure your bathroom is ready for years of comfort and beauty.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.process__headingIconText} />
          <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px] pb-[25px]">
          Streamlined Process of Bathroom Remodel Project
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px]">
          {processData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="font-family-secondary text-[25px] xl:text-[22px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Services;
