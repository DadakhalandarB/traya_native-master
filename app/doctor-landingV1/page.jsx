import CartContextProvider from "@/context/cart-store";
import React from "react";
import { fetchRequest } from "@/helpers/fetchRequest";
import { GET_PRODUCTS } from "@/constants/urls";
import { getProductList } from "@/utils/utility";
import DoctorLanding from "@/components/doctorLandingV1/DoctorLanding";

const page = async () => {
  let productsData;
  const fetchResult = await fetchRequest(`${GET_PRODUCTS}`);
  if (fetchResult.hasError) {
    console.error("error occurred");
    return;
  } else {
    productsData = getProductList(fetchResult);
  }
  return (
    <CartContextProvider>
      <DoctorLanding productsData={productsData} />
    </CartContextProvider>
  );
};

export default page;
