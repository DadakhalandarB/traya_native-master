import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import Image from "next/image";
import React from "react";

const FemaleWhyTraya = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center text-center xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center mt-4">
        <h3
          className={`${nunito.variable} xl:text-[28px] lg:text-[28px] md:text-[28px] text-[14px] text-center mt-4 tracking-wide xl:mt-5 xs:px-10 text-[#414042]`}
        >
          Here&apos;s why you should choose
        </h3>
        <h2
          className={`${nunito.variable} xl:text-[35px] xs:text-[19px] lg:text-[35px] mt-1 tracking-wide font-bold text-[#3f3f3f] xs:px-2`}
        >
          Traya&apos;s Treatment over Single Products
        </h2>
        <div className="2xl:w-[1110px] xl:w-8/12 lg:w-10/12 md:w-9/12 lg:px-8 md:px-8 xs:px-4 mx-auto relative py-4 w-full ">
          <Image
            src={`${CDN_BASE_URL}website_images/female_landing_page/treatment.png`}
            alt="treatment"
            height={499}
            width={960}
            responsive
            loading="lazy"
          />
          <p
            className={`xl:text-[17px] lg:text-[17px] md:text-[17px] text-[7px] ${nunito.variable} text-[#414042] mt-3 italic`}
          >
            *the data is based on 1000 Indians facing hair fall, hair thinning
            and balding
          </p>
        </div>
      </div>
    </div>
  );
};

export default FemaleWhyTraya;
