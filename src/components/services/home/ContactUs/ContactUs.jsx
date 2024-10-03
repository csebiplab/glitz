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
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
