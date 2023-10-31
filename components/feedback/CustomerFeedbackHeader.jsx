import { fredoka } from "@/constants/fontConfig";
import React from "react";

const CustomerFeedbackHeader = () => {

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingLeft: "3%",
          width: "100%",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
        }}
        className="py-2"
      >
        <div className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[28px] not-italic font-[400] text-brand-dark`}
        >
          Build your plan
        </div>
      </div>
    </>
  );
};

export default CustomerFeedbackHeader;
