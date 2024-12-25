import React from "react";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const processData = [
  {
    id: 1,
    img: "/assets/glitz/roofing-contractor/working-process/working-process1.png",
    title: "Initial Consultation",
    desc: "We begin with a free, in-depth consultation to understand your roofing needs. During this stage, our team will assess the roof, discuss your goals, and provide a transparent overview of the process, including timelines and materials."
  },
  {
    id: 2,
    img: "/assets/glitz/roofing-contractor/working-process/working-process2.png",
    title: "Detailed Roof Inspection",
    desc: "Our experienced roofing professionals conduct a thorough inspection, identifying potential issues such as leaks, structural damage, or material wear. This step helps us plan a targeted approach to ensure your roof receives attention.",
  },
  {
    id: 3,
    img: "/assets/glitz/roofing-contractor/working-process/working-process3.png",
    title: "Custom Proposal & Budget",
    desc: "Based on the inspection, we create a tailored proposal, outlining all work involved, materials needed, and accurate pricing. We prioritize transparency, ensuring you understand the scope and cost before moving forward."
  },
  {
    id: 4,
    img: "/assets/glitz/roofing-contractor/working-process/working-process4.png",
    title: "Quality Material Selection",
    desc: "We source top-quality roofing materials that suit your home's style and needs. Our team will walk you through the options, ensuring durability, energy efficiency, and aesthetic appeal.",
  },
  {
    id: 5,
    img: "/assets/glitz/roofing-contractor/working-process/working-process5.png",
    title: "Expert Installation",
    desc: "Our skilled contractors follow a meticulous installation process to ensure precision and quality. We work diligently while respecting your property, minimizing disruptions, and adhering to all safety standards.",
  },
  {
    id: 6,
    img: "/assets/glitz/roofing-contractor/working-process/working-process6.png",
    title: "Final Inspection & Cleanup",
    desc: "After installation, we perform a final inspection to verify the work's quality and durability. Our team ensures that your property is left spotless, removing all debris and materials, so you can enjoy a beautiful, reliable roof right away.",
  },
];

const WorkingProcess = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon text={headingIconText.workingProcess__headingIconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
          Working Process of Our <br className="block md:hidden"/> Roofing Contractor
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          Our commitment to precision, quality, and lasting durability drives our roofing services at Glitz Floors & More. Here's how our step-by-step process ensures exceptional results for every project:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px] mt-[25px]">
          {processData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className=" text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className=" text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>

        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-[60px] 5xl:gap-[75px] mt-[25px]">
        <div className="w-full md:w-1/3 relative">
                <Image
                  src="/assets/glitz/roofing-contractor/working-process/working-process7.png"
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className=" text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                Customer Satisfy Follow-Up
                </p>
                <p className=" text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
                We pride ourselves on customer satisfaction. After completion, our team follows up to confirm that you are completely satisfied and to answer any questions.
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
        </div>

      </div>
    </div>
  );
};

export default WorkingProcess;
