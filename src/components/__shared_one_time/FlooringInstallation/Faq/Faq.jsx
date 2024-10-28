import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What types of flooring do you offer?",
    answer:
      "Our flooring company offers a wide range of flooring options, including hardwood, laminate, tile, and luxury vinyl. We design our selection to cater to a variety of styles, preferences, and functional needs.",
  },
  {
    id: 2,
    question: "How long does the flooring installation process take?",
    answer:
      "The timeline for installation depends on the type and size of the project. Our flooring experts will provide a detailed timeline during your consultation.",
  },
  {
    id: 3,
    question: "Do you offer free consultations?",
    answer:
      "Yes, we offer free consultations to discuss your flooring needs, assess your space, and help you choose the best options for your project.",
  },
  {
    id: 4,
    question: "Do you provide flooring maintenance and care instructions?",
    answer:
      "Yes, we provide detailed care and maintenance instructions to help you keep your floors looking beautiful and performing well over time.",
  },
  {
    id: 5,
    question: "What payment options do you accept?",
    answer:
      "Our flooring company accepts various payment methods, including credit cards, checks, and financing options. We will discuss payment details during your consultation.",
  },
  {
    id: 6,
    question: "What services do you offer at Glitz Floors & More?",
    answer:
      "We specialize in a range of services, including home remodeling, flooring installation, bathroom and kitchen upgrades, and more. Our flooring options include hardwood, tile, laminate, and carpet.",
  },
  {
    id: 7,
    question: "What types of flooring materials do you install?",
    answer:
      "We install a wide variety of flooring materials, including hardwood, laminate, tile, vinyl, and carpet. Our flooring contractors can help you choose the best material for your space.",
  },
  {
    id: 8,
    question: "Can you help with the design aspect of my remodel?",
    answer:
      "Absolutely! Our team works closely with you to bring your vision to life, offering design consultations and recommendations based on your preferences and budget.",
  },
  {
    id: 9,
    question: "How do I prepare my home for a flooring installation?",
    answer:
      "Before installation, we recommend clearing out furniture and ensuring the room is free of clutter. Our team will also provide specific instructions based on the type of flooring you're installing.",
  },
  {
    id: 10,
    question: "What areas do you serve?",
    answer:
      "We primarily serve Cypress and surrounding areas, including Houston. Feel free to contact us to see if we can accommodate your location.",
  },
  {
    id: 11,
    question: "Can I stay in my home during a remodel or flooring installation?",
    answer:
      "In most cases, yes. However, depending on the scope of the project, you may need to avoid certain areas during the process. Our flooring contractors will work with you to minimize disruption.",
  },
  {
    id: 12,
    question: "Could you match the flooring to my existing decor?",
    answer:
      "Yes, we can help you choose flooring options that complement your existing decor and style. Our design experts will provide guidance to ensure a cohesive look throughout your home.",
  },
  {
    id: 13,
    question: "What is the process for scheduling a remodeling project?",
    answer:
      "Once you contact us for a consultation, we'll discuss your project in detail, provide a free estimate, and help you select materials. Afterward, we'll schedule the project at a time that works for you.",
  },
  {
    id: 14,
    question: "Can you help with small renovations, like backsplash installation or minor repairs?",
    answer:
      "Yes, we handle both large and small renovation projects. Whether you need a new backsplash, minor repairs, or a full remodel, we've got you covered.",
  },
  {
    id: 15,
    question: "Are your flooring products eco-friendly?",
    answer:
      "We offer a variety of eco-friendly flooring options, such as sustainable wood and low-VOC products. If you're interested in green alternatives, let us know, and we'll provide you with environmentally conscious choices.",
  },
  {
    id: 16,
    question: "What kind of maintenance is required for the flooring you install?",
    answer:
      "Maintenance requirements depend on the type of flooring you choose. For example, hardwood requires regular polishing, while tile and laminate are easier to maintain. Our team will provide you with detailed care instructions after installation.",
  },
  {
    id: 17,
    question: "How soon can I walk on my new floor after installation?",
    answer:
      "For most flooring types, we recommend waiting 24 to 48 hours before walking on the floor, especially if adhesives were used. We will give you specific guidelines based on your flooring material.",
  },
  {
    id: 18,
    question: "Do you offer custom flooring designs?",
    answer:
      "Yes, we can create custom flooring designs to match your unique style. From intricate tile patterns to personalized hardwood finishes, we work with you to make your vision a reality.",
  },
  {
    id: 19,
    question: "Can you handle whole home renovations or just specific rooms?",
    answer:
      "We can manage both full home renovations and single-room projects, depending on your needs. Our team is capable of managing a complete home remodel or simply updating a kitchen or bathroom.",
  },
  {
    id: 20,
    question: "How do I choose the best flooring option for high-traffic areas?",
    answer:
      "We recommend durable options like tile, vinyl, or engineered hardwood for high-traffic areas because they can withstand heavy foot traffic. We'll work with you to find the best solution for your home's specific needs.",
  },
  {
    id: 21,
    question: "Do you offer repair services for existing floors?",
    answer:
      "Yes, we offer repair services for a wide range of flooring types. Whether your hardwood floors need refinishing or your tiles need replacement, our team can restore them to their original condition.",
  },
  {
    id: 22,
    question: "Can I see samples of flooring materials before deciding?",
    answer:
      "Absolutely! We have a variety of flooring samples for you to view during your consultation. ",
  },
  {
    id: 23,
    question: "How do you ensure the quality of your work?",
    answer:
      "We are committed to providing top-quality service by utilizing high-grade materials and ensuring that our installers are experienced and trained professionals. We also conduct quality checks throughout the project to ensure everything meets our high standards.",
  },
  {
    id: 24,
    question: "Can you help with remodeling on a budget?",
    answer:
      "Yes, we offer cost-effective solutions that can work with a variety of budgets. We'll help you prioritize and select materials and services that fit your budget without compromising quality.",
  },
  {
    id: 25,
    question: "Is there a difference between solid hardwood and engineered hardwood flooring?",
    answer:
      "Indeed, a single piece of wood forms solid hardwood, whereas multiple layers of wood press together to form engineered hardwood. Both are durable, but engineered hardwood is more resistant to moisture, making it ideal for areas like basements or kitchens.",
  },
  {
    id: 26,
    question: "How soon can you start my renovation or flooring project?",
    answer:
      "Our scheduling depends on the project's scope and current availability. Once we provide an estimate and finalize the design, we'll arrange a start date that fits your schedule, typically within a few weeks.",
  },
  {
    id: 27,
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes, we handle both residential and commercial remodeling and flooring installation projects. Whether you need a home renovation or flooring for your business, we have the expertise to meet your needs.",
  },
  {
    id: 28,
    question: "What safety measures do you take during the remodeling process?",
    answer:
      "Safety is a top priority for us. We adhere to all industry safety standards, utilize top-notch equipment, and ensure our team receives proper training to uphold a safe work environment. We also take precautions to protect your home from dust and debris during the remodeling process.",
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
              Flooring Installation
              Frequently Asked Questions (FAQ)
            </h2>
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
