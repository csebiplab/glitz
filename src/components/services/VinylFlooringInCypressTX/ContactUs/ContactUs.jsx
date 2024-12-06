import Image from "next/image";
import React from "react";
import "./ContactUs.css";
import Link from "next/link";
// import { headingIconText } from "@/utils/heading-text";
// import NewHeadingIcon from "@/components/__ui/NewHeadingIcon";

const ContactUs = () => {
  return (
    <div data-aos="zoom-in" className="padding__top">
      {/* large device  */}
      <div className="hidden md:block ">
        <div className="full__section_r_p pl-3 md:pl-0 lg_contact__us__bg">
          <div className="grid grid-cols-1 grid-cols-8 gap-[30px] 5xl:gap-[55px] ">
            <div className="md:col-span-3">
              <Image
                src="/assets/glitz/newHomePage/giveUsFeedback.png"
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
                  <div className="contact-form__row w-full flex justify-between items-center gap-[40px] xl:gap-[46px] 2xl:gap-[56px] 3xl:gap-[56px] 4xl:gap-[66px] 5xl:gap-[76px]">
                    <div className="contact-form__field w-1/2">
                      <label
                        className="contact-form__label text-base font-normal text-white leading-normal"
                        htmlFor="name"
                      >
                        Your Name <sup className="text-white">*</sup>
                      </label>
                      <input
                        className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                        type="text"
                        id="name"
                        placeholder="Enter your name"
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
                        className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                        type="email"
                        id="email"
                        placeholder="info@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form__row w-full flex items-center gap-[40px] xl:gap-[46px] 2xl:gap-[56px] 3xl:gap-[56px] 4xl:gap-[66px] 5xl:gap-[76px] py-[25px]">
                    <div className="contact-form__field w-1/2">
                      <label
                        className="contact-form__label text-base font-normal text-white leading-normal"
                        htmlFor="subject"
                      >
                        Subject <sup className="text-white">*</sup>
                      </label>
                      <input
                        className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
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
                        className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                        type="tel"
                        id="phone"
                        placeholder="+1**********"
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
                      className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal rounded-[8px]"
                      id="message"
                      name="message"
                      placeholder="Write Message"
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-center">
                    <button className="text-base text-white font-bold leading-normal py-[15px] px-[58px] contact_form__submit">
                      Submitted
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col items-start justify-center">
              <div className="flex justify-center md:justify-start items-center ">
                {/* <NewHeadingIcon
                  text={headingIconText.contactNow__headingIconText}
                /> */}
                <div className="w-full flex flex-col items-start justify-center">
            <p className="text-base text-black font-normal leading-light">Connect Now</p>
            <div className="flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
            >
              <path
                d="M1 1L70.0646 1"
                stroke="#040273"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            </div>
          </div>
              </div>
              <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-left leading-normal">
                Get Free Professional Consultation
              </h2>
              <div className="mt-[22px]">
                <ul>
                  <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                    {" "}
                    <Image
                      src="/assets/glitz/newHomePage/icons/map.png"
                      alt="map icon"
                      width={28}
                      height={28}
                    />{" "}
                    <Link href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States">
                      16726 Huffmeister Rd D400, Cypress, TX 77429, United
                      States
                    </Link>
                  </li>
                  <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal py-[34px]">
                    <Image
                      src="/assets/glitz/newHomePage/icons/phone.png"
                      alt="phone icon"
                      width={28}
                      height={28}
                    />
                    <Link href="tel:(281) 758-5450">(281) 758-5450</Link>
                  </li>
                  <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                    <Image
                      src="/assets/glitz/newHomePage/icons/email.png"
                      alt="email icon"
                      width={28}
                      height={28}
                    />
                    <Link href="mailto:info@glitzfloors&more.us">
                      info@glitzfloors&more.us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* small device  */}
      <div className="block md:hidden padding__top px-3 ">
        {/* image part  */}
        <div className="">
          <Image
            src="/assets/glitz/newHomePage/giveUsFeedback.png"
            alt="contact us"
            width={701}
            height={403}
            className="w-full h-[350px]"
          />
        </div>
        {/* form part  */}
        <div className="">
          <div className="md:col-span-2 contact__cart__bg h-[720px]">
            <div className="h-full flex flex-col justify-center px-[30px] sm:px-[39px]">
              <p className="text-base font-normal text-white leading-normal">
                Our Contact Information
              </p>
              <p className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-white text-left leading-normal pb-[14px]">
                Give Us Feedback
              </p>
              <form className="contact-form">
                <div className="contact-form__field w-full">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal"
                    htmlFor="name"
                  >
                    Your Name <sup className="text-white">*</sup>
                  </label>
                  <input
                    className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal "
                    type="text"
                    id="name"
                    placeholder="Enter your neme"
                    required
                  />
                </div>
                <div className="contact-form__field w-full my-3">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal"
                    htmlFor="email"
                  >
                    Your Email <sup className="text-white">*</sup>
                  </label>
                  <input
                    className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    type="email"
                    id="email"
                    placeholder="info@example.com"
                    required
                  />
                </div>
                <div className="contact-form__field w-full">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal"
                    htmlFor="subject"
                  >
                    Subject <sup className="text-white">*</sup>
                  </label>
                  <input
                    className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="contact-form__field w-full my-3">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal"
                    htmlFor="phone"
                  >
                    Your Phone <sup className="text-white">*</sup>
                  </label>
                  <input
                    className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    type="tel"
                    id="phone"
                    placeholder="+1**********"
                    pattern="^\+?\d{1,14}$"
                    required
                  />
                </div>

                <div className="contact-form__field w-full pb-[35px]">
                  <label
                    className="contact-form__label text-base font-normal text-white leading-normal "
                    htmlFor="message"
                  >
                    Message <sup className="text-white">*</sup>
                  </label>
                  <textarea
                    className="input__bg w-full mt-[10px] py-[13px] pl-[16px] placeholder:text-dark-600 placeholder:text-sm placeholder:font-normal placeholder:leading-normal"
                    id="message"
                    name="message"
                    placeholder="Write Message"
                    required
                  ></textarea>
                </div>

                <div className="contact-form__submit flex justify-center">
                  <button className="text-base text-white font-bold leading-normal py-[15px] px-[58px] contact_form__submit">
                    Submitted
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* content part  */}
        <div className="sm_contact__us__bg flex flex-col items-start justify-center px-[24px] sm:px-[31px] pt-[25px] pb-[35px]">
          <div className="flex justify-center md:justify-start items-center ">
            {/* <NewHeadingIcon
              text={headingIconText.contactNow__headingIconText}
            /> */}
            <div className="w-full flex flex-col items-center justify-center">
            <p className="text-base text-black font-normal leading-light">Connect Now</p>
            <div className="flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="2"
              viewBox="0 0 72 2"
              fill="none"
            >
              <path
                d="M1 1L70.0646 1"
                stroke="#040273"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            </div>
          </div>
          </div>
          <h2 className="text-[25px] font-bold text-black text-left leading-normal">
            Get Free Professional Consultation
          </h2>
          <div className="mt-[22px]">
            <ul>
              <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                {" "}
                <Image
                  src="/assets/glitz/newHomePage/icons/map.png"
                  alt="map icon"
                  width={28}
                  height={28}
                />{" "}
                <Link href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States">
                  16726 Huffmeister Rd D400, Cypress, TX 77429, United States
                </Link>
              </li>
              <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal py-[24px]">
                <Image
                  src="/assets/glitz/newHomePage/icons/phone.png"
                  alt="phone icon"
                  width={28}
                  height={28}
                />
                <Link href="tel:(281) 758-5450">(281) 758-5450</Link>
              </li>
              <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                <Image
                  src="/assets/glitz/newHomePage/icons/email.png"
                  alt="email icon"
                  width={28}
                  height={28}
                />
                <Link href="mailto:info@glitzfloors&more.us">
                  info@glitzfloors&more.us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
