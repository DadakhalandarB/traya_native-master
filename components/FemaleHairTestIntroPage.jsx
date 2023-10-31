"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CDN_BASE_URL, TOTAL_USERS_FILLED_HAIR_TEST } from "@constants/config";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { gtmEcommerce } from "../helpers/gtmHelpers";
import { trayalogo } from "@/constants/constants";

const introBannerDesktop = `${CDN_BASE_URL}website_images/femaleHairTestIntro/hairtestIntrofemaledesktop.webp`;
const introBannerMobile = `${CDN_BASE_URL}website_images/femaleHairTestIntro/hairtestIntrofemalemobile.webp`;
const dataPrivacyIconWhite = `${CDN_BASE_URL}website_images/femaleHairTestIntro/dataPrivacyIconWhite.webp`;
const dataPrivacyIconBlack = `${CDN_BASE_URL}website_images/femaleHairTestIntro/dataPrivacyIconBlack.webp`;
export const FemaleHairTestIntroPage = () => {
  const [syntheticId, setSyntheticId] = useState("");
  const [tabClosed, setTabClosed] = useState("");
  const [formStatus, setFormStatus] = useState("");
  const [formStarted, setFormStarted] = useState("");
  const [numberOfUsersFilled, setNumberOfUsersFilled] = useState([]);
  useEffect(() => {
    let synthetic = window.localStorage.getItem("syntheticId");
    let tabStatus = window.localStorage.getItem("tabclosed");
    let status = window.localStorage.getItem("form_status");
    let _formStarted = window.localStorage.getItem("state/female");
    // let _numberOfUsersFilled = BASE_NUMBER_OF_USERS_FILLED_FORM + (moment().diff(BASE_DATE_FOR_USERS_FILLED_FORM, 'days')) * parseInt(Math.random(STATIC_USER_FILLED_COUNT_TO_ADD, 2000));
    let _numberOfUsersFilled =
      TOTAL_USERS_FILLED_HAIR_TEST.toString().split("");
    // console.log('_numberOfUsersFilled', _numberOfUsersFilled);
    setSyntheticId(synthetic);
    setTabClosed(tabStatus);
    setFormStatus(status);
    console.log("_formStarted", _formStarted);
    setFormStarted(_formStarted);
    setNumberOfUsersFilled(_numberOfUsersFilled);
  }, []);
  const router = useRouter();
  const reDirectFunction = async (val) => {
    const UTM = Cookies.get("__TRAYA_UTM__");
    const tempUTM = UTM?.split("&")
      ?.find((val) => val.includes("page"))
      ?.replace("page=", "");

    let gender = window.localStorage.getItem("gender");
    let synthetic = window.localStorage.getItem("syntheticId");

    if (val === "resultPage") {
      if (
        window.location.pathname == "/femaleV2/question" ||
        window.location.pathname == "/home/question" ||
        window.location.pathname == "/user-account/question"
      ) {
        router.push(
          gender == "M"
            ? router.push("/result?id=" + synthetic)
            : router.push("/result?id=" + synthetic)
        );
      } else {
        router.push(
          gender == "M"
            ? `https://traya.health/pages/result4?id=${syntheticId}`
            : `https://traya.health/pages/female-result?id=${syntheticId}`
        );
      }
    }
    if (val === "refill") {
      Cookies.remove("_fw_crm_v");
      Cookies.remove("__TRAYA_UTM__");
      window.sessionStorage.clear();
      window.localStorage.clear();
      await fetch("/api/clearCookies", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "_fw_crm_v" }),
      });
      let gtmObj = {};
      gtmEcommerce(gtmObj, "start_test_again_click");
      // router.push(window.location.reload());
    }
    if (val === "begin") {
      Cookies.remove("_fw_crm_v");
      Cookies.remove("__TRAYA_UTM__");
      window.sessionStorage.clear();
      window.localStorage.clear();
      await fetch("/api/clearCookies", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key: "_fw_crm_v" }),
      });
      let gtmObj = {};
      gtmEcommerce(gtmObj, "begin_test_click");
      // Router.push(window.location.reload());
    }
    if (val === "editAgain") {
      window.localStorage.removeItem("tabclosed");
      let gtmObj = {};
      gtmEcommerce(gtmObj, "continue_test_click");
      // router.push(window.location.reload());
    }
  };
  return (
    <>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full h-[53vh] md:w-[62%] md:h-screen relative">
          <div className="z-0 md:hidden">
            <Image
              src={introBannerMobile}
              alt="hairTestIntroBanner"
              layout="fill"
              objectFit="cover"
              // width={500}
              // height={550}
              unoptimized={true}
              priority={true}
            />
          </div>
          <div className="z-0 hidden md:block">
            <Image
              src={introBannerDesktop}
              alt="introBannerMobile"
              layout="fill"
              objectFit="cover"
              // width={500}
              // height={550}
              unoptimized={true}
              priority={true}
            />
          </div>
          <div className="absolute left-[6%] top-[45px] md:top-[50px]">
            <div className="flex gap-3">
              <Image src={trayalogo} alt="trayaLogo" width={99} height={31} />
              <span className="text-white align-bottom flex self-end text-base">
                Hair Test
              </span>
            </div>
            <div className="w-[58px] h-[2px] ml-2 mt-2 bg-white"></div>
            <div className="ml-2 mt-3 text-white font-bold">
              Co - created with Doctors
            </div>
          </div>

          {numberOfUsersFilled && numberOfUsersFilled.length > 0 && (
            <div className="md:left-[6%] top-[60%] md:top-[35%] absolute flex md:block justify-center items-center flex-col w-full ">
              <div className="flex gap-1 md:gap-2">
                {numberOfUsersFilled.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="h-[52px] w-10 sm:h-16 sm:w-12 lg:h-[80px] lg:w-[60px]  relative bg-[#a78267]  rounded-md flex justify-end"
                    >
                      <div
                        key={index}
                        className="h-11 w-10 sm:h-14 sm:w-12 lg:h-[74px] lg:w-[60px]  relative bg-[#4e4e55]  rounded-md flex justify-end mt-[4px]"
                      >
                        <div
                          key={index}
                          className="h-11 w-9 sm:h-14 sm:w-11 lg:h-[74px] lg:w-14  relative bg-white  rounded-md flex justify-center items-center"
                        >
                          <div className="h-[40px] w-[30px] sm:h-[48px] sm:w-[38px] lg:h-[68px] lg:w-12  bg-[#e6e6e6] rounded-md flex items-center justify-center font-bold text-lg md:text-2xl text-[#414042]">
                            {item}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-center md:block mt-4">
                <p className="text-white text-base">
                  Users completed the Traya hair test
                </p>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center absolute left-[6%] bottom-8 w-full">
            <div className="w-[27px]">
              <Image
                src={dataPrivacyIconWhite}
                alt="dataPrivacyIconWhite"
                layout="responsive"
                objectFit="contain"
                width={27}
                height={27}
                priority={true}
              />
            </div>
            <div className="flex flex-col text-white text-base leading-[16px] h-[27px] justify-between">
              <div className="">Data privacy</div>
              <div className="text-[8.6px]">
                Your data is only collected for medical purpose
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[38%] h-[47vh]  md:h-screen flex md:justify-center items-center pt-[8%] md:pt-0 flex-col justify-between">
          <div className="flex flex-col">
            <div>
              <p className="text-[30px] md:text-3xl font-bold text-center text-[#414042] ">
                Why take this test?
              </p>
              <ul className="md:pl-16 pl-2  w-full lg:ml-2 mt-4 md:leading-6 text-sm xsm:text-sm md:text-[16px] text-[#414042] list-disc">
                <li className="leading-5">Know your root cause</li>
                <li className="leading-5">
                  Find the best solution for your hair concern
                </li>
                <li className="leading-5">
                  Get a hair test report that builds your prescription
                </li>
              </ul>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col items-center gap-3 text-[#414042]">
              {tabClosed === "true" &&
              formStatus !== "filled" &&
              formStarted ? (
                <button
                  className="w-[320px] md:w-64 lg:w-80 h-12 border-2 border-[#414042] rounded-[4px] font-bold text-lg uppercase"
                  onClick={() => reDirectFunction("refill")}
                >
                  Start from beginning
                </button>
              ) : (
                <button
                  className="w-[320px] md:w-64 lg:w-80 h-12 border-2 border-[#414042] rounded-[4px] font-bold text-lg uppercase"
                  onClick={() => reDirectFunction("begin")}
                >
                  Begin the test
                </button>
              )}
              {tabClosed === "true" &&
                formStatus !== "filled" &&
                formStarted && (
                  <button
                    className="w-[320px] md:w-64 lg:w-80 h-12 border-2 border-[#414042] rounded-[4px] font-bold text-lg uppercase"
                    onClick={() => reDirectFunction("editAgain")}
                  >
                    Continue where I left
                  </button>
                )}
              <p className="text-center text-[12px] text-[#414042] md:mt-3">
                Takes only <span className="font-bold">4 mins</span>
              </p>
            </div>
          </div>
          <div className="flex md:hidden self-start mt-10 pl-4 pb-4">
            <div className="w-[27px] self-center">
              <Image
                src={dataPrivacyIconBlack}
                alt="dataPrivacyIconBlack"
                layout="responsive"
                objectFit="contain"
                width={27}
                height={27}
              />
            </div>
            <div className="flex flex-col text-base leading-[16px] font-normal text-[#414042] md:text-[20.5px] h-[27px]">
              <div>Data privacy</div>
              <div className="text-[8.6px] md:text-[13.91px] text-[#414042]">
                Your data is only collected for medical purpose
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
