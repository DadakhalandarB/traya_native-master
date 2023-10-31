"use client";

import Image from "next/image";
import Loader from "@/components/Loader";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "@context/cart-store";
import { PUBLIC_API_URL_BASE } from "@constants/config";
import { fetchRequest } from "@helpers/fetchRequest";
import { useRef } from "react";
import encryptMD5 from "@constants/encryptMD5";
import LoginComponent from "./LoginComponent";
import SideNav from "./SideNav";
import { trayalogo } from "@/constants/constants";
import RemoveSvg from "@/assets/svgs/RemoveSvg";
import PlusSvg from "@/assets/svgs/PlusSvg";
import MinusSvg from "@/assets/svgs/MinusSvg";
import CrossHoverSvg from "@/assets/svgs/CrossHoverSvg";
import WhatsAppSvg from "@/assets/svgs/WhatsAppSvg";
import ClickPostSvg from "@/assets/svgs/ClickPostSvg";
import ProfileSvg from "@/assets/svgs/ProfileSvg";
import CartSvg from "@/assets/svgs/CartSvg";
import BurgerMenuSvg from "@/assets/svgs/BurgerMenuSvg";

function Header(props) {
  const router = useRouter();
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [syntheticId, setSyntheticId] = useState();
  const [placeOrderClicked, setPlaceOrderClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);
  const currentIndexRef = useRef(0);
  const [showOtp, setShowOTP] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});
  const [hasToken, setHasToken] = useState(false);
  const [loginCustomerName, setLoginCustomerName] = useState("");

  const {
    cartItems,
    incrementItemCount,
    decrementItemCount,
    getItemCount,
    deleteItemFromCart,
    showMyRecc,
  } = useContext(CartContext);

  useEffect(() => {
    if (Cookies.get("ACCESS_TOKEN")) {
      setHasToken(true);
      if (router.pathname === "/home") {
        window.location.replace("/user-account");
      }
    }
    let customName = window.localStorage.getItem("login_customer_name");
    setLoginCustomerName(customName);
  }, []);

  useEffect(() => {
    if (seconds === null) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);

    // Clear interval and reset seconds when the countdown reaches 0
    if (seconds === 0) {
      clearInterval(intervalId);
      setSeconds(null);
    }

    // Clean up the interval on unmount
    return () => clearInterval(intervalId);
  }, [seconds]);

  const closeModal = () => {
    setShowModal(false);
    setPhoneNumber("");
    setError("");
    setOtp(new Array(6).fill(""));
    setShowOTP(false);
    setUserData("");
  };

  useEffect(() => {
    let _syntheticId;
    if (typeof window !== "undefined") {
      _syntheticId = window.localStorage.getItem("syntheticId");
    }
    setSyntheticId(_syntheticId);
  }, [showMyRecc]);

  useEffect(() => {
    const _totalPrice = cartItems.reduce((acc, item) => {
      acc += Number(item.totalPrice);
      return acc;
    }, 0);
    setTotalCartPrice(_totalPrice);
    setCartItemsCount(getItemCount());
    setCartItemsData(cartItems);
  }, [cartItems]);

  const placeOrder = async () => {
    // setPlaceOrderClicked(true);
    client.checkout.create().then(async (checkout) => {
      let productDescriptions = [];

      cartItemsData.forEach((val) => {
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
        let totalPrice = 0;
        cartItemsData.forEach((val) => {
          let tempObj = {};
          totalPrice = totalPrice + val.totalPrice;
          tempObj.item_name = val.name;
          tempObj.item_id = val.id;
          tempObj.price = val.price;
          tempObj.quantity = val.quantity;
          tempObj.discount = "";
          tempObj.coupon = "";
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
          ? encryptMD5(user_email.trim()).toString()
          : "";
        const encryptedPhone = user_phone
          ? encryptMD5(user_phone.trim()).toString()
          : "";
        window.dataLayer.push({
          ecommerce: {
            currencyCode: "INR",
            value: totalPrice,
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
    });
  };
  const openNav = () => {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "100%";
  };

  const formatter = (val) => {
    let formatValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
    return formatValue.format(val);
  };
  const showChartView = () => {
    props.setShowSidebar(!props.showSidebar);
    let tempItem = [];
    let totalPrice = 0;
    cartItems.forEach((val) => {
      let tempObj = {};
      totalPrice = totalPrice + val.totalPrice;
      tempObj.item_name = val.name;
      tempObj.item_id = val.id;
      tempObj.quantity = val.quantity;
      tempObj.price = val.price;
      tempObj.discount = "";
      tempObj.coupon = "";
      tempObj.item_brand = "Traya Health";
      tempObj.item_category = "Hair Care";
      tempItem.push(tempObj);
    });

    window.dataLayer = [];
    dataLayer.push({ ecommerce: null });
    let user_email = window.localStorage.getItem("user_email");
    let user_phone = window.localStorage.getItem("user_phone");
    let user_synthetic_id = window.localStorage.getItem("user_syn");

    const encryptedEmail = user_email
      ? encryptMD5(user_email.trim()).toString()
      : "";
    const encryptedPhone = user_phone
      ? encryptMD5(user_phone.trim()).toString()
      : "";
    window.dataLayer.push({
      ecommerce: {
        currencyCode: "INR",
        value: totalPrice,
        items: tempItem,
        cartTotal: tempItem.length,
      },
      EID: encryptedEmail,
      MID: encryptedPhone,
      NAEID: user_email ? user_email.trim() : "",
      NAMID: user_phone ? user_phone.trim() : "",
      user_id: user_synthetic_id ? user_synthetic_id : "",
      event: "nt_view_cart",
    });
  };

  const _clearOtp = () => {
    setOtp(new Array(6).fill(""));
    setError("");
  };

  return (
    <>
      <nav className={"bg-custom-black w-full fixed top-0 z-50 py-2"}>
        <div className="flex flex-wrap justify-between items-center px-2 xl:px-[48px] md:px-6 ">
          <div className="w-full flex flex-row justify-between">
            <div>
              <a
                // href="/home"
                href={hasToken ? `/user-account` : `/home`}
                className="flex items-center mt-2 ml-7 xs:ml-2 xl:w-auto lg:w-auto md:w-auto w-24"
              >
                <Image
                  src={trayalogo}
                  alt="Traya Logo"
                  className="cursor-pointer"
                  loader={props.loader}
                  unoptimized={true}
                  height={41}
                  width={128}
                />
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gridArea: "icons",
                justifySelf: "end",
                alignItems: "center",
              }}
              className="mx-[38px] xs:mx-[10px]"
            >
              <div className="hidden xl:block md:block lg:block px-3">
                {showMyRecc ? (
                  <a
                    href={
                      router.pathname == "/pages/female" ||
                      router.pathname == "/female"
                        ? "/femaleV2/question?cohort=1&lcn=TopBar&page=female_native"
                        : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        router.pathname == "/pages/female" ||
                          router.pathname == "/femaleV2"
                          ? "&page=femalev2"
                          : "&page=homev2"
                      )
                    }
                    className="flex bg-white text-black hover:bg-custom-black hover:text-white p-2 font-bold rounded-lg uppercase"
                  >
                    My Result
                  </a>
                ) : (
                  <a
                    href={
                      router.pathname == "/pages/female" ||
                      router.pathname == "/femaleV2"
                        ? "/femaleV2/question?cohort=1&lcn=TopBar&page=female_native"
                        : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        router.pathname == "/pages/female" ||
                          router.pathname == "/femaleV2"
                          ? "&page=femalev2"
                          : "&page=homev2"
                      )
                    }
                    id={
                      router.pathname == "/pages/female" ||
                      router.pathname == "/femaleV2"
                        ? "female-hair-test-button1-native"
                        : "hairtestcta-native"
                    }
                    className="flex bg-white text-black hover:bg-custom-black hover:text-white p-2 font-bold rounded-lg uppercase"
                  >
                    Take The Hair Test
                    <sup
                      style={{
                        fontSize: 9,
                        fontWeight: "bolder",
                        position: "relative",
                        top: 5,
                      }}
                    >
                      TM
                    </sup>
                  </a>
                )}
              </div>
              <div className="ml-2">
                <a href="https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+would+like+to+know+more+about+Traya&type=phone_number&app_absent=0">
                 <WhatsAppSvg theme={"light"} />
                </a>
              </div>
              <div className="p-[10px]">
                <a href="https://trayahealth.clickpost.ai/">
                  <ClickPostSvg />
                </a>
              </div>
              <div className="">
                <a
                  onClick={() => router.push("/login")}
                  className="cursor-pointer"
                >
                  <ProfileSvg />
                </a>
              </div>
              <div className="p-[10px]">
                <div className="relative" onClick={() => showChartView()}>
                  <CartSvg />
                  <span
                    onClick={() => showChartView()}
                    className="cusBedge absolute -right-[5px] -top-[5px] rounded-full bg-[#ff0000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] text-center items-center"
                  >
                    {cartItemsCount ? cartItemsCount : "0"}
                  </span>
                </div>
                <div
                  className={`top-0 right-0 xl:w-[25vw] md:w-[25vw] xs:w-[97vw] bg-white p-3 text-white fixed h-full shadow-xl ease-in-out duration-300 z-50 ${
                    props.showSidebar
                      ? "translate-x-0 sideBarScroll"
                      : "translate-x-full"
                  }`}
                >
                  <div className="ttlCart flex items-center">
                    <CrossHoverSvg
                      setShowSidebar={props.setShowSidebar}
                      showSidebar={props.showSidebar}
                    />
                    <h3
                      className=" text-gray-800 text-center w-full text-lg underline"
                      style={{ color: "#6a6a6a" }}
                    >
                      Your cart ({cartItemsCount})
                    </h3>
                  </div>
                  <div
                    className="mt-8"
                    style={{ overflow: "auto", height: "75%" }}
                  >
                    {cartItemsData?.map((cart, index) => (
                      <div key={index}>
                        <div className="flex">
                          <a>
                            <Image
                              src={cart.image_url}
                              width={150}
                              height={150}
                              alt="Traya Logo"
                              className="cursor-pointer"
                              loader={props.loader}
                              unoptimized={true}
                            />
                          </a>
                          <div style={{ width: "80%" }}>
                            <span
                              className=" font-bold"
                              style={{ color: "#414042" }}
                            >
                              {cart.name}
                            </span>
                            <div>
                              <div className="quantity mt-2">
                                <button
                                  className="border-grey border-2 rounded border-solid mr-1 align-top"
                                  style={{ width: 25, height: 25 }}
                                  onClick={() => decrementItemCount(cart.id)}
                                >
                                  <MinusSvg />
                                </button>
                                <input
                                  type="text"
                                  className="border-grey border-2 border-solid mr-1 align-top"
                                  style={{
                                    width: 45,
                                    height: 25,
                                    color: "#000",
                                    textAlign: "center",
                                  }}
                                  value={cart.quantity}
                                  onChange={() => null}
                                />
                                <button
                                  className="border-grey border-2 rounded border-solid align-top"
                                  style={{ width: 25, height: 25 }}
                                  onClick={() => incrementItemCount(cart.id)}
                                >
                                  <PlusSvg />
                                </button>
                              </div>
                              <div className="flex justify-between p-1 py-5">
                                <div className="align-top">
                                  <span
                                    className="text-md font-bold align-top"
                                    style={{ color: "#618e3d" }}
                                  >
                                    {formatter(cart.totalPrice)} /-
                                  </span>
                                </div>
                                <div>
                                  <button
                                    className="align-top"
                                    style={{ width: 25, height: 25 }}
                                    onClick={() => deleteItemFromCart(cart.id)}
                                  >
                                    <RemoveSvg />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>
                  {cartItemsData?.length > 0 && (
                    <>
                      <div className="flex justify-between py-2">
                        <span
                          className="text-lg font-bold align-top"
                          style={{ color: "#000" }}
                        >
                          Total
                        </span>
                        <span
                          className="text-xl font-bold align-top"
                          style={{ color: "#618e3d" }}
                        >
                          {formatter(Number(totalCartPrice))} /-
                        </span>
                      </div>

                      <button
                        className=" flex w-full py-2 px-5 rounded justify-center "
                        style={{ background: "#618e3d" }}
                        onClick={() => {
                          !placeOrderClicked && placeOrder();
                        }}
                      >
                        {placeOrderClicked && <Loader />}
                        <span className="pr-2">Place Order</span>
                        <span className="flex">
                          <img
                            className="pr-2"
                            src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
                          />
                          <img src="https://cdn.gokwik.co/v4/images/right-arrow.svg" />
                        </span>
                      </button>
                      <span
                        style={{
                          color: "#618e3d",
                          justifyContent: "center",
                          display: "flex",
                        }}
                      >
                        100% Purchase Protection
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div
                style={{ cursor: "pointer", padding: "1px 6px" }}
                onClick={() => openNav()}
                className="self-center"
              >
                <BurgerMenuSvg />
              </div>
            </div>
          </div>
          <SideNav
            loader={props.loader}
            hasToken={hasToken}
            setShowModal={setShowModal}
            showMyRecc={showMyRecc}
          />
          {showModal ? (
            <LoginComponent
              hasToken={hasToken}
              loginCustomerName={loginCustomerName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          ) : null}
        </div>
      </nav>
    </>
  );
}
export default Header;
