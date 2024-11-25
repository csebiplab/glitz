import React from "react";

const NewHeadingIcon = ({ text = "empty text" }) => {
  return (
    <div>
      <p className="text-black text-base font-light leading-normal">{text}</p>
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
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default NewHeadingIcon;
