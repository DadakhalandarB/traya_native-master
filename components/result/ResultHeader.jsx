import Image from "next/image";
import Loader from "../Loader";
import cartImage from "@assets/images/cart.png";

import Cookies from "js-cookie";
import { useEffect, useState, useContext } from "react";
import {
  DOCTOR_APPOINTMENT_FORM,
  GUEST_FORM,
  HINDI_FORM,
  MINI_FORM,
} from "@constants/routes";
import {
  TRAYA_BOOK_CALL_PAGE,
  TRAYA_GUEST_HOME_URL,
  TRAYA_HINDI_HOME_URL,
  TRAYA_HOME_URL,
  TRAYA_PAGES
} from "@constants/config";
import { TRAYA_MINI_HOME_URL, trayalogo } from "@constants/constants";
import { useRouter } from "next/navigation";
import { CartContext } from "@context/cart-store";
import { MD5 } from "crypto-js";

function ResultHeader(props) {
  const [pageURL, setPageURL] = useState("");
  const router = useRouter();
  const {
    cartItems,
    incrementItemCount,
    decrementItemCount,
    getItemCount,
    deleteItemFromCart,
  } = useContext(CartContext);

  useEffect(() => {
    const UTM = Cookies.get("__TRAYA_UTM__");
    const tempUTM = UTM?.split("&")
      ?.find((val) => val.includes("page"))
      ?.replace("page=", "");
    if (tempUTM === "homev2") {
      setPageURL(tempUTM);
    } else if (tempUTM === "femalev2") {
      setPageURL(tempUTM);
    } else if (tempUTM === "login") {
      setPageURL(tempUTM);
    } else {
      setPageURL(tempUTM ? tempUTM : "");
    }
  },[]);

  const logoURL = () => {
    if (pageURL == "femalev2") {
      return (
        typeof window !== "undefined" && window.location.assign("/femaleV2")
      );
    } else if (pageURL == "homev2") {
      return typeof window !== "undefined" && window.location.assign("/home");
    } else if (pageURL == "home") {
      return window.location.assign(TRAYA_HOME_URL);
    } else if (pageURL == "login") {
      return (
        typeof window !== "undefined" && window.location.assign("/user-account")
      );
    } else if (pageURL == "profile") {
      return (
        typeof window !== "undefined" &&
        window.location.assign("/user-account/profile")
      );
    } else if (router.pathname == "/result") {
      return typeof window !== "undefined" && window.location.assign("/home");
    }

    switch (typeof window !== "undefined" ? window.location.pathname : "") {
      case DOCTOR_APPOINTMENT_FORM:
        return TRAYA_BOOK_CALL_PAGE;
      case GUEST_FORM:
        return TRAYA_GUEST_HOME_URL;
      case HINDI_FORM:
        return TRAYA_HINDI_HOME_URL;
      case MINI_FORM:
        return TRAYA_MINI_HOME_URL;
      default:
        if (pageURL == "femalev2") {
          return (
            typeof window !== "undefined" && window.location.assign("/femaleV2")
          );
        } else if (pageURL == "homev2") {
          return (
            typeof window !== "undefined" && window.location.assign("/home")
          );
        } else if (pageURL == "home") {
          return TRAYA_HOME_URL;
        } else if (router.pathname == "/result") {
          return (
            typeof window !== "undefined" && window.location.assign("/home")
          );
        } else {
          return pageURL !== ""
            ? window.location.assign(`${TRAYA_PAGES}/${pageURL}`)
            : window.location.assign(TRAYA_HOME_URL);
        }
    }
  };
  useEffect(() => {
    if (props.showSidebar) {
      hideScrollFun();
    } else {
      showScrollFun();
    }
  }, [props.showSidebar]);

  const hideScrollFun = () => {
    document.documentElement.style.overflowY = "hidden";
    document.body.scroll = "no";
  };
  const showScrollFun = () => {
    document.documentElement.style.overflowY = "scroll";
    document.body.scroll = "yes";
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
      tempObj.item_brand = "Traya Health";
      tempObj.item_category = "Hair Care";
      tempObj.discount = "";
      tempObj.coupon = "";
      tempItem.push(tempObj);
    });

    if (cartItems.length > 0) {
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
    }
  };

  const handlePlaceOrderClicked = () => {
    console.log("handlePlaceOrderClicked");
    if (!props.placeOrderClicked) props.placeOrder(true, props.totalCartPrice);
  };

  return (
    <>
      <nav className="bg-custom-light-gray border-gray-200 w-full sticky top-0 z-50 flex items-center justify-between h-[42px]">
        <div className="flex flex-wrap justify-between items-center px-4 md:px-1 w-full">
          <div className="w-full flex flex-row justify-between pt-1">
            <div className="flex items-center xl:ml-12">
              <Image
                src={trayalogo}
                width={120}
                height={39}
                alt="Traya Logo"
                loader={props.loader}
                unoptimized={true}
              />
            </div>
            <div className="flex flex-row flex-row">
              <div className="flex">
                <div className=" self-center">
                  <div
                    className="relative mr-2"
                    onClick={() => showChartView()}
                  >
                    <Image
                      src={cartImage}
                      alt="sample"
                      loading="lazy"
                      width={25}
                      height={25}
                    />{" "}
                    <span className="cusBedge absolute -right-[5px] -top-[5px] rounded-full bg-[#ff0000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] text-center items-center">
                      {props.cartItemsCount}
                    </span>
                  </div>
                  <div
                    className={`sideBarScroll top-0 right-0 xl:w-[25vw] md:w-[25vw] xs:w-[97vw] bg-white p-3 text-white fixed h-full shadow-xl ease-in-out duration-300 z-50 ${
                      props.showSidebar
                        ? "translate-x-0 sideBarScroll"
                        : "translate-x-full"
                    }`}
                  >
                    <div className="ttlCart flex items-center">
                      <button
                        className="border-grey border-2 rounded border-solid mr-1 align-top relative"
                        style={{ width: 25, height: 25 }}
                        onClick={() => props.setShowSidebar(!props.showSidebar)}
                      >
                        <span className=" text-[#000] font-bold">X</span>
                      </button>
                      <h3
                        className=" text-gray-800 text-center w-full text-lg underline"
                        style={{ color: "#6a6a6a" }}
                      >
                        Your cart ({props.cartItemsCount})
                      </h3>
                    </div>
                    <div
                      className="mt-8"
                      style={{ overflow: "auto", height: "75%" }}
                    >
                      {props.cartItemsData?.length > 0 &&
                        props.cartItemsData?.map((cart, index) => (
                          <>
                            <div className="flex" key={cart.id}>
                              <a>
                                <Image
                                  src={cart.image_url}
                                  width={150}
                                  height={150}
                                  alt="Traya Logo"
                                  className="cursor-pointer"
                                  loader={props.loader}
                                  // unoptimized={true}
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
                                      className="border-grey border-2 rounded border-solid mr-1 align-top relative"
                                      style={{ width: 25, height: 25 }}
                                      onClick={() =>
                                        decrementItemCount(cart.id)
                                      }
                                    >
                                      <span className="absolute -top-[13px] left-[5px] text-[#000] text-[22px] font-bold">
                                        _
                                      </span>
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
                                    />
                                    <button
                                      className="border-grey border-2 rounded border-solid align-top relative"
                                      style={{ width: 25, height: 25 }}
                                      onClick={() =>
                                        incrementItemCount(cart.id)
                                      }
                                    >
                                      <span className="absolute -top-[7px] left-[5px] text-[#000] text-[22px] font-bold">
                                        +
                                      </span>
                                    </button>
                                  </div>
                                  <div className="flex justify-between p-1 py-5">
                                    <div className="align-top">
                                      <span
                                        className="text-md font-bold align-top"
                                        style={{ color: "#618e3d" }}
                                      >
                                        {props.formatter(cart.totalPrice)} /-
                                      </span>
                                    </div>
                                    <div>
                                      <button
                                        className="align-top"
                                        style={{ width: 25, height: 25 }}
                                        onClick={() =>
                                          deleteItemFromCart(cart.id)
                                        }
                                      >
                                        <div className="icon-trash">
                                          <div
                                            className="trash-lid"
                                            style={{
                                              backgroundColor: "#414042",
                                            }}
                                          ></div>
                                          <div
                                            className="trash-container"
                                            style={{
                                              backgroundColor: "#414042",
                                            }}
                                          ></div>
                                          <div className="trash-line-1"></div>
                                          <div className="trash-line-2"></div>
                                          <div className="trash-line-3"></div>
                                        </div>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </>
                        ))}
                      {props.cartItemsData?.length < 1 && (
                        <h3
                          className=" text-gray-800 text-center w-full text-lg"
                          style={{ color: "#6a6a6a" }}
                        >
                          Your cart is currently empty.
                        </h3>
                      )}
                    </div>
                    {props.cartItemsData?.length > 0 && (
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
                            {props.formatter(props.totalCartPrice)} /-
                          </span>
                        </div>

                        <button
                          className=" flex w-full py-2 px-5 rounded justify-center "
                          style={{ background: "#618e3d" }}
                          onClick={() => {
                            handlePlaceOrderClicked();
                          }}
                          id="CartDrawer-Checkout-native"
                        >
                          {props.placeOrderClicked && <Loader />}
                          <span className="pr-2">Place Order</span>
                          <span className="flex">
                            <img
                              className="pr-2"
                              src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
                              alt="upi traya"
                            />
                            <img
                              src="https://cdn.gokwik.co/v4/images/right-arrow.svg"
                              alt="upi traya"
                            />
                          </span>
                        </button>
                        <span
                          style={{
                            color: "#618e3d",
                            justifyContent: "center",
                            display: "flex",
                            marginTop: 5,
                          }}
                        >
                          100% Purchase Protection
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {/* <div className="self-center">
                  <a
                    id="exit"
                    className="text-2xl tracking-wide text-gray-50 cursor-pointer"
                    onClick={() => logoURL()}
                  >
                    Exit
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default ResultHeader;
