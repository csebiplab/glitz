import React from "react";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const processData = [
  {
    id: 1,
    img: "/assets/glitz/painting-contractors/process/process1.png",
    title: "Personalized Consultation",
    desc: "Our team listens to your ideas and offers expert advice on color selection, finishes, and techniques, ensuring your project reflects your style.",
  },
  {
    id: 2,
    img: "/assets/glitz/painting-contractors/process/process2.png",
    title: "Detailed Project Planning",
    desc: "We create a comprehensive project timeline and outline all necessary steps, allowing you to know what to expect at every stage. This transparency helps us avoid surprises and keeps the project on track.",
  },
  {
    id: 3,
    img: "/assets/glitz/painting-contractors/process/process3.png",
    title: "Thorough Preparation",
    desc: "Our process involves meticulous surface preparation, including cleaning, sanding, and priming. We take the time to address any imperfections before painting begins.",
  },
  {
    id: 4,
    img: "/assets/glitz/painting-contractors/process/process4.png",
    title: "Skilled Craftsmanship",
    desc: "Our experienced painters are dedicated to delivering precision and attention to detail. We use proven techniques and high-quality tools to ensure that every stroke is flawless, resulting in a beautiful finish that enhances your space.",
  },
  {
    id: 5,
    img: "/assets/glitz/painting-contractors/process/process5.png",
    title: "Quality Materials",
    desc: "We only use premium paints and materials, chosen for their durability and aesthetic appeal. This commitment to quality enhances the visual impact of your project and ensures longevity and protection against the elements.",
  },
  {
    id: 6,
    img: "/assets/glitz/painting-contractors/process/process6.png",
    title: "Clear Communication",
    desc: "From project timelines to updates on progress, we ensure you're informed and involved every step of the way, building trust and confidence.",
  },
];

const Process = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.process__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
            Our Approach to Painting <br className="block md:hidden"/> Service Is Different
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            Glitz Floors & More believes exceptional painting service goes
            beyond just applying a fresh coat of paint. Our unique approach is
            designed to provide a seamless and enjoyable experience, ensuring
            that every aspect of your project is handled with care and
            professionalism. Here's how our approach stands out: By choosing
            Glitz Floors & More, you select a painting service that prioritizes
            quality, integrity, and customer satisfaction. Our unique approach
            ensures your project is completed to the highest standards,
            transforming your space into something remarkable. Experience the
            difference with our dedicated team and let us bring your vision to
            life.
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
                <p className="font-family-secondary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
                  {data.title}
                </p>
                <p className="font-family-secondary text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
                  {data.desc}
                </p>
                <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
              </div>
            );
          })}
        </div>
        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-center gap-[60px] 5xl:gap-[75px] mt-[60px] 5xl:mt-[75px]">
          <div className="relative w-full md:w-1/3">
            <Image
              src="/assets/glitz/painting-contractors/process/process7.png"
              alt="working image"
              width={129}
              height={129}
              className="w-[129px] h-[129px] mx-auto"
            />
            <p className="font-family-secondary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
              Post-Project Follow-Up
            </p>
            <p className="font-family-secondary text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
              We conduct a thorough post-project inspection and follow-up to
              ensure your satisfaction with the results.
            </p>
            <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
          </div>
          <div className="relative w-full md:w-1/3">
            <Image
              src="/assets/glitz/painting-contractors/process/process8.png"
              alt="working image"
              width={129}
              height={129}
              className="w-[129px] h-[129px] mx-auto"
            />
            <p className="font-family-secondary text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] font-bold text-secondary text-center leading-9 pt-[12px] pb-[5px]">
              Eco-Friendly Practices
            </p>
            <p className="font-family-secondary text-base 5xl:text-lg font-light text-black text-center pb-[25px]">
              We prioritize sustainability by offering eco-friendly paint
              options and implementing practices that minimize waste and
              environmental impact. This allows you to achieve your desired look
              while contributing to a healthier planet.
            </p>
            <div className="absolute bottom-0 w-full h-[2px] bg-secondary-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
