import { CDN_BASE_URL } from "@/constants/config";
import { fredoka, nunito } from "@/constants/fontConfig";
import Image from "next/image";

const FemaleBanner = ({ props }) => {
  return (
    <div className="female-hero relative">
      <div className="block xl:hidden lg:hidden md:hidden">
        <Image
          src={`${CDN_BASE_URL}website_images/female_landing_page/female_landing_page_mobile/femaleLandingMobileNewBanner.png`}
          alt="thyroid_mobile"
          className="z-0"
          height={1400}
          objectFit="cover"
          layout="responsive"
          width={828}
          priority={true}
        />
        <p className="banner_disclaimer-content text-[7.5px]">
          *As per an internal study conducted by Traya in December 2022
        </p>
      </div>
      <div className="hidden md:block lg:block xl:block">
        <Image
          src={`${CDN_BASE_URL}website_images/female_landing_page/femaleLandingNewBanner.png`}
          alt="thyroid_desktop"
          className="z-0"
          height={690}
          objectFit="cover"
          layout="responsive"
          width={1519}
          loading="lazy"
        />
        <p className="banner_disclaimer-content text-[7.5px]">
          *As per an internal study conducted by Traya in December 2022
        </p>
      </div>
      <div className="xl:px-16 lg:px-16 md:px-8 px-5 absolute 2xl:top-[25%] xl:top-[20%] lg:top-[20%] md:top-[20%] top-[10%]">
        <h2
          className={`xs:leading-[20px] xl:leading-none lg:leading-none md:leading-none xl:text-3xl lg:text-3xl md:text-3xl text-lg ${fredoka.variable}`}
          style={{ color: "#414042" }}
        >
          93% saw results*
        </h2>
        <p
          className={`xs:leading-[20px] xl:leading-none lg:leading-none md:leading-none xl:text-[40px] md:text-[40px] lg:text-[40px] md:text-2xl md:py-4 text-[21px] ${nunito.variable} font-bold my-6 xs:my-2 xs:py-1 xl:py-5 lg:py-5`}
          style={{ color: "#414042" }}
        >
          Thick Voluminous Hair
          <br />
          Now Possible
        </p>
        <hr
          className="border-4 w-3/12 rounded-full my-5 xs:my-2 "
          style={{ borderColor: "#3e3e3e" }}
        />
        <h2
          className={`xl:text-[27px] lg:text-[27px] ${nunito.variable} my-6 xs:my-1 xs:py-1 xl:py-5 lg:py-5 md:pt-5 md:text-[27px]`}
          style={{ color: "#414042" }}
        >
          With Traya&apos;s Holistic 3 Science Formula
        </h2>
        <div className="flex flex-wrap flex-row">
          <div className="xs:pb-3 pr-2">
            <a
              href="/female?cohort=1&lcn=HomeSlideshow&page=female_native"
              onClick={() =>
                Cookies.set("__TRAYA_UTM__", "&page=female_native")
              }
              className="w-fit flex bg-[#414042] text-white hover:bg-white hover:text-black py-2.5 px-8 text-md md:text-xl lg:text-xl xl:text-xl font-bold rounded-md uppercase"
              id="female-hair-test-button1-native"
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
          <div>
            {props.showMyRecc && (
              <div className="xs:pb-5">
                <a
                  href={
                    props.router.pathname == "/pages/female" ||
                    props.router.pathname == "/femaleV2"
                      ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                      : `/result?id=${props.syntheticId}&page=homev2`
                  }
                  onClick={() =>
                    Cookies.set("__TRAYA_UTM__", "&page=female_native")
                  }
                  className="w-fit flex bg-custom-black text-white hover:bg-white hover:text-black py-2.5 px-8 text-[16px] md:text-xl lg:text-xl xl:text-xl font-bold rounded-md  uppercase"
                >
                  MY RECOMMENDED PLAN
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FemaleBanner;
