import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import React from "react";
import Image from "next/image";
import "./Innovative.css";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative1.png",
    title: "Open Concept Layouts",
    desc: "Remove walls to create a seamless flow between the kitchen and living areas, making the space feel larger and more inviting.",
  },
  {
    id: 2,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative2.png",
    title: "Smart Appliances",
    desc: "Incorporate the latest technology with smart appliances that enhance efficiency, such as refrigerators with touch screens, smart ovens, and automated lighting systems.",
  },
  {
    id: 3,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative3.png",
    title: "Multifunctional Islands",
    desc: "Design a kitchen island that serves multiple purposes: cooking, dining, and even storage. Consider adding built-in outlets and charging stations for added convenience.",
  },
  {
    id: 4,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative4.png",
    title: "Sustainable Materials",
    desc: "Use eco-friendly materials like bamboo flooring, recycled countertops, and energy-efficient appliances to create a sustainable and stylish kitchen.",
  },
  {
    id: 5,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative5.png",
    title: "Bold Color Palettes",
    desc: "Experiment with vibrant colors or two-tone cabinetry to make a statement. Incorporate bold backsplashes or painted accent walls for added personality.",
  },
  {
    id: 6,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative6.png",
    title: "Creative Storage Solutions",
    desc: "Maximize space with pull-out shelves, hidden cabinets, and vertical storage. Use decorative baskets or open shelving to showcase your favorite items while keeping organized.",
  },
  {
    id: 7,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative7.png",
    title: "Unique Backsplashes",
    desc: "Go beyond traditional tile with materials like reclaimed wood, metal, or even glass for a backsplash that adds texture and visual interest.",
  },
  {
    id: 8,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative8.png",
    title: "Integrated Lighting",
    desc: "Under-cabinet lights, pendant fixtures, and dimmer switches can create a warm, inviting atmosphere.",
  },
  {
    id: 9,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative9.png",
    title: "Functional Pantries",
    desc: "Consider a walk-in pantry or a butler's pantry to keep your kitchen clutter-free. Use organized shelving and storage solutions to enhance functionality.",
  },
  {
    id: 10,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative10.png",
    title: "Statement Fixtures",
    desc: "Choose unique light fixtures or hardware that serve as focal points. A bold chandelier or eye-catching cabinet handles can elevate your kitchen's design.",
  },
  {
    id: 11,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative11.png",
    title: "Flexible Dining Options",
    desc: "Incorporate a breakfast nook or a bar-height counter with stools for casual dining. This can create additional seating and a cozy atmosphere.",
  },
  {
    id: 12,
    img: "/assets/glitz/kitchenRemodel/innovative/innovative12.png",
    title: "Customizable Workspaces",
    desc: "Design a kitchen that adapts to your cooking style, with dedicated zones for prep, cooking, and cleaning, ensuring an efficient workflow.",
  },
];


const Innovative = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon
            text={headingIconText.innovative__headingIconText}
          />
          <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px] pb-[5px]">
          Innovative Ideas for Your Kitchen Renovation
          </h2>
          <p className="font-family-secondary text-lg font-normal text-center text-secondary">
          These innovative ideas can help you create a kitchen that not only meets your functional needs but also reflects your personal style. At Glitz Floors & More, we're here to bring your vision to life!
          </p>
        </div>
        {/* cart part  */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-[16px] pt-[80px]">
          {considerationAndLimitingData?.map((data) => {
            return (
              <div
                key={data.id}
                className="cart_bg relative px-[10px] 5xl:px-[15px] pb-[15px] mb-[55px]"
              >
                <Image
                  src={data.img}
                  alt="flooring image"
                  width={104}
                  height={104}
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[2px] border-primary p-[5px] rounded-full bg-secondary-400"
                />
                <p className="font-family-secondary text-[25px] font-bold text-center text-black pt-[65px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-lg font-normal text-center pt-[5px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Innovative ;
