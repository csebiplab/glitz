import React from "react";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/kitchenRemodel/services/services1.png",
    title: "Design Consultation",
    desc: "Personalized design sessions to capture your vision and create a functional layout tailored to your lifestyle."
  },
  {
    id: 2,
    img: "/assets/glitz/kitchenRemodel/services/services2.png",
    title: "Custom Cabinetry",
    desc: "A variety of cabinetry options, including custom solutions, to maximize storage and enhance your kitchen's aesthetics."
  },
  {
    id: 3,
    img: "/assets/glitz/kitchenRemodel/services/services3.png",
    title: "Countertop Installation",
    desc: "Expert installation of high-quality materials like granite, quartz, and marble, ensuring durability and style."
  },
  {
    id: 4,
    img: "/assets/glitz/kitchenRemodel/services/services4.png",
    title: "Flooring Solutions",
    desc: "Options include tile, hardwood, laminate, and vinyl to provide a beautiful and durable foundation for your kitchen."
  },
  {
    id: 5,
    img: "/assets/glitz/kitchenRemodel/services/services5.png",
    title: "Lighting Design",
    desc: "Comprehensive lighting solutions, including ambient, task, and accent lighting, create the perfect atmosphere."
  },
  {
    id: 6,
    img: "/assets/glitz/kitchenRemodel/services/services6.png",
    title: "Plumbing & Electrical Work",
    desc: "Licensed professionals to handle all plumbing and electrical updates, ensuring safety and compliance"
  },
  {
    id: 7,
    img: "/assets/glitz/kitchenRemodel/services/services7.png",
    title: "Backsplash Installation",
    desc: "Stylish backsplash options in various materials and designs enhance the visual appeal of your kitchen."
  },
  {
    id: 8,
    img: "/assets/glitz/kitchenRemodel/services/services8.png",
    title: "Appliance & Installation",
    desc: "Guidance in choosing modern, energy-efficient appliances, along with professional installation."
  },
  {
    id: 9,
    img: "/assets/glitz/kitchenRemodel/services/services9.png",
    title: "Finishing Touches",
    desc: "Attention to detail with hardware selection, paint colors, and decorative elements that tie your design together."
  },
  {
    id: 10,
    img: "/assets/glitz/kitchenRemodel/services/services10.png",
    title: "Project Management",
    desc: "Comprehensive project oversight to ensure timely completion and clear communication throughout"
  },
  {
    id: 11,
    img: "/assets/glitz/kitchenRemodel/services/services11.png",
    title: "Open Concept Designs",
    desc: "Expert guidance on creating open layouts that enhance flow and connectivity between your kitchen"
  },
  {
    id: 12,
    img: "/assets/glitz/kitchenRemodel/services/services12.png",
    title: "Space Optimize Solutions",
    desc: "Innovative storage solutions, including pull-out shelves, lazy Susans, and custom drawers, to maximize efficiency."
  },
  {
    id: 13,
    img: "/assets/glitz/kitchenRemodel/services/services13.png",
    title: "Eco-Friendly Options",
    desc: "Sustainable materials and energy-efficient appliances for those looking to reduce their environmental impact."
  },
  {
    id: 14,
    img: "/assets/glitz/kitchenRemodel/services/services14.png",
    title: "Accessibility Modifications",
    desc: "Custom solutions to ensure your kitchen is accessible and functional for everyone, regardless of mobility challenges."
  },
];

const Services = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon text={headingIconText.comprehensive__headingIconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
          Comprehensive Kitchen Remodeling Services
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          At Glitz Floors & More, we offer a wide array of comprehensive kitchen remodeling services to meet all your needs. Our services include:  With our extensive range of services, Glitz Floors & More is dedicated to making your kitchen remodel a seamless and rewarding experience. Let us help you create a beautiful, functional space that reflects your style and meets your needs!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px] mt-[25px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className="font-family-secondary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
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
