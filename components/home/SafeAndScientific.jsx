import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import React from "react";

const SafeAndScientific = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      <div className="flex flex-col justify-center items-center xl:mb-5 lg:mb-5">
        <h2
          className={`${nunito.variable} xl:text-[44px] xs:text-[28px]  lg:text-xx4l mt-2 tracking-wide font-bold text-custom-black xs:px-4`}
        >
          Safe And Scientific
        </h2>
      </div>

      <div className="2xl:w-[1110px] xl:w-[76%] lg:w-[90%] md:w-11/12 sm:w-9/12 w-[91%]  lg:px-8 md:px-8  mx-auto relative xl:py-5 lg:py-4 mt-4">
        <div className="hidden xl:block md:block lg:block">
          <Image
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_banner3.png`}
            alt="safe and scientific"
            width={864}
            height={420}
            responsive
            loading="lazy"
          />
        </div>
        {["sm", "xs"].includes(screenSize) && (
          <div className="block xl:hidden md:hidden lg:hidden">
            <Image
              src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_page_mobile/Female-Safe_Scientific-mobile_1_993b7884-bafd-4f3e-9840-bd5972fa2e93.png`}
              alt="safe and scientific"
              width={327}
              height={521}
              responsive
              loading="lazy"
            />
          </div>
        )}
        <div className="safeSci absolute xl:w-7/12 lg:w-6/12 md:w-8/12 w-11/12 xl:left-20 lg:left-20 md:left-20 left-4 xl:top-20 lg:top-10 md:top-5 top-5">
          <div className="flex flex-wrap flex-row justify-around xl:py-5 lg:py-5 md:py-5 py-3">
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]  relative flex flex-col items-center">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/nontoxic.png`}
                  className=" absolute"
                  alt="nontoxic"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                NON TOXIC
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]   relative">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/madesafe.png`}
                  alt="madesafe"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                MADE SAFE
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]  relative ">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/allergyfree.png`}
                  className="w-[80px] lg:w-72"
                  alt="allergyfree"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                ALLERGY FREE
              </h5>
            </div>
          </div>
          <div className="flex flex-wrap flex-row justify-around xl:py-0 lg:py-5 md:py-5 py-3">
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]  relative ">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/veganfriendly.png`}
                  className="w-[80px] lg:w-72"
                  alt="veganfriendly"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                VEGAN FRIENDLY
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]  relative ">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/cruetlyfree.png`}
                  className="w-[80px] lg:w-72"
                  alt="cruetlyfree"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                CRUETLY FREE
              </h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="xs:w-[50px] xs:h-[50px] lg:w-[80px] lg:h-[80px] xl:w-[110px] xl:h-[110px]  relative">
                <Image
                  src={`${CDN_BASE_URL}website_images/safetyIcons/doctorprescribed.png`}
                  className="w-[80px] lg:w-72"
                  alt="doctorprescribed"
                  fill
                  loading="lazy"
                />
              </div>
              <h5 className="text-center xl:text-[16px] lg:text-[16px] md:text-[14px] text-[#414042] font-bold   text-[11px] mt-1">
                DOCTOR
                <br />
                RECOMMENDED
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeAndScientific;
