"use client"
import React from "react";
import "./Cost.css";
import Image from 'next/image';

import { Card, Typography } from "@material-tailwind/react";
import { headingIconText } from "@/utils/heading-text";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

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
        <span>$5,000-$10,000</span>
      </>
    ),
    fiberglass: (
      <>
        <span>$10,000 - $25,000</span>
      </>
    ),
    concrete: (
      <>
        <span>$25,000- $50,000+</span>
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
        <span className="font-bold">Labor costs</span> <br/>
        <span>Labor costs typically account for <strong>20- <br/> 30%</strong> of the total bath remodeling <br/> budget. Hiring licensed contractors can <br/> ensure quality work but may increase <br/> overall costs.</span>
      </>
    ),
    fiberglass: (
      <>
        <span className="font-bold">Permits and Inspections</span> <br/>
        <span>Depending on the scope of the <br/> remodel, you may need permits, which <br/> can range from <strong>$100 to $500.</strong></span>
      </>
    ),
    concrete: (
      <>
        <span className="font-bold">Unexpected Repairs</span> <br/>
        <span>Budget for potential issues that may <br/> arise during the remodel, such as <br/> plumbing or electrical upgrades, which <br/> can add <strong>$1,000</strong> or more.</span>
      </>
    )
  },
  
];


const Cost = () => {
  return (
    <div className="container padding__top swimmingPoolContractor__bg">
      <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.cost__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Cost for Bathroom Remodel Cypress TX
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          When planning a bathroom remodel in Cypress, TX, it's essential to consider various factors that can influence the overall cost. Below is a general cost comparison based on different aspects of a typical bathroom remodel:
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
                    className="leading-none text-lg font-bold text-secondary "
                  >
                    <span className="text-lg font-bold text-secondary text-center">{head}</span>
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS?.map(({id, number, img, title, vinyl, fiberglass, concrete}) => {
              return (
                <tr key={id}>
                  <td className="p-4 cart__bg text-center">
                    <Image className="w-[46px] h-[46px] mx-auto" src={img} alt="time" width={46} height={46}/>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold"
                    >
                      <span className="text-center pt-[10px] text-lg font-bold text-black">{title}</span>
                    </Typography>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <div
                      className={`text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {vinyl}
                    </div>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <div
                      className={`text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {fiberglass}
                    </div>
                  </td>
                  <td className="py-[4px] px-[17px] cart__bg">
                    <div
                      className={`text-base 5xl:text-lg font-normal text-black ${id === 2 ? "text-left" : "text-center"}`}
                    >
                      {concrete}
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
