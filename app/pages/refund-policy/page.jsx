import RefundPolicyComponent from "@/components/refund/RefundPolicyComponent";
import CartContextProvider from "@/context/cart-store";
import React from "react";

const page = () => {
  return (
    <CartContextProvider>
      <RefundPolicyComponent />
    </CartContextProvider>
  );
};

export default page;
