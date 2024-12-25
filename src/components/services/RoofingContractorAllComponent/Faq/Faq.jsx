import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What types of roofing services do you offer?",
    answer:
      "We provide a wide range of services, including roof installation, roof maintenance, roof replacement, and emergency repairs. We specialize in both commercial and residential roofing projects in Cypress, TX.",
  },
  {
    id: 2,
    question: "How often should I schedule roofing maintenance?",
    answer:
      "Regular roof maintenance is recommended at least once a year to help extend your roof's lifespan, identify issues early, and prevent costly repairs.",
  },
  {
    id: 3,
    question: "Do you handle commercial roofing projects?",
    answer:
      "Yes, we are experienced commercial roofing contractors and can manage projects of any scale. Our team is equipped to handle the specific requirements of commercial buildings in Cypress, TX.",
  },
  {
    id: 4,
    question: "Are you licensed and insured?",
    answer:
      "Yes, our roofing contractors are fully licensed, insured, and trained to provide professional, safe, and high-quality roofing services.",
  },
  {
    id: 5,
    question: "Can you handle emergency roofing repairs?",
    answer:
      "Yes, we offer emergency roofing services in Cypress, TX, for situations such as storm damage, sudden leaks, and structural issues that need immediate attention.",
  },
  {
    id: 6,
    question: "What should I do if my roof is leaking?",
    answer:
      "If you notice a roof leak, it's important to call for a professional inspection right away. Our team can quickly assess the issue and provide necessary repairs to prevent further damage.",
  },
  {
    id: 7,
    question: "How long does a roof installation take?",
    answer:
      "The time frame for a roof installation varies based on factors like roof size, material, and weather conditions. Typically, residential installations can take a few days, while larger commercial projects may take longer.",
  },
  {
    id: 8,
    question: "What types of roofing materials do you offer?",
    answer:
      "We offer a variety of high-quality roofing materials, including asphalt shingles, metal roofing, tile, and flat roofing solutions, to suit residential and commercial needs.",
  },
  {
    id: 9,
    question: "What should I expect during a roof replacement?",
    answer:
      "During a roof replacement, our team will remove the old roofing materials, inspect and repair the underlying structure if necessary, and install new roofing materials. We prioritize a clean and safe work environment, keeping you informed every step of the way.",
  },
  {
    id: 10,
    question: "How can I prepare my property for a roofing project?",
    answer:
      "We recommend removing any valuable or fragile items from the attic, securing outdoor furniture, and preparing for some noise. Our team will guide you to make the process as smooth as possible.",
  },
  {
    id: 11,
    question: "What sets your company apart from other roofing contractors in Cypress, TX?",
    answer:
      "Our dedication to quality workmanship, attention to detail, and excellent customer service set us apart. We also provide transparent pricing, timely project completion, and a strong commitment to customer satisfaction.",
  },
  {
    id: 12,
    question: "What is the lifespan of a new roof?",
    answer:
      "The lifespan depends on the roofing materials used and proper maintenance. Asphalt shingles typically last 20-30 years, while metal and tile roofs can last 50 years or more with good care.",
  },
  {
    id: 13,
    question: "Will you handle permits for my roofing project?",
    answer:
      "Yes, we handle all necessary permits and follow local codes to ensure your roofing project is compliant and hassle-free.",
  },
  {
    id: 14,
    question: "How can I schedule a roofing inspection?",
    answer:
      "You can schedule a roofing inspection by calling us directly or filling out our online contact form. We offer flexible appointment options to fit your schedule and provide a thorough assessment of your roofing needs.",
  },
  {
    id: 15,
    question: "Do you offer eco-friendly roofing options?",
    answer:
      "Yes, we offer eco-friendly roofing materials and options, including energy-efficient shingles and reflective roofing, which can reduce energy costs and minimize environmental impact.",
  },
  {
    id: 16,
    question: "How does Cypress, TX, weather affect my roof?",
    answer:
      "The weather in Cypress, TX, including intense heat, rain, and storms, can take a toll on your roof. Our roofing materials and techniques are chosen to withstand local weather conditions, providing long-lasting durability.",
  },
  {
    id: 17,
    question: "Can I stay in my home during roof installation or replacement?",
    answer:
      "Yes, you can typically stay in your home during roof installation. However, be prepared for some noise, and consider making accommodations if you have young children, pets, or work-from-home needs.",
  },
  {
    id: 18,
    question: "What roofing systems are best for commercial properties?",
    answer:
      "We offer various roofing systems for commercial properties, including TPO, EPDM, and metal roofing. Our team will help you select the system that meets your building's needs, budget, and energy goals.",
  },
  {
    id: 19,
    question: "Do you offer seasonal roof inspections?",
    answer:
      "Yes, we recommend seasonal inspections, especially before and after extreme weather. This helps catch any issues early and keeps your roof in optimal condition."
  },
  {
    id: 20,
    question: "How do I know if my roof has storm damage?",
    answer:
      "Signs of storm damage include missing shingles, leaks, dents in metal roofing, and visible wear around flashing and edges. If you suspect storm damage, contact us for a professional inspection to assess potential issues.",
  },
  {
    id: 21,
    question: "Can you repair leaks in any type of roof?",
    answer:
      "Yes, we specialize in leak repairs for a wide range of roofing materials, including shingles, metal, tile, and flat roofs. Our team quickly identifies the source of leaks and provides reliable solutions.",
  },
  {
    id: 22,
    question: "Do you offer roof coatings for additional protection?",
    answer:
      "Yes, we offer roof coating services that add an extra layer of protection against UV rays, weather damage, and leaks, especially beneficial for flat and low-slope roofs. Coatings can also improve energy efficiency.",
  },
  {
    id: 23,
    question: "What should I do if my roof repair is denied by insurance?",
    answer:
      "If your claim is denied, we can assist by reviewing the details and potentially advocating on your behalf. We also provide competitive rates to make out-of-pocket repairs more manageable.",
  },
  {
    id: 24,
    question: "How do you ensure safety during roofing projects?",
    answer:
      "Safety is a top priority. Our team follows strict safety protocols, uses quality safety equipment, and stays updated on OSHA guidelines to ensure a safe work environment for our crew and clients.",
  },
  {
    id: 25,
    question: "Are there any hidden costs in your roofing estimates?",
    answer:
      "No, our estimates are transparent and detailed, with no hidden fees. We provide a breakdown of costs upfront so you know exactly what to expect.",
  },
  {
    id: 26,
    question: "Do you offer discounts for large commercial projects?",
    answer:
      "Yes, we offer competitive pricing and may provide discounts on larger commercial roofing projects. Contact us to discuss your specific project needs and to receive a custom quote.",
  },
  {
    id: 27,
    question: "How resistant are your roofing materials to Texas weather?",
    answer:
      "We use high-quality materials that are selected for their durability and resistance to Texas weather conditions, including heat, humidity, and storms. Each material is chosen to maximize the lifespan and resilience of your roof.",
  },
  {
    id: 28,
    question: "Can you install roofing insulation as part of the project?",
    answer:
      "Yes, we offer roofing insulation services to improve energy efficiency and comfort. Adding insulation during a roofing project can significantly reduce energy costs.",
  },
  {
    id: 29,
    question: "What is the process for filing an insurance claim for roof repairs?",
    answer:
      "We can guide you through the entire insurance claims process, from documenting damage to working with adjusters. Our team ensures you get the coverage you're entitled to for any repairs or replacements.",
  },
  {
    id: 30,
    question: "Can I customize the color and style of my roofing materials?",
    answer:
      "Yes, we offer a variety of colors and styles to match your aesthetic preferences. Our team can provide samples and advice to help you choose the best fit for your home or business.",
  },
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon text={headingIconText.faq__headingIconText} />

          <div>
            <h2 className=" text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center">
            FAQ of Roofing Contractor Services
            </h2>
            <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            For more information or specific questions, feel free to contact our team. We're proud to serve the Cypress, TX, community with quality, reliability, and a commitment to excellence in roofing services!
          </p>
          </div>
        </div>
      </div>
      <div className="pt-[15px]">
        {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
          <div key={idx}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-secondary-800  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                <p className=" text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                  {ques.question}
                </p>

                <div className="white-icon">
                  <IoCaretDown className="white-icon" fill="white" />
                </div>
              </summary>

              <p className=" py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7 border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                {ques.answer}
              </p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
