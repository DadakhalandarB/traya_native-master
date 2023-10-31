import React from "react";

const InstagramSvg = ({ theme }) => {
  const color = theme === "dark" ? "#6d6e71" : "#fff";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      fill={color}
      viewBox="0 0 27.161 27.161"
    >
      <g data-name="Group 28" transform="translate(-887.363 -441.945)">
        <path
          d="M910 441.945h-18.11a4.527 4.527 0 00-4.527 4.527v18.108a4.526 4.526 0 004.527 4.526H910a4.526 4.526 0 004.527-4.526v-18.108a4.527 4.527 0 00-4.527-4.527zm2.264 22.635a2.264 2.264 0 01-2.264 2.263h-18.11a2.263 2.263 0 01-2.263-2.263v-18.108a2.263 2.263 0 012.263-2.263H910a2.264 2.264 0 012.264 2.263z"
          data-name="Path 15"
        ></path>
        <path
          d="M900.944 448.736a6.79 6.79 0 106.79 6.79 6.791 6.791 0 00-6.79-6.79zm0 11.317a4.527 4.527 0 114.527-4.527 4.527 4.527 0 01-4.527 4.527z"
          data-name="Path 16"
        ></path>
        <circle
          cx="1.698"
          cy="1.698"
          r="1.698"
          data-name="Ellipse 4"
          transform="translate(906.602 446.472)"
        ></circle>
      </g>
    </svg>
  );
};

export default InstagramSvg;
