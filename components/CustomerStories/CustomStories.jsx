"use client";

import { useState } from "react";
import FooterPage from "../landingPage/landingFooter";
import Header from "../productsComponents/headerBlackBG";
import GoogleReview from "../googleReview/GoogleReview";
import Head from "next/head";
import HeroOfTheMonth from "./HeroOfTheMonth";
import StageMonth from "./StageMonth";
import TrayaCustomerStories from "./TrayaCustomerStories";
import TrayaMagic from "./TrayaMagic";
import ReferYourFriend from "./ReferYourFriend";

function CustomStoriesComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Head>
        <title>Customer Stories | Hair loss Treatment | Traya Health</title>
        <meta
          name="title"
          content="Customer Stories | Hair loss Treatment | Traya Health"
        />
        <meta
          name="description"
          content="Read about honest customer stories, how they found visible changes in their hair loss journey with Traya Health. Join the league of our Traya heroes and start with your haircare journey now."
        />
      </Head>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setCartData={(val) => setCartData(val)}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        addToCart={(event, val) => addToCart(event, val)}
        page={"customer-stories"}
      />
      <HeroOfTheMonth />
      <StageMonth />
      <TrayaCustomerStories />
      <TrayaMagic />
      <GoogleReview />
      <ReferYourFriend />
      <FooterPage />
    </>
  );
}

export default CustomStoriesComponent;
