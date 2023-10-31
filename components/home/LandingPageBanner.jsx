/* eslint-disable react/no-unescaped-entities */
import { CDN_BASE_URL } from "@/constants/config";
import { fredoka, nunito } from "@/constants/fontConfig";
import Image from "next/image";

const LandingPageBanner = ({ showMyRecc }) => {
  const imageCommonProps = {
    objectFit: "cover",
    layout: "responsive",
  };

  return (
    <div className="form-hero xl:mb-1 lg:mb-2 xs:mb-4 relative">
      <div className="block xl:hidden lg:hidden md:hidden">
        <Image
          src={`${CDN_BASE_URL}website_images/male_landing_page/Frame+102352715.webp`}
          alt="Traya banner mobile"
          {...imageCommonProps}
          height={651}
          width={390}
          loading="eager"
        />
      </div>

      <div className="hidden md:block lg:block xl:block">
        <Image
          src={`${CDN_BASE_URL}website_images/male_landing_page/rajkumarrao1.jpg`}
          alt="Traya banner desktop"
          {...imageCommonProps}
          height={685}
          width={1500}
        />
      </div>

      <div className="xl:px-16 lg:px-16 lg:px-8 md:px-8 px-5 absolute 2xl:top-[25%] xl:top-[20%] lg:top-[10%] md:top-1/5 top-16">
        <h2
          className={`xs:leading-[20px] xl:leading-none lg:leading-none md:leading-none xl:text-3xl lg:text-3xl md:text-3xl text-lg ${fredoka.variable}`}
          style={{ color: "#303032" }}
        >
          India's #1 Doctor Recommended
          <br /> Hair loss treatment
        </h2>
        <p
          className={`xs:leading-[22px] xl:leading-none lg:leading-none md:leading-none xl:text-[40px] md:text-3xl text-[21px] ${nunito.variable} font-bold my-6 xs:my-2 xs:py-1 xl:py-5 lg:py-5`}
          style={{ color: "#303032" }}
        >
          Know The Root Cause
          <br />
          Of Your Hair Loss
        </p>
        <hr
          className="border-4 w-3/12 rounded-full my-5 xs:my-2 "
          style={{ borderColor: "#3e3e3e" }}
        />
        <h2
          className={`xl:text-3xl lg:text-2xl ${nunito.variable} my-6 xs:my-1 xs:py-1 xl:py-5 lg:py-5`}
          style={{ color: "#303032" }}
        >
          93% saw results*
        </h2>
        <div className="flex flex-wrap flex-row">
          <div className="xs:pb-2 pr-2">
            <a
              href="/home/question?cohort=1&lcn=HomeSlideshow&page=homev2"
              onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
              className="w-fit flex bg-[#414042] text-white hover:bg-white hover:text-black py-2.5 px-5 text-[16px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
              id="hairtestcta2-native"
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
          {showMyRecc && (
            <div className="xs:pb-5">
              <a
                href={
                  router.pathname === "/pages/female" ||
                  router.pathname === "/femaleV2"
                    ? `/result?id=${props.syntheticId}&page=femalev2`
                    : `/result?id=${props.syntheticId}&page=homev2`
                }
                onClick={() => Cookies.set("__TRAYA_UTM__", "&page=home")}
                className="w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 text-[16px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-lg  uppercase"
              >
                MY RECOMMENDED PLAN
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPageBanner;
