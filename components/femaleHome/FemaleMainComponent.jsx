import { useEffect, useState } from "react";
import { CDN_BASE_URL } from "../../constants/config";
import useMediaQuery from "@/components/useMediaQuerry";
import dynamic from "next/dynamic";
import FemaleBanner from "./FemaleBanner";
import FemaleGoogleReview from "./FemaleGoogleReview";
import FemaleThreeFoldWay from "./FemaleThreeFoldWay";
import FemaleWhyTraya from "./FemaleWhyTraya";
import DynamicFemaleReviews from "./DynamicFemaleReview";
import FemaleTrayaJourney from "./FemaleTrayaJourney";
import NotAlone from "./NotAlone";
import FemaleEssentials from "./FemaleEssentials";
import FemaleSafeAndScientific from "./FemaleSafeAndScientific";
import FemaleRegimen from "./FemaleRegimen";
const DynamicFAQ = dynamic(() => import("./faq"));

const DynamicOurDoctorsMainFemaleLanding = dynamic(() =>
  import("./OurDoctorsMainFemaleLanding")
);
const DynamicTestimonial = dynamic(() =>
  import("@components/femaleHome/testimonials")
);
const DynamicDisclaimers = dynamic(() => import("../landingPage/disclaimers"));
const DynamicGoogleReview = dynamic(() => import("./googleReviewFemale"));
const DynamicFooterPage = dynamic(() => import("../landingPage/landingFooter"));

function FemaleMainComponent(props) {
  const mobileScreen = useMediaQuery("(max-width: 600px)");

  const mobileBannerImage = `${CDN_BASE_URL}website_images/female_landing_page/female_landing_page_mobile/femaleLandingMobileNewBanner.png`;
  const desktopBannerImage = `${CDN_BASE_URL}website_images/female_landing_page/femaleLandingNewBanner.png`;

  const [backgroundImage, setBackgroundImage] = useState();
  useEffect(() => {
    setBackgroundImage(mobileScreen ? mobileBannerImage : desktopBannerImage);
  }, [mobileScreen, mobileBannerImage, desktopBannerImage]);

  return (
    <>
      <FemaleBanner props={props} />
      <FemaleGoogleReview />
      <FemaleThreeFoldWay />
      <FemaleWhyTraya />
      <DynamicFemaleReviews />
      <FemaleTrayaJourney />
      <NotAlone />
      <FemaleEssentials props={props} />
      <FemaleSafeAndScientific />
      <FemaleRegimen />
      <DynamicTestimonial />
      <DynamicOurDoctorsMainFemaleLanding />
      <div id="googleReview" className=" mx-auto xl:mt-0 lg:mt-0 md:mt-0 mt-12">
        <DynamicGoogleReview />
      </div>
      <div className="w-full mx-auto mt-14">
        <DynamicFAQ />
      </div>
      <div className="w-full mt-14 xs:mt-5">
        <DynamicDisclaimers />
      </div>
      <DynamicFooterPage />
    </>
  );
}

export default FemaleMainComponent;
