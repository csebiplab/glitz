
import Image from "next/image";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const workingProcessData = [
    {
        id : 1, 
        title : "Initial Consultation and Assessment:",
        description : [
            {desc : (
                <>
                    <strong>Site Visit:</strong> Our installers begin by visiting your property to assess the area and discuss your specific needs, style preferences, and budget.
    
                </>
            )} ,
            {desc : (
                <>
                    <strong>Material Selection:</strong> We guide you through our range of vinyl flooring options, from Luxury Vinyl Plank (LVP) to Vinyl Composition Tile (VCT), helping you choose the perfect style, color, and finish for your space.
                </>
            )} ,
            {desc : (
                <>
                    <strong>Estimate and Project Planning:</strong>Once we've selected the right vinyl type, we provide a detailed estimate and timeline for the project, ensuring transparency and clarity upfront.
                </>
            )}
        ]
    },
    {
        id : 2, 
        title : "Preparation of the Space:",
        description : [
            {desc : 
                (
                    <>
                        <strong>Floor Inspection:</strong>Our team inspects the existing floor for any imperfections or damage that may affect the installation.
        
                    </>
                )
            } ,
            {desc : (
                <>
                    <strong>Clearing the Area:</strong>We'll help clear the space of furniture or obstacles and take any necessary precautions to protect walls, trim, and adjacent flooring.
                </>
            )} 
        ]
    },
    {
        id : 3, 
        title : "Vinyl Flooring Installation:",
        description : [
            {desc : (
                <>
                    <strong>Precision Layout and Cutting:</strong>For a perfect fit, our installers carefully measure and cut each vinyl plank or tile to accommodate the layout of your space, including corners and unique architectural details.
    
                </>
            )} ,
            {desc : (
                <>
                    <strong>Seamless Installation:</strong>We install the vinyl flooring using industry-standard tools and techniques, ensuring a tight, seamless fit that looks natural and enhances the room's aesthetic.
                </>
            )} 
        ]
    },
    {
        id : 4, 
        title : "Finishing Touches:",
        description : [
            {desc : (
                <>
                    <strong>Trimming and Edging:</strong> 
                     Our installers finish the job by adding trims and moldings where necessary to provide a polished look, covering edges, and creating a cohesive transition between rooms.
    
                </>
            )} ,
            {desc : (
                <>
                    <strong>Quality Check:</strong>We conduct a thorough inspection to ensure every detail meets our quality standards and that the flooring is perfectly installed without any imperfections.
                </>
            )} 
        ]
    },
    {
        id : 5, 
        title : "Final Walkthrough and Cleanup:",
        description : [
            {desc : (
                <>
                    <strong>Walkthrough with Client:</strong> 
                    Once the installation is complete, we do a final walkthrough to ensure everything meets your expectations.
    
                </>
            )} ,
            {desc : (
                <>
                    <strong>Cleanup:</strong>
                    We leave your space clean and ready to enjoy, removing debris and ensuring your new floors are spotless.
                </>
            )} 
        ]
    },
]

const WorkingProcess = () => {


  return (
    <div className="">
      <div data-aos="zoom-in" className="custom-container padding__top">
        <div className="">
          <div className="flex flex-col justify-center items-center">
          <NewHeadingIcon text={headingIconText.workingProcess__headingIconText}/>
          {/* <div className="w-full flex flex-col items-center justify-center">
            <p className="text-base text-black font-normal leading-light">Gallery</p>
            <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
            >
              <path
                d="M1 1L70.0646 1"
                stroke="#040273"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            </div>
          </div> */}
            <div className="">
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
              Working Process of Our Vinyl Flooring Installer
              </h2>
            </div>
            {/* cart part */}
            <div className="grid grid-cols-1 md:grid-cols-6 mt-[25px]">
                <div className="md:col-span-1">
                    <Image src="/assets/glitz/vinylFlooringInCypress/workingProcess/workingProcess1.png" alt="working process" width={334} height={668} className="w-auto h-full"/>
                </div>
                <div className="md:col-span-4 py-[17px] bg-white border-t border-[#B1B1B1]">
                    {
                        workingProcessData?.map((data)=>{
                            return <div key={data?.id} className="border-b border-[#B1B1B1] py-1">
                                <p className="px-[21px] text-base 4xl:text-[17px] 5xl:text-lg font-bold text-black leading-normal">{data?.title}</p>
                                {
                                    data?.description?.map((listItem, index )=> (
                                        <ul key={index + 100} className="list-disc ml-3 px-[21px]">
                                    <li className="text-sm 2xl:text-[15px] 3xl:text-base 4xl:text-[17px] 5xl:text-lg font-normal text-black leading-normal">{listItem?.desc}</li>
                                </ul>
                                    ))
                                }
                                
                            </div>
                        })
                    }
                </div>
                <div className="md:col-span-1">
                    <Image src="/assets/glitz/vinylFlooringInCypress/workingProcess/workingProcess2.png" alt="working process" width={334} height={668} className="w-auto h-full"/>
                </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkingProcess;
