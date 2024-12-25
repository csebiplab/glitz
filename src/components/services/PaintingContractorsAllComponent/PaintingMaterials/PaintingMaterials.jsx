
import { headingIconText } from "@/utils/heading-text";
import React from "react";
import Image from "next/image";
import "./PaintingMaterials.css";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material1.png",
    title: "Premium Paints",
    desc: "We select high-quality, eco-friendly paints from reputable brands known for their durability and vibrant color options. These paints provide excellent coverage and are resistant to fading, ensuring a long-lasting finish.",
  },
  {
    id: 2,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material2.png",
    title: "Low-VOC and Zero-VOC Options",
    desc: "We offer low-VOC and zero-VOC paint choices to promote a healthier indoor environment. These formulations emit fewer harmful chemicals, making them safer for your home and family while delivering exceptional performance.",
  },
  {
    id: 3,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material3.png",
    title: "High-Performance Primers",
    desc: "Our team uses top-of-the-line primers to enhance paint adhesion and improve the durability of the final coat. Quality primers help prevent stains and imperfections from showing through, ensuring a smooth and even finish."
  },
  {
    id: 4,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material4.png",
    title: "Protective Sealants",
    desc: "We apply premium sealants to protect surfaces from moisture, UV rays, and everyday wear and tear. These sealants enhance the longevity of our paint jobs, providing an extra layer of defense against the elements.",
  },
  {
    id: 5,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material5.png",
    title: "Specialized Tools and Equipment",
    desc: "Our contractors use state-of-the-art tools, including high-quality brushes, rollers, and sprayers. The right tools help ensure an immaculate finish on every surface.",
  },
  {
    id: 6,
    img: "/assets/glitz/painting-contractors/painting-materials/painting-material6.png",
    title: "Eco-Friendly Products",
    desc: "We prioritize sustainability by choosing eco-friendly materials that minimize environmental impact. Our commitment to green practices extends to our paint selections, ensuring your project is beautiful and responsible.",
  },
];


const PaintingMaterials = () => {
  return (
    <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.paintingMaterials__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Best Painting Materials We Use
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          At Glitz Floors & More, we prioritize quality in every aspect of our painting services, starting with the materials we choose. Our commitment to excellence means we use only the best products to ensure stunning results that stand the test of time. Glitz Floors & More is committed to delivering outstanding results using only the best painting materials. Here's a look at the top-quality products we incorporate into our painting projects: By choosing Glitz Floors & More, you can trust that your painting project will be completed with the best materials available, resulting in a beautiful and durable finish. Our focus on quality ensures that your investment enhances your space aesthetically and adds long-lasting value. Trust us to deliver superior results that enhance your space for years.
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
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[6px] border-primary p-[5px] rounded-full bg-secondary-400"
                />
                <p className=" text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold text-center text-black pt-[65px]">
                  {data.title}
                </p>
                <p className=" text-base 4xl:text-[17px] 5xl:text-lg font-normal text-center pt-[5px]">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-[16px] mt-[16px]">
        <div
                className="w-full md:w-1/3 cart_bg relative px-[10px] 5xl:px-[15px] pb-[15px]"
              >
                <Image
                  src="/assets/glitz/painting-contractors/painting-materials/painting-material7.png"
                  alt="flooring image"
                  width={104}
                  height={104}
                  className="absolute left-0 right-0 -top-14 w-[104px] h-[104px] mx-auto border-[6px] border-primary p-[5px] rounded-full bg-secondary-400"
                />
                <p className=" text-lg 4xl:text-[19px] 5xl:text-[20px] font-bold text-center text-black pt-[65px]">
                Drop Cloths and Protective Materials
                </p>
                <p className=" text-base 4xl:text-[17px] 5xl:text-lg font-normal text-center pt-[5px]">
                Our team uses high-quality drop cloths and masking materials to safeguard floors, furniture, and fixtures from paint splatter and spills.
                </p>
              </div>
        </div>
      </div>
  );
};

export default PaintingMaterials;
