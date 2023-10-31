import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";

const FemaleThreeFoldWay = () => {
  const screenSize = useScreenSize();
  return (
    <div>
      {!["xs"].includes(screenSize) && (
        <div
          className="xs:hidden xl:flex lg:flex md:flex flex-col items-center text-center xl:bg-cover md:bg-contain lg:bg-contain bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${CDN_BASE_URL}website_images/male_landing_page/male_banner2.png)`,
          }}
        >
          <div>
            <h2
              className={`${nunito.variable} xl:text-xx4l xs:text-[30px] lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-[#414042] xs:px-2`}
            >
              The Threefold Way
            </h2>
            <h5
              className={`${nunito.variable} py-9 tracking-wide text-[#414042] xl:text-base lg:text-base md:text-base text-sm`}
            >
              TRAYA’S HOLISTIC PLAN FOR HAIR FALL
            </h5>
            <h5>
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-sm">
                AYURVEDA
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] text-xl px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-sm">
                DERMATOLOGY
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] text-xl px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-sm">
                NUTRITION
              </span>{" "}
            </h5>
            <h5
              className={`${nunito.variable} xl:py-5 lg:py-5 md:py-5 py-4 text-[#939598] xl:text-[24px] lg:text-[24px] md:text-[24px] text-[14px]  mx-auto   xl:w-6/12 lg:w-5/12 md:w-5/12 w-[85%] leading-9`}
            >
              Our approach combines the goodness of three sciences. With
              ingredients from the most authentic sources, we personalize your
              treatment delivering assured results.
            </h5>
          </div>
          <div className="">
            <a
              href="/female?cohort=1&lcn=Ingredients&page=female_native"
              onClick={() =>
                Cookies.set("__TRAYA_UTM__", "&page=female_native")
              }
              className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 mb-4 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
              id="female-hair-test-button3-native"
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
      {!["xl", "lg", "md"].includes() && (
        <div className="flex xl:hidden lg:hidden md:hidden flex-col items-center text-center xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center">
          <div>
            <h2
              className={`${nunito.variable} xl:text-xx4l xs:text-[30px]  lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-[#414042] xs:px-2`}
            >
              The Threefold Way
            </h2>
            <div
              style={{
                backgroundImage: `url(${CDN_BASE_URL}website_images/male_landing_page/male_banner2.png)`,
              }}
              className="xl:bg-cover md:bg-cover lg:bg-cover bg-contain bg-no-repeat bg-center"
            >
              <h5
                className={`${nunito.variable} py-9 tracking-wide text-[#414042] xl:text-base lg:text-base md:text-base text-[12px]`}
              >
                TRAYA’S HOLISTIC
                <br /> PLAN FOR HAIR FALL
              </h5>
            </div>

            <h5>
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-[12px]">
                AYURVEDA
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] text-[12px] px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-[12px]">
                DERMATOLOGY
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] text-[12px] px-1">
                +
              </span>{" "}
              <span className="font-bold font-sans text-[#414042] xl:text-xl lg:text-xl md:text-xl text-[12px]">
                NUTRITION
              </span>{" "}
            </h5>
            <h5
              className={`${nunito.variable} xl:py-5 lg:py-5 md:py-5 py-4 text-[#939598] xl:text-xl lg:text-xl md:text-xl text-[14px]  mx-auto opacity-90 xl:font-bold lg:font-bold md:font-bold xl:w-5/12 lg:w-5/12 md:w-5/12 w-[85%] leading-4`}
            >
              Our approach combines the goodness of three sciences. With
              ingredients from the most authentic sources, we personalize your
              treatment delivering assured results.
            </h5>
          </div>
          <div className="py-0">
            <a
              href="/female?cohort=1&lcn=Ingredients&page=female_native"
              onClick={() =>
                Cookies.set("__TRAYA_UTM__", "&page=female_native")
              }
              className="flex bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl xs:text-[13px] font-bold rounded-md uppercase"
              id="female-hair-test-button4-native"
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

export default FemaleThreeFoldWay;
