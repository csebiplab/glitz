"use client";
import React from "react";
import "./Services.css";
import Image from "next/image";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/images/services1.png",
    title: "Tile Flooring Installation",
    desc: "Enhance your space with the timeless appeal and durability of Glitz Floors & More tile flooring. Our tile flooring options, including ceramic, porcelain, and natural stone, offer a versatile and stylish solution for any room. Known for their resilience and ease of maintenance, tile floors are perfect for high-traffic areas and moisture-prone spaces. With our expert installation and wide selection, we help you achieve a beautiful and long-lasting floor that complements your design vision. Explore the endless design possibilities and enjoy a floor combining elegance and practicality.",
    link: "Know About Tile Flooring Installation",
  },
  {
    id: 2,
    img: "/assets/glitz/images/services2.png",
    title: "Hardwood Flooring Installation",
    desc: "Elevate your space with the natural beauty and enduring elegance of hardwood flooring from Glitz Floors & More. Our premium selection of hardwood options, including oak, maple, and cherry, offers a timeless and sophisticated touch to any room. Renowned for its durability and classic appeal, hardwood flooring enhances the warmth and character of your home or office. With professional installation and expert finishing services, we ensure a flawless and long-lasting result that highlights the unique grain patterns and rich colors of each plank. Choose hardwood flooring",
    link: "Know About Hardwood Flooring Installation",
  },
  {
    id: 3,
    img: "/assets/glitz/images/services3.png",
    title: "Laminate Flooring Installation",
    desc: "Transform your space with the stylish and practical benefits of laminate flooring from Glitz Floors & More. Designed to mimic the look of natural materials like wood and stone, laminate flooring offers a cost-effective and durable solution for any room. Its robust construction resists scratches, stains, and wear, making it ideal for high-traffic areas and busy households. With a variety of finishes and designs to choose from, laminate flooring combines aesthetic appeal with easy maintenance. Enjoy the beauty of premium materials without the hefty price tag, and trust ",
    link: "Know About Laminate Flooring Installation",
  },
  {
    id: 4,
    img: "/assets/glitz/images/services4.png",
    title: "Luxury Vinyl Planks Flooring Installation",
    desc: "Elevate your interiors with the sleek and sophisticated appeal of luxury vinyl planks from Glitz Floors & More. Combining the elegance of natural materials with advanced durability, luxury vinyl planks are an ideal choice for high-traffic areas and spaces prone to moisture. With realistic textures and rich visuals that replicate wood or stone, they offer both beauty and resilience. Easy to install and maintain, these planks are resistant to scratches, stains, and water, making them perfect for both residential and commercial applications. Enjoy the perfect blend of style",
    link: "Know About Vinyl Planks Flooring Installation",
  }
];

const Services = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
        <NewHeadingCenterIcon text={headingIconText.services__headingIconText} />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
          Services We Provide
        </h2>
        <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px] pb-[35px]">
          At Glitz Floors & More, we specialize in transforming spaces with
          exceptional flooring solutions tailored to your unique needs. Our
          comprehensive range of services ensures that every aspect of your
          flooring project is handled with precision and care:
        </p>
      </div>
      {/* card  */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[36px]">
        {servicesData.map((data) => {
          return (
            <div key={data.id} className="cart__bg">
              <Image
                src={data.img}
                alt="premium img"
                width={657}
                height={263}
              />
              <div className="text-center px-[12px]">
                <p className="text-[25px] xl:text-[22px] 5xl:text-[25px] font-bold text-black pt-[17px] pb-[5px]">
                  {data.title}
                </p>
                <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-secondary-200">
                  {data.desc}
                </p>
                <p className=" flex items-center justify-center gap-[5px] text-[13px] md:text-base 5xl:text-lg font-bold text-primary pb-[13px] pt-[30px]">
                  {data.link}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75Z"
                      fill="#905C4C"
                    />
                  </svg>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* second div  */}
        <div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[36px] pt-[35px]">
          <div className="cart__bg">
              <Image
                src="/assets/glitz/images/services5.png"
                alt="premium img"
                width={657}
                height={263}
              />
              <div className="text-center px-[12px]">
                <p className=" text-[25px] xl:text-[22px] 5xl:text-[25px] font-bold text-black pt-[17px] pb-[5px]">
                Carpet Flooring Installation
                </p>
                <p className=" text-lg font-normal text-secondary-200">
                Enhance comfort and warmth in any space with carpet flooring from Glitz Floors & More. Our extensive range of carpet options offers a variety of textures, colors, and patterns to suit your style and needs. Ideal for bedrooms, living areas, and office spaces, carpet flooring provides a soft underfoot feel and excellent sound insulation. You can find the perfect carpet to match your lifestyle with options ranging from plush and cozy to durable and stain-resistant. Our professional installation ensures a smooth, seamless finish, while our high-quality materials guarantee.
                </p>
                <p className=" flex items-center justify-center gap-[5px] text-sm md:text-base 5xl:text-lg font-bold text-primary pb-[13px] pt-[30px]">
                Know About Carpet Flooring Installation
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                  >
                    <path
                      d="M1 5.25C0.585786 5.25 0.25 5.58579 0.25 6C0.25 6.41421 0.585786 6.75 1 6.75L1 5.25ZM17.5303 6.53033C17.8232 6.23744 17.8232 5.76256 17.5303 5.46967L12.7574 0.696699C12.4645 0.403806 11.9896 0.403806 11.6967 0.696699C11.4038 0.989593 11.4038 1.46447 11.6967 1.75736L15.9393 6L11.6967 10.2426C11.4038 10.5355 11.4038 11.0104 11.6967 11.3033C11.9896 11.5962 12.4645 11.5962 12.7574 11.3033L17.5303 6.53033ZM1 6.75L17 6.75V5.25L1 5.25L1 6.75Z"
                      fill="#905C4C"
                    />
                  </svg>
                </p>
              </div>
            </div>
          <div className="cart__bg py-[50px] md:py-0">
              <div className="text-center px-[12px] h-full flex flex-col justify-center">
                <p className=" text-[30px] font-bold text-black pb-[5px]">
                Ready to Get Started? 
                </p>
                <p className=" text-lg font-normal text-secondary-200">
                Thinking about upgrading your home's flooring? Schedule a free in-home estimate with our expert team and get personalized advice tailored to your needs. We bring samples directly to you, so you can see how different flooring options will look in your space. Our hassle-free process ensures that you get the perfect floor at the right price. Don't wait—schedule your free in-home estimate today and take the first step toward transforming your home!
                </p>
                <div className="pt-[25px] md:pt-[35px] 5xl:pt-[55px]">
                  <button className=" btn__bg_services  text-lg font-normal text-primary leading-normal py-[15px] px-[60px]">Schedule Now </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Services;
