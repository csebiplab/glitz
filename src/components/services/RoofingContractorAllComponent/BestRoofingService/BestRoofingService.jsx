import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./BestRoofingService.css";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/bathroomRemodel/services1.png",
    title: "Bathroom Vinyl Flooring",
    desc: "Transform your bathroom with durable and waterproof vinyl flooring from Glitz Floors & More. Our vinyl flooring combines style with practicality, offering a wide range of designs that resist moisture, scratches, and daily wear. Choose from wood look, stone look, and modern patterns to complement any bathroom style. With expert installation by Glitz Floors & More, your vinyl flooring will provide a flawless, seamless finish that stands up to moisture and high traffic, ensuring long-lasting beauty and comfort for your space. Enjoy the ease of upkeep and a luxurious feel underfoot, all while enhancing your bathroom's style and functionality.",
  },
  {
    id: 2,
    img: "/assets/glitz/bathroomRemodel/services2.png",
    title: "Floor Tile for Bathrooms",
    desc: "Enhance your bathroom with durable, moisture-resistant floor tiles from Glitz Floors & More. Our selection includes ceramic, porcelain, and natural stone options, offering timeless style and easy maintenance. Expert installation ensures a perfect fit, giving your bathroom a beautiful, long-lasting finish. Choose from a variety of colors, textures, and patterns to match your unique style, from classic elegance to modern chic. With Glitz Floors & More, your bathroom floor will be beautiful and resilient, standing up to daily use while adding sophistication and comfort to your space. Enjoy a seamless blend of style and functionality that enhances the look and feel of your bathroom.",
  },
  {
    id: 3,
    img: "/assets/glitz/bathroomRemodel/services3.png",
    title: "Concrete Bathroom Floor",
    desc: "Transform your bathroom with a stylish and durable concrete floor from Glitz Floors & More. Offering a sleek, modern aesthetic, our concrete flooring is customizable with various finishes and colors. It's moisture-resistant, low-maintenance, and ideal for high-traffic areas, ensuring both functionality and elegance for your space. Enjoy the perfect blend of beauty and durability with a concrete bathroom floor that lasts for years. Whether you prefer a polished, stained, or textured finish, our expert team at Glitz Floors & More will provide professional installation tailored to your design vision. Enhance your bathroom with the contemporary look of concrete, complemented by the option for radiant heating to keep your floor warm and inviting. Experience the ultimate in style and practicality with a concrete bathroom floor that elevates your space while standing up to daily use.",
  },
  {
    id: 4,
    img: "/assets/glitz/bathroomRemodel/services4.png",
    title: "Wood Tile Bathroom Floor",
    desc: "Enhance your bathroom with the warmth and beauty of wood tile flooring from Glitz Floors & More. Offering the natural look of hardwood with the durability of ceramic or porcelain, our wood tiles are perfect for wet areas. They are moisture-resistant, easy to maintain, and available in a variety of colors and styles. Enjoy the timeless elegance of wood in your bathroom without sacrificing functionality or durability. Our wood tile bathroom floors provide the perfect blend of style and practicality, giving you the appearance of hardwood while ensuring resistance to moisture and stains. With expert installation from Glitz Floors & More, you can achieve a seamless, polished look that enhances your space. Choose from a range of finishes and textures to create a cozy, inviting atmosphere in your bathroom, all while enjoying the benefits of easy maintenance and long-lasting durability. Transform your bathroom into a luxurious retreat with the beauty of wood tile flooring.",
  },
  {
    id: 5,
    img: "/assets/glitz/bathroomRemodel/services5.png",
    title: "Waterproof Laminate Flooring for Bathrooms",
    desc: "Transform your bathroom with waterproof laminate flooring from Glitz Floors & More. Designed to resist moisture and humidity, our laminate flooring combines the beauty of wood and stone looks with durability and easy maintenance. Available in various styles and colors, it offers a stylish solution that stands up to daily use while providing a warm, inviting atmosphere. Enjoy a high-end appearance without the worry of water damage or extensive upkeep. With expert installation from Glitz Floors & More, you'll achieve a flawless finish that enhances your bathroom's overall aesthetic. Our waterproof laminate flooring is stylish and designed for longevity, ensuring it maintains its beauty over time. Experience the perfect blend of functionality and elegance, creating a cozy retreat in your bathroom that's easy to clean and built to last. Choose waterproof laminate flooring for a worry-free, beautiful solution to your bathroom needs.",
  },
  {
    id: 6,
    img: "/assets/glitz/bathroomRemodel/services6.png",
    title: "Waterproof Vinyl Flooring for Bathrooms",
    desc: "Upgrade your bathroom with waterproof vinyl flooring from Glitz Floors & More. This durable flooring option is designed to withstand moisture and heavy use while providing a stylish appearance. Available in a variety of designs, including wood and stone looks, waterproof vinyl is easy to maintain and comfortable underfoot. Enjoy the perfect combination of beauty and practicality, creating a welcoming and resilient space in your bathroom that lasts for years. With professional installation from Glitz Floors & More, you can ensure a seamless fit that enhances your bathroom's aesthetic. Our waterproof vinyl flooring is resistant to water damage and offers exceptional durability against scratches and stains. Experience the ease of cleaning and maintenance, making it an ideal choice for busy households. Transform your bathroom into a stylish and functional oasis with waterproof vinyl flooring that combines luxury with long-lasting performance.",
  },
  {
    id: 7,
    img: "/assets/glitz/bathroomRemodel/services7.png",
    title: "Bathroom Tile Repair",
    desc: "Restore the beauty of your bathroom with tile repair services from Glitz Floors & More. Our experienced team specializes in fixing cracked, chipped, or loose tiles, ensuring a seamless and attractive finish. We also offer grout repair and cleaning services to enhance the overall appearance of your tiled surfaces. Trust us to efficiently and effectively handle all your bathroom tile repair needs, leaving your space looking fresh and renewed. With our commitment to quality craftsmanship and attention to detail, Glitz Floors & More ensures that every repair blends seamlessly with your existing tiles. Whether it's a small repair or a more extensive restoration, our team works efficiently to minimize disruption to your home. Trust us to bring your bathroom tiles back to life, enhancing the beauty and functionality of your space. Enjoy a polished, refreshed bathroom that you'll love for years to come.",
  },
  {
    id: 8,
    img: "/assets/glitz/bathroomRemodel/services8.png",
    title: "Bathroom Sink Repair",
    desc: (
      <>
        "Revive your bathroom sink with repair services from Glitz Floors &
        More. Our skilled team specializes in fixing leaks, cracks, and other
        damage to ensure your sink functions perfectly and looks great. Whether
        it's a minor repair or a more significant restoration, we use
        high-quality materials and techniques to deliver durable results. Trust
        us to restore your bathroom sink efficiently, enhancing the
        functionality and aesthetics of your space. Enjoy a reliable and stylish
        sink that meets your needs for years to come. At{" "}
        <Link className="text-secondary-800 hover:underline" rel="nofollow" target="_blank" href="https://www.glitzfloorsandmore.com/">
          Glitz Floors & More,
        </Link>{" "}
        we understand the importance of a fully functioning sink in your
        bathroom, and our commitment to quality ensures that every repair is
        handled with precision and care. Our team is equipped to address various
        issues, from stubborn leaks to cosmetic damage, restoring your sink to
        its original condition. With a focus on customer satisfaction, we work
        quickly to minimize disruption to your daily routine while delivering "
      </>
    ),
  },
];

const BestRoofingService = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.servicesIncluded__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
            Our Bathroom Remodeling Services Included
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            Transform your bathroom into a beautiful, functional space with
            Glitz Floors & More's expert remodeling services. Our team handles
            every detail, from design consultation to final touches, ensuring a
            seamless experience from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 3xl:gap-[30px] mt-[25px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id} className="">
                <Image
                  className="rounded-t-[16px]"
                  src={data.img}
                  alt="services image"
                  width={660}
                  height={335}
                />
                <div className="servicesCart___bg py-[16px] px-[8px] h-auto md:h-[520px]">
                  <h3 className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                    {data.title}
                  </h3>
                  <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BestRoofingService;
