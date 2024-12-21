import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What types of painting services do you offer?",
    answer:
      "We provide a full range of painting services, including interior and exterior painting, cabinet painting, concrete floor painting, and commercial painting. Our team of professional painters is experienced in handling residential and commercial projects of any size.",
  },
  {
    id: 2,
    question: "Why should I choose Glitz Floors & More for my painting needs in Cypress, TX?",
    answer:
      "As a trusted Cypress painting company, we prioritize quality, reliability, and customer satisfaction. Our skilled painting contractors use premium materials and detailed techniques to achieve beautiful, long-lasting results. We're committed to transforming your space with precision and professionalism.",
  },
  {
    id: 3,
    question: "Do you offer color consultations?",
    answer:
      "We offer color consultations to help you choose the perfect shades for your space. Our experts can guide you in selecting colors that match your style and enhance the aesthetic of your home or business.",
  },
  {
    id: 4,
    question: "Can you paint cabinets and concrete floors?",
    answer:
      "Absolutely! We specialize in cabinet painting and concrete floor painting. Our team uses durable, high-quality paints to withstand wear, giving your cabinets and concrete floors a fresh, updated look.",
  },
  {
    id: 5,
    question: "Are your painting services suitable for commercial properties?",
    answer:
      "Yes, we offer commercial painting services tailored to meet the needs of businesses and commercial spaces. Our team understands the importance of timely, efficient service to minimize downtime for your operations.",
  },
  {
    id: 6,
    question: "How long does a typical painting project take?",
    answer:
      "Project duration depends on the size and scope of the job. Our team works efficiently to complete each project on schedule without compromising quality.",
  },
  {
    id: 7,
    question: "Are your painters licensed and insured?",
    answer:
      "Yes, our painting contractors are fully licensed and insured, giving you peace of mind and ensuring a professional experience from start to finish.",
  },
  {
    id: 8,
    question: "What preparation do I need to do before the painters arrive?",
    answer:
      "To help ensure a smooth process, we recommend clearing the area of any furniture, decor, or personal items. Our team will handle the rest, including surface preparation, taping, and protecting areas not being painted. If you have any specific requests, feel free to discuss them with us beforehand.",
  },
  {
    id: 9,
    question: "Do you use eco-friendly paints?",
    answer:
      "Yes, we offer eco-friendly paint options for those who prefer low-VOC or zero-VOC products. Our goal is to provide beautiful results while minimizing environmental impact and ensuring the safety of your home or business.",
  },
  {
    id: 10,
    question: "Can I see examples of your previous work?",
    answer:
      "Certainly! You can also read customer testimonials to see what others have said about their experiences with us.",
  },
  {
    id: 11,
    question: "Are you available for emergency painting services?",
    answer:
      "Yes, we understand that sometimes urgent situations arise. We do our best to accommodate emergency painting requests and provide prompt service to address urgent needs.",
  },
  {
    id: 12,
    question: "How do I schedule a consultation?",
    answer:
      "You can easily schedule a consultation by contacting us through our website, calling our office, or email.",
  },
  {
    id: 13,
    question: "Can you help with both small and large painting projects?",
    answer:
      "Absolutely! Whether you need a single room painted or a complete commercial space, we have the expertise and resources to handle projects of any size.",
  },
  {
    id: 14,
    question: "What types of surfaces can you paint?",
    answer:
      "Our expert painters are equipped to handle a variety of surfaces, including drywall, wood, metal, stucco, concrete, and more. We ensure that the appropriate preparation and techniques are used for each surface type to achieve the best results.",
  },
  {
    id: 15,
    question: "How do you handle weather-related delays for exterior painting?",
    answer:
      "We monitor weather conditions closely and prioritize the safety and quality of our work. If weather-related delays occur, we'll communicate with you promptly and reschedule as needed to ensure the best outcome for your project.",
  },
  {
    id: 16,
    question: "Will you clean up after the job is finished?",
    answer:
      "Yes! Our team is dedicated to leaving your space clean and tidy. After completing the painting, we will remove protective coverings, clean paint splatters, and dispose of debris. We want you to enjoy your newly painted space without the hassle of cleanup.",
  },
  {
    id: 17,
    question: "Can you assist with drywall repairs before painting?",
    answer:
      "Absolutely! We offer drywall repair services as part of our preparation process. If you have any damaged walls or ceilings, our team can assess and repair them before applying paint for a flawless finish.",
  },
  {
    id: 18,
    question: "What sets your painting services apart from others in Cypress, TX?",
    answer:
      "At Glitz Floors & More, we pride ourselves on our commitment to quality, customer service, and attention to detail. We tailor our services to fit your needs and maintain open communication throughout the project.",
  },
  {
    id: 19,
    question: "Are your painters insured?",
    answer:
      "Yes, all our painters are fully insured, providing peace of mind and protection for you and your property. We take our responsibilities seriously and ensure our team is covered in case of any unforeseen incidents."
  },
  {
    id: 20,
    question: "Do you provide warranties for your painting services?",
    answer:
      "Yes, we offer warranties on our painting services to ensure your peace of mind. Our commitment to quality means we stand by our work, and if any issues arise within the warranty period, we'll address them promptly and professionally.",
  },
  {
    id: 21,
    question: "How do you handle large-scale commercial projects?",
    answer:
      "We develop a detailed plan for large-scale commercial projects to ensure efficiency and minimal disruption to your business operations. Our team works closely with you to coordinate timelines and logistics, providing a seamless painting experience that meets your requirements.",
  },
  {
    id: 22,
    question: "What happens if I need to make changes after the project starts?",
    answer:
      "We understand that sometimes changes are necessary. If you need to make adjustments during the project, just communicate with our team as soon as possible. We're committed to working with you to accommodate your requests while maintaining quality.",
  },
  {
    id: 23,
    question: "Is your painter's background checked?",
    answer:
      "All our painters undergo background checks and thorough vetting to ensure they are trustworthy and professional.",
  },
  {
    id: 24,
    question: "How do I follow up after the project is completed?",
    answer:
      "After you complete your project, we encourage you to reach out with any feedback or concerns. We're dedicated to your satisfaction, and we welcome any questions you may have about maintenance or future projects. Your experience is important to us, and we're here to help!",
  }
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon text={headingIconText.faq__headingIconText} />

          <div>
            <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center">
             FAQ of Painting Contractors Services
            </h2>
          </div>
        </div>
      </div>
      <div className="pt-[15px]">
        {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
          <div key={idx}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-secondary-800  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                <p className="font-family-secondary text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                  {ques.question}
                </p>

                <div className="white-icon">
                  <IoCaretDown className="white-icon" fill="white" />
                </div>
              </summary>

              <p className="font-family-secondary py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7 border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
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
