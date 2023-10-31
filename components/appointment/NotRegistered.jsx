import { fredoka } from "@/constants/fontConfig";
import React from "react";

const NotRegistered = ({handleHairTest}) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
        }}
        className="py-[1.5%] xl:py-[0.3%]"
      >
        <div
          className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[30px] not-italic font-[500] text-brand-dark`}
        >
          Schedule your call
        </div>
      </div>
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[7%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            <p className="text-[24px] px-3 font-sans md:text-4xl lg:text-5xl font-[900] text-[#414042]">
              Oops!
            </p>
            <p className="font-sans px-3 pt-1 text-[16px] md:text-2xl lg:text-[22px] font-[400] text-[#434343]">
              It seems you&apos;re not an active Traya customer. <br />
              To get expert advice from our hair coaches, buy your treatment
              plan today.
            </p>
            <div className="mx-auto flex flex-col xl:flex-row xl:justify-between xl:space-x-6 w-[100%] xl:w-[75%]">
              <button
                className="px-0 w-[100%] py-2 mt-12 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none"
                onClick={handleHairTest}
              >
                TAKE THE HAIR TEST
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotRegistered;
