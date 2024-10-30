"use client"
import React from "react";
import "./Cost.css";
import Image from 'next/image';

import { Card, Typography } from "@material-tailwind/react";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const TABLE_HEAD = [
  "Information",
  "Basic Remodel (Budget-Friendly)",
  "Mid-Range Remodel",
  "High-End Remodel",
];

const TABLE_ROWS = [
  {
    id : 1,
    img : "/assets/glitz/bathroomRemodel/cost1.png",
    title : "Cost",
    vinyl: (
      <>
        <p>$5,000-$10,000</p>
      </>
    ),
    fiberglass: (
      <>
        <p>$10,000 - $25,000</p>
      </>
    ),
    concrete: (
      <>
        <p>$25,000- $50,000+</p>
      </>
    )
  },
  {
    id : 2,
    img : "/assets/glitz/bathroomRemodel/cost2.png",
    title : "Features",
    vinyl: (
      <>
        <ul className="list-disc pl-2 font-bold">
          <li>New fixtures (toilet, sink, faucet)</li>
          <li>Basic tile or vinyl flooring</li>
          <li>Repainting walls</li>
          <li>Limited upgrades (e.g., lighting)</li>
        </ul>
      </>
    ),
    fiberglass: (
      <>
        <ul className="list-disc pl-2 font-bold">
          <li>Upgraded fixtures and vanities</li>
          <li>Quality tile flooring (ceramic or <br/> porcelain)</li>
          <li>New bathtub or shower installation</li>
          <li>Improved lighting and ventilation</li>
          <li>Minor layout changes</li>
        </ul>
      </>
    ),
    concrete: (
      <>
        <ul className="list-disc pl-2 font-bold">
          <li>Custom cabinetry and high-end <br/> fixtures</li>
          <li>Luxury materials (marble or granite <br/> countertops)</li>
          <li>Spa-like features (walk-in showers, <br/> soaking tubs)</li>
          <li>Radiant heating and advanced <br/> plumbing upgrades</li>
          <li>Extensive layout changes and <br/> design services </li>
        </ul>
      </>
    )
  },
  {
    id : 3,
    img : "/assets/glitz/bathroomRemodel/cost3.png",
    title : "Additional Costs to Consider",
    vinyl: (
      <>
        <p className="font-bold">Labor costs</p>
        <p>Labor costs typically account for <strong>20- <br/> 30%</strong> of the total bath remodeling <br/> budget. Hiring licensed contractors can <br/> ensure quality work but may increase <br/> overall costs.</p>
      </>
    ),
    fiberglass: (
      <>
        <p className="font-bold">Permits and Inspections</p>
        <p>Depending on the scope of the <br/> remodel, you may need permits, which <br/> can range from <strong>$100 to $500.</strong></p>
      </>
    ),
    concrete: (
      <>
        <p className="font-bold">Unexpected Repairs</p>
        <p>Budget for potential issues that may <br/> arise during the remodel, such as <br/> plumbing or electrical upgrades, which <br/> can add <strong>$1,000</strong> or more.</p>
      </>
    )
  },
  
];


const Cost = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <HeadingIcon
            text={headingIconText.cost__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[29px] xl:text-[32px] 2xl:text-[34px] 3xl:text-[36px] 4xl:text-[38px] 5xl:tex-[40px] font-bold text-black text-center leading-normal pt-[5px]">
          Cost for Bathroom Remodel Cypress TX
          </h2>
          <p className="text-lg font-normal text-black pt-[10px] text-center pb-[15px]">
          When planning a bathroom remodel in Cypress, TX, it's essential to consider various factors that can influence the overall cost. Below is a general cost comparison based on different aspects of a typical bathroom remodel: The total cost of your bathroom remodel in Cypress, TX, will depend on your specific needs, preferences, and the extent of the work involved. It's advisable to get multiple quotes from local contractors and have a clear plan in place to ensure that your remodel stays within budget while achieving the desired results.
          </p>
        </div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD?.map((head) => (
                <th key={head} className="p-4 pt-10 cart__bg">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none text-lg font-bold text-black "
                  >
                    <p className="text-[20px] font-bold text-black text-center">{head}</p>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS?.map(({id, number, img, title, vinyl, fiberglass, concrete}) => {
              return (
                <tr key={id}>
                  <td className="p-4 cart__bg">
                    <Image className="w-[46px] h-[46px] mx-auto" src={img} alt="time" width={46} height={46}/>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      <p className="text-center pt-[10px] text-lg font-bold text-black">{title}</p>
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <Typography
                      variant="small"
                      className={`font-normal text-gray-600 text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {vinyl}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <Typography
                      variant="small"
                      className={`font-normal text-gray-600 text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {fiberglass}
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <Typography
                      variant="small"
                      className={`font-normal text-gray-600 text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {concrete}
                    </Typography>
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
