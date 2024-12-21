import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./BestRoofingService.css";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";
import Link from "next/link";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service1.png",
    title: "Roof Installation",
    desc: "At Glitz Floors & More, we specialize in professional roof installation services that combine quality craftsmanship with exceptional attention to detail. Whether building a new home or replacing an old roof, our experienced team is dedicated to providing a seamless and efficient installation process. Our experts will guide you through the selection process, helping you choose the right materials and style that match your home's design and budget. From the initial consultation to the final inspection, we prioritize open communication and transparency, ensuring you are informed at every step. Our skilled professionals are equipped with the latest tools and techniques, allowing us to complete your roof installation efficiently and with minimal disruption to your daily life.",
  },
  {
    id: 2,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service2.png",
    title: "Roofing Maintenance",
    desc: "At Glitz Floors & More, we offer comprehensive roofing maintenance services designed to prolong the lifespan of your roof and protect your investment. Regular maintenance is essential to ensure your roof remains in optimal condition, preventing minor issues from developing into costly repairs down the line. After our inspection, we provide a detailed report and recommend any necessary maintenance or repairs. Our roofing maintenance services include cleaning gutters, removing debris, sealing leaks, and performing minor repairs. By addressing these issues promptly, we help enhance your roof's durability and efficiency, ensuring it can withstand the elements. At Glitz Floors & More, proactive maintenance is the key to a long-lasting roof. With our commitment to quality and customer satisfaction, you can trust us to keep your roof in excellent shape.",
  },
  {
    id: 3,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service3.png",
    title: "Commercial Roofing Contractor Cypress",
    desc: "As a leading commercial roofing contractor in Cypress, TX, Glitz Floors & More specializes in providing top-tier roofing solutions. Our experienced team understands that a reliable roof is crucial for protecting your commercial property and ensuring the safety of your employees and customers. We offer comprehensive commercial roofing services, including installations, repairs, and maintenance. Our experts work with various roofing materials, such as TPO, EPDM, metal, and built-up roofing systems, allowing us to deliver customized solutions that fit your building's specific requirements and budget. At Glitz Floors & More, we prioritize quality craftsmanship and attention to detail in every project. Our team conducts thorough assessments to understand your roofing needs, and we develop a tailored plan to ensure durability and long-lasting performance.",
  },
  {
    id: 4,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service4.png",
    title: "Residential Roofing Contractor Cypress TX",
    desc: "As a trusted residential roofing contractor in Cypress, TX, Glitz Floors & More is committed to providing homeowners with high-quality roofing solutions tailored to their needs. We understand that your home is one of your most significant investments, and a durable, well-installed roof is essential for its protection and value. Our experienced team specializes in various residential roofing services, including new roof installations, repairs, and maintenance. At Glitz Floors & More, we pride ourselves on our attention to detail and commitment to excellence. Our skilled professionals perform thorough assessments to identify your roofing needs, providing customized solutions that enhance the aesthetics and functionality of your home. Whether you need a complete roof replacement or minor repairs, you can count on us to deliver reliable and professional service.",
  },
  {
    id: 5,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service5.png",
    title: "Emergency Roofing Cypress, TX",
    desc: "At Glitz Floors & More, we understand that roofing emergencies can happen at any time, often when you least expect them. That's why we offer prompt and reliable emergency roofing services in Cypress, TX, to protect your home from unexpected damage and prevent further issues. When you contact us for emergency roofing services, our skilled professionals will conduct a thorough assessment of the situation. We prioritize safety and efficiency, providing immediate solutions to stabilize your roof and prevent further water intrusion or damage. At Glitz Floors & More, we are dedicated to restoring your roof to its original condition as quickly as possible. Don't let a roofing emergency disrupt your peace of mind. Trust Glitz Floors & More for fast and effective emergency roofing services in Cypress, TX. Contact us anytime for immediate assistance!",
  },
  {
    id: 6,
    img: "/assets/glitz/roofing-contractor/best-services/best_roofing_service6.png",
    title: "Leaking Roof Repair",
    desc: "At Glitz Floors & More, we understand how crucial a reliable roof is to your home's protection and comfort. Our expert team specializes in efficient and effective leaking roof repairs, ensuring your home stays safe from water damage. We use high-quality materials and advanced techniques to identify and fix leaks promptly. Whether a minor drip or a major leak, we assess the situation thoroughly and provide tailored solutions that fit your needs and budget. We offer thorough inspections to pinpoint the source of the leak, whether it's from damaged shingles, faulty flashing, or wear and tear. In addition to repairs, we also provide preventative maintenance options to help you avoid future leaks. Don't let a leaking roof dampen your spirits! Contact Glitz Floors & More today to schedule your repair service and protect your home from the elements. We're here to help you keep your roof.",
  },
];

const BestRoofingService = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.bestRoofingService__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
            Best Roofing Service Company <br className="block md:hidden"/> in Cypress
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            Glitz Floors & More proudly stands as the best roofing service
            company in Cypress, TX, dedicated to providing top-notch roofing
            solutions tailored to your needs. We understand that your roof is a
            crucial investment, and we take the time to assess your specific
            requirements and preferences, providing customized solutions that
            enhance your home's aesthetic appeal and durability. With years of
            experience, we specialize in a wide range of services, including
            roof installations, repairs, and maintenance.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] 3xl:gap-[30px] mt-[25px]">
          {servicesData?.map((data) => {
            return (
              <div key={data.id} className="">
                <Image
                  className="rounded-t-[16px]"
                  src={data.img}
                  alt="services image"
                  width={660}
                  height={335}
                />
                <div className="servicesCart___bg py-[16px] px-[8px] h-auto md:h-[480px]">
                  <h3 className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                    {data.title}
                  </h3>
                  <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">
                    {data.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* second part  */}
        <div className="w-full flex flex-col md:flex-row justify-between  gap-[20px] 3xl:gap-[30px] mt-[25px]">
          <div className="w-full md:w-1/2">
            <Image
              className="rounded-t-[16px]"
              src="/assets/glitz/roofing-contractor/best-services/best_roofing_service7.png"
              alt="services image"
              width={660}
              height={335}
            />
            <div className="servicesCart___bg py-[16px] px-[8px] h-auto md:h-[480px]">
              <h3 className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                Roof Replacement
              </h3>
              <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">
                When it's time for a roof replacement, trust Glitz Floors & More
                to deliver quality and durability. Our team specializes in
                replacing old or damaged roofs with premium materials that
                enhance your home's aesthetic and structural integrity. We offer
                a wide range of roofing options, including asphalt shingles,
                metal roofing, and tile, ensuring you find the perfect fit for
                your style and budget. Our experienced technicians will guide
                you through the selection process, considering factors such as
                durability, energy efficiency, and design. At Glitz Floors &
                More, we prioritize customer satisfaction and transparency.
                You'll receive a detailed proposal outlining the scope of work,
                timeline, and costs upfront, so there are no surprises. Our
                skilled crew works efficiently and safely, minimizing disruption
                to your home life while ensuring your new roof is installed to
                the highest standards.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="servicesCart___bg1 py-[16px] px-[8px] h-full flex flex-col justify-center">
              <h3 className="text-[25px] xl:text-[26px] 2xl:text-[27px] 3xl:text-[28px] 4xl:text-[29px] 5xl:text-[30px] text-center font-bold text-black leading-normal">
              Ready to Get Started? 
              </h3>
              <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center">
              Thinking about upgrading your home's Roofing? Schedule a free in-home estimate with our expert team and get personalized advice tailored to your needs. We bring samples directly to you, so you can see how different flooring options will look in your space. Our hassle-free process ensures that you get the perfect floor at the right price. Don't wait—schedule your free in-home estimate today and take the first step toward transforming your home!
              </p>
              <div className="w-full flex justify-center items-center mt-[30px] xl:mt-[32px] 2xl:mt-[34px] 3xl:mt-[36px] 4xl:mt-[38px] 5xl:mt-[44px]">
                <button className="py-[16px] px-[60px] text-base 5xl:text-lg font-normal leading-normal text-primary rounded-[8px] border border-primary">
                  Schedule Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestRoofingService;
