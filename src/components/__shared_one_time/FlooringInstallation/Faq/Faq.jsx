
import Image from "next/image";
import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from "@/utils/heading-text";
import HeadingIcon from "@/components/__ui/HeadingIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "What types of flooring do you offer?",
    answer:
      "We specialize in installing a variety of pool types, including vinyl, fiberglass, and concrete pools. Easy Pools also offers custom designs to meet your specific needs.",
  },
  {
    id: 2,
    question: "How do I choose the right flooring for my space?",
    answer:
      "The installation time varies based on the type of pool and the complexity of the project. Typically, vinyl and fiberglass pools take 1-2 weeks, while concrete pools may take 3-6 months.",
  },
  {
    id: 3,
    question:
      "How long does the flooring installation process take?",
    answer:
      "Costs depend on factors like pool size, materials, and added features. We offer free consultations to provide an accurate estimate based on your requirements.",
  },
  {
    id: 4,
    question: "Do you offer free consultations?",
    answer:
      "Yes, Easy Pools provides a range of maintenance services, including regular cleaning, chemical balancing, and equipment checks to ensure your pool stays in top condition.",
  },
  {
    id: 5,
    question:
      "What is your warranty on flooring and installation?",
    answer:
      "Absolutely. We handle everything from minor repairs to complete pool renovations, including resurfacing, equipment upgrades, and modernizing older pools.",
  },
  {
    id: 6,
    question:
      "Do you provide flooring maintenance and care instructions?",
    answer:
      "Maintenance needs vary depending on the type of pool. Fiberglass and saltwater pools generally require less frequent maintenance compared to concrete pools. Regular cleaning, checking chemical levels, and occasional professional",
  },
  {
    id: 7,
    question:
      "What payment options do you accept?",
    answer:
      "Maintenance needs vary depending on the type of pool. Fiberglass and saltwater pools generally require less frequent maintenance compared to concrete pools. Regular cleaning, checking chemical levels, and occasional professional",
  },
  {
    id: 8,
    question:
      "How can I get started with my flooring project?",
    answer:
      "Maintenance needs vary depending on the type of pool. Fiberglass and saltwater pools generally require less frequent maintenance compared to concrete pools. Regular cleaning, checking chemical levels, and occasional professional",
  },
];

const Faq = () => {
  return (
    <div className="padding__top ">
      <section className="full__section_r_p pl-3 md:pl-0">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 gap-[34px]">
            <div className="flex justify-end items-center">
              <Image
                alt="faq"
                src="/assets/glitz/images/FAQ.png"
                width={768}
                height={566}
              />
            </div>

            <div>
              <div>
                <div className="flex flex-col items-center md:items-start">
                <HeadingIcon
                text={headingIconText.faq__headingIconText}
              />

                  <div>
                    <h2 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-secondary leading-normal pt-[10px] pb-[25px] text-center md:text-left">
                    Flooring Installation <br/>
                    Frequently Asked Questions (FAQ)
                    </h2>
                  </div>
                </div>
              </div>
              <div className=" pt-6">
                {QAPoolInstallationQuestionsNAns.map((ques, idx) => (
                  <div key={idx}>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 bg-primary  py-3 px-5 5xl:py-[14px] 5xl:px-8 border-2">
                        <p className="text-white text-sm lg:text-sm xl:text-base 5xl:text-lg 5xl:leading-[22px] font-bold">
                          {ques.question}
                        </p>

                        <div className="white-icon">
                          <IoCaretDown className="white-icon" fill="white" />
                        </div>
                      </summary>

                      <p className="py-3 pl-4 pr-8 lg:py-4 lg:px-6 5xl:py-5 5xl:px-7  border-2 text-black text-sm lg:text-sm 5xl:text-base font-normal 5xl:leading-[30px]">
                        {ques.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-[25px]">
        <p className="text-lg font-normal text-black text-center">Do you have questions about our flooring services? Check out our FAQ section for answers to common queries about flooring materials, installation </p>
        </div>
      </section>
    </div>
  );
};

export default Faq;
