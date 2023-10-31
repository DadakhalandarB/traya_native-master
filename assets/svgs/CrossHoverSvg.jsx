import React from "react";

const CrossHoverSvg = (props) => {
  return (
    <svg
      onClick={() => props.setShowSidebar(!props.showSidebar)}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 20 25"
    >
      <path
        fill="#414042"
        d="M3.302 4.717l1.415-1.414 15.98 15.98-1.414 1.414z"
      ></path>
      <path
        fill="#414042"
        d="M3.303 19.283l15.98-15.98 1.414 1.414-15.98 15.98z"
      ></path>
    </svg>
  );
};

export default CrossHoverSvg;
