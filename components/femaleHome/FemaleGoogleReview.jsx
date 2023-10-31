import { CDN_BASE_URL } from "@/constants/config";
import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
const DynamicMar = dynamic(() => import("../MarqueeComponent"));

const FemaleGoogleReview = () => {
  return (
    <div>
      <div className="googleReviewImg 2xl:w-[1110px] 2xl:mx-auto xl:w-10/12 lg:w-12/12 md:w-11/12 lg:px-8 mx-auto xs:mt-10 md:mt-0">
        <a
          className="flex pt-4 xl:pt-10 lg:pt-10 md:pt-10"
          href="#googleReview"
        >
          <div className="w-[50px] md:w-[60px] h-[54px] md:h-[65px] relative">
            <Image
              src={`${CDN_BASE_URL}website_images/commonImages/google.png`}
              alt="google rating"
              fill
              priority={true}
            />
          </div>
          <div>
            <div className="flex flex-row">
              <p className=" font-bold text-2xl">4.5</p>
              <div className="md:h-[30px] md:w-[121px] w-[120px] h-[30px] relative">
                <Image
                  src={`${CDN_BASE_URL}website_images/commonImages/stars.png`}
                  alt="google rating"
                  fill
                  priority={true}
                />
              </div>
            </div>
            <div className="flex align-items-center">
              <Image
                src={`${CDN_BASE_URL}website_images/commonImages/verifiedIcon.png`}
                alt="google rating"
                height={25}
                width={25}
                priority={true}
              />
              <Image
                src={`${CDN_BASE_URL}website_images/commonImages/reviewsNumber.png`}
                alt="google rating"
                height={26}
                width={140}
                loading="lazy"
              />
            </div>
          </div>
        </a>
      </div>
      <DynamicMar />

      <div className="reel-story w-10/12 mx-auto pb-10">
        <div id="swirl-short-videos" data-code="hnl8qkiv" data-sw="0"></div>
        <div className="swirl-short-videos-M" data-playlist="GTMU3z"></div>
      </div>
    </div>
  );
};

export default FemaleGoogleReview;
