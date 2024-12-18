
import { headingIconText } from "@/utils/heading-text";
import React from "react";
import Image from "next/image";
import "./PaintingMaterials.css";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const considerationAndLimitingData = [
  {
    id: 1,
    img: "/assets/glitz/bathroomRemodel/cal1.png",
    title: "Budget",
    desc: (
        <>
            <span> <strong>Cost Estimation:</strong> Determine a realistic budget that includes materials, labor, permits, and a contingency for unexpected expenses.</span> <br/>
            <span> <strong>Prioritization:</strong>  Decide which elements of the remodel are essential and which can be postponed if necessary.</span>
        </>
    ),
  },
  {
    id: 2,
    img: "/assets/glitz/bathroomRemodel/cal2.png",
    title: "Space and Layout",
    desc: (
        <>
            <span> <strong>Existing Space:</strong> Evaluate the current layout and dimensions of your bathroom to understand what changes are feasible.</span> <br/>
            <span> <strong>Flow and Functionality:</strong> Consider how the new layout will affect the overall flow and usability of the space. Ensure that fixtures and furniture do not obstruct movement.</span>
        </>
    ),
  },
  {
    id: 3,
    img: "/assets/glitz/bathroomRemodel/cal3.png",
    title: "Permits and Regulations",
    desc: (
        <>
            <span> <strong>Local Codes: </strong> Check local building codes and regulations that may require permits for plumbing, electrical work, or structural changes.</span> <br/>
            <span> <strong>HOA Guidelines: </strong>  If you live in a community with a homeowners association, ensure your plans comply with their guidelines.</span>
        </>
    ),
  },
  {
    id: 4,
    img: "/assets/glitz/bathroomRemodel/cal4.png",
    title: "Plumbing & Electric Consider",
    desc: (
        <>
            <span> <strong>Existing Systems:</strong> Assess the condition and location of current plumbing and electrical systems. Moving these can significantly increase costs.</span> <br/>
            <span> <strong>Upgrades Needed:</strong> Consider whether your current plumbing or electrical systems need upgrades to meet modern standards.</span>
        </>
    ),
  },
  {
    id: 5,
    img: "/assets/glitz/bathroomRemodel/cal5.png",
    title: "Material Selection",
    desc: (
        <>
            <span> <strong>Durability and Maintenance:</strong> Choose materials that can withstand the high moisture levels in a bathroom.</span> <br/>
            <span> <strong>Style and aesthetics:</strong>  Ensure selected materials align with your design vision while being functional for a bathroom environment.</span>
        </>
    ),
  },
  {
    id: 6,
    img: "/assets/glitz/bathroomRemodel/cal6.png",
    title: "Timeline",
    desc: (
        <>
            <span> <strong>Project Duration:</strong> Understand that remodeling a bathroom can take anywhere from a few days to several weeks, depending on the extent of the work.</span> <br/>
            <span> <strong>Disruption:</strong> Consider how the remodel will impact your daily routine and plan accordingly.</span>
        </>
    ),
  },
  {
    id: 7,
    img: "/assets/glitz/bathroomRemodel/cal7.png",
    title: "Aesthetic Preferences",
    desc: (
        <>
            <span> <strong>Design Cohesion:</strong> Ensure that the bathroom design aligns with the overall aesthetic of your home. This includes color schemes, fixtures, and finishes.</span> <br/>
            <span> <strong>Trends vs. Timelessness:</strong> Balance current design trends with timeless features to avoid needing another remodel in a few years.</span>
        </>
    ),
  },
  {
    id: 8,
    img: "/assets/glitz/bathroomRemodel/cal8.png",
    title: "Accessibility Needs",
    desc: (
        <>
            <span> <strong>Future-Proofing:</strong> Consider whether to incorporate universal design elements for improved accessibility, especially if you plan to age in place or accommodate family members with disabilities.</span>
        </>
    ),
  },
  {
    id: 9,
    img: "/assets/glitz/bathroomRemodel/cal9.png",
    title: "Environmental factors",
    desc: (
        <>
            <span> <strong>Energy Efficiency:</strong> Consider energy-efficient fixtures and appliances to reduce water and electricity consumption.</span> <br/>
            <span> <strong>Sustainable Materials:</strong> Explore eco-friendly materials and practices to minimize the environmental impact of your remodel.</span>
        </>
    ),
  },
];


const PaintingMaterials = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.considerationAndLimiting__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Consideration and Limiting <br className="block md:hidden"/> Factors for Bathroom <br className="block md:hidden"/> Remodel
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
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
                <p className="font-family-secondary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-center text-black pt-[65px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-base 4xl:text-[17px] 5xl:text-lg font-normal text-center pt-[5px]">
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

export default PaintingMaterials;
