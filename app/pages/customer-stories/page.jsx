import CustomStoriesComponent from "@/components/CustomerStories/CustomStories";
import CartContextProvider from "@/context/cart-store";
import React from "react";

const page = () => {
  return (
    <CartContextProvider>
      <CustomStoriesComponent />;
    </CartContextProvider>
  );
};

export default page;
