"use client";
import React from "react";
import "./Cost.css";
import Image from "next/image";

import { Card, Typography } from "@material-tailwind/react";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const TABLE_HEAD = ["Services", "Budget with Information"];

const TABLE_ROWS = [
  {
    id: 1,
    img: "/assets/glitz/kitchenRemodel/cost/cost1.png",
    title: "Design and Planning Fees",
    desc: (
      <span>
        Hiring a designer can range from <strong>$50 to $200</strong> per hour,
        depending on their experience and the <br /> complexity of your project.
        Alternatively, some firms may offer flat-rate design packages.
      </span>
    ),
  },
  {
    id: 2,
    img: "/assets/glitz/kitchenRemodel/cost/cost2.png",
    title: "Cabinetry",
    desc: (
      <span>
        Custom cabinets can cost between <strong>$500 and $1,500</strong> per
        linear foot, while semi-custom options may <br /> range from
        <strong> $150 to $1,200</strong> per linear foot. Stock cabinets are
        usually more budget-friendly, starting <br /> around
        <strong> $75</strong> per linear foot.
      </span>
    ),
  },
  {
    id: 3,
    img: "/assets/glitz/kitchenRemodel/cost/cost3.png",
    title: "Countertops",
    desc: (
      <span>
        Options include: <br/> Laminate: <strong>$20 to $50</strong> per square foot <br/> Granite: <strong>$50 to
        $100</strong> per square foot <br/> Quartz: <strong>$70 to $150</strong> per square foot <br/> Marble: <strong>$100 to
        $200</strong> per square foot
      </span>
    ),
  },
  {
    id: 4,
    img: "/assets/glitz/kitchenRemodel/cost/cost4.png",
    title: "Appliances",
    desc: (
      <span>
        Depending on your choice of appliances, costs can vary widely. Budget models may start at <strong>$1,000</strong> <br/> for a refrigerator, while high-end options can exceed <strong>$10,000</strong> for a full suite of appliances.
      </span>
    ),
  },
  {
    id: 5,
    img: "/assets/glitz/kitchenRemodel/cost/cost5.png",
    title: "Flooring",
    desc: (
      <span>
        Flooring costs can range from: <br/>
Tiles: <strong>$1 to $15</strong> per square foot <br/>
Hardwood: <strong>$3 to $12</strong> per square foot <br/>
Laminate: <strong>$1 to $5</strong> per square foot <br/>
Vinyl: <strong>$1 to $7</strong> per square foot
      </span>
    ),
  },
  {
    id: 6,
    img: "/assets/glitz/kitchenRemodel/cost/cost6.png",
    title: "Lighting",
    desc: (
      <span>
        Lighting fixtures can range from <strong>$50</strong> for basic options to several hundred dollars for designer <br/> fixtures. Installing recessed lighting may add to labor costs, typically around <strong>$100 to $200</strong> per <br/> fixture.
      </span>
    ),
  },
  {
    id: 7,
    img: "/assets/glitz/kitchenRemodel/cost/cost7.png",
    title: "Plumbing and Electrical Work",
    desc: (
      <span>
        Expect to pay between <strong>$1,000 and $3,000</strong> for plumbing and electrical updates, depending on the <br/> extent of the work needed.
      </span>
    ),
  },
  {
    id: 8,
    img: "/assets/glitz/kitchenRemodel/cost/cost8.png",
    title: "Backsplash",
    desc: (
      <span>
       Backsplash installation costs range from <strong>$10 to $50</strong> per square foot, depending on the material <br/> (e.g., tile, glass, or stone).
      </span>
    ),
  },
  {
    id: 9,
    img: "/assets/glitz/kitchenRemodel/cost/cost9.png",
    title: "Labor Costs",
    desc: (
      <span>
        Labor typically accounts for 20-35% of the total project cost. Skilled labor rates can range from $50 <br/> to $150 per hour, depending on the trade.
      </span>
    ),
  },
  {
    id: 10,
    img: "/assets/glitz/kitchenRemodel/cost/cost10.png",
    title: "Miscellaneous Costs",
    desc: (
      <span>
        Don't forget to budget for permits, disposal fees, and unexpected expenses, which can add <strong>10-20%</strong> <br/> to your total costs.
      </span>
    ),
  },
  {
    id: 11,
    img: "/assets/glitz/kitchenRemodel/cost/cost11.png",
    title: "Total Budget Range",
    desc: (
      <span>
        On average, a minor kitchen remodel in Cypress might cost between <strong>$15,000 and $30,000,</strong> while a <br/> major remodel can range from <strong>$30,000 to $100,000</strong> or more, depending on the scope of work and <br/> materials chosen.
      </span>
    ),
  },
];

const Cost = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center">
        <NewHeadingCenterIcon text={headingIconText.cost__headingIconText} />
        <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
          Cost Ideas for Kitchen Remodeling Cypress TX
        </h2>
        <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          When planning a kitchen remodel in Cypress, TX, it's essential to have
          a clear understanding of potential costs. Here's a breakdown of
          factors to consider that can help you budget effectively: By carefully
          considering these cost factors, you can create a budget that aligns
          with your goals and ensures a successful kitchen remodeling project in
          Cypress, TX. At Glitz Floors & More, we're here to guide you through
          the process and help you achieve your dream kitchen within your
          budget!
        </p>
      </div>
      <Card className="h-full w-full overflow-scroll mt-[20px] 5xl:mt-[25px]">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD?.map((head) => (
                <th key={head} className="p-4 pt-10 cart__bg text-center">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="leading-none text-lg font-bold text-black "
                  >
                    <span className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-black text-center">
                      {head}
                    </span>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS?.map(({ id, img, title, desc }) => {
              return (
                <tr key={id}>
                  <td className="p-4 cart__bg text-center">
                    <Image
                      className="w-[46px] h-[46px] mx-auto"
                      src={img}
                      alt="time"
                      width={46}
                      height={46}
                    />
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      <span className="text-center pt-[10px] text-base 5xl:text-lg font-bold text-black">
                        {title}
                      </span>
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <div
                      className={`text-base 5xl:text-lg font-normal text-black text-center`}
                    >
                      {desc}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Cost;
