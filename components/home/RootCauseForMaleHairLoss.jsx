import { CDN_BASE_URL } from "@/constants/config";
import { nunito } from "@/constants/fontConfig";
import useScreenSize from "@/hooks/useScreenSize";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
const DynamicSlider = dynamic(() => import("@components/SliderComponent"));

const RootCauseForMaleHairLoss = () => {
  const screenSize = useScreenSize();
  let settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const rootCauses = [
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/Nutrition_8361c24a-5a0c-4cef-a89c-5dd35b9380c9_1_-min.png`}
            className="mx-auto"
            alt="Nutrition"
            loading="lazy"
          />
          <h4 className="text-center my-2 text-2xl font-sans text-custom-black">
            {" "}
            Nutrition
          </h4>
          <p className="text-center xl:mt-2  font-sans">
            Eating foods which are not rich in protein, vitamins and minerals
            blocks hair growth.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/metabolism_7f62e013-8e28-4852-89df-d5f47213095e-min.png`}
            className="mx-auto"
            alt="Metabolism"
            loading="lazy"
          />
          <h4 className="text-center my-2  text-2xl font-sans text-custom-black">
            {" "}
            Metabolism
          </h4>
          <p className="text-center xl:mt-2  font-sans">
            Slow metabolism can result in your hair becoming dry, brittle,
            coarse and even break off.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/Hormones_a0ef20a8-7c3b-4c0d-bb6e-3f8936e79904_1.png`}
            className="mx-auto"
            alt="Hormones"
            loading="lazy"
          />
          <h4 className="text-center my-2  text-2xl font-sans text-custom-black">
            {" "}
            Hormones
          </h4>
          <p className="text-center xl:mt-2  font-sans">
            DHT hormone attacks your hair follicle thereby causing hair thinning
            and hair fall.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/stress_93148f60-c7ec-418a-ae3a-7652119be7df.png`}
            className="mx-auto"
            alt="Stress"
            loading="lazy"
          />
          <h4 className="text-center my-2  text-2xl font-sans text-custom-black">
            {" "}
            Stress
          </h4>
          <p className="text-center xl:mt-2  font-sans">
            Increased cortisol levels disrupts your hair cycle causing hair
            loss.
          </p>
        </div>
      ),
    },
    {
      images: (
        <div className="w-full mx-auto">
          <Image
            height={100}
            width={100}
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_landing_page_mobile/Environment_3027745f-7312-4b5f-a454-0d0d9918caf1.png`}
            className="mx-auto"
            alt="Environment"
            loading="lazy"
          />
          <h4 className="text-center my-2  text-2xl font-sans text-custom-black">
            {" "}
            Environment
          </h4>
          <p className="text-center xl:mt-2  font-sans">
            Sweat, heat, dust and pollution can lead to poor health of the hair
            follicle and eventual hair fall.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="flex flex-col items-center text-center xl:mb-0 lg:mb-14">
      <h2 className={`${nunito.variable} xl:text-xx4l xs:text-[30px] lg:text-xx4l mt-4 tracking-wide font-bold xl:mt-10 text-custom-black xs:px-4 xs:leading-[31px]`}>
        Hair Loss Has Multiple Root Causes
      </h2>

      {["xl", "lg", "md"].includes(screenSize) ? (
        <div className="xl:w-8/12 px-6 py-5 ">
          <Image
            width={1221}
            height={443}
            loading="lazy"
            src={`${CDN_BASE_URL}website_images/male_landing_page/male_banner4.png`}
            alt="male traya page"
          />
        </div>
      ) : (
        <div className="w-full mx-auto pb-8 flex justify-center">
          <DynamicSlider
            className="xl:w-8/12 xs:w-10/12 flex items-center justify-center xl:py-5 lg:py-5 md:py-5 py-0"
            sliderData={rootCauses}
            {...{ settings }}
          />
        </div>
      )}

      <div className="py-3">
        <a
          href="/home/question?cohort=1&lcn=RootCauses&page=homev2"
          onClick={() => Cookies.set("__TRAYA_UTM__", "&page=homev2")}
          className="flex  bg-[#414042] text-white hover:bg-custom-green hover:text-black py-2.5 px-8 xs:px-4 xl:text-xl lg:text-xl md:text-xl text-[13px] font-bold rounded-lg  uppercase"
          id="hairtestcta3-native"
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
  );
};

export default RootCauseForMaleHairLoss;
