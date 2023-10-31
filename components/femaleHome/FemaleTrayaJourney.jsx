import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const FemaleTrayaJourney = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      {["xl", "lg", "md"].includes(screenSize) ? (
        <div className="flex-wrap items-center flex-col content-center w-full mt-12 hidden xl:flex lg:flex md:flex">
          <div>
            <h5
              className={`${nunito.variable} xl:text-[35px] xs:text-2xl  lg:text-[35px] mt-4 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-10`}
            >
              The Traya Journey
            </h5>
          </div>
          <div className="xl:w-10/12 lg:w-11/12 md:w-11/12 flex flex-row justify-center py-9">
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96 lg:w-80 md:w-80  mx-3">
              <h5 className="xl:text-2xl lg:text-2xl md:text-xl text-xl font-bold text-[#414042] xl:pb-2 lg:pb-2 md:pb-2">
                Take the Hair Test
              </h5>
              <h5 className="xl:text-xl lg:text-xl md:text-base text-[#414042] xl:pr-5 lg:pr-5 md:pr-2">
                An online test that assess the root cause of your hair loss
              </h5>
              <div className="pr-2 xl:pt-[80px] lg:pt-[80px] md:pt-4">
                <div className="flex flex-row justify-between text-right">
                  <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 relative">
                    <Image
                      src={`${CDN_BASE_URL}website_images/commonImages/mobile.png`}
                      alt="mobile"
                      fill
                      loading="lazy"
                    />
                  </div>

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-[#414042]">
                      STEP 1
                    </h3>
                    <p className="opacity-50">(takes 2-4 mins)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96 lg:w-80 md:w-80 mx-3">
              <h5 className="xl:text-2xl lg:text-2xl md:text-xl font-bold text-[#414042] xl:pb-2 lg:pb-2 md:pb-2">
                Buy the Plan
              </h5>
              <h5 className="xl:text-xl lg:text-xl md:text-base text-[#414042] xl:pr-5 lg:pr-5 md:pr-2">
                On the basis of your responses, a team of doctors recommend a
                treatment plan.
              </h5>
              <div className="pr-2 xl:pt-11 lg:pt-11 md:pt-11">
                <div className="flex flex-row justify-between   text-right">
                  <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 relative">
                    <Image
                      src={`${CDN_BASE_URL}website_images/commonImages/cart.png`}
                      alt="traya cart"
                      fill
                      loading="lazy"
                    />
                  </div>

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-[#414042]">
                      STEP 2
                    </h3>
                    <p className="opacity-50">(takes 5 mins)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] xl:w-96  lg:w-80 md:w-80 mx-3">
              <h5 className="xl:text-2xl lg:text-2xl md:text-xl font-bold text-[#414042] xl:pb-2 lg:pb-2 md:pb-2">
                Start Hair Growth
              </h5>
              <h5 className="xl:text-xl lg:text-xl md:text-base text-[#414042] xl:pr-5 lg:pr-5 md:pr-2">
                You get a free diet plan and a personal hair coach to guide you
                throughout your journey.
              </h5>
              <div className="pr-2 pt-11">
                <div className="flex flex-row justify-between text-right">
                  <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 relative">
                    <Image
                      src={`${CDN_BASE_URL}website_images/commonImages/live-chat-01_2_large.webp`}
                      className="w-16 inline-block"
                      alt="Traya Journey"
                      fill
                      loading="lazy"
                    />
                  </div>

                  <div className="text-right mt-2 mt-md-0">
                    <h3 className="font-bold xl:text-[28px] lg:text-[28px] md:text-[28px] text-[#414042]">
                      STEP 3
                    </h3>
                    <p className="opacity-50">(takes 3-5 min)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5
            className={`${nunito.variable} tracking-wide text-[#414042] text-xl`}
          >
            Regrow your hair with a personal hair coach
          </h5>
          <a
            href="/female?cohort=1&lcn=TrayaJourney&page=female_native"
            onClick={() => Cookies.set("__TRAYA_UTM__", "&page=female_native")}
            className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
            id="female-hair-test-button6-native"
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
      ) : (
        <div className="flex flex-col w-full xl:hidden lg:hidden md:hidden">
          <div className="py-4 pt-0">
            <h2
              className={`${nunito.variable}  text-center xl:text-[35[x]] xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-[#3f3f3f] xs:px-10`}
            >
              The Traya Journey
            </h2>
          </div>
          <div className="flex flex-col justify-center  px-4">
            <div className="flex flex-row  justify-between flex-wrap p-5 rounded-lg shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] w-full mb-5">
              <div className="w-[65%]">
                <h5 className="text-[20px] font-bold text-[#414042]">
                  Take the Hair Test
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-[#414042] xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  An online test that assess the root cause of your hair loss
                </h5>
              </div>
              <div className="w-[35%]">
                <div className="xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right flex flex-col items-end">
                    <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 h-16 w-16 relative text-right">
                      <Image
                        src={`${CDN_BASE_URL}website_images/commonImages/mobile.png`}
                        alt="mobile"
                        fill
                        loading="lazy"
                      />
                    </div>

                    <div className=" mt-2 mt-md-0">
                      <h3 className="font-bold text-lg text-center text-[#414042] inline-block">
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
                <h5 className="text-[20px] font-bold text-[#414042]">
                  Buy the Plan
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-[#414042] xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  On the basis of your responses, a team of doctors recommend a
                  treatment plan.
                </h5>
              </div>
              <div className="w-[30%]">
                <div className=" xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right flex flex-col items-end">
                    <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 h-16 w-16 relative text-right">
                      <Image
                        src={`${CDN_BASE_URL}website_images/commonImages/cart.png`}
                        alt="mobile"
                        fill
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-2 mt-md-0">
                      <h3 className="font-bold text-lg text-center text-[#414042] inline-block">
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
                <h5 className="text-[20px] font-bold text-[#414042]">
                  Start Hair Growth
                </h5>
                <h5 className="xl:text-xl lg:text-xl md:text-base text-[15px] text-[#414042] xl:pr-5 lg:pr-5 md:pr-2  py-2">
                  You get a free diet plan and a personal hair coach to guide
                  you throughout your journey.
                </h5>
              </div>
              <div className="w-[30%]">
                <div className="xl:pt-11 lg:pt-11 md:pt-4">
                  <div className="text-right flex flex-col items-end">
                    <div className="xl:w-16 lg:w-16 md:w-16 xl:h-16 lg:h-16 md:h-16 h-16 w-16 relative text-right">
                      <Image
                        src={`${CDN_BASE_URL}website_images/commonImages/live-chat-01_2_large.webp`}
                        alt="mobile"
                        fill
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-2">
                      <h3 className="font-bold text-lg text-[#414042] text-center inline-block">
                        STEP 3
                      </h3>
                      <p className="opacity-50 text-[12px]">(takes 3-5 min)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-lg w-full items-center">
              <h2
                className={`${nunito.variable}  tracking-wide text-[#414042] xl:text-xl lg:text-xl xs:text-[15px] xs:px-1 text-center mb-3`}
              >
                Regrow your hair with a personal hair coach
              </h2>
              <a
                href="/female?cohort=1&lcn=TrayaJourney&page=female_native"
                onClick={() =>
                  Cookies.set("__TRAYA_UTM__", "&page=female_native")
                }
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
        </div>
      )}
    </div>
  );
};

export default FemaleTrayaJourney;
