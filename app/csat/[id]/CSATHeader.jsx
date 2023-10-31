import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { fredoka } from "@/constants/fontConfig";

const CSATHeader = ({ heading }) => {
  const router = useRouter();

  return (
    <>
      <div
        style={{
          display: "flex",
          //   paddingLeft: "3%",
          width: "100%",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
          // position:"fixed",
          // top:"0"
        }}
        // className="py-2 bg-white"
        className="py-2"
      >
        <div
          className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[26px] not-italic font-[400] text-brand-dark px-auto"`}
        >
          {heading ? heading : "Share your feedback"}
        </div>
      </div>
    </>
  );
};

export default CSATHeader;
