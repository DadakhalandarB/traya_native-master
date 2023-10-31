import AboutUsComponent from "@/components/aboutUs/AboutUsComponent";
import CartContextProvider from "@/context/cart-store";
import React from "react";

const page = () => {
  return (
    <CartContextProvider>
      <AboutUsComponent />
    </CartContextProvider>
  );
};

export default page;
