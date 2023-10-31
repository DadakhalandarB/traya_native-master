"use client"
import Header from "./ResultHeader";
import DynamicResult from "./DynamicResultComponent";
import { useEffect, useState, useContext, lazy } from "react";
import { fetchRequest } from "@/helpers/fetchRequest";
import {
  PUBLIC_API_URL_BASE,
} from "@/constants/config";
import { NEW_RESULT_API } from "@/constants/urls";
import { CartContext } from "@/context/cart-store";
import { MD5 } from "crypto-js";
import { gtmEcommerce } from "@/helpers/gtmHelpers";
import { moengageTrackEvent } from "@/helpers/handleMoengage";
import { getCurrentTimeInReadableForm } from "@/helpers/timeFormatter";
const DynamicClarity = lazy(() => import("../../constants/windowClarity"));

function ResultPageMainComponent() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [bookCallEvent, setBookCallEvent] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);
  const [userDetail, setUserDetail] = useState({});
  const [cartItemCount, setCartItemCount] = useState(0);
  const [discountHandle, setDiscountHandle] = useState("");
  const [placeOrderClicked, setPlaceOrderClicked] = useState(false);

  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const { cartItems, setItemsToCart, clearCart, getItemCount} = useContext(CartContext);

  useEffect(() => {
    const _totalPrice = cartItems.reduce((acc, item) => {
      acc += Number(item.totalPrice);
      return acc;
    }, 0);
    setTotalPrice(_totalPrice);
    setCartData(cartItems);
  }, [cartItems]);

  function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(';');
  
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) == 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  const getCartItemList = async () => {
    const queryString = window.location;
    let syntheticId = "";
    let syntheticIdUrl =
      queryString.search.indexOf("id=") !== -1
        ? queryString.search.split("&").shift().replace("?id=", "")
        : "";
    if (syntheticIdUrl) {
      syntheticId = syntheticIdUrl;
    } else {
      if (window.localStorage.getItem("syntheticId")) {
        syntheticId = window.localStorage.getItem("syntheticId");
      } else {
        syntheticId = getCookie("syntheticId");
      }
    }
    window.localStorage.setItem("resultSynthetic", syntheticId);
    const _res = await fetchRequest(NEW_RESULT_API(syntheticId));
    if (queryString.pathname == "/result") setUserDetail(_res.data);
    if (_res.status === 200) {
      window.localStorage.setItem("caseId", _res?.data?.User_Analysis?.case_id);
      if (_res.data.stage_transition.currentStage.stage !== "Stage-6") {
        let tempData = [];
        let totalTemp = 0;
        _res.data?.product_Ids?.length > 0 &&
          _res.data?.product_Ids?.forEach((val, i) => {
            const _items = {};
            _items.id = val.product_id;
            _items.name = val.cartDisplayName;
            _items.image_url = val.image_url.cartImgUrl;
            _items.price = val.price;
            val.totalPrice = Number(val.price);
            tempData.push(_items);
            totalTemp = Number(val.totalPrice) + Number(totalTemp);
          });
        setItemsToCart(tempData);
        setTotalPrice(totalTemp);
      } else {
        setItemsToCart([]);
      }
    }
  };
  const decItem = (item, index) => {
    const idx = cartData.findIndex(
      (counter) => counter.product_id === item.product_id
    );
    if (item.itemCount > 1) {
      const counters = [...cartData];
      counters[idx] = {
        ...cartData[idx],
        itemCount: cartData[idx].itemCount - 1,
        totalPrice:
          Number(cartData[idx].totalPrice) - Number(cartData[idx].price),
      };
      setTotalPrice(Number(totalPrice) - Number(item.price));
      setCartItemCount(Number(cartItemCount) - 1);
      setCartData(counters);
    }
  };

  const incItem = (item, index) => {
    const idx = cartData.findIndex(
      (counter) => counter.product_id === item.product_id
    );
    const counters = [...cartData];
    counters[idx] = {
      ...cartData[idx],
      itemCount: cartData[idx].itemCount + 1,
      totalPrice:
        Number(cartData[idx].totalPrice) + Number(cartData[idx].price),
    };
    setCartItemCount(Number(cartItemCount) + 1);
    setTotalPrice(Number(totalPrice) + Number(item.price));
    setCartData(counters);
  };
  const deleteItem = (item, index) => {
    const idx = cartData.findIndex(
      (counter) => counter.product_id === item.product_id
    );
    const counters = [...cartData];
    counters.splice(idx, 1);
    setTotalPrice(totalPrice - item.itemCount * item.price);
    setCartData(counters);
    setCartItemCount(Number(cartItemCount) - Number(item.itemCount));
  };

  const getParamValue = (url, key) => {
    const urlSearchParams = new URLSearchParams(new URL(url).search);
    const idValue = urlSearchParams.get(key);
    return idValue || null;
  };

  const sendMoEvent = (totalCartValue) => {
    const queryString = typeof window != "undefined" ? window.location : "";
    const utmDetails = ["utm_source", "utm_campaign", "utm_medium"].reduce(
      (acc, nextValue) => {
        const value = getParamValue(queryString.href, nextValue);
        acc[nextValue] = value;
        return acc;
      },
      {}
    );
    const syntheticId = window.localStorage.getItem("resultSynthetic");
    moengageTrackEvent("place_order_clicked", {
      case_id: window.localStorage.getItem("caseId"),
      gender: window.localStorage.getItem("gender"),
      platform: "web_native",
      timestamp: getCurrentTimeInReadableForm(),
      screenName: "female_result_page_native",
      cartValue: totalCartValue,
      syntheticId: syntheticId,
      utm_source: utmDetails.utm_source,
      utm_campaign: utmDetails.utm_campaign,
      utm_medium: utmDetails.utm_medium,
    });
  };

  const placeOrder = async (triggerMoEvent, totalCartValue) => {
    if (triggerMoEvent === true) sendMoEvent(totalCartValue);
    let productDescriptions = [];
    cartData.forEach((val) => {
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
    const { utmParams, landingPageUrl, referrerPageUrl } = JSON.parse(
      localStorage.getItem("flo-analytics")
    );
    if (utmParams) {
      utmParams.push({ name: "landing_page", value: landingPageUrl });
      utmParams.push({ name: "orig_referrer", value: referrerPageUrl });
    }

    let caseId = window.localStorage.getItem("caseId");
    const sessionId = window.Shopflo.getSessionId();
    if (caseId) {
      let url = `${PUBLIC_API_URL_BASE}v3/retrieve-cart?provider=shopflo${
        caseId ? `&caseId=${caseId}` : ""
      }`;
      const currenPathUrl = window.location.href;
      const success_url = `${window.location.origin}/orders?page=thank_yo&{checkout_id}&{platform_order_id}`;
      const _res = await fetchRequest(url, {
        method: "POST",
        body: JSON.stringify({
          productDescriptions: productDescriptions,
          tags: ["ORDER_SOURCE_WEB_V2"],
          backUrl: currenPathUrl,
          success_url: success_url,
          sessionId: sessionId,
          note_attributes: utmParams,
        }),
      });

      if (_res.status === 200) {
        window.Shopflo.openFloCheckout(_res.data);
        let tempItem = [];
        cartItems.forEach((val) => {
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
        let user_email = window.localStorage.getItem("user_email");
        let user_phone = window.localStorage.getItem("user_phone");
        let user_synthetic_id = window.localStorage.getItem("user_syn");

        const encryptedEmail = user_email
          ? MD5(user_email.trim()).toString()
          : "";
        const encryptedPhone = user_phone
          ? MD5(user_phone.trim()).toString()
          : "";
        window.dataLayer.push({
          ecommerce: {
            currencyCode: "INR",
            items: tempItem,
            cartTotal: tempItem.length,
          },
          EID: encryptedEmail,
          MID: encryptedPhone,
          NAEID: user_email ? user_email.trim() : "",
          NAMID: user_phone ? user_phone.trim() : "",
          user_id: user_synthetic_id ? user_synthetic_id : "",
          event: "nt_begin_checkout",
        });
      }
    }
  };
  useEffect(()=>{
    getCartItemList();
    clearCart();
  },[])

  useEffect(()=>{
    console.error(bookCallEvent,showSidebar)
    if(bookCallEvent && showSidebar){
      const _totalPrice = cartItems.reduce((acc, item) => {
        acc += Number(item.totalPrice);
        return acc;
      }, 0);
      setTotalCartPrice(_totalPrice);
      setCartItemsCount(getItemCount());
      setCartItemsData(cartItems);
    }
  },[cartItems])
  const buyNowClicked =()=>{
    getCartItemList();
    clearCart();
    window.dataLayer = window.dataLayer || [];
    setShowSidebar(true);
    setBookCallEvent(true);
    let tempItem = [];
    let totalPrice = 0;
    cartItems.forEach((val) => {
      let tempObj = {};
      totalPrice = totalPrice + val.totalPrice;
      tempObj.item_name = val.name;
      tempObj.item_id = val.id;
      tempObj.quantity = val.quantity;
      tempObj.price = val.price;
      tempObj.item_brand = "Traya Health";
      tempObj.item_category = "Hair Care";
      tempObj.discount = "";
      tempObj.coupon = "";
      tempItem.push(tempObj);
    });
    // GTM nt_view_cart function
    let gtmObj = {
      totalPrice: totalPrice,
      cartData: tempItem,
    };
    gtmEcommerce(gtmObj, "nt_add_to_cart");
}
  const formatter = (val) => {
    let formatValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
    const formattedNumber = formatValue.format(val);
    const formattedWithSpace = formattedNumber.replace("₹", "₹ ");
    return formattedWithSpace;
  };
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <DynamicClarity />
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
        placeOrder={(e, f) => placeOrder(e, f)}
        formatter={(val) => formatter(val)}
        placeOrderClicked={placeOrderClicked}
        buyNowClicked={()=>buyNowClicked()}
        cartItemsCount={cartItemsCount}
        cartItemsData={cartItemsData}
        totalCartPrice={totalCartPrice}
      />
      <DynamicResult
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
        buyNowClicked={()=>buyNowClicked()}
        setBookCallEvent={(val)=>setBookCallEvent(val)}
        bookCallEvent={bookCallEvent}
      />
    </>
  );
}

export default ResultPageMainComponent;
