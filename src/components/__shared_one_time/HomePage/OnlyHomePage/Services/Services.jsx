// "use client";
// import HeadingIcon from "@/components/__ui/HeadingIcon";
// import { headingIconText } from "@/utils/heading-text";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const serviceSlides = [
//   "/assets/glitz/newHomePage/services/service1.png",
//   "/assets/glitz/newHomePage/services/service2.png",
//   "/assets/glitz/newHomePage/services/service3.png",
//   "/assets/glitz/newHomePage/services/service4.png",
//   "/assets/glitz/newHomePage/services/service5.png",
// ];

// const Services = () => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   useEffect(() => {
//     const slideIntervalId = setInterval(() => {
//       setCurrentSlideIndex(
//         (prevIndex) => (prevIndex + 1) % serviceSlides.length
//       );
//     }, 2000);
//     return () => {
//       clearInterval(slideIntervalId);
//     };
//   }, []);
//   return (
//     <div className="padding__top custom-container">
//       <div className="flex justify-center items-center">
//         <HeadingIcon text={headingIconText.services__headingIconText} />
//       </div>
//       <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
//         What Services We Offer
//       </h2>
//       <div className="mt-[15px]">
//         <Image
//           src={serviceSlides[currentSlideIndex]}
//           alt="services image"
//           width={1920}
//           height={604}
//         />
//       </div>
//     </div>
//   );
// };

// export default Services;

"use client";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const serviceSlides = [
  {
    image: "/assets/glitz/newHomePage/services/service1.png",
    title: "Service 1",
    description: "This is the description for service 1.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service2.png",
    title: "Service 2",
    description: "This is the description for service 2.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service3.png",
    title: "Service 3",
    description: "This is the description for service 3.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service4.png",
    title: "Service 4",
    description: "This is the description for service 4.",
  },
  {
    image: "/assets/glitz/newHomePage/services/service5.png",
    title: "Service 5",
    description: "This is the description for service 5.",
  },
];

const Services = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [hoveredButtonIndex, setHoveredButtonIndex] = useState(null);

  useEffect(() => {
    const slideIntervalId = setInterval(() => {
      setCurrentSlideIndex(
        (prevIndex) => (prevIndex + 1) % serviceSlides.length
      );
    }, 2000);
    return () => {
      clearInterval(slideIntervalId);
    };
  }, []);

  return (
    <div className="padding__top custom-container relative">
      <div className="flex justify-center items-center">
        <HeadingIcon text={headingIconText.services__headingIconText} />
      </div>
      <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center leading-normal">
        What Services We Offer
      </h2>
      <div className="relative mt-[15px]">
        {/* Background Image */}
        <Image
          src={serviceSlides[currentSlideIndex].image}
          alt="services image"
          width={1920}
          height={604}
          className="w-full h-[400px] object-cover"
        />

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="flex space-x-4">
            {serviceSlides.map((slide, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredButtonIndex(index)}
                onMouseLeave={() => setHoveredButtonIndex(null)}
              >
                <button
                  className={`w-12 h-12 rounded-full bg-yellow-400 hover:bg-yellow-500 transition duration-300 ${
                    index === hoveredButtonIndex ? "scale-110" : ""
                  }`}
                />
                {/* Tooltip */}
                {hoveredButtonIndex === index && (
                  <div className="absolute top-full mt-2 w-48 bg-black text-white p-4 rounded shadow-lg">
                    <h3 className="font-bold text-lg">{slide.title}</h3>
                    <p className="text-sm">{slide.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
