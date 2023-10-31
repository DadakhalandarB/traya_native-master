import { nunito } from "@/constants/fontConfig";
import dynamic from "next/dynamic";
import React from "react";
const DynamicFemaleReview = dynamic(() => import("./femaleReview"));
const DynamicFemaleReviews = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col justify-center items-center">
        <h2
          className={`${nunito.variable} xl:text-[35px] xs:text-[28px] lg:text-[35px] mt-4 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-1`}
        >
          Our Pride - Our Results
        </h2>
        <h2
          className={`${nunito.variable} xl:text-[30px] lg:text-[30px] md:text-[30px] text-[14px] text-center  tracking-wide text-black xs:px-8`}
        >
          Discover why so many women trust Traya for hair fall
        </h2>
      </div>
      <DynamicFemaleReview />
      <div className="my-10 xs:mt-5 w-10/12 mx-auto">
        <h5 className="text-center text-[#414042] text-xl">
          Good habits are rewarding!
        </h5>
        <div className="flex justify-center mt-5">
          <a
            href="/female?cohort=1&lcn=CustomerReviews&page=female_native"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=female_native")}
            className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
            id="female-hair-test-button5-native"
          >
            Take The Hair Test{" "}
            <sup
              style={{
                fontSize: 9,
                fontWeight: "bolder",
                position: "relative",
                top: 5,
                left: 5,
              }}
            >
              TM
            </sup>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DynamicFemaleReviews;
