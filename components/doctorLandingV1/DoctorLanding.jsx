"use client"

import Header from "@/components/femaleHome/femaleShopifyHeader";
import { useEffect, useState, useContext } from "react";
import DoctorLandingMainComponent from "./DoctorLandingMainComponent";
import { PUBLIC_API_URL_BASE } from "../../constants/config";
import { fetchRequest } from "../../helpers/fetchRequest";
import { NEW_RESULT_API, GET_PRODUCTS } from "../../constants/urls";
import { CartContext } from "../../context/cart-store";
import Head from "next/head";

function DoctorLanding({ productData }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [userDetail, setUserDetail] = useState({});
  const [cartItemCount, setCartItemCount] = useState(0);
  const [discountHandle, setDiscountHandle] = useState("");
  const [placeOrderClicked, setPlaceOrderClicked] = useState(false);
  const [syntheticId, setSyntheticId] = useState("");
  const [showMyRecc, setShowMyRecc] = useState(false);
  const [globalCart, setGlobalCart] = useState([]);

  useEffect(() => {
    const synthId = window.localStorage.getItem("resultSynthetic");
    setSyntheticId(synthId);
    if (synthId) {
      setShowMyRecc(true);
    }
  }, []);

  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    setGlobalCart(cartItems);
  }, [cartItems]);

  const decItem = (item, index) => {
    if (item.itemCount > 1) {
      const counters = [...cartData];
      counters[index] = {
        ...cartData[index],
        itemCount: cartData[index].itemCount - 1,
        totalPrice:
          Number(cartData[index].totalPrice) - Number(cartData[index].price),
      };
      setTotalPrice(Number(totalPrice) - Number(item.price));
      setCartItemCount(Number(cartItemCount) - 1);
      setCartData(counters);
    }
  };

  const incItem = (item, index) => {
    const counters = [...cartData];
    counters[index] = {
      ...cartData[index],
      itemCount: cartData[index].itemCount + 1,
      totalPrice:
        Number(cartData[index].totalPrice) + Number(cartData[index].price),
    };
    setCartItemCount(Number(cartItemCount) + 1);
    setTotalPrice(Number(totalPrice) + Number(item.price));
    setCartData(counters);
  };
  const deleteItem = (item, index) => {
    const counters = [...cartData];
    counters.splice(index, 1);
    setTotalPrice(totalPrice - item.itemCount * item.price);
    setCartData(counters);
    setCartItemCount(Number(cartItemCount) - Number(item.itemCount));
  };
  const placeOrder = async () => {
    // setPlaceOrderClicked(true);
    // client.checkout.create().then(async (checkout) => {
    let productDescriptions = [];

    globalCart.forEach((val) => {
      let objVal = {
        product_id: val.id,
        name: val.name,
        itemCount: val.quantity,
        type: val.type,
        description: val.description,
        price: val.price,
        image_url: [null],
        quantity: val.quantity,
      };
      productDescriptions.push(objVal);
    });

    let caseId = window.localStorage.getItem("caseId");
    const sessionId = window.Shopflo.getSessionId();
    let url = `${PUBLIC_API_URL_BASE}v3/retrieve-cart?provider=shopflo${
      caseId ? `&caseId=${caseId}` : ""
    }`;
    const currenPathUrl = window.location.href;
    const _res = await fetchRequest(url, {
      method: "POST",
      body: JSON.stringify({
        productDescriptions: productDescriptions,
        tags: ["ORDER_SOURCE_WEB_V2"],
        backUrl: currenPathUrl,
        sessionId: sessionId,
      }),
    });

    if (_res.status === 200) {
      window.Shopflo.openFloCheckout(_res.data);
      //START --->
      // GTM data layer
      let tempItem = [];
      globalCart.forEach((val) => {
        let tempObj = {};
        tempObj.item_name = val.name;
        tempObj.item_id = val.id;
        tempObj.price = val.price;
        tempObj.quantity = val.quantity;
        tempObj.item_brand = "Traya Health";
        tempObj.item_category = "Hair Care";

        tempItem.push(tempObj);
      });
      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null });
      window.dataLayer.push({
        ecommerce: {
          currencyCode: "INR",
          items: tempItem,
          cartTotal: tempItem.length,
        },
        event: "nt_begin_checkout",
      });
      //END --->
      // setTimeout(disableClickPlace, 2000);
    }

    // cartData.forEach((val) => {
    //   let checkoutObj = {
    //     variantId: val.id,
    //     quantity: val.itemCount,
    //   };
    //   lineItemsToAdd.push(checkoutObj);
    // });

    // client.checkout
    //   .addLineItems(checkoutId, lineItemsToAdd)
    //   .then((checkout) => {
    //     window.location.replace(checkout.webUrl);
    //   });
    // });
  };
  const disableClickPlace = () => {
    setPlaceOrderClicked(false);
  };
  const formatter = (val) => {
    let formatValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
    return formatValue.format(val);
  };
  useEffect(() => {
    if (showMyRecc) {
      getCartItemList();
    }
  }, [showMyRecc]);

  const getCartItemList = async () => {
    setCartItemCount(0);
    setTotalPrice(null);
    setCartData([]);
    if (showMyRecc) {
      const _res = await fetchRequest(NEW_RESULT_API(syntheticId));
      if (_res.status === 200) {
        window.localStorage.setItem(
          "caseId",
          _res?.data?.User_Analysis?.case_id
        );
        let tempData = [];
        let totalTemp = 0;
        let count = 0;
        if (_res.data.stage_transition.currentStage.stage !== "Stage-6") {
          _res.data?.product_Ids?.length > 0 &&
            _res.data?.product_Ids?.forEach((val, i) => {
              let cartObj = {};
              cartObj.itemCount = 1;
              cartObj.price = val.price;
              cartObj.name = val.cartDisplayName;
              cartObj.totalPrice = val.price;
              cartObj.image = val.image_url.cartImgUrl;
              cartObj.id = `gid://shopify/ProductVariant/${val.product_id}`;
              totalTemp =
                Number(cartObj.totalPrice) +
                Number(totalPrice ? totalPrice : totalTemp);
              count =
                Number(val.itemCount) +
                Number(cartItemCount ? cartItemCount : count);
              tempData.push(cartObj);
            });
          setCartItemCount(count);
          setTotalPrice(totalTemp);
          setCartData(tempData);
        } else {
          setCartItemCount(0);
          setCartData([]);
        }
      }
    }
  };
  const addToCart = async (event, val) => {
    event.preventDefault();
    let cartArry = [...cartData];
    let totalTemp = 0;
    let count = 0;
    let findIndex = cartData.findIndex((item) => item.id == val.id);
    if (findIndex < 0) {
      let cartObj = {};
      cartObj.itemCount = 1;
      cartObj.price = val.price;
      cartObj.name = val.title;
      cartObj.totalPrice = val.price;
      cartObj.image = val.img;
      cartObj.id = val.id;
      totalTemp =
        Number(val.totalPrice) + Number(totalPrice ? totalPrice : totalTemp);
      count =
        Number(val.itemCount) + Number(cartItemCount ? cartItemCount : count);
      cartArry.push(cartObj);
      setCartData(cartArry);
      setCartItemCount(count);
      setTotalPrice(totalTemp);
    } else {
      let ind = cartData.indexOf(cartData[findIndex]);
      incItem(cartData[ind], ind);
    }
  };

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Head>
        <title>
          Get the Best Hair loss Treatment &amp; Diagnosis | Traya Health
        </title>
        <meta
          name="title"
          content="Get the Best Hair loss Treatment & Diagnosis | Traya Health"
        />
        <meta
          name="description"
          content="Wondering how to stop hair loss? At Traya Health, we use the approach of Ayurveda, Dermatology and Nutrition to provide doctor Recommended hair fall solutions. Find the root cause of your hair loss now."
        />
      </Head>
      <Header
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setCartData={(val) => setCartData(val)}
        incItem={(val, index) => incItem(val, index)}
        decItem={(val, index) => decItem(val, index)}
        deleteItem={(val, index) => deleteItem(val, index)}
        cartItemCount={cartItemCount}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        totalPrice={totalPrice}
        placeOrder={() => placeOrder()}
        formatter={(val) => formatter(val)}
        addToCart={(event, val) => addToCart(event, val)}
        placeOrderClicked={placeOrderClicked}
        syntheticId={syntheticId}
        showMyRecc={showMyRecc}
        doctor={true}
      />

      <DoctorLandingMainComponent
        showSidebar={showSidebar}
        setShowSidebar={(val) => setShowSidebar(val)}
        loader={loaderProp}
        cartData={cartData}
        setCartData={(val) => setCartData(val)}
        incItem={(val, index) => incItem(val, index)}
        decItem={(val, index) => decItem(val, index)}
        deleteItem={(val, index) => deleteItem(val, index)}
        cartItemCount={cartItemCount}
        totalPrice={totalPrice}
        setDiscountHandle={(val) => setDiscountHandle(val)}
        discountHandle={discountHandle}
        formatter={(val) => formatter(val)}
        productData={productData}
        addToCart={(event, val) => addToCart(event, val)}
        syntheticId={syntheticId}
        showMyRecc={showMyRecc}
      />
    </>
  );
}

export default DoctorLanding;
