import { IoCaretDown } from "react-icons/io5";
import "./Faq.css";
import { headingIconText } from '@/utils/heading-text';
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const QAPoolInstallationQuestionsNAns = [
  {
    id: 1,
    question: "Is vinyl flooring suitable for high-traffic areas?",
    answer:
      "Absolutely! Vinyl flooring is designed to withstand heavy foot traffic, making it an excellent choice for commercial spaces and busy households. Its durability and resistance to scratches and dents ensure it looks great for years.",
  },
  {
    id: 2,
    question: "Do you offer free consultations?",
    answer:
      "Yes! At Glitz Floors & More, we offer free consultations to discuss your vinyl flooring needs, preferences, and budget.",
  },
  {
    id: 3,
    question: "Are your vinyl flooring products eco-friendly?",
    answer:
      "We are committed to sustainability! Many of our vinyl flooring products are made with eco-friendly materials and practices, allowing you to enjoy stylish flooring while minimizing environmental impact.",
  },
  {
    id: 4,
    question: "How can I get started with my vinyl flooring project?",
    answer:
      "Getting started is easy! Contact us to schedule your free consultation. Our team will guide you through the selection and installation process, ensuring a smooth and enjoyable experience.",
  },
  {
    id: 5,
    question: "Is professional installation necessary for vinyl flooring?",
    answer:
      "While some DIY enthusiasts may attempt to install vinyl flooring, we strongly recommend professional installation. Our skilled team ensures that your flooring is laid correctly, maximizing durability and aesthetic appeal.",
  },
  {
    id: 6,
    question: "What should I expect during the installation process?",
    answer:
      "Our team will arrive on time and prepare the area by moving furniture if needed during the installation. We will carefully install your vinyl flooring, paying attention to detail to ensure a flawless finish.",
  },
  {
    id: 7,
    question: "What styles are currently trending in vinyl flooring?",
    answer:
      "Vinyl flooring trends often include natural wood looks, stone textures, and bold geometric patterns. Light and neutral tones are popular for creating a spacious feel, while rich, darker hues add warmth and sophistication. Our team can help you navigate the latest trends to find the perfect style for your home.",
  },
  {
    id: 8,
    question: "Can vinyl flooring be used in commercial spaces?",
    answer:
      "Absolutely! Vinyl flooring is a fantastic choice for commercial environments due to its durability, ease of maintenance, and versatility. It can handle heavy foot traffic while providing a professional appearance that enhances the workspace.",
  },
  {
    id: 9,
    question: "Do you provide maintenance tips for extending the life of my vinyl flooring?",
    answer:
      "Yes! Regular cleaning, prompt attention to spills, and using furniture pads can significantly extend the life of your flooring.",
  },
  {
    id: 10,
    question: "What areas do you serve?",
    answer:
      "While we primarily serve Cypress, TX, our services extend to surrounding areas. Contact us to find out if we can assist you in your location.",
  },
  {
    id: 11,
    question: "How does vinyl flooring compare to other options like hardwood or tile?",
    answer:
      "Vinyl flooring offers several advantages over hardwood and tile, including lower cost, easier installation, and enhanced comfort underfoot. It's also more resistant to moisture and scratches, making it ideal for families and busy environments.",
  },
  {
    id: 12,
    question: "What should I do to prepare for my vinyl flooring installation?",
    answer:
      "Before installation, we recommend clearing the whole area. Our team will handle the rest, including removing old flooring and preparing the subfloor.",
  },
  {
    id: 13,
    question: "How can I choose the right color for my vinyl flooring?",
    answer:
      "Selecting the right color involves considering your overall design scheme and the mood you want to create in your space. Lighter colors make a room more open, while darker tones add warmth and depth. We can provide samples and help you visualize how different colors will look in your home.",
  },
  {
    id: 14,
    question: "What is the lifespan of vinyl flooring?",
    answer:
      "With proper care and maintenance, vinyl flooring can last anywhere from 10 to 25 years or more, depending on the quality of the material and installation.",
  },
  {
    id: 15,
    question: "Are there options for textured or embossed vinyl flooring?",
    answer:
      "Yes! Many of our vinyl flooring products come with textured or embossed finishes that mimic the look and feel of natural materials like wood and stone. This adds depth and realism to your floors while enhancing slip resistance.",
  },
  {
    id: 16,
    question: "What makes Glitz Floors & More stand out from other flooring companies?",
    answer:
      "At Glitz Floors & More, we prioritize quality, customer service, and expertise. Our knowledgeable team of flooring contractors is dedicated to understanding your needs and providing personalized solutions. We're committed to using high-quality materials and delivering exceptional craftsmanship on every project.",
  },
  {
    id: 17,
    question: "Do you offer post-installation support?",
    answer:
      "Absolutely! We provide ongoing support and advice on maintenance and care, ensuring you have all the resources you need to keep your flooring in excellent condition.",
  },
  {
    id: 18,
    question: "Can I schedule a consultation after hours or on weekends?",
    answer:
      "We strive to accommodate our customers' schedules. If you need a consultation outside regular business hours, just let us know, and we will do our best to arrange a convenient time.",
  },
  {
    id: 19,
    question: "Is there a recommended temperature for installing vinyl flooring?",
    answer:
      "Yes, for optimal installation, vinyl flooring should be installed in temperatures between 65°F and 85°F. This ensures proper adhesion and prevents issues with expansion or contraction. Our team will assess conditions before installation to ensure a successful outcome."
  },
  {
    id: 20,
    question: "Are there vinyl flooring options that are safe for pets?",
    answer:
      "Many vinyl flooring options are pet-friendly due to their durability and resistance to scratches and stains. We can guide you to products that will hold up well in homes with pets, ensuring both style and practicality.",
  },
  {
    id: 21,
    question: "What makes vinyl flooring a good choice for allergy sufferers?",
    answer:
      "Vinyl flooring is non-porous, which means it doesn't trap dust, allergens, or pet dander like carpets can. Regular cleaning will help maintain a healthier indoor environment, making it a great choice for allergy sufferers.",
  },
  {
    id: 22,
    question: "Do you offer any special promotions or discounts?",
    answer:
      "We frequently run promotions and discounts on our vinyl flooring products and installation services. Be sure to ask during your consultation or check our website for current offers to help you save on your project.",
  },
  {
    id: 23,
    question: "Is vinyl flooring waterproof?",
    answer:
      "Vinyl flooring is primarily water resistant; it can handle spills and moisture without significant damage. However, it's not completely waterproof. Prolonged exposure to standing water can cause issues like warping or separation. For areas that may experience a lot of moisture—such as bathrooms or laundry rooms—opt for vinyl products specifically labeled as waterproof, as they are designed to withstand higher levels of water without compromising their integrity.",
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
            FAQ of Our Vinyl Flooring
            </h2>
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
