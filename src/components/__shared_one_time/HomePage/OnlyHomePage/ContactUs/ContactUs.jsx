import Image from "next/image";
import React from "react";
import "./ContactUs.css";
import Link from "next/link";
import HeadingIcon from "@/components/__ui/HeadingIcon";
import { headingIconText } from "@/utils/heading-text";

const ContactUs = () => {
  return (
    <div data-aos="zoom-in" className="padding__top">
      {/* large device  */}
      <div className="hidden md:block full__section_r_p pl-3 md:pl-0 contact__us__bg">
        <div className="grid grid-cols-1 grid-cols-8 gap-[30px] 5xl:gap-[55px]">
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
              <HeadingIcon text={headingIconText.contactNow__headingIconText} />
            </div>
            <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
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
                  <Link href="location:163 Bowes rd, Toronto">
                    163 Bowes rd, Toronto
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal py-[34px]">
                  <Image
                    src="/assets/glitz/newHomePage/icons/phone.png"
                    alt="phone icon"
                    width={28}
                    height={28}
                  />
                  <Link href="tel:647-449-9512">647-449-9512</Link>
                </li>
                <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                  <Image
                    src="/assets/glitz/newHomePage/icons/email.png"
                    alt="email icon"
                    width={28}
                    height={28}
                  />
                  <Link href="mailto:basement Renovation@gmail.com">
                    basement Renovation@gmail.com
                  </Link>
                </li>
              </ul>
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
                  <button className="text-base text-white font-bold leading-normal py-[15px] px-[58px] contact_form__submit">
                    Submitted
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* content part  */}
        <div className=" flex flex-col items-start justify-center mt-[25px]">
          <div className="flex justify-center md:justify-start items-center ">
            <HeadingIcon text={headingIconText.contactNow__headingIconText} />
          </div>
          <h2 className="text-[25px] md:text-[27px] lg:text-[30px] xl:text-[33px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[40px] 5xl:tex-[42px] font-bold text-black text-center md:text-left leading-normal">
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
                  <Link href="location:163 Bowes rd, Toronto">
                    163 Bowes rd, Toronto
                  </Link>
                </li>
                <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal py-[34px]">
                  <Image
                    src="/assets/glitz/newHomePage/icons/phone.png"
                    alt="phone icon"
                    width={28}
                    height={28}
                  />
                  <Link href="tel:647-449-9512">647-449-9512</Link>
                </li>
                <li className="flex items-center gap-[15px] text-base font-normal text-black leading-normal">
                  <Image
                    src="/assets/glitz/newHomePage/icons/email.png"
                    alt="email icon"
                    width={28}
                    height={28}
                  />
                  <Link href="mailto:basement Renovation@gmail.com">
                    basement Renovation@gmail.com
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
