import Image from "next/image";
import React from "react";
import "./ContactUs.css";
import Link from "next/link";
import HeadingIcon from "@/components/ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const socialIcons = [
  "/assets/homePage/icons/f.png",
  "/assets/homePage/icons/t.png",
  "/assets/homePage/icons/i.png",
  "/assets/homePage/icons/l.png",
];

const ContactUs = () => {
  return (
    <div data-aos="zoom-in" className="padding__top">
      {/* large device  */}
      <div className="hidden md:block full__section_r_p pl-3 md:pl-0 contact__us__bg">
        <div className="grid grid-cols-1 grid-cols-8 gap-[30px] 5xl:gap-[55px]">
          <div className="md:col-span-3">
            <Image
              src="/assets/primeBasementHomePage/contact__us.png"
              alt="contact us"
              width={701}
              height={697}
              className="w-[701px] h-[697px]"
            />
          </div>

          <div className="-ml-0 md:-ml-[200px] mt-0 md:mt-[60px] md:col-span-2 contact__cart__bg h-[581px]">
            <div className="h-full flex flex-col justify-center px-[16px] 5xl:px-[22px]">
              <p className="text-base font-normal text-white leading-normal">
                Our Contact Information
              </p>
              <p className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-white text-center md:text-left leading-normal pb-[24px]">
                Give Us Feedback
              </p>
              <form className="contact-form">
                <div className="contact-form__row w-full flex justify-between items-center gap-[20px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="name"
                    >
                      Your Name <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                      type="text"
                      id="name"
                      placeholder="Robot Fox"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="email"
                    >
                      Your Email <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                      type="email"
                      id="email"
                      placeholder="info@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row w-full flex items-center gap-[20px] py-[25px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="subject"
                    >
                      Subject <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="phone"
                    >
                      Your Phone <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                      type="tel"
                      id="phone"
                      placeholder="647-449-9512"
                      pattern="^\+?\d{1,14}$"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field w-full pb-[35px]">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal "
                    htmlFor="message"
                  >
                    Message <sup className="text-white">*</sup>
                  </label>
                  <textarea
                    className="contact-form__textarea w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                    id="message"
                    name="message"
                    placeholder="Write Message"
                    required
                  ></textarea>
                </div>

                <div className="contact-form__submit flex justify-center">
                  <button className="flex items-center gap-[5px] text-base text-white font-bold leading-normal py-[15px] px-[10px] rounded-[8px] bg-primary-700">
                    Get a Consultant
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.16992C0.585786 5.16992 0.25 5.50571 0.25 5.91992C0.25 6.33414 0.585786 6.66992 1 6.66992V5.16992ZM21.5303 6.45025C21.8232 6.15736 21.8232 5.68249 21.5303 5.38959L16.7574 0.616621C16.4645 0.323728 15.9896 0.323728 15.6967 0.616621C15.4038 0.909514 15.4038 1.38439 15.6967 1.67728L19.9393 5.91992L15.6967 10.1626C15.4038 10.4555 15.4038 10.9303 15.6967 11.2232C15.9896 11.5161 16.4645 11.5161 16.7574 11.2232L21.5303 6.45025ZM1 6.66992H21V5.16992H1V6.66992Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-start justify-center">
            <div className="flex justify-center md:justify-start items-center ">
              <HeadingIcon text={headingIconText.contactUs__IconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
              Make an Appointment
            </h2>
            <p className="text-lg font-normal leading-[35px] text-black text-center md:text-left mt-[5px] md:mt-[10px]">
              "Ready to transform your basement into a beautiful, functional
              space? At Prime Basement Renovations, our team of skilled
              contractors is here to guide you every step of the way. Experience
              exceptional service and high-quality craftsmanship tailored to
              your needs. Contact us today to discuss your renovation and start
              creating a space you'll love for years to come!"
            </p>

            <div className="pt-[15px]">
              <p className="text-lg font-normal text-primary-400 leading-[25px]">
                {" "}
                <span className="font-bold text-primary-400">
                  Opening Hours
                </span>{" "}
                <br /> We're open and ready to serve you at convenient <br />{" "}
                times throughout the week
              </p>
              <p className="pt-[11px] flex items-center gap-[15px] pb-[37px] text-base font-normal text-primary-400 leading-[25px]">
                <Image
                  src="/assets/primeBasementHomePage/contact_us_clock.png"
                  alt="contact us"
                  width={28}
                  height={28}
                  className="w-[28px] h-[28px]"
                />{" "}
                <span>
                  <strong className="text-primary-400 font-bold">
                    Mon & SUN
                  </strong>{" "}
                  by Appointment{" "}
                  <strong className="text-primary-400 font-bold">
                    TUE - SAT
                  </strong>{" "}
                  (10am - 7pm)
                </span>
              </p>
            </div>

            <div>
              <button className="flex items-center gap-[5px] text-base text-white font-bold leading-normal py-[15px] px-[10px] rounded-[8px] bg-primary-700">
                Make Appointment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                >
                  <path
                    d="M1 5.16992C0.585786 5.16992 0.25 5.50571 0.25 5.91992C0.25 6.33414 0.585786 6.66992 1 6.66992V5.16992ZM21.5303 6.45025C21.8232 6.15736 21.8232 5.68249 21.5303 5.38959L16.7574 0.616621C16.4645 0.323728 15.9896 0.323728 15.6967 0.616621C15.4038 0.909514 15.4038 1.38439 15.6967 1.67728L19.9393 5.91992L15.6967 10.1626C15.4038 10.4555 15.4038 10.9303 15.6967 11.2232C15.9896 11.5161 16.4645 11.5161 16.7574 11.2232L21.5303 6.45025ZM1 6.66992H21V5.16992H1V6.66992Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden padding__top px-3 ">
        {/* image part  */}
        <div className="">
          <Image
            src="/assets/primeBasementHomePage/contact__us.png"
            alt="contact us"
            width={701}
            height={403}
            className="w-full h-[403px]"
          />
        </div>
        {/* form part  */}
        <div className="-mt-[20px] ml-[20px] mr-[30px]">
          <div className="md:col-span-2 contact__cart__bg h-[581px]">
            <div className="h-full flex flex-col justify-center px-[16px] 5xl:px-[22px]">
              <p className="text-base font-normal text-white leading-normal">
                Our Contact Information
              </p>
              <p className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-white text-left leading-normal pb-[24px]">
                Give Us Feedback
              </p>
              <form className="contact-form">
                <div className="contact-form__row w-full flex justify-between items-center gap-[20px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="name"
                    >
                      Your Name <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      id="name"
                      placeholder="Robot Fox"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="email"
                    >
                      Your Email <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="email"
                      id="email"
                      placeholder="info@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__row w-full flex items-center gap-[20px] py-[25px]">
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="subject"
                    >
                      Subject <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="contact-form__field w-1/2">
                    <label
                      className="contact-form__label text-base font-normal text-white leading-normal"
                      htmlFor="phone"
                    >
                      Your Phone <sup className="text-white">*</sup>
                    </label>
                    <input
                      className="contact-form__input w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                      type="tel"
                      id="phone"
                      placeholder="647-449-9512"
                      pattern="^\+?\d{1,14}$"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__field w-full pb-[35px]">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal "
                    htmlFor="message"
                  >
                    Message <sup className="text-white">*</sup>
                  </label>
                  <textarea
                    className="contact-form__textarea w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    id="message"
                    name="message"
                    placeholder="Write Message"
                    required
                  ></textarea>
                </div>

                <div className="contact-form__submit flex justify-center">
                  <button className="flex items-center gap-[5px] text-base text-white font-bold leading-normal py-[15px] px-[10px] rounded-[8px] bg-primary-700">
                    Get a Consultant
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="12"
                      viewBox="0 0 22 12"
                      fill="none"
                    >
                      <path
                        d="M1 5.16992C0.585786 5.16992 0.25 5.50571 0.25 5.91992C0.25 6.33414 0.585786 6.66992 1 6.66992V5.16992ZM21.5303 6.45025C21.8232 6.15736 21.8232 5.68249 21.5303 5.38959L16.7574 0.616621C16.4645 0.323728 15.9896 0.323728 15.6967 0.616621C15.4038 0.909514 15.4038 1.38439 15.6967 1.67728L19.9393 5.91992L15.6967 10.1626C15.4038 10.4555 15.4038 10.9303 15.6967 11.2232C15.9896 11.5161 16.4645 11.5161 16.7574 11.2232L21.5303 6.45025ZM1 6.66992H21V5.16992H1V6.66992Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* content part  */}
        <div className=" flex flex-col items-start justify-center mt-[25px]">
          <div className="flex justify-center md:justify-start items-center ">
            <HeadingIcon text={headingIconText.contactUs__IconText} />
          </div>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
            Make an Appointment
          </h2>
          <p className="text-lg font-normal leading-[35px] text-black text-left mt-[5px] md:mt-[10px]">
            "Ready to transform your basement into a beautiful, functional
            space? At Prime Basement Renovations, our team of skilled
            contractors is here to guide you every step of the way. Experience
            exceptional service and high-quality craftsmanship tailored to your
            needs. Contact us today to discuss your renovation and start
            creating a space you'll love for years to come!"
          </p>

          <div className="pt-[15px]">
            <p className="text-lg font-normal text-primary-400 leading-[25px]">
              {" "}
              <span className="font-bold text-primary-400">
                Opening Hours
              </span>{" "}
              <br /> We're open and ready to serve you at convenient <br />{" "}
              times throughout the week
            </p>
            <p className="pt-[11px] flex items-center gap-[15px] pb-[37px] text-base font-normal text-primary-400 leading-[25px]">
              <Image
                src="/assets/primeBasementHomePage/contact_us_clock.png"
                alt="contact us"
                width={28}
                height={28}
                className="w-[28px] h-[28px]"
              />{" "}
              <span>
                <strong className="text-primary-400 font-bold">
                  Mon & SUN
                </strong>{" "}
                by Appointment{" "}
                <strong className="text-primary-400 font-bold">
                  TUE - SAT
                </strong>{" "}
                (10am - 7pm)
              </span>
            </p>
          </div>

          <div>
            <button className="flex items-center gap-[5px] text-base text-white font-bold leading-normal py-[15px] px-[10px] rounded-[8px] bg-primary-700">
              Make Appointment
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
              >
                <path
                  d="M1 5.16992C0.585786 5.16992 0.25 5.50571 0.25 5.91992C0.25 6.33414 0.585786 6.66992 1 6.66992V5.16992ZM21.5303 6.45025C21.8232 6.15736 21.8232 5.68249 21.5303 5.38959L16.7574 0.616621C16.4645 0.323728 15.9896 0.323728 15.6967 0.616621C15.4038 0.909514 15.4038 1.38439 15.6967 1.67728L19.9393 5.91992L15.6967 10.1626C15.4038 10.4555 15.4038 10.9303 15.6967 11.2232C15.9896 11.5161 16.4645 11.5161 16.7574 11.2232L21.5303 6.45025ZM1 6.66992H21V5.16992H1V6.66992Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
