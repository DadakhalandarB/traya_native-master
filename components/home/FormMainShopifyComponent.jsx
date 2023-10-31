"use client";

import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import LandingPageBanner from "./LandingPageBanner";
import LandingPageGoogleReview from "./LandingPageGoogleReview";
import ThreefoldWay from "./ThreefoldWay";
import RootCauseForMaleHairLoss from "./RootCauseForMaleHairLoss";
import TrayaJourney from "../landingPage/TrayaJourney";
import SafeAndScientific from "./SafeAndScientific";
import Essentials from "./Essentials";

const DynamicDisclaimers = dynamic(() =>
  import("@components/landingPage/disclaimers")
);
const DynamicGoogleReview = dynamic(() =>
  import("@components/landingPage/landingGoogle")
);
const DynamicLoader = dynamic(() => import("@components/Loader"));
const DynamicFooterPage = dynamic(() =>
  import("@components/landingPage/landingFooter")
);

const names = ["Ayurveda", "Dermatology", "Nutrition"];

function FormMainShopifyComponent(props) {
  const [docType, setDocType] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    if (itemList.length < 1) {
      let tempItem = [];
      props?.productData.forEach((val) => {
        let tempObj = {};
        tempObj.name = val.title;
        tempObj.id = val.id;
        tempObj.price = val.price;
        tempObj.quantity = 1;
        tempItem.push(tempObj);
      });
      setItemList(tempItem);
    }
  }, [itemList.length, props?.productData]);

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setDocType(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 2000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return props?.productData?.length < 0 ? (
    <DynamicLoader />
  ) : (
    <>
      <LandingPageBanner props={props} />
      <LandingPageGoogleReview />
      <RootCauseForMaleHairLoss />
      <ThreefoldWay />
      <TrayaJourney docType={docType} />
      <SafeAndScientific />
      <Essentials props={props} />
      <div id="googleReview" className="xl:mt-0 lg:mt-0 md:mt-0 mt-8">
        <DynamicGoogleReview />
      </div>
      <div className="w-full mt-14">
        <DynamicDisclaimers className="cursor-pointer" />
      </div>
      <DynamicFooterPage />
    </>
  );
}

export default FormMainShopifyComponent;
