import ReferralComponent from "@/components/referral/ReferralComponent";
import CartContextProvider from "@/context/cart-store";
import React from "react";

const page = () => {
  return (
    <CartContextProvider>
      <ReferralComponent />
    </CartContextProvider>
  );
};

export default page;
