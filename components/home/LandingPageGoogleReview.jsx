import { CDN_BASE_URL } from "@/constants/config";
import dynamic from "next/dynamic";
import Image from "next/image";
const DynamicMarqueeComponent = dynamic(() => import("../MarqueeComponent"));

const LandingPageGoogleReview = () => {
  return (
    <div>
      <div className="googleReviewImg xl:w-8/12 lg:w-12/12 md:w-11/12 lg:px-12 mx-auto">
        <a
          className="flex pt-4 xl:pt-10 lg:pt-10 md:pt-10"
          href="#googleReview"
        >
          <div className="mr-2">
            <Image
              height={54}
              width={50}
              src={`${CDN_BASE_URL}website_images/commonImages/google.png`}
              alt="google"
              loading="eager"
            />
          </div>
          <div className="">
            <div className="flex flex-row">
              <p className=" font-bold text-2xl text-[#303032]">4.5</p>
              <Image
                height={30}
                width={120}
                src={`${CDN_BASE_URL}website_images/commonImages/stars.png`}
                alt="rating"
                loading="eager"
              />
            </div>
            <div className="flex align-items-center">
              <Image
                height={25}
                width={25}
                loading="eager"
                src={`${CDN_BASE_URL}website_images/commonImages/verifiedIcon.png`}
                alt="verified"
              />
              <Image
                height={26}
                width={140}
                loading="eager"
                src={`${CDN_BASE_URL}website_images/commonImages/reviewsNumber.png`}
                alt="rating count"
              />
            </div>
          </div>
        </a>
      </div>
      <DynamicMarqueeComponent />

      <div className="reel-story w-full mx-auto pb-10">
        <div id="swirl-short-videos" data-code="hnl8qkiv" data-sw="0"></div>
        <div
          className="swirl-short-videos-M mx-auto xl:px-36 lg:px-8 md:px-8"
          data-playlist="ealhzF"
        ></div>
      </div>
    </div>
  );
};

export default LandingPageGoogleReview;
