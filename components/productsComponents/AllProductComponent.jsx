"use client";

import Header from "./headerBlackBG";
import { useState } from "react";
import AllProductsMainComponent from "./AllProducts";
import Head from "next/head";

function AllProductsComponents({ productData, rawProductsData }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [discountHandle, setDiscountHandle] = useState("");

  const formatProductData = (products) => {
    const finalData = [];
    products.forEach((val) => {
      let tempObj = {};
      tempObj.title = val.short_title;
      tempObj.onlineStoreUrl = val.onlineStoreUrl;
      tempObj.description = val.short_sub_title;
      tempObj.price = val.price.amount;
      tempObj.totalPrice = val.price.amount;
      tempObj.itemCount = 1;
      tempObj.id = val.variant_id;
      tempObj.img = val.product_media[0].url;
      tempObj.isCombo = val.isCombo;
      tempObj.routeName = val.routeName;
      tempObj.breadCrumbName = val.breadCrumbName;
      finalData.push(tempObj);
    });
    return finalData;
  };
  const formatter = (val) => {
    let formatValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
    return formatValue.format(val);
  };

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Head>
        <title>
          Hair Treatment - Buy Best Hair Treatment Products Online – Traya
        </title>
        <meta
          name="title"
          content="Hair Treatment - Buy Best Hair Treatment Products Online"
        />
        <meta
          name="description"
          content="Shop for Traya's best hair treatment products online at best price. Traya hair treatment plans have customized kits for men &amp; women, which helps hair growth."
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
      />
      <AllProductsMainComponent
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        productData={productData}
        rawProductsData={rawProductsData}
        formatProductData={formatProductData}
      />
    </>
  );
}

export default AllProductsComponents;
