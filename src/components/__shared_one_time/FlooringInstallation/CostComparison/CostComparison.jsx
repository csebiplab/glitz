import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./CostComparison.css";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const howWeDesginData = [
  {
    id: 1,
    title: "Hardwood Flooring",
    desc: (
      <>
        Known for its timeless beauty and durability, hardwood flooring
        typically costs between <strong>$8 and $15</strong> per square foot,
        including installation. While it's a higher upfront investment, hardwood
        can last for decades with proper care and adds significant value to your
        home
      </>
    ),
  },
  {
    id: 2,
    title: "Laminate Flooring",
    desc: (
      <>
        If you love the look of hardwood but need a more budget-friendly option,
        laminate flooring is a fantastic choice. Prices range from{" "}
        <strong>$3 to $8</strong> per square foot. It mimics the appearance of
        wood and is both durable and simple to maintain.
      </>
    ),
  },
  {
    id: 3,
    title: "Tile Flooring",
    desc: (
      <>
        Tile is a versatile and water-resistant option, perfect for kitchens,
        bathrooms, or high-traffic areas. The cost of tile flooring varies
        widely depending on the material (ceramic, porcelain, or natural stone),
        ranging from <strong>$6 to $15</strong> per square foot.
      </>
    ),
  }
];

const CostComparison = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.costComparison__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
            Flooring Cost Comparison in Cypress
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            When selecting the right flooring for your home in Cypress,
            understanding the cost of different materials is key to making an
            informed decision. At Glitz Floors & More, we break down the costs
            of popular flooring options to help you choose the one that fits
            both your budget and lifestyle. At Glitz Floors & More, we help you
            weigh the pros and cons of each option so you can find the perfect
            balance of cost, style, and durability for your home.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] md:gap-[30px] 5xl:gap-[38px] pt-[25px]">
          {howWeDesginData?.map((data) => {
            return (
              <div
                key={data.id}
                className="how_we_cart___bg pt-[14px] pb-[21px] px-2"
              >
                <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                  {data.title}
                </p>
                <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center  gap-[20px] md:gap-[30px] 5xl:gap-[38px] pt-[25px]">
          <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
            <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
              Vinyl Flooring
            </p>
            <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
              For a cost-effective, low-maintenance flooring solution, vinyl is
              an excellent choice. Luxury vinyl planks (LVP) or tiles (LVT)
              typically range from <strong>$2 to $7</strong> per square foot,
              offering the look of wood or stone at a fraction of the cost.
            </p>
          </div>
          <div className="w-full md:w-1/3 how_we_cart___bg pt-[14px] pb-[21px] px-2">
            <p className="text-[22px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
              Carpet Flooring
            </p>
            <p className="text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-[35px] text-center">
              The carpet provides warmth and comfort, making it ideal for
              bedrooms and living spaces. The price for carpet installation in
              Cypress ranges from <strong>$3 to $10</strong> per square foot,
              depending on the material and style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostComparison;
