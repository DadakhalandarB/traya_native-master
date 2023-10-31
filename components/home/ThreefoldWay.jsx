import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import React from "react";

const ThreefoldWay = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      {!["xs", "sm", "md"].includes(screenSize) && (
        <div className="xs:hidden xl:flex lg:flex flex-col w-full relative ">
          <Image
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_banner2.png`}
            alt="Traya banner desktop"
            height={500}
            objectFit="contain"
            width={1500}
            priority={true}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-contain bg-no-repeat bg-center">
            <p
              className={`${nunito.variable} xl:text-[44px] xs:text-[30px] lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-0 text-custom-black xs:px-2`}
            >
              The Threefold Way
            </p>
            <p
              className={`${nunito.variable} py-9 tracking-wide text-custom-black xl:text-base lg:text-base md:text-base text-sm `}
            >
              TRAYA’S HOLISTIC PLAN FOR HAIR FALL
            </p>
            <h5>
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
                AYURVEDA
              </span>{" "}
              <span className="font-bold font-sans text-custom-green text-xl px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
                DERMATOLOGY
              </span>{" "}
              <span className="font-bold font-sans text-custom-green text-xl px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-sm">
                NUTRITION
              </span>{" "}
            </h5>
            <p
              className={`${nunito.variable} py-5 text-custom-black xl:text-xl lg:text-xl md:text-xl text-[14px]  mx-auto opacity-90 xl:font-bold lg:font-bold md:font-bold xl:w-5/12 lg:w-5/12 md:w-5/12 w-[60%] leading-4`}
            >
              Our approach combines the goodness of three sciences. With
              ingredients from the most authentic sources, we personalize your
              treatment delivering assured results.
            </p>
            <div className="py-2">
              <a
                href="/home/question?cohort=1&lcn=Ingredients&page=homev2"
                onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
                className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 text-xl font-bold rounded-md uppercase"
                id="hairtestcta4-native"
              >
                Take The Hair Test
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
      )}

      {!["xl", "lg"].includes(screenSize) && (
        <div className="flex xl:hidden lg:hidden flex-col items-center text-center xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center">
          <div>
            <p
              className={`${nunito.variable} xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-2`}
            >
              The Threefold Way
            </p>
            <div className="xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center relative">
              <p
                className={`${nunito.variable} py-9 tracking-wide z-10 text-custom-black xl:text-base lg:text-base md:text-[20px] text-[12px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}
              >
                TRAYA’S HOLISTIC
                <br /> PLAN FOR HAIR FALL
              </p>
              <Image
                src={`${CDN_BASE_URL}website_images/male_landing_page/male_banner2.png`}
                alt="Traya banner desktop"
                height={670}
                objectFit="contain"
                width={1900}
                loading="lazy"
              />
            </div>

            <p>
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-[12px]">
                AYURVEDA
              </span>{" "}
              <span className="font-bold font-sans text-custom-green text-[12px] px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-[12px]">
                DERMATOLOGY
              </span>{" "}
              <span className="font-bold font-sans text-custom-green text-[12px] px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-custom-black xl:text-xl lg:text-xl md:text-xl text-[12px]">
                NUTRITION
              </span>{" "}
            </p>
            <p
              className={`${nunito.variable} xl:py-5 lg:py-5 md:py-5 py-4 text-custom-black xl:text-xl lg:text-xl md:text-xl text-[14px]  mx-auto opacity-90 xl:font-bold lg:font-bold md:font-bold xl:w-5/12 lg:w-5/12 md:w-5/12 w-[85%] leading-4`}
            >
              Our approach combines the goodness of three sciences. With
              ingredients from the most authentic sources, we personalize your
              treatment delivering assured results.
            </p>
          </div>
          <div className="py-0">
            <a
              href="/home/question?cohort=1&lcn=Ingredients&page=homev2"
              onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
              className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
              id="hairtestcta4-native"
            >
              Take The Hair Test
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
      )}
    </div>
  );
};

export default ThreefoldWay;
