import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";
import React from "react";

const frame676 = `${CDN_BASE_URL}website_images/localImages/frame676.webp`;

const TrayaJourney = ({ docType }) => {
  const screenSize = useScreenSize();
  const isMobile = ["xs", "sm"].includes(screenSize);

  return (
    <div>
      {isMobile ? (
        <div className="flex flex-col w-full ">
          <div className="py-4">
            <h2
              className={`${nunito.variable}  text-center xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10`}
            >
              The Traya Journey
            </h2>
          </div>
          <div className="flex flex-col justify-center  px-4">
            <div className="flex flex-row  justify-between flex-wrap p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full mb-5">
              <div className="w-[65%]">
                <h5 className="text-[20px] font-bold text-custom-black">
                  Take the Hair Test
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-custom-black xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  An online test that assess the root cause of your hair loss
                </h5>
              </div>
              <div className="w-[35%]">
                <div className="xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right">
                    <Image
                      height={59}
                      width={64}
                      loading="lazy"
                      src={`${CDN_BASE_URL}website_images/commonImages/mobile.png`}
                      className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                      alt="mobile"
                    />

                    <div className=" mt-2 mt-md-0">
                      <h3 className="font-bold text-lg text-center text-custom-black inline-block">
                        STEP 1
                      </h3>
                      <p className="opacity-50 text-[12px]">(takes 2-4 mins)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between flex-wrap p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full mb-5">
              <div className="w-[70%]">
                <h5 className="text-[20px] font-bold text-custom-black">
                  Buy the Plan
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-custom-black xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  On the basis of your responses, a team of doctors recommend a
                  treatment plan.
                </h5>
              </div>
              <div className="w-[30%]">
                <div className=" xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right">
                    <Image
                      height={59}
                      width={64}
                      loading="lazy"
                      src={`${CDN_BASE_URL}website_images/commonImages/cart.png`}
                      className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                      alt="traya cart"
                    />

                    <div className="mt-2 mt-md-0">
                      <h3 className="font-bold text-lg text-center text-custom-black inline-block">
                        STEP 2
                      </h3>
                      <p className="opacity-50 text-[12px]">(takes 5 mins)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between flex-wrap p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full mb-5">
              <div className="w-[70%]">
                <h5 className="text-[20px] font-bold text-custom-black">
                  Start Hair Growth
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-custom-black xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  You get a free diet plan and a personal hair coach to guide
                  you throughout your journey.
                </h5>
              </div>
              <div className="w-[30%]">
                <div className="xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right">
                    <Image
                      height={64}
                      width={64}
                      loading="lazy"
                      src={`${CDN_BASE_URL}website_images/commonImages/live-chat-01_2_large.webp`}
                      className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                      alt="Traya Journey"
                    />

                    <div className="mt-2">
                      <h3 className="font-bold text-lg text-custom-black text-center inline-block">
                        STEP 3
                      </h3>
                      <p className="opacity-50 text-[12px]">
                        (takes 3-5 months)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-lg w-full items-center">
              <h2
                className={`${nunito.variable}  tracking-wide text-custom-black xl:text-xl lg:text-xl xs:text-[15px] xs:px-1 text-custom-black text-center mb-3`}
              >
                Regrow your hair with a personal hair coach
              </h2>
              <a
                href="/home/question?cohort=1&lcn=TrayaJourney&page=homev2"
                onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
                className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
                id="hairtestcta5-native"
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

          <div className="flex flex-col justify-center items-center leading-[30px] xl:leading-none lg:leading-none md:leading-none mt-5">
            <p
              className={`${nunito.variable} xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-5`}
            >
              <span style={{ color: "#95b266" }}>Dermatology </span> Doctors
            </p>
            <p
              className={`${nunito.variable} xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-1 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-5`}
            >
              {" "}
              Build Your Plan
            </p>
          </div>
        </div>
      ) : (
        <div className="flex-wrap items-center flex-col content-center w-full xl:mt-10 lg:mt-20 hidden xl:flex lg:flex md:flex">
          <div>
            <h5
              className={`${nunito.variable} xl:text-xx4l xs:text-2xl  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10`}
            >
              The Traya Journey
            </h5>
          </div>
          <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 flex flex-row justify-center py-9">
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96 lg:w-80 md:w-80  mx-3">
              <div className="xl:h-20 lg:h-20 md:h-40 mb-4">
                <h5 className="xl:text-2xl lg:text-2xl md:text-xl text-xl font-bold text-custom-black xl:pb-2 lg:pb-2 md:pb-2">
                  Take the Hair Test
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-custom-black xl:pr-5 lg:pr-5 md:pr-2">
                  An online test that assess the root cause of your hair loss
                </h5>
              </div>
              <div className="pr-2 xl:pt-[80px] lg:pt-[80px] md:pt-4 h-10">
                <div className="flex flex-row justify-between text-right">
                  <Image
                    height={64}
                    width={64}
                    loading="lazy"
                    src={`${CDN_BASE_URL}website_images/commonImages/mobile.png`}
                    className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                    alt="mobile"
                  />

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-custom-black">
                      STEP 1
                    </h3>
                    <p className="opacity-50">(takes 2-4 mins)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96 lg:w-80 md:w-80 mx-3">
              <h5 className="xl:text-2xl lg:text-2xl md:text-xl font-bold text-custom-black xl:pb-2 lg:pb-2 md:pb-2">
                Buy the Plan
              </h5>
              <h5 className="xl:text-xl lg:text-xl md:text-base text-custom-black xl:pr-5 lg:pr-5 md:pr-2">
                On the basis of your responses, a team of doctors recommend a
                treatment plan.
              </h5>
              <div className="pr-2 xl:pt-11 lg:pt-11 md:pt-11">
                <div className="flex flex-row justify-between   text-right">
                  <Image
                    height={64}
                    width={64}
                    loading="lazy"
                    src={`${CDN_BASE_URL}website_images/commonImages/cart.png`}
                    className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                    alt="traya cart"
                  />

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-custom-black">
                      STEP 2
                    </h3>
                    <p className="opacity-50">(takes 5 mins)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96  lg:w-80 md:w-80 mx-3">
              <h5 className="xl:text-2xl lg:text-2xl md:text-xl font-bold text-custom-black xl:pb-2 lg:pb-2 md:pb-2">
                Start Hair Growth
              </h5>
              <h5 className="xl:text-xl lg:text-xl md:text-base text-custom-black xl:pr-5 lg:pr-5 md:pr-2">
                You get a free diet plan and a personal hair coach to guide you
                throughout your journey.
              </h5>
              <div className="pr-2 pt-11">
                <div className="flex flex-row justify-between text-right">
                  <Image
                    height={64}
                    width={64}
                    loading="lazy"
                    src={`${CDN_BASE_URL}website_images/commonImages/live-chat-01_2_large.webp`}
                    className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 "
                    alt="Traya Journey"
                  />

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-custom-black">
                      STEP 3
                    </h3>
                    <p className="opacity-50">(takes 3-5 months)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p
            className={`${nunito.variable} tracking-wide text-custom-black text-xl text-custom-black mb-3`}
          >
            Regrow your hair with a personal hair coach
          </p>
          <a
            href="/home/question?cohort=1&lcn=TrayaJourney&page=homev2"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
            className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
            id="hairtestcta5-native"
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
          <div className="flex flex-col justify-center items-center pt-9">
            <p
              className={`${nunito.variable} xl:text-xx4l xs:text-2xl  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10`}
            >
              <span style={{ color: "#95b266" }}>{docType} </span> Doctors
            </p>
            <p
              className={`${nunito.variable} xl:text-xx4l xs:text-2xl  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-10`}
            >
              {" "}
              Build Your Plan
            </p>
          </div>
        </div>
      )}

      <div className="xl:mb-10 lg:mb-10 md:mb-10 sm:mb-0 xl:w-12/12 lg:11/12 md:11/12 ml-auto ">
        <div className="flex flex-row flex-wrap items-center content-center justify-end mb-10 ">
          <div className="hidden xl:block md:block lg:block xl:w-4/12 lg:w-5/12 md:w-6/12 xl:px-9 lg:px-9 md:px-9">
            <h4 className="font-bold font-sans text-custom-black text-2xl">
              We are not just doctor backed,
            </h4>
            <h4 className="font-bold font-sans text-custom-black text-2xl">
              we are doctor recommended.
            </h4>
          </div>
          <div className="receiptImg xl:w-6/12 lg:w-7/12 md:w-6/12">
            <Image
              src={frame676}
              alt="traya_prescription"
              height={1174}
              width={1400}
              loading="lazy"
            />
          </div>
          <div className="block mx-auto xl:hidden lg:hidden md:hidden pt-5 px-5">
            <h4 className="font-sans font-sans text-custom-black text-[20px] text-center">
              We are not just doctor backed,
            </h4>
            <h4 className="font-sans font-sans text-custom-black text-[20px] text-center">
              we are doctor recommended.
            </h4>
          </div>
        </div>
      </div>

      <div className="xl:mb-10 lg:mb-10 md:mb-10 mb-0 w-10/12 mx-auto">
        <div className="flex justify-center">
          <a
            href="/home/question?cohort=1&lcn=Prescription&page=homev2"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
            className="flex  bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl text-[13px] font-bold rounded-lg  uppercase"
            id="hairtestcta6-native"
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

export default TrayaJourney;
