import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What services do you offer for bathroom remodeling?",
    answer:
      "We provide a full range of services, including design consultation, demolition, plumbing, electrical work, installation of fixtures and finishes, and project management.",
  },
  {
    id: 2,
    question: "Do you provide free estimates?",
    answer:
      "Yes, we offer free consultations and estimates to discuss your project and provide a clear understanding of the costs involved.",
  },
  {
    id: 3,
    question: "Can I choose my materials and fixtures?",
    answer:
      "Absolutely! We encourage you to select materials and fixtures that reflect your style and preferences. Our team can help guide you in choosing quality options.",
  },
  {
    id: 4,
    question: "Are your installers licensed and insured?",
    answer:
      "Yes, all our installers are fully licensed and insured, ensuring peace of mind and protection during remodeling.",
  },
  {
    id: 5,
    question: "What payment options do you accept?",
    answer:
      "We accept various payment methods, including credit cards, checks, and financing options. We'll discuss the details during your consultation.",
  },
  {
    id: 6,
    question: "Can you help with design ideas and planning?",
    answer:
      " Absolutely! Our experienced design team is here to help you brainstorm and refine your ideas, offering creative solutions that maximize both style and functionality.",
  },
  {
    id: 7,
    question: "What types of styles do you specialize in?",
    answer:
      "We work with styles, including modern, traditional, farmhouse, and contemporary designs. Our team can adapt to your specific aesthetic preferences.",
  },
  {
    id: 8,
    question: "Can you assist with lighting and electrical work?",
    answer:
      "Definitely! We have licensed electricians who can help with lighting design and any necessary electrical work, ensuring your bathroom is functional and beautifully lit.",
  },
  {
    id: 9,
    question: "Do you offer eco-friendly options?",
    answer:
      "Yes, we provide a range of eco-friendly materials and fixtures, including water-saving toilets and energy-efficient lighting, to help you create a sustainable bathroom.",
  },
  {
    id: 10,
    question: "How do you handle tile installation?",
    answer:
      "Our skilled installers are experienced in all aspects of tile work, from layout planning to precise installation, ensuring a polished and professional finish.",
  },
  {
    id: 11,
    question: "Can I see a 3D design of my bathroom before starting?",
    answer:
      "Yes, we offer 3D renderings of your proposed design, allowing you to visualize the space and make any adjustments before the project begins.",
  },
  {
    id: 12,
    question: "What if I have specific accessibility needs?",
    answer:
      "We specialize in creating accessible bathrooms tailored to your needs, incorporating features like grab bars, curbless showers, and wider doorways.",
  },
  {
    id: 13,
    question: "Do you provide maintenance tips after the remodel?",
    answer:
      "Absolutely! After completing your remodel, we'll share maintenance tips to help you keep your new bathroom looking its best for years.",
  },
  {
    id: 14,
    question: "Can you help with bathroom additions or expansions?",
    answer:
      "Yes, we can assist with adding or expanding your bathroom space, helping you design a functional layout that fits your needs and home.",
  },
  {
    id: 15,
    question: "What happens if I need plumbing or electrical work done?",
    answer:
      " Our team includes licensed plumbers and electricians who handle all necessary plumbing and electrical work as part of your remodel, ensuring everything is safe and up to code.",
  },
  {
    id: 16,
    question: "Will my remodel affect my home's value?",
    answer:
      "A well-executed bathroom remodel can significantly increase your home's value and appeal, making it a wise investment.",
  },
  {
    id: 17,
    question: "What is your cancellation policy?",
    answer:
      "We understand that plans can change. Please contact us directly to discuss our cancellation policy and any potential fees that may apply.",
  },
  {
    id: 18,
    question: "How do I choose the right style for my bathroom?",
    answer:
      "We can guide you through the selection process by discussing your preferences, reviewing design trends, and showing examples of past projects to help you find a style that suits you.",
  },
  {
    id: 19,
    question: "How do you handle clean-up after the project?",
    answer:
      "Our team prioritizes cleanliness and will handle all debris removal and site clean-up, leaving your new bathroom ready.",
  },
  {
    id: 20,
    question: "What are the benefits of a bathroom remodel?",
    answer:
      "A bathroom remodel can enhance your home's aesthetic appeal, increase functionality, improve energy efficiency, and boost property value, making it a worthwhile investment.",
  },
  {
    id: 21,
    question: "Can you assist with creating a bathroom layout that maximizes space?",
    answer:
      "Absolutely! Our design team specializes in space planning and can help you create an efficient layout that maximizes storage and usability.",
  },
  {
    id: 22,
    question: "How do I prepare for a consultation?",
    answer:
      "Consider compiling inspirational photos, a list of must-haves, and any questions you may have. This will help us better understand your vision during the consultation.",
  },
  {
    id: 23,
    question: "What styles do you specialize in?",
    answer:
      "We have experience with a wide range of styles, including contemporary, traditional, rustic, and minimalist designs, and we can help you find the perfect fit for your home.",
  }
];

const Faq = () => {
  return (
    <div className="container padding__top">
      <div>
        <div className="flex flex-col items-center justify-center">
          <HeadingIcon text={headingIconText.faq__headingIconText} />

          <div>
            <h2 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal text-center">
            FAQ of Kitchen Remodeling Services
            </h2>
            <p className="text-lg font-normal text-secondary-50 text-center leading-[40px]">If you have any more questions or need further assistance, please don't hesitate to reach out. We look forward to helping you create the kitchen of your dreams!</p>
          </div>
        </div>
      </div>
      <div className="pt-[15px]">
        {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
          <div key={idx}>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-primary  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                <p className="font-family-secondary text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                  {ques.question}
                </p>

                <div className="white-icon">
                  <IoCaretDown className="white-icon" fill="white" />
                </div>
              </summary>

              <p className="font-family-secondary py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
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
