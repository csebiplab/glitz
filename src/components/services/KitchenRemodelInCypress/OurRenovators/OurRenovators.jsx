import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./OurRenovators.css";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const ourRenovatorData1 = [
    {
        id : 1, 
        title : "Communicate Openly",
        desc : "Share your ideas, preferences, and any concerns with our team. Open communication helps ensure everyone is on the same page."
    },
    {
        id : 2, 
        title : "Set a Budget",
        desc : "This helps guide material selections and design choices, ensuring we stay within your financial plan."
    },
    {
        id : 3, 
        title : "Research Materials",
        desc : "Consider the durability and maintenance of materials. Our team can provide recommendations based on your needs and lifestyle."
    },
    {
        id : 4, 
        title : "Be Flexible",
        desc : "Renovations can bring unexpected challenges. Being open to adjustments can lead to better solutions and improvements."
    },
    {
        id : 5, 
        title : "Trust the Process",
        desc : "Rely on our expertise. We're here to guide you through every step and make informed decisions for your project."
    }
]
const ourRenovatorData2 = [
    {
        id : 1, 
        title : "Rush Decisions",
        desc : "Take your time when making design choices. Hasty decisions can lead to regret and additional costs down the line."
    },
    {
        id : 2, 
        title : "Neglect the Details",
        desc : "Pay attention to small details like fixtures and finishes. We can significantly impact the overall look and feel of your space."
    },
    {
        id : 3, 
        title : "Skip the planning",
        desc : "A well thought-out plan is crucial. Avoid jumping into the project without a clear vision or design strategy."
    },
    {
        id : 4, 
        title : "Ignore Feedback",
        desc : "If we suggest changes or improvements based on our experience, consider them seriously. Our goal is to achieve the best possible outcome for your renovation."
    },
    {
        id : 5, 
        title : "Overlook Maintenance",
        desc : "Remember to discuss long-term maintenance with our team. Choosing the right materials and designs can save you time and effort in the future."
    }
]

const OurRenovators = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.doesAndDoNot__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-secondary leading-tight 5xl:leading-normal mb-[10px] text-center">
          Our Renovators Do's and Don't
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
          By following these dos and don'ts, you can help ensure a smoother and more successful renovation experience with our team at Glitz Floors & More!
          </p>
        </div>

        {/* Our Renovators Do's part  */}
        <div className="flex justify-center items-center my-[25px]">
            <buttton className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold leading-normal text-white text-center bg-primary rounded-[50px] py-[12px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">Our Renovators Do's</buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {
                ourRenovatorData1?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">{data.title}</p>
                        <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>

        {/* Our Renovators Don’ts part  */}
        <div className="flex justify-center items-center my-[25px]">
            <buttton className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold leading-normal text-white text-center bg-primary rounded-[50px] py-[12px] 5xl:py-[17px] px-[50px] lg:px-[140px] 5xl:px-[170px]">Our Renovators Don'ts</buttton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
            {
                ourRenovatorData2?.map((data)=>{
                    return <div key={data.id} className="how_we_cart___bg pt-[14px] pb-[21px] px-2">
                        <p className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">{data.title}</p>
                        <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">{data.desc}</p>
                    </div>
                })
            }
        </div>
      </div>
    </div>
  );
};

export default OurRenovators;
