import React from "react";
import "./WorkingProcess.css";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const workingData = [
  {
    id: 1,
    img: "/assets/glitz/working/working1.png",
    title: "Consultation & Assessment",
    desc: "We start with a detailed consultation to understand your needs, preferences, and the specific requirements of your space. Our team will assess the area to ensure the right flooring choice and discuss options that fit your style and budget.",
  },
  {
    id: 2,
    img: "/assets/glitz/working/working2.png",
    title: "Measurement and Planning",
    desc: "Accurate measurements are taken to create a detailed plan for the installation. We account for any necessary preparations, such as subfloor repairs or leveling, to ensure a smooth installation.",
  },
  {
    id: 3,
    img: "/assets/glitz/working/working3.png",
    title: "CSelection and Ordering",
    desc: "Based on your preferences, we help you select the perfect flooring material and finalize the order. We guide you through our range of high-quality options to find the best fit for your project.",
  },
  {
    id: 4,
    img: "/assets/glitz/working/working4.png",
    title: "Preparation",
    desc: "Before installation begins, we prepare the site by removing old flooring, ensuring the subfloor is clean and level, and making any necessary repairs.",
  },
  {
    id: 5,
    img: "/assets/glitz/working/working5.png",
    title: "Professional Installation",
    desc: "Our skilled installers handle every aspect of the flooring installation with precision and care. We use industry-standard techniques to ensure a flawless finish, paying close attention to details like seams, transitions, and alignment.",
  },
  {
    id: 6,
    img: "/assets/glitz/working/working6.png",
    title: "Final Inspection & Cleanup",
    desc: "Once the installation is complete, we conduct a thorough inspection to ensure everything meets our high standards. We also clean up the work area, leaving your space ready for use.",
  },
];

const WorkingProcess = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon text={headingIconText.workingProcess__headingIconText} />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
            Working Process of Our <br className="block md:hidden"/> Flooring Installers
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[60px] 5xl:gap-[75px]">
          {workingData?.map((data) => {
            return (
              <div key={data.id} className="relative">
                <Image
                  src={data.img}
                  alt="working image"
                  width={129}
                  height={129}
                  className="w-[129px] h-[129px] mx-auto"
                />
                <p className=" text-[25px] xl:text-[20px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="text-base 4xl:text-[17px] 5xl:text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>
        {/* second div  */}
        <div className="flex flex-col xl:flex-row pt-[60px] 5xl:pt-[75px]">
        <div className="w-full xl:w-1/3 relative mr-[25px] md:mr-[50px] 5xl:mr-[75px]">
          <Image
            src="/assets/glitz/working/working7.png"
            alt="working image"
            width={129}
            height={129}
            className="w-[129px] h-[129px] mx-auto"
          />
          <p className=" text-[25px] xl:text-[20px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
          Customer Satisfaction
          </p>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-light text-black text-center pb-[25px]">
          We follow up with you to ensure you're completely satisfied with the results and address any questions or concerns you may have.
          </p>
          <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
        </div>
        <div className="w-full xl:w-1/3 ">
        <Image
            src="/assets/glitz/working/working.png"
            alt="working image"
            width={400}
            height={351}
            className="w-[400px] h-[351px] mx-auto"
          />
        </div>
        <div className="w-full xl:w-1/3 bg-secondary-700 pl-[25px] md:pl-[50px] 5xl:pl-[75px]">
            <Image
            src="/assets/glitz/working/working_logo.png"
            alt="working logo image"
            width={93}
            height={96}
            className="w-[93px] h-[96px] mx-auto"
          />
          <div className="pt-[6px] pb-[10px]">
          <Image
            src="/assets/glitz/working/glitz.png"
            alt="working logo image"
            width={145}
            height={9}
            className="w-[145px] h-[9px] mx-auto"
          />
          </div>
          <p className="text-base 4xl:text-[17px] 5xl:text-lg font-bold text-balck text-center">Get Expert Project Consultancy Services for Free</p>
          <p className=" text-sm font-normal text-black text-center pt-[5px] pb-[15px]">Our free consultancy service is here to help! Whether you're developing a new idea, improving an existing one, or facing specific challenges, our team of experts is ready to offer tailored solutions.</p>
          <Image
            src="/assets/glitz/working/working_btn.png"
            alt="working btn image"
            width={140}
            height={55}
            className="w-[140px] h-[55px] mx-auto"
          />
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorkingProcess;
