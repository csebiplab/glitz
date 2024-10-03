<<<<<<< HEAD
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
                <div className="contactUs_cart_bg py-[27px] xl:py-[35px] 5xl:py-[58px] px-[43px]">
                  <p className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-primary leading-normal pb-[17px] text-center md:text-left">
                    Contact Us
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg font-normal text-primary">
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
                  <p className="flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg font-normal text-primary py-[22px] 5xl:py-[32px]">
                    <Image
                      src="/assets/glitz/socials/phone.png"
                      alt="phone icon"
                      width={29}
                      height={29}
                    />

                    <a className="text-primary" href="tel:+1 281-758-5450">
                    +1 281-758-5450
                    </a>
                  </p>
                  <p className="flex items-center justify-center md:justify-start gap-[15px] text-base 5xl:text-lg text-primary font-normal">
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

                  <div className="flex justify-center md:justify-start items-center gap-[50px] pt-[30px] pb-[35px] 5xl:pb-[55px]">
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
                  <p className="text-[20px] 5xl:text-[25px] font-bold leading-normal text-primary text-center md:text-left">
                  Best Floor Installation Company in TX
                  </p>
                  <Image
                    src="/assets/glitz/socials/contact_logo.png"
                    alt="contact us logo"
                    width={258}
                    height={166}
                    className="py-[15px] xl:py-[20px] 5xl:py-[25px]"
                  />
                  <p className="text-[20px] 5xl:text-[25px] font-bold leading-normal text-primary text-center md:text-left">Glitz Floors & More</p>
                </div>
              </div>
              <div className="md:col-span-3 flex items-center">
                <div>
                  <h5 className="text-[25px] md:text-[26px] lg:text-[29px] xl:text-[32px] 2xl:text-[35px] 3xl:text-[38px] 4xl:text-[41px] 5xl:text-[44px] font-bold text-black leading-normal pb-[15px] text-center md:text-left">
                    Give Us Feedback
                  </h5>
                  <form className="">
                    <div className="w-full flex justify-between items-center gap-[20px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black leading-normal"
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
                          className="text-lg font-normal text-black leading-normal"
                          htmlFor="email"
                        >
                          Your Email <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="email"
                          placeholder="info.example@gmail.com"
                        />
                      </div>
                    </div>

                    <div className="w-full flex items-center gap-[20px] py-[25px]">
                      <div className="w-1/2">
                        <label
                          className="text-lg font-normal text-black leading-normal"
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
                          className="text-lg font-normal text-black leading-normal"
                          htmlFor="phone"
                        >
                          Your Phone <sup>*</sup>
                        </label>
                        <input
                          className="w-full input_bg py-[13px] pl-[16px] placeholder:text-black placeholder:text-sm placeholder:font-normal"
                          type="number"
                          placeholder="+88 01764912536"
                        />
                      </div>
                    </div>

                    <div className="w-full pb-[35px]">
                      <label
                        className="text-lg font-normal text-black leading-normal"
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
                      <button className="contact_btn text-primary flex items-center gap-[10px] text-lg font-bold leading-normal py-[7px] px-[33px]">
                        Submit{" "}
                        <Image src="/assets/glitz/socials/submit.png" alt="submit icon" width={17} height={14}/>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
=======
import React from "react";
import "./ContactUs.css";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div>
      <div className="full__section_l_p pr-3 md:pr-0">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-[60px] md:gap-[150px]">
          <div className="md:col-span-3">
            <p className="text-[25px] xl:text-[27px] 5xl:text-[30px] font-bold text-center md:text-left text-balck pb-[25px] 5xl:pb-[44px]">
              Contact Us for a Free Estimate
            </p>
            <form action="">
              <div>
                <label
                  className="text-base 5xl:text-lg font-light text-balck leading-[20px] pb-[12px]"
                  htmlFor="name"
                >
                  Your Name
                </label>{" "}
                <br />
                <input
                  className="input__bg w-full py-[5px]"
                  type="text"
                  name="name"
                />
              </div>
              <div className="py-[20px]">
                <label
                  className="text-base 5xl:text-lg font-light text-balck leading-[20px] pb-[12px]"
                  htmlFor="email"
                >
                  Your Email
                </label>{" "}
                <br />
                <input
                  className="input__bg w-full py-[5px]"
                  type="email"
                  name="email"
                />
              </div>
              <div>
                <label
                  className="text-base 5xl:text-lg font-light text-balck leading-[20px] pb-[12px]"
                  htmlFor="subject"
                >
                  Subject
                </label>{" "}
                <br />
                <input
                  className="input__bg w-full py-[5px]"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="py-[20px]">
                <label
                  className="text-base 5xl:text-lg font-light text-balck leading-[20px] pb-[12px]"
                  htmlFor="phone"
                >
                  Phone Number
                </label>{" "}
                <br />
                <input
                  className="input__bg w-full py-[5px]"
                  type="text"
                  name="phone"
                />
              </div>
              <div className="pb-[30px] 5xl:pb-[40px]">
                <label
                  className="text-base 5xl:text-lg font-light text-balck leading-[20px] pb-[12px]"
                  htmlFor="message"
                >
                  Message
                </label>{" "}
                <br />
                <input
                  className="input__bg w-full py-[5px]"
                  type="text"
                  name="message"
                />
              </div>
              {/* robot part  */}
              <div className="w-[302px] mx-auto flex items-center justify-between robot__bg pt-[11px] pb-[7px] pl-[13px] pr-[12px]">
                <div className="flex items-center gap-[12px]">
                  <input className="w-[28px] h-[28px]" type="checkbox" name="robot"/>
                  <label htmlFor="robot">I'm not a robot</label>
                </div>
                <div>
                  <Image className="w-[32px] h-[32px] mx-auto" src="/assets/glitz/icons/captcha.png" alt="captcha" width={32} height={32}/>
                  <p className="text-center text-[10px] font-normal text-dark-200 pt-[5px] pb-[2px]">reCAPTCHA</p>
                  <p className="text-center text-[8px] font-normal text-dark-200">Privacy <span> - </span> <span>Terms</span></p>
                </div>
              </div>

              {/* btn part  */}
              <div className="flex justify-center items-center pt-[50px] 5xl:pt-[64px]">
                <button className="text-sm py-[15px] px-[70px] font-semibold button__bg_color">
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div className="md:col-span-4">
            <iframe
              className="w-full h-[400px] md:h-[550px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6827.416153838049!2d-95.67873389781465!3d29.996537571553294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d57b61c6fd8d%3A0x2ba2182f0ab40249!2sGlitz%20Floors%20%26%20More!5e0!3m2!1sen!2sbd!4v1727705040633!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
>>>>>>> 499c20827ee17fe29b85527025d4082a85ced69e
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
