import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import React from "react";
import Image from "next/image";
import "./ConsiderationAndLimiting.css";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/assets/glitz/bathroomRemodel/cal1.png",
    title: "Budget",
    desc: (
        <>
            <p> <strong>Cost Estimation:</strong> Determine a realistic budget that includes materials, labor, permits, and a contingency for unexpected expenses.</p>
            <p> <strong>Prioritization:</strong>  Decide which elements of the remodel are essential and which can be postponed if necessary.</p>
        </>
    ),
  },
  {
    id: 2,
    img: "/assets/glitz/bathroomRemodel/cal2.png",
    title: "Space and Layout",
    desc: (
        <>
            <p> <strong>Existing Space:</strong> Evaluate the current layout and dimensions of your bathroom to understand what changes are feasible.</p>
            <p> <strong>Flow and Functionality:</strong> Consider how the new layout will affect the overall flow and usability of the space. Ensure that fixtures and furniture do not obstruct movement.</p>
        </>
    ),
  },
  {
    id: 3,
    img: "/assets/glitz/bathroomRemodel/cal3.png",
    title: "Permits and Regulations",
    desc: (
        <>
            <p> <strong>Local Codes: </strong> Check local building codes and regulations that may require permits for plumbing, electrical work, or structural changes.</p>
            <p> <strong>HOA Guidelines: </strong>  If you live in a community with a homeowners association, ensure your plans comply with their guidelines.</p>
        </>
    ),
  },
  {
    id: 4,
    img: "/assets/glitz/bathroomRemodel/cal4.png",
    title: "Plumbing & Electric Consider",
    desc: (
        <>
            <p> <strong>Existing Systems:</strong> Assess the condition and location of current plumbing and electrical systems. Moving these can significantly increase costs.</p>
            <p> <strong>Upgrades Needed:</strong> Consider whether your current plumbing or electrical systems need upgrades to meet modern standards.</p>
        </>
    ),
  },
  {
    id: 5,
    img: "/assets/glitz/bathroomRemodel/cal5.png",
    title: "Material Selection",
    desc: (
        <>
            <p> <strong>Durability and Maintenance:</strong> Choose materials that can withstand the high moisture levels in a bathroom.</p>
            <p> <strong>Style and aesthetics:</strong>  Ensure selected materials align with your design vision while being functional for a bathroom environment.</p>
        </>
    ),
  },
  {
    id: 6,
    img: "/assets/glitz/bathroomRemodel/cal6.png",
    title: "Timeline",
    desc: (
        <>
            <p> <strong>Project Duration:</strong> Understand that remodeling a bathroom can take anywhere from a few days to several weeks, depending on the extent of the work.</p>
            <p> <strong>Disruption:</strong> Consider how the remodel will impact your daily routine and plan accordingly.</p>
        </>
    ),
  },
  {
    id: 7,
    img: "/assets/glitz/bathroomRemodel/cal7.png",
    title: "Aesthetic Preferences",
    desc: (
        <>
            <p> <strong>Design Cohesion:</strong> Ensure that the bathroom design aligns with the overall aesthetic of your home. This includes color schemes, fixtures, and finishes.</p>
            <p> <strong>Trends vs. Timelessness:</strong> Balance current design trends with timeless features to avoid needing another remodel in a few years.</p>
        </>
    ),
  },
  {
    id: 8,
    img: "/assets/glitz/bathroomRemodel/cal8.png",
    title: "Accessibility Needs",
    desc: (
        <>
            <p> <strong>Future-Proofing:</strong> Consider whether to incorporate universal design elements for improved accessibility, especially if you plan to age in place or accommodate family members with disabilities.</p>
        </>
    ),
  },
  {
    id: 9,
    img: "/assets/glitz/bathroomRemodel/cal9.png",
    title: "Environmental factors",
    desc: (
        <>
            <p> <strong>Energy Efficiency:</strong> Consider energy-efficient fixtures and appliances to reduce water and electricity consumption.</p>
            <p> <strong>Sustainable Materials:</strong> Explore eco-friendly materials and practices to minimize the environmental impact of your remodel.</p>
        </>
    ),
  },
];


const ConsiderationAndLimiting = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon
            text={headingIconText.considerationAndLimiting__headingIconText}
          />
          <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center pt-[10px] pb-[5px]">
          Consideration and Limiting Factors for Bathroom Remodel
          </h2>
          <p className="font-family-secondary text-lg font-normal text-center text-secondary">
          When planning a bathroom remodel, it's crucial to consider several factors that can influence the design, budget, and overall outcome of the project. Here are key considerations and potential limiting factors to keep in mind: By thoughtfully considering these factors and potential limitations, you can create a more effective plan for your bathroom remodel, ensuring it meets your needs and preferences while staying within budget and timeline constraints. Proper planning will lead to a successful transformation that enhances the functionality and aesthetics of your space.
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

export default ConsiderationAndLimiting;
