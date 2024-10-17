import Image from "next/image";
import React from "react";

import "./ContactUs.css";

const socialIcon = [
  "/assets/glitz/socials/f.png",
  "/assets/glitz/socials/t.png",
  "/assets/glitz/socials/i.png",
  "/assets/glitz/socials/l.png",
];

const ContactUs = () => {
  return (
    <div className=" ">
      <div className="padding__top ">
        <div className="">
          <div className="container ">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-[30px]">
              <div className="md:col-span-3 flex items-center">
                <div className="contactUs_cart_bg py-[20px] xl:py-[25px] 5xl:py-[40px] px-[43px]">
                  <p className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-primary leading-normal pb-[14px] text-center md:text-left">
                    Contact Us
                  </p>
                  <p className="font-family-secondary flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg font-normal text-primary">
                    <Image
                      src="/assets/glitz/socials/map.png"
                      alt="map icon"
                      width={29}
                      height={29}
                    />
                    <a
                      href="location:16726 Huffmeister Rd D400, Cypress, TX 77429, United States"
                      className="text-primary"
                    >
                      16726 Huffmeister Rd D400, Cypress, TX 77429, United States
                    </a>
                  </p>
                  <p className="font-family-secondary flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg font-normal text-primary py-[15px] 5xl:py-[25px]">
                    <Image
                      src="/assets/glitz/socials/phone.png"
                      alt="phone icon"
                      width={29}
                      height={29}
                    />

                    <a className="text-primary" href="tel:(281) 758-5450">
                    (281) 758-5450
                    </a>
                  </p>
                  <p className="font-family-secondary flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg text-primary font-normal">
                    <Image
                      src="/assets/glitz/socials/mail.png"
                      alt="email icon"
                      width={29}
                      height={29}
                    />
                    <a href="mail:info@glitzfloors&more.us" className="text-primary">
                    info@glitzfloors&more.us
                    </a>
                  </p>

                  <div className="flex justify-center md:justify-start items-center gap-[50px] pt-[20px] pb-[20px] 5xl:pb-[30px]">
                    {socialIcon.map((icon, index) => (
                      <div key={index} className="">
                        <Image
                          src={icon}
                          alt={`social icon ${index}`}
                          width={28}
                          height={28}
                        />
                      </div>
                    ))}
                  </div>
                  <p className="font-family-secondary text-[20px] 5xl:text-[25px] font-bold leading-normal text-primary text-center md:text-left">
                  Best Floor Installation Company in TX
                  </p>
                  <Image
                    src="/assets/glitz/logo/nav_logo.png"
                    alt="contact us logo"
                    width={258}
                    height={166}
                    className="py-[15px] xl:py-[15px] 5xl:py-[20px]"
                  />
                  <p className="font-family-secondary text-[25px] font-bold leading-normal text-primary text-center md:text-left">Glitz Floors & More</p>
                </div>
              </div>
              <div className="md:col-span-3 flex items-center">
                <div>
                  <h5 className="font-family-secondary text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-black leading-normal pb-[15px] text-center md:text-left">
                    Give Us Feedback
                  </h5>
                  <form className="">
                    <div className="w-full flex justify-between items-center gap-[20px]">
                      <div className="w-1/2">
                        <label
                          className="font-family-secondary text-lg font-normal text-black leading-normal"
                          htmlFor="name"
                        >
                          Your Name <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="text"
                          placeholder="Robot Fox"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="font-family-secondary text-lg font-normal text-black leading-normal"
                          htmlFor="email"
                        >
                          Your Email <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-xs md:text-sm placeholder:font-normal"
                          type="email"
                          placeholder="info.example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="w-full flex items-center gap-[20px] py-[25px]">
                      <div className="w-1/2">
                        <label
                          className="font-family-secondary text-lg font-normal text-black leading-normal"
                          htmlFor="subject"
                        >
                          Subject <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="w-1/2">
                        <label
                          className="font-family-secondary text-lg font-normal text-black leading-normal"
                          htmlFor="phone"
                        >
                          Your Phone <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="number"
                          placeholder="(281) 758-5450"
                        />
                      </div>
                    </div>

                    <div className="w-full pb-[35px]">
                      <label
                        className="font-family-secondary text-lg font-normal text-black leading-normal"
                        htmlFor="message"
                      >
                        Message <sup>*</sup>
                      </label>
                      <textarea
                        className="w-full input_bg pt-[16px] pb-[30px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                        name="message"
                        placeholder="Write Message"
                      ></textarea>
                    </div>
                    <div className="flex justify-center md:justify-start pb-[28px] md:pb-0">
                      <button className="font-family-secondary contact_btn text-primary flex items-center gap-[10px] text-lg font-bold leading-normal py-[7px] px-[33px]">
                        Submit{" "}
                        <Image src="/assets/glitz/socials/submit.png" alt="submit icon" width={17} height={14}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
