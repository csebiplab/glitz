import React from "react";

const NewHeadingCenterIcon = ({ text = "empty text" }) => {
  return (
    <div>
      <p className="text-black text-base text-center font-light leading-normal">{text}</p>
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
  );
};

export default NewHeadingCenterIcon;
