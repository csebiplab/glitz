import React from "react";
import { headingIconText } from "@/utils/heading-text";
import "./PaintingServices.css";
import Image from "next/image";
import NewHeadingCenterIcon from "@/components/__ui/NewHeadingCenterIcon";

const servicesData = [
  {
    id: 1,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service1.png",
    title: "Residential Painting Contractors",
    description: [
      {
        desc: "At Glitz Floors & More, our residential painting contractors are dedicated to transforming your home into a beautiful, personalized space. With years of experience, our skilled team handles every aspect of your painting project with precision and care. We specialize in interior and exterior painting, ensuring each room reflects your unique style while enhancing your home's overall appeal. Our process begins with a thorough consultation, where we listen to your ideas and provide expert guidance on color selection and finishes. From living rooms and bedrooms to kitchens and bathrooms, we take pride in delivering a flawless finish that revitalizes your home. Our exterior services include aesthetic improvements and protective coatings that withstand the elements and preserve your investment. We use high-quality paints and techniques to ensure long-lasting results and our commitment to customer satisfaction. Whether you're looking for a fresh coat of paint or a complete color overhaul, trust Glitz Floors & More as your go-to residential painting contractor for a stunning transformation!",
      },
    ],
  },
  {
    id: 2 ,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service2.png",
    title: "Commercial Painter",
    description: [
      {
        desc: "At Glitz Floors & More, our commercial painting services are tailored to meet the unique needs of businesses and commercial properties. As experienced commercial painters, we understand the importance of creating a professional and inviting atmosphere for your clients and employees. Our team is skilled in handling projects of all sizes, from office buildings and retail spaces to warehouses and restaurants. We prioritize efficiency and minimal disruption, working around your schedule to ensure your operations continue smoothly during the painting process. Our comprehensive services include interior and exterior painting, wall finishes, and specialty coatings designed to withstand high-traffic areas and maintain a polished appearance. Using high-quality, durable paints, we deliver results that enhance your space and reflect your brand identity. We collaborate closely with you to select the right colors and finishes that align with your vision. At Glitz Floors & More, we are committed to delivering exceptional craftsmanship and customer satisfaction, making us your trusted partner for all your commercial painting needs.",
      },
    ],
  },
  {
    id: 3,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service3.png",
    title: "Interior Painting Contractors",
    description: [
      {
        desc: "At Glitz Floors & More, our interior painting contractors specialize in transforming your indoor spaces into stunning showcases that reflect your style. With a keen eye for detail and a commitment to quality, we handle every aspect of your painting project with precision and care. We work with you to create a harmonious environment that enhances the beauty and functionality of your home.",
      },
      {
        desc: "Our experienced contractors are trained in various painting techniques, including textured finishes and cabinet refinishing, allowing us to meet your unique needs. We take pride in our meticulous preparation and clean-up, leaving your space pristine after every project. At Glitz Floors & More, customer satisfaction is our top priority. Let us help you transform your interiors into inviting and stylish spaces you'll love for years!",
      },
    ],
  },
  {
    id: 4,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service4.png",
    title: "Exterior Painting Contractors",
    description: [
      {
        desc: "At Glitz Floors & More, our exterior painting contractors are dedicated to enhancing your home's curb appeal while providing lasting protection against the elements. We understand that the exterior of your home is not only its first impression but also a crucial defense against weather damage. Our skilled team is equipped to handle projects of all sizes, from single-family homes to multi-unit buildings. Our exterior painting services include surface preparation, cleaning, sanding, and priming to ensure a smooth and durable finish. We use high-quality, weather-resistant paints that withstand the harshest conditions, ensuring your home looks stunning and remains protected for years. Our team pays careful attention to detail, from precise trim work to complete wall coverage, ensuring a flawless appearance that enhances your home's architectural features. We also offer a range of finishes and color options, allowing you to create the perfect look for your exterior. Customer satisfaction is our top priority. Trust Glitz Floors & More as your exterior painting contractors to elevate your home's beauty and durability—contact us today to discuss your project!",
      },
    ],
  },
  {
    id: 5,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service5.png",
    title: "House Painting",
    description: [
      {
        desc: "At Glitz Floors & More, our house painting services are designed to breathe new life into your home to enhance its beauty and value. Whether you're looking to refresh the interior or revitalize the exterior, our skilled team of painting professionals is dedicated to delivering exceptional results that reflect your style. We thoroughly prepare surfaces to ensure optimal adhesion and longevity, and our team is experienced in handling various materials, including wood, stucco, and brick. With our attention to detail and quality workmanship, your home will make a lasting impression. Transform your living space with a wide range of colors and finishes. Our interior house painting services include meticulous preparation, expert application, and a keen eye for detail. From cozy bedrooms to vibrant living areas, we work with you to choose the perfect palette that suits your vision and complements your decor. At Glitz Floors & More, we prioritize customer satisfaction and strive to exceed your expectations with every project. Whether it's a single room or an entire home, you can trust us to deliver a beautiful and lasting transformation. Contact Glitz Floors & More",
      },
    ],
  },
  {
    id: 6,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service6.png",
    title: "Cabinet Paint",
    description: [
      {
        desc: "At Glitz Floors & More, our cabinet painting services are the perfect solution for revitalizing your kitchen or bathroom. We understand that cabinets are a focal point in any space, and our expert team is dedicated to delivering a stunning finish that breathes new life into your cabinetry. Painting your cabinets can dramatically change the look and feel of your space, offering a fresh, modern appearance. Whether you prefer a classic white, a bold color, or a sleek matte finish, we provide a range of options to suit your style and enhance your home's decor. At Glitz Floors & More, we pride ourselves on exceptional craftsmanship and customer service. Our cabinet painting process begins with thorough preparation, which includes cleaning, sanding, and priming to ensure excellent adhesion and a smooth finish. Our skilled painters apply multiple coats for a flawless, professional finish, paying close attention to detail on every door and drawer. We are committed to sustainability and offer eco-friendly paint options that are low in VOCs, making your home healthier for you and your family. Transform your cabinets and elevate your space.",
      },
    ],
  },
  {
    id: 7,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service7.png",
    title: "Concrete Floor Paint",
    description: [
      {
        desc: "At Glitz Floors & More, we specialize in high-quality concrete floor painting services that enhance the durability and appearance of your concrete surfaces. Concrete floor paint is an effective way to protect and beautify your floors. It provides a tough, resilient surface that can withstand heavy foot traffic, spills, and stains while adding a fresh, polished look to your space. You can easily customize your concrete floors with various colors and finishes to match your style. Our concrete floor painting process begins with thorough surface preparation. Next, we apply a high-quality primer followed by multiple coats of durable, weather-resistant paint designed specifically for concrete surfaces. At Glitz Floors & More, we prioritize your satisfaction and work closely with you throughout the process to ensure your vision is realized. Our attention to detail ensures a smooth finish that enhances appearance and performance. We design to withstand wear and tear, providing long-lasting results. Painted surfaces are easier to clean and maintain, making them ideal for high traffic areas. Our experienced team is committed to delivering exceptional craftsmanship",
      },
    ],
  },
  {
    id: 8,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service8.png",
    title: "Deck Painting",
    description: [
      {
        desc: "At Glitz Floors & More, we specialize in deck painting services that enhance the beauty and longevity of your outdoor space. A well-maintained deck adds value to your home and provides a perfect spot for relaxation and entertainment. Our expert team is dedicated to transforming your deck into a stunning extension of your living area. Deck painting is an essential step in protecting your wood from the elements. Our high-quality paints and stains create a durable barrier against UV rays, moisture, and wear, helping to prevent rot, fading, and splintering.",
      },
      {
        desc: "At Glitz Floors & More, your satisfaction is our priority. Our team will work closely with you to understand your vision and ensure your deck is transformed to your specifications. Ready to enhance your outdoor living space? Contact Glitz Floors & More today for a free consultation and let us help you achieve the deck of your dreams!",
      },
    ],
  },
  {
    id: 9,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service9.png",
    title: "Fence Painting",
    description: [
      {
        desc: "At Glitz Floors & More, our fence painting services are designed to enhance the beauty and durability of your outdoor space. A fresh coat of paint revitalizes your fence and protects it from moisture, UV rays, and pests. Our expert team handles everything from thorough cleaning and preparation to applying high-quality paints or stains, ensuring a smooth and lasting finish. Whether you're looking to refresh an old fence or protect a newly installed one, our dedicated team at Glitz Floors & More is here to help. We take pride in our attention to detail and commitment to customer satisfaction, ensuring your vision is realized with precision and care.",
      },
      {
        desc: "With our expertise, you can expect a durable, weather-resistant coating that enhances aesthetics and extends the life of your fence. Choose various colors to complement your landscape and improve your curb appeal. Trust us to deliver exceptional results that will keep your fence looking beautiful for years! Contact Glitz Floors & More today for a free consultation, and let's transform your fence into a stunning focal point for your property!",
      },
    ],
  },
  {
    id: 10,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service10.png",
    title: "Brick Painting",
    description: [
      {
        desc: "At Glitz Floors & More, our brick painting services are designed to transform and protect your brick surfaces. Whether a residential home or a commercial property, our expert team uses high-quality, breathable paints that enhance the aesthetic appeal while safeguarding against moisture and weather damage. With a wide range of colors and finishes, you can customize the look of your brick to match your style and complement your home's architecture. Our skilled team is dedicated to delivering exceptional craftsmanship and attention to detail, ensuring a professional finish you can be proud of. Our brick painting process enhances the visual appeal of your property and provides essential protection, extending the lifespan of your brick surfaces. Whether you're looking to refresh an outdated facade or protect a newly constructed brick feature, Glitz Floors & More is here to help. Trust us to revitalize your brickwork and boost your property's curb appeal! Contact us today for a free consultation, and let us transform your brick surfaces into beautiful, lasting enhancements for your property!",
      },
    ],
  },
  {
    id: 11,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service11.png",
    title: "Wall Painting",
    description: [
      {
        desc: "At Glitz Floors & More, our wall painting services are designed to refresh and transform any space in your home or business. We use high-quality paints in various colors and finishes, ensuring a durable and beautiful result that reflects your style. From thorough preparation to flawless application, we handle every step of the process to deliver stunning walls that enhance your environment. Our process includes meticulous preparation, such as cleaning, patching, and priming, to create a smooth surface for painting.",
        
      },
      {
        desc: "Our wall painting services enhance the aesthetic appeal of your space and provide a protective layer against wear and tear. We begin with a detailed consultation to understand your vision and preferences, ensuring that every aspect of the project aligns with your style. At Glitz Floors & More, we prioritize customer satisfaction and strive to exceed your expectations with every project. Trust us to deliver beautiful, lasting results that transform your walls and elevate your space. Reach out today for a free consultation, and let us help you create the perfect atmosphere in your home or business!",
      },
    ],
  },
  {
    id: 12,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service12.png",
    title: "Ceilings Painting",
    description: [
      {
        desc: "At Glitz Floors & More, we specialize in professional ceiling painting services that can enhance the overall look of your space. A fresh coat of paint can brighten a room and create a more open, inviting atmosphere. Our skilled team pays meticulous attention to detail, ensuring a smooth and even finish that eliminates imperfections and hides any stains or discoloration. Our ceiling painting services will help you achieve a clean, polished look.",
        
      },
      {
        desc: "In addition to enhancing aesthetics, our ceiling painting services can also improve the overall ambiance of your space. Our team will work with you to select the perfect color and finish to complement your decor. At Glitz Floors & More, we pride ourselves on delivering exceptional results and customer satisfaction. Let us help you transform your ceilings into beautiful, eye-catching elements of your home. Contact us today for a free consultation and discover how our ceiling painting services can elevate your space!",
      },
    ],
  },
  {
    id: 13,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service13.png",
    title: "Trim Installation & Painting",
    description: [
      {
        desc: "At Glitz Floors & More, we specialize in professional trim installation and painting services that enhance the beauty and character of your interiors. From crown molding to baseboards and wainscoting, our skilled team expertly installs a variety of trim styles to elevate your space. We ensure precise measurements and secure fitting, followed by high-quality painting or staining for a flawless finish. Our attention to detail and commitment to customer satisfaction mean your project will be completed on time and to your specifications. Our experienced team ensures meticulous installation, paying close attention to detail for seamless joints and clean lines. Once the trim is in place, we use high-quality paints or stains to achieve a beautiful, long-lasting finish that ties the room together.",
        
      },
      {
        desc: "Whether renovating a single room or updating your entire home, our trim installation and painting services add a polished touch that enhances your decor. We begin with a thorough consultation to understand your vision and preferences, guiding you in selecting the perfect trim style and finish to complement your space.",
        
      },
    ],
  },
  {
    id: 14,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service14.png",
    title: "Drywall Repair",
    description: [
      {
        desc: "At Glitz Floors & More, we provide professional drywall repair services to restore the integrity and appearance of your walls and ceilings. Whether it's a small hole, water damage, or cracks, our skilled team is equipped to handle repairs of all sizes. We meticulously assess the damage, perform necessary patching, and ensure a smooth, seamless finish before painting to match your existing décor. Our commitment to quality and attention to detail ensures that your walls look as good as new. Trust us to bring your interiors back to life—contact Glitz Floors & More today for a free consultation!",
        
      },
      {
        desc: "Our drywall repair process begins with a thorough evaluation of the affected areas to determine the best approach for restoration. We carefully remove damaged sections, patch holes, and reinforce weak spots, ensuring a solid foundation before finishing. Once the repairs are made, we sand the surfaces for a smooth finish and apply primer, followed by high-quality paint that matches your existing wall color. We aim to provide virtually undetectable results, seamlessly blending the repaired areas",
        
      },
    ],
  },
  {
    id: 15,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service15.png",
    title: "Stucco Repair",
    description: [
      {
        desc: "At Glitz Floors & More, we specialize in professional stucco repair services that restore the beauty and durability of your exterior surfaces. Whether your stucco has suffered from cracks, chips, or water damage, our skilled team handles repairs of all sizes. We carefully assess the damage, match the texture and finish of your existing stucco, and apply high-quality materials to ensure a seamless blend. We commit to quality workmanship, guaranteeing that your home will look great and be protected from the elements. Our stucco repair process begins with a thorough inspection to identify the extent of the damage. We then carefully remove any loose or deteriorated stucco, preparing the area for a strong bond with the new material.",
        
      },
      {
        desc: "Our team uses high-quality stucco mixes that match your texture and color, ensuring a seamless repair. After applying the new stucco, we finish the surface to match the original design. Our attention to detail ensures that the repaired areas blend flawlessly with the rest of your home, restoring beauty and protection against the elements. We prioritize your satisfaction and deliver results that meet",
      },
    ],
  },
  {
    id: 16,
    img: "/assets/glitz/painting-contractors/painting-services/painting-service16.png",
    title: "Pressure Washing",
    description: [
      {
        desc: "Restore the beauty of your property with professional pressure washing services from Glitz Floors & More in Cypress, TX. Our skilled team uses top-quality equipment to remove dirt, mold, and grime from various surfaces, including driveways, sidewalks, patios, decks, and siding. We're committed to providing exceptional results that enhance the look of your property, boost curb appeal, and extend the life of your surfaces. Glitz Floors & More goes beyond surface-level cleaning with our pressure washing services. We tailor our approach to fit the specific needs of each project, using precise pressure levels and cleaning solutions that are safe for all types of surfaces. Whether it's a gentle wash for delicate areas or a high-power clean for tough stains, we have the expertise to handle it. Our team is dedicated to achieving a spotless, streak-free finish that improves your property's appearance and protects it from long-term damage caused by mold, mildew, and environmental pollutants. Let Glitz Floors & More help you make a lasting impression with our reliable, professional pressure washing services.",
      },
    ],
  },
];

const PaintingServices = () => {
  return (
    <div>
      <div className="container padding__top">
        <div className="flex flex-col items-center justify-center">
          <NewHeadingCenterIcon
            text={headingIconText.paintingServices__headingIconText}
          />
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black leading-tight 5xl:leading-normal mb-[10px] text-center">
            Our Comprehensive Painting Services Include
          </h2>
          <p className="text-base 5xl:text-lg text-secondary-50 font-normal text-center leading-[26px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 3xl:leading-[32px] 4xl:leading-[34px] 5xl:leading-[36px]">
            Glitz Floors & More offers a wide range of comprehensive painting
            services designed to meet all your needs. Our residential interior
            painting transforms living spaces with fresh, vibrant colors, while
            our exterior painting enhances your home's curb appeal with durable,
            weather-resistant finishes. We also specialize in commercial
            painting, providing professional services that minimize disruption
            to your business. Our offerings include accent walls, cabinet
            refinishing, and textured finishes that add depth and character to
            any room. Additionally, we provide wallpaper removal and
            installation, personalized color consultations, and eco-friendly
            painting options to ensure a healthier environment. We also offer
            touch-up and maintenance services to keep your spaces looking their
            best. Whatever your vision, Glitz Floors & More is here to bring it
            to life with precision and expertise!
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
                <div className="servicesCart___bg py-[16px] px-[8px] h-auto md:h-[620px] 2xl:h-[630px]">
                  <h3 className="text-[20px] xl:text-[21px] 2xl:text-[22px] 3xl:text-[23px] 4xl:text-[24px] 5xl:text-[25px] text-center font-bold text-black leading-normal">
                    {data.title}
                  </h3>
                  {
                    data?.description?.map((item, index)=> (
                      <p className="text-base 5xl:text-lg font-normal text-black leading-[30px] 5xl:leading-[35px] text-center" key={index+10}>{item?.desc}</p>
                    ))
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PaintingServices;
