import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cart-store";
import { useRef } from "react";
import { fetchRequest } from "../helpers/fetchRequest";
import useMediaQuery from "./useMediaQuerry";
import { CDN_BASE_URL } from "../constants/config";
import { gtmEcommerce, userGTM } from "../helpers/gtmHelpers";
import dynamic from "next/dynamic";
import Router from "next/router";
import { CHALLENGE_API, VALIDATE_API } from "../constants/urls";
import { nunito } from "@/constants/fontConfig";
const DynamicLoader = dynamic(() => import("./Loader"));

function Header(props) {
  const [product, setProduct] = useState(false);
  const [scalpOil, setscalpOil] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsData, setCartItemsData] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
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

  const { cartItems, getItemCount, showMyRecc } = useContext(CartContext);
  useEffect(() => {
    if (Cookies.get("ACCESS_TOKEN")) {
      setHasToken(true);
      if (props.router === "/home") {
        window.location.assign("/user-account");
      }
    }
    let customName = window.localStorage.getItem("login_customer_name");
    setLoginCustomerName(customName);
  }, []);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    const newOtpValues = [...otp];
    newOtpValues[index] = value;

    if (value === "" && index > 0) {
      // Backspace pressed with empty value, move to previous input
      inputsRef.current[index - 1].focus();
      currentIndexRef.current = index - 1;
    } else if (index < 5 && value !== "") {
      // Move to next input when value is entered
      inputsRef.current[index + 1].focus();
      currentIndexRef.current = index + 1;
    }
    setOtp(newOtpValues);
  };

  const handleKeyDown = (index, event) => {
    if (event.keyCode === 8 && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
      currentIndexRef.current = index - 1;
    }
  };

  const onLoginClick = async () => {
    const _options = {
      method: "POST",
      body: JSON.stringify({
        transactionId: userData?.transactionId,
        token: otp.join(""),
      }),
    };

    const _res = await fetchRequest(VALIDATE_API, _options);
    if (_res.status == 200) {
      Cookies.set("ACCESS_TOKEN", _res.data?.accessToken, { expires: 7 });
      window.location.href = "/user-account";
      userGTM("login_Successful");
    } else {
      setError("Incorrect OTP!");
      userGTM("login_Fail");
    }
  };

  const onSendOTP = async () => {
    const _options = {
      method: "POST",
      body: JSON.stringify({ phone: "+91" + phoneNumber }),
    };

    const _res = await fetchRequest(CHALLENGE_API, _options);
    if (_res.status == 200) {
      setShowOTP(true);
      setSeconds(60);
      setUserData(_res.data);
    } else {
      setError("*You're Not Registered :(");
    }
    userGTM("resendOTP_Clicked");
  };

  useEffect(() => {
    if (seconds === null) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(intervalId);
      setSeconds(null);
    }
    return () => clearInterval(intervalId);
  }, [seconds]);

  useEffect(() => {
    const _totalPrice = props?.cartData?.reduce((acc, item) => {
      acc += Number(item.totalPrice);
      return acc;
    }, 0);
    setTotalCartPrice(_totalPrice);
    setCartItemsCount(getItemCount());
    setCartItemsData(props?.cartData);
  }, [cartItems]);

  const openNav = () => {
    document.getElementById("mySidenav").style.height = "100%";
    document.getElementById("mySidenav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.width = "100%";
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 70) {
      setColorchange(true);
    } else {
      setColorchange(false);
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

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeNavbarColor);
  }

  const handlePhoneNumber = (event) => {
    const limit = 10;
    setPhoneNumber(event.target.value.slice(0, limit));
  };

  const closeModal = () => {
    setShowModal(false);
    setPhoneNumber("");
    setError("");
    setOtp(new Array(6).fill(""));
    setShowOTP(false);
    setUserData("");
  };
  const showChartView = () => {
    window.dataLayer = [];
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
    // GTM nt_view_cart function
    let gtmObj = {
      totalPrice: totalPrice,
      cartData: tempItem,
    };
    gtmEcommerce(gtmObj, "nt_view_cart");
  };

  const deleteCookie = () => {
    document.cookie =
      "ACCESS_TOKEN" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    closeModal();
    if (typeof window !== "undefined") {
      window.location.href = "/home";
    }
    window.localStorage.removeItem("login_customer_name");
  };

  const mobileScreen = useMediaQuery("(max-width: 600px)");

  const mobileBannerImage = `${CDN_BASE_URL}website_images/commonImages/mega-menu-bg-m.webp`;
  const desktopBannerImage = `${CDN_BASE_URL}website_images/commonImages/mega-menu-bg-d.webp`;

  const [backgroundImage, setBackgroundImage] = useState();
  useEffect(() => {
    setBackgroundImage(mobileScreen ? mobileBannerImage : desktopBannerImage);
  }, [mobileScreen, mobileBannerImage, desktopBannerImage]);

  const _clearOtp = () => {
    setOtp(new Array(6).fill(""));
    setError("");
  };

  return (
    <>
      <nav
        className={
          colorChange
            ? "bg-custom-black w-full fixed top-0 z-50 pt-[0.3rem] pb-2"
            : `border-gray-200 w-full absolute top-0 z-50 py-2 ${
                props.login || props.doctor ? "bg-custom-black" : ""
              }`
        }
      >
        <div className="flex flex-wrap justify-between items-center px-4 md:px-6 xl:px-12">
          <div className="w-full flex flex-row justify-between">
            <div>
              <a
                href={hasToken ? `/user-account` : `https://traya.health/`}
                className="flex items-center mt-2 ml-7 xs:ml-2 xl:w-auto lg:w-auto md:w-auto w-24"
              >
                <Image
                  src={`${CDN_BASE_URL}website_images/localImages/traya.webp`}
                  alt="Traya Logo"
                  className="cursor-pointer"
                  loader={props.loader}
                  unoptimized={true}
                  width={128}
                  height={41}
                  loading="lazy"
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
              <div className="hidden xl:block md:block lg:block mr-3">
                {showMyRecc ? (
                  <a
                    href={
                      props.router == "/pages/female"
                        ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                        : `/result?id=${props.syntheticId}&page=homev2`
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        props.router == "/pages/female" ||
                          props.router == "/femaleV2"
                          ? "&page=female_native"
                          : "&page=homev2"
                      )
                    }
                    className={`flex text-[#fff] text-[19px] ${nunito.variable} font-bold rounded-lg uppercase`}
                  >
                    My Result
                  </a>
                ) : (
                  <a
                    href={
                      props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                        ? "/female?cohort=1&lcn=TopBar&page=female_native"
                        : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                    }
                    onClick={() =>
                      Cookies.set(
                        "__TRAYA_UTM__",
                        props.router == "/pages/female" ||
                          props.router == "/femaleV2"
                          ? "&page=female_native"
                          : "&page=homev2"
                      )
                    }
                    id={
                      props.router == "/pages/female" ||
                      props.router == "/femaleV2"
                        ? "female-hair-test-button1-native"
                        : "hairtestcta-native"
                    }
                    className="flex bg-[#fff] text-black hover:bg-[#3e3e3e] hover:text-white p-2 font-bold rounded-lg uppercase"
                  >
                    Take The Hair Test
                    <sup
                      style={{
                        fontSize: 9,
                        fontWeight: "bolder",
                        position: "relative",
                        top: 5,
                        left: 5,
                      }}
                    >
                      TM
                    </sup>
                  </a>
                )}
              </div>

              <div className="ml-2">
                <a href="https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+would+like+to+know+more+about+Traya&type=phone_number&app_absent=0">
                  <svg
                    fill="#FFFFFF"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="30px"
                    height="30px"
                    className="cursor-pointer"
                  >
                    <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                  </svg>
                </a>
              </div>
              <div className="p-[10px]">
                <a href="https://trayahealth.clickpost.ai/">
                  <svg
                    viewBox="0 0 32 32"
                    width="28px"
                    height="28px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    className="cursor-pointer"
                  >
                    <g id="_x31_8">
                      <path d="m25 17c.3544922 0 .6816406-.1875.8613281-.4921875.6914063-1.1738281 4.1386719-7.1455078 4.1386719-9.5078125 0-2.7568359-2.2431641-5-5-5s-5 2.2431641-5 5c0 2.3623047 3.4472656 8.3339844 4.1386719 9.5078125.1796875.3046875.5068359.4921875.8613281.4921875zm-2-10c0-1.1025391.8974609-2 2-2s2 .8974609 2 2-.8974609 2-2 2-2-.8974609-2-2z"></path>
                      <path d="m2 24c0 .3925781.2290039.7480469.5864258.9101563l10.9135742 5.0898437v-12.6799927l-11.5-5.3076782z"></path>
                      <path d="m23.2773438 17.015625c-.4242554-.7203369-1.0343018-1.7874756-1.6610718-2.9799194l-7.116272 3.2843017v12.6799927l10.9140625-5.0898438c.3564453-.1621093.5859375-.5175781.5859375-.9101562v-6.2712402c-.3001709.173706-.644104.2712402-1 .2712402-.7041016 0-1.3642578-.3769531-1.7226562-.984375z"></path>
                      <path d="m19.1824951 8.2574463-4.7689209-2.1676025c-.2626953-.1191406-.5644531-.1191406-.8271484 0 0 0-11.0543823 5.0366211-11.0830688 5.0532227l11.496643 5.3061523 7.1584473-3.3040161c-.8409424-1.6708985-1.6328125-3.4710084-1.9759522-4.8877564z"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="">
                <a
                  onClick={() => {
                    Router.push("/login");
                    userGTM("myProfile_Selected");
                  }}
                  className="cursor-pointer"
                >
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.599 3.07093C6.57216 3.07093 4.91384 4.72925 4.91384 6.75609C4.91384 8.78293 6.57216 10.4412 8.599 10.4412C10.6258 10.4412 12.2842 8.78293 12.2842 6.75609C12.2842 4.72925 10.6258 3.07093 8.599 3.07093ZM8.599 9.21286C7.24777 9.21286 6.14223 8.10731 6.14223 6.75609C6.14223 5.40487 7.24777 4.29932 8.599 4.29932C9.95022 4.29932 11.0558 5.40487 11.0558 6.75609C11.0558 8.10731 9.95022 9.21286 8.599 9.21286Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M8.5987 0C3.83888 0 0 3.83888 0 8.5987C0 10.9326 0.951999 13.0823 2.45677 14.6178C2.82529 14.9863 3.22451 15.3241 3.68516 15.6312C5.06709 16.6139 6.75612 17.1667 8.5987 17.1667C10.4413 17.1667 12.1301 16.5832 13.5122 15.6312C13.9422 15.3241 14.3414 14.9863 14.7406 14.6178C16.2761 13.0516 17.1974 10.9326 17.1974 8.5987C17.1974 3.83888 13.3585 0 8.5987 0ZM8.5987 15.969C6.75612 15.969 5.0978 15.2934 3.80799 14.1879C4.1458 13.0823 5.15922 12.2839 6.35689 12.2839H10.871C12.0687 12.2839 13.0821 13.0823 13.4199 14.1879C12.0994 15.2934 10.4411 15.969 8.59835 15.969H8.5987ZM14.3412 13.2051C13.6963 11.9153 12.3758 11.0555 10.871 11.0555H6.35689C4.82141 11.0555 3.5009 11.946 2.88671 13.2051C1.84258 11.946 1.22839 10.3491 1.22839 8.5987C1.22839 4.54503 4.54503 1.22839 8.5987 1.22839C12.6524 1.22839 15.969 4.54503 15.969 8.5987C15.969 10.3491 15.3548 11.946 14.3414 13.2051H14.3412Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </a>
              </div>
              <div className="p-[10px]">
                <div className="relative" onClick={() => showChartView()}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 36.489 33.416"
                    fill="#fff"
                  >
                    <defs
                      style={{
                        fill: "#fff",
                        stroke: "#fff",
                        strokeWidth: "0.3px",
                      }}
                    ></defs>
                    <g id="shopping-cart" transform="translate(0.15 0.15)">
                      <g
                        id="Group_123"
                        data-name="Group 123"
                        transform="translate(24.138 24.092)"
                      >
                        <g
                          id="Group_122"
                          data-name="Group 122"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_113"
                            data-name="Path 113"
                            className="cls-1"
                            d="M346.059,362.612a4.512,4.512,0,1,0,4.512,4.512A4.517,4.517,0,0,0,346.059,362.612Zm0,6.316a1.8,1.8,0,1,1,1.8-1.8A1.806,1.806,0,0,1,346.059,368.928Z"
                            transform="translate(-341.547 -362.612)"
                          ></path>
                        </g>
                      </g>
                      <g id="Group_125" data-name="Group 125">
                        <g
                          id="Group_124"
                          data-name="Group 124"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_114"
                            data-name="Path 114"
                            className="cls-1"
                            d="M35.9,28.36a1.352,1.352,0,0,0-1.066-.519H8.355l-1.218-5.1A1.354,1.354,0,0,0,5.82,21.7H1.354a1.353,1.353,0,1,0,0,2.707h3.4l4.4,18.406a1.354,1.354,0,0,0,1.317,1.039h21.07a1.353,1.353,0,0,0,1.314-1.028l3.294-13.31A1.356,1.356,0,0,0,35.9,28.36ZM30.478,41.15H11.535L9,30.548H33.1Z"
                            transform="translate(0 -21.705)"
                          ></path>
                        </g>
                      </g>
                      <g
                        id="Group_127"
                        data-name="Group 127"
                        transform="translate(7.76 24.092)"
                      >
                        <g
                          id="Group_126"
                          data-name="Group 126"
                          transform="translate(0 0)"
                        >
                          <path
                            id="Path_115"
                            data-name="Path 115"
                            className="cls-1"
                            d="M114.318,362.612a4.512,4.512,0,1,0,4.512,4.512A4.517,4.517,0,0,0,114.318,362.612Zm0,6.316a1.8,1.8,0,1,1,1.8-1.8A1.806,1.806,0,0,1,114.318,368.928Z"
                            transform="translate(-109.806 -362.612)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span className="cusBedge absolute -right-[5px] -top-[5px] rounded-full bg-[#ff0000] w-4 h-4 top right p-0 m-0 text-white font-mono text-[10px] text-center items-center">
                    {props.cartItemCount}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 25"
                      width="18px"
                      height="18px"
                      onClick={() => props.setShowSidebar(!props.showSidebar)}
                      className="cursor-pointer"
                    >
                      <path
                        d="M11 0.7H13V23.3H11z"
                        transform="rotate(-45.001 12 12)"
                        fill="#414042"
                      />
                      <path
                        d="M0.7 11H23.3V13H0.7z"
                        transform="rotate(-45.001 12 12)"
                        fill="#414042"
                      />
                    </svg>
                    <h3
                      className=" text-gray-800 text-center w-full text-lg underline"
                      style={{ color: "#6a6a6a" }}
                    >
                      Your cart ({props.cartItemCount})
                    </h3>
                  </div>
                  <div
                    className="mt-8"
                    style={{ overflow: "auto", height: "75%" }}
                  >
                    {props.cartData?.length > 0 &&
                      props.cartData?.map((cart, index) => (
                        <div key={cart.id}>
                          <div className="flex">
                            <a>
                              <Image
                                src={cart.image}
                                width={150}
                                height={150}
                                alt="Traya Logo"
                                className="cursor-pointer"
                                loader={props.loader}
                                unoptimized={true}
                                loading="lazy"
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
                                    onClick={() => props.decItem(cart, index)}
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
                                    value={cart.itemCount}
                                  />
                                  <button
                                    className="border-grey border-2 rounded border-solid align-top relative"
                                    style={{ width: 25, height: 25 }}
                                    onClick={() => props.incItem(cart, index)}
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
                                        props.deleteItem(cart, index)
                                      }
                                    >
                                      <div className="icon-trash">
                                        <div
                                          className="trash-lid"
                                          style={{ backgroundColor: "#414042" }}
                                        ></div>
                                        <div
                                          className="trash-container"
                                          style={{ backgroundColor: "#414042" }}
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
                        </div>
                      ))}
                    {props.cartItemsData?.length < 1 && (
                      <>
                        <h3
                          className="font-bold text-center text-lg"
                          style={{ color: "#414042" }}
                        >
                          Your cart is currently empty
                        </h3>
                      </>
                    )}
                  </div>
                  {props.cartData?.length > 0 && (
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
                          {props.formatter(props.totalPrice)} /-
                        </span>
                      </div>

                      <button
                        className=" flex w-full py-2 px-5 rounded justify-center "
                        style={{ background: "#618e3d" }}
                        onClick={() => {
                          !props.placeOrderClicked && props.placeOrder();
                        }}
                      >
                        {props.placeOrderClicked && <DynamicLoader />}
                        <span className="pr-2">Place Order</span>
                        <span className="flex">
                          <img
                            className="pr-2"
                            src="https://cdn.gokwik.co/v4/images/upi-icons.svg"
                            alt="upi"
                          />
                          <img
                            src="https://cdn.gokwik.co/v4/images/right-arrow.svg"
                            alt="upi"
                          />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33px"
                  viewBox="0 0 39 25"
                  fill="#fff"
                  stroke="#fff"
                  className="self-end"
                >
                  <g id="Group_72" transform="translate(-1179.943 -36.428)">
                    <path
                      d="M0 0L39.476 0"
                      transform="translate(1179.943 38.747)"
                      strokeWidth={5}
                    />
                    <path
                      d="M0 0L39.476 0"
                      transform="translate(1179.943 49.294)"
                      strokeWidth={5}
                    />
                    <path
                      d="M0 0L39.476 0"
                      transform="translate(1179.943 59.842)"
                      strokeWidth={5}
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="sidenav"
            id="mySidenav"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            <ul className="xl:flex lg:flex md:flex hidden">
              <div className="flex flex-col xl:w-full">
                <a href="/">
                  <div className="xl:w-48 md:w-48 xs:w-24  xl:px-11 xs:ml-3 py-6">
                    <Image
                      src={`${CDN_BASE_URL}website_images/localImages/TrayaLogoDark.webp`}
                      alt="trayalogo"
                      loader={props.loader}
                      unoptimized={true}
                      height={75}
                      width={240}
                      loading="lazy"
                    />
                  </div>
                </a>
                <div className="flex flex-wrap w-full xl:justify-end md:justify-end lg:justify-end xs:justify-start">
                  <div className=" flex flex-col xl:p-12 xs:px-4 xs:py-6 text-white xs:-mt-20 xl:mr-1  text-left">
                    <h3 className="uppercase text-custom-black font-semibold xl:text-lg xl:mt-5 md:mt-12 xs:mt-12 text-left">
                      {" "}
                      what we do
                    </h3>
                    <p className="text-gray-600 mt-5 text-left xl:text-lg w-8/12">
                      {" "}
                      We help you take control of your hairloss in a
                      personalised, and scientific way.
                    </p>
                    {showMyRecc && (
                      <a
                        href={
                          props.router == "/pages/female" ||
                          props.router == "/femaleV2"
                            ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                            : `/result?id=${props.syntheticId}&page=homev2`
                        }
                        onClick={() =>
                          Cookies.set(
                            "__TRAYA_UTM__",
                            props.router == "/pages/female" ||
                              props.router == "/femaleV2"
                              ? "&page=female_native"
                              : "&page=homev2"
                          )
                        }
                      >
                        <button className="font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                          My Result
                        </button>
                      </a>
                    )}
                    <a href="https://trayahealth.clickpost.ai/">
                      <button className="font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        TRACK ORDER
                      </button>
                    </a>
                    <a href="https://myrecords.traya.health/">
                      <button className=" font-semibold text-custom-black mt-5 border border-black   xs:p-1 text-center rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        {" "}
                        MY PLAN
                      </button>
                    </a>
                    <a
                      href={
                        props.router == "/pages/female" ||
                        props.router == "/femaleV2"
                          ? "/female?cohort=1&lcn=TopBar&page=female_native"
                          : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                      }
                      onClick={() =>
                        Cookies.set(
                          "__TRAYA_UTM__",
                          props.router == "/pages/female" ||
                            props.router == "/femaleV2"
                            ? "&page=female_native"
                            : "&page=homev2"
                        )
                      }
                    >
                      <button className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        {" "}
                        HAIR TEST <sup> TM</sup>
                      </button>
                    </a>
                    <a
                      className=""
                      href="https://traya.health/collections/all-products"
                    >
                      <button className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        TRAYA COMBOS
                      </button>
                    </a>
                    <a href="https://traya.health/pages/refund-policy">
                      <button className="mt-5 border border-black  xs:p-1 xs:px-2 text-center font-semibold text-custom-black  rounded-lg w-fit hover:bg-custom-black hover:text-white">
                        5 MONTH MONEY BACK GUARANTEE
                      </button>
                    </a>{" "}
                    <a
                      onClick={() => {
                        if (!hasToken) {
                          setShowModal(true);
                        } else if (hasToken) {
                          deleteCookie();
                        }
                      }}
                    >
                      <button className="mt-5 border border-black  xs:p-1 text-center font-semibold text-custom-black  rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        {!hasToken ? "LOG IN" : "LOG OUT"}
                      </button>
                    </a>
                    <a href="https://traya.health/pages/referral">
                      <button className="mt-5 border border-black  xs:p-1 text-center font-semibold text-custom-black  rounded-lg xl:w-2/6 hover:bg-custom-black hover:text-white">
                        {" "}
                        REFERRAL
                      </button>
                    </a>
                    <div className="">
                      <button
                        onClick={() => setProduct(!product)}
                        className="mt-5 border border-black  xs:p-1 text-center font-semibold  text-custom-black rounded-lg w-fit hover:bg-custom-black hover:text-white flex items-center justify-center"
                      >
                        PRODUCTS
                        {product ? (
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="downArrowMobHead"
                          >
                            <path
                              d="M5.12793 1L0.612043 4.66916C0.29631 4.92569 0.296311 5.40764 0.612043 5.66418L5.12793 9.33333"
                              stroke="black"
                              strokeWidth="0.641026"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 8 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 0.5L6.78456 5.12765C7.10533 5.38427 7.10533 5.87214 6.78456 6.12876L1 10.7564"
                              stroke="black"
                              strokeWidth="0.641026"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        )}
                      </button>
                      <div
                        className={
                          product
                            ? "flex xl:flex-row md:flex-col xs:flex-col transition delay-700 duration-300 ease-in xl:items-start xl:ml-32"
                            : "hidden"
                        }
                      >
                        <div className="flex flex-col justify-center xl:mr-12">
                          <a
                            href="https://traya.health/products/hair-growth-herbs"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Hair Ras
                            <span>
                              <hr className="w-16 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/hair-vitamins"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Hair Vitamin
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/traya-minoxidil-5"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Minoxidil 5%
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/minoxidil-2"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Minoxidil 2%
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700 xl:text-sm"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/herbal-tablets"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Health Tatva
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/shampoo"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Defence Shampoo
                            <span>
                              <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/ketoconazole-2-night-lotion"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Anti Dandruff Lotion
                            <span>
                              <hr className="w-36 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/consti-clear-for-improved-bowel-movement"
                            className="text-black mt-4 xl:text-sm"
                          >
                            Consti clear
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/cholest-vati-natural-metabolic-booster-that-lowers-cholesterol"
                            className="text-black mt-4 "
                          >
                            Cholest vati
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                        </div>
                        <div className="flex flex-col justify-center ">
                          <a
                            href="https://traya.health/products/avipattikar-digestion-tablets"
                            className="text-black mt-4 "
                          >
                            {" "}
                            Gut Shuddhi
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/shatavari-ghrita"
                            className="text-black mt-4 "
                          >
                            Nasal Drops
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/recap-serum-for-hair-fall-control"
                            className="text-black mt-4 "
                          >
                            Re Cap Serum
                            <span>
                              <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/anti-dandruff-shampoo"
                            className="text-black mt-4 "
                          >
                            Anti-Dandruff Shampoo
                            <span>
                              <hr className="w-44 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/digest-boost-for-improved-digestive-ability-traya-health"
                            className="text-black mt-4 "
                          >
                            Digest Boost
                            <span>
                              <hr className="w-24 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall"
                            className="text-black mt-4 "
                          >
                            Meno Santulan
                            <span>
                              <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period"
                            className="text-black mt-4 "
                          >
                            Mom Santulan
                            <span>
                              <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss"
                            className="text-black mt-4 "
                          >
                            PCOS Santulan
                            <span>
                              <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            href="https://traya.health/products/thyro-santulan-tablets-for-supporting-thyroid-health"
                            className="text-black mt-4 "
                          >
                            Thyro Santulan
                            <span>
                              <hr className="w-28 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>{" "}
                          </a>
                          <a
                            onClick={() => setscalpOil(!scalpOil)}
                            className="text-black mt-4 cursor-pointer "
                          >
                            <div className="flex flex-row items-center">
                              <p> Scalp Oil &nbsp; | &nbsp;</p>
                              {scalpOil ? (
                                <svg
                                  width="14"
                                  height="16"
                                  viewBox="0 0 6 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M5.12793 1L0.612043 4.66916C0.29631 4.92569 0.296311 5.40764 0.612043 5.66418L5.12793 9.33333"
                                    stroke="black"
                                    strokeWidth="0.641026"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  width="14"
                                  height="16"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M1 0.5L6.78456 5.12765C7.10533 5.38427 7.10533 5.87214 6.78456 6.12876L1 10.7564"
                                    stroke="black"
                                    strokeWidth="0.641026"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              )}
                            </div>
                            <span>
                              <hr className="w-16 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                            </span>
                            {scalpOil && (
                              <div className="flex flex-col xl:ml-16 ">
                                <a
                                  href="https://traya.health/products/scalp-oil-with-growth-therapy-booster-shots"
                                  className="text-black mt-4 "
                                >
                                  Growth therapy + scalp oil
                                  <span>
                                    <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                                  </span>{" "}
                                </a>
                                <a
                                  href="https://traya.health/products/scalp-oil-with-calm-therapy-booster-shots"
                                  className="text-black mt-4 "
                                >
                                  Calm therapy + scalp oil
                                  <span>
                                    <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                                  </span>{" "}
                                </a>
                                <a
                                  href="https://traya.health/products/scalp-oil-with-dandruff-therapy-booster-shots"
                                  className="text-black mt-4 "
                                >
                                  Dandruff therapy + scalp oil
                                  <span>
                                    <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                                  </span>{" "}
                                </a>
                                <a
                                  href="https://traya.health/products/scalp-oil-with-scalp-therapy-booster-shots"
                                  className="text-black mt-4 "
                                >
                                  Scalp therapy + scalp oil
                                  <span>
                                    <hr className="w-48 h-0.5  bg-black border-0 rounded dark:bg-gray-700"></hr>
                                  </span>
                                </a>
                              </div>
                            )}
                          </a>
                        </div>
                      </div>
                      {/* )} */}
                    </div>
                  </div>
                  <div className="text-gray-600 xl:-mt-16 xl:p-12 xs:px-4 xl:ml-12  xs:-mr-1 xs:-mt-2 pb-20">
                    <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2">
                      how we do it
                    </h3>
                    <a
                      href="https://traya.health/pages/the-science"
                      className="  hover:underline"
                    >
                      <p className="hover:underline text-left text-black">
                        Traya Science
                      </p>
                    </a>
                    <a href="https://traya.health/pages/traya-ingredients">
                      <p className="mt-2 hover:underline text-left text-black">
                        {" "}
                        Ingredient
                      </p>
                    </a>
                    <a href="https://traya.health/pages/reviews">
                      {" "}
                      <p className="mt-2 hover:underline text-left text-black">
                        {" "}
                        Reviews
                      </p>
                    </a>
                    <a href="https://traya.health/pages/customer-stories">
                      <p className="mt-2 mb-10 hover:underline text-left text-black">
                        Hero&apos;s page
                      </p>
                    </a>
                    <h3 className="uppercase text-custom-black text-lg  text-left font-bold mt-5 mb-2">
                      WHO WE ARE
                    </h3>
                    <a href="https://traya.health/pages/about-us ">
                      <p className="mt-2 hover:underline text-left text-black">
                        {" "}
                        About Us
                      </p>
                    </a>
                    <a href="https://traya.health/pages/our-experts">
                      <p className="mt-2 hover:underline text-left text-black">
                        {" "}
                        Our Experts
                      </p>
                    </a>
                    <a href="https://traya.health/blogs/hair-care">
                      <p className="mt-2 hover:underline text-left text-black">
                        Blog
                      </p>
                    </a>
                    <h3 className="uppercase text-custom-black text-lg font-bold mt-5 mb-2 text-left ">
                      get in touch
                    </h3>
                    <div className="flex flex-wrap flex-row justify-between items-center ">
                      <a href="https://www.instagram.com/traya.health/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27.161 27.161"
                          fill="#6d6e71"
                        >
                          <defs></defs>
                          <g
                            id="Group_28"
                            data-name="Group 28"
                            transform="translate(-887.363 -441.945)"
                          >
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              className="cls-1"
                              d="M910,441.945H891.89a4.527,4.527,0,0,0-4.527,4.527V464.58a4.526,4.526,0,0,0,4.527,4.526H910a4.526,4.526,0,0,0,4.527-4.526V446.472A4.527,4.527,0,0,0,910,441.945Zm2.264,22.635A2.264,2.264,0,0,1,910,466.843H891.89a2.263,2.263,0,0,1-2.263-2.263V446.472a2.263,2.263,0,0,1,2.263-2.263H910a2.264,2.264,0,0,1,2.264,2.263Z"
                            />
                            <path
                              id="Path_16"
                              data-name="Path 16"
                              className="cls-1"
                              d="M900.944,448.736a6.79,6.79,0,1,0,6.79,6.79A6.791,6.791,0,0,0,900.944,448.736Zm0,11.317a4.527,4.527,0,1,1,4.527-4.527A4.527,4.527,0,0,1,900.944,460.053Z"
                            />
                            <circle
                              id="Ellipse_4"
                              data-name="Ellipse 4"
                              className="cls-1"
                              cx="1.698"
                              cy="1.698"
                              r="1.698"
                              transform="translate(906.602 446.472)"
                            />
                          </g>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/traya.health/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27.161 27.161"
                          fill="#6d6e71"
                        >
                          <g
                            id="Group_29"
                            data-name="Group 29"
                            transform="translate(-934.716 -441.945)"
                          >
                            <g id="Group_20" data-name="Group 20">
                              <path
                                id="Path_17"
                                data-name="Path 17"
                                className="cls-1"
                                d="M953.475,454.958h3.379c-.017.166-.032.321-.05.476q-.168,1.475-.337,2.949c-.012.1-.034.208-.037.312,0,.085-.036.1-.116.1-.442,0-.885,0-1.327,0h-1.4c-.033,0-.066,0-.112.005v8.625h-3.844v-8.622H946.76v-3.847h2.871v-.149c0-.761-.014-1.523.006-2.283a4.511,4.511,0,0,1,.86-2.663,3.941,3.941,0,0,1,2.174-1.434,5.546,5.546,0,0,1,1.445-.187,25.122,25.122,0,0,1,2.515.116l.128.015v3.05c-.292,0-.58,0-.867,0-.412,0-.825,0-1.237.017a1.949,1.949,0,0,0-.452.079.912.912,0,0,0-.7.925c-.029.527-.022,1.056-.028,1.584C953.472,454.333,953.475,454.636,953.475,454.958Z"
                              />
                            </g>
                            <path
                              id="Path_18"
                              data-name="Path 18"
                              className="cls-1"
                              d="M957.35,441.945H939.243a4.527,4.527,0,0,0-4.527,4.527V464.58a4.526,4.526,0,0,0,4.527,4.526H957.35a4.526,4.526,0,0,0,4.527-4.526V446.472A4.527,4.527,0,0,0,957.35,441.945Zm2.264,22.635a2.264,2.264,0,0,1-2.264,2.263H939.243a2.264,2.264,0,0,1-2.264-2.263V446.472a2.264,2.264,0,0,1,2.264-2.263H957.35a2.264,2.264,0,0,1,2.264,2.263Z"
                            />
                          </g>
                        </svg>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=918828006272&utm_source=chatwas&utm_medium=chat&utm_campaign=chatbot">
                        <svg
                          fill="#6d6e71"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="32px"
                          height="32px"
                          fillRule="evenodd"
                        >
                          <path
                            fillRule="evenodd"
                            d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => closeNav()}
                style={{ padding: 10, cursor: "pointer" }}
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 40 40"
                  className="h-5 w-5"
                >
                  <path
                    d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
                    className="closeNavImg"
                  ></path>
                </svg>
              </div>
            </ul>
            <ul className="xl:hidden lg:hidden md:hidden ">
              <div className="flex flex-col xl:w-full xs:px-2">
                <div className="flex justify-between">
                  <a href="/">
                    <div className="w-[125px] xl:px-11 xs:ml-3 py-6">
                      <Image
                        src={`${CDN_BASE_URL}website_images/localImages/TrayaLogoDark.webp`}
                        alt="trayalogo"
                        loader={props.loader}
                        unoptimized={true}
                        height={75}
                        width={240}
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <div
                    onClick={() => closeNav()}
                    style={{ padding: 10, cursor: "pointer" }}
                    className="absolute right-10 top-5 block xl:hidden lg:hidden md:hidden"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 40 40"
                      className="h-5 w-5"
                    >
                      <path
                        d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
                        className="closeNavImg"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="flex flex-wrap w-full xl:justify-end md:justify-end lg:justify-end xs:justify-start">
                  <div className=" flex flex-col  xs:px-4 xs:py-3 text-white xs:-mt-20 xl:mr-1  text-left">
                    <h3
                      className={`uppercase text-[#414042] font-bold xl:mt-5 md:mt-12 xs:mt-12 text-left text-[15px] ${nunito.variable}o`}
                    >
                      what we do
                    </h3>
                    <p className="text-[#414042] mt-1 text-left text-[14px] w-12/12">
                      We help you take control of your hairloss in a
                      personalised, and scientific way.
                    </p>
                    <div className="flex justify-between w-11/12 mt-5">
                      <div className="w-5/12">
                        {showMyRecc && (
                          <a
                            href={
                              props.router == "/pages/female" ||
                              props.router == "/femaleV2"
                                ? `https://traya.health/pages/female-result?id=${props.syntheticId}&page=female_native`
                                : `/result?id=${props.syntheticId}&page=homev2`
                            }
                            onClick={() =>
                              Cookies.set(
                                "__TRAYA_UTM__",
                                props.router == "/pages/female" ||
                                  props.router == "/femaleV2"
                                  ? "&page=female_native"
                                  : "&page=homev2"
                              )
                            }
                          >
                            <button className="text-[#414042] w-full mt-2  xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                              My Result
                            </button>
                          </a>
                        )}
                        <a href="https://trayahealth.clickpost.ai/">
                          <button className="text-[#414042] w-full mt-2  xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Track Order
                          </button>
                        </a>
                        <a
                          href={
                            props.router == "/pages/female" ||
                            props.router == "/femaleV2"
                              ? "/female?cohort=1&lcn=TopBar&page=female_native"
                              : "/home/question?cohort=1&lcn=TopBar&page=homev2"
                          }
                          onClick={() =>
                            Cookies.set(
                              "__TRAYA_UTM__",
                              props.router == "/pages/female" ||
                                props.router == "/femaleV2"
                                ? "&page=female_native"
                                : "&page=homev2"
                            )
                          }
                        >
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            {" "}
                            Hair Test <sup> Tm</sup>
                          </button>
                        </a>
                        <a href="https://traya.health/pages/refund-policy">
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042] capitalize leading-[25px]">
                            5 Month Money Back Guarantee
                          </button>
                        </a>
                      </div>
                      <div className="w-5/12">
                        <a href="https://myrecords.traya.health/">
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            My Plan
                          </button>
                        </a>
                        <a
                          href="https://traya.health/collections/all-products"
                          className=""
                        >
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Traya Combos
                          </button>
                        </a>

                        <a
                          onClick={() => {
                            if (!hasToken) {
                              setShowModal(true);
                            } else if (hasToken) {
                              deleteCookie();
                            }
                          }}
                        >
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            {!hasToken ? "Log In" : "Log Out"}
                          </button>
                        </a>
                        <a href="https://traya.health/pages/referral">
                          <button className="text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Referral
                          </button>
                        </a>
                        <div className="">
                          <button
                            onClick={() => setProduct(!product)}
                            className="flex justify-between text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px]"
                          >
                            Products
                            {product ? (
                              <svg
                                width="14"
                                height="16"
                                viewBox="0 0 6 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-90"
                              >
                                <path
                                  d="M5.12793 1L0.612043 4.66916C0.29631 4.92569 0.296311 5.40764 0.612043 5.66418L5.12793 9.33333"
                                  stroke="black"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            ) : (
                              <svg
                                width="14"
                                height="16"
                                viewBox="0 0 8 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="rotate-90"
                              >
                                <path
                                  d="M1 0.5L6.78456 5.12765C7.10533 5.38427 7.10533 5.87214 6.78456 6.12876L1 10.7564"
                                  stroke="black"
                                  strokeWidth="1"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                    {product && (
                      <div className="flex justify-between w-11/12">
                        <div className="w-5/12">
                          <a href="https://traya.health/products/hair-growth-herbs">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Hair Ras
                            </button>
                          </a>
                          <a href="https://traya.health/products/consti-clear-for-improved-bowel-movement">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Consti clear
                            </button>
                          </a>
                          <a href="https://traya.health/products/traya-minoxidil-5">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Minoxidil 5%
                            </button>
                          </a>
                          <a href="https://traya.health/products/shampoo">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Defence Shampoo
                            </button>
                          </a>
                          <a href="https://traya.health/products/avipattikar-digestion-tablets">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Gut Shuddhi
                            </button>
                          </a>
                          <a href="https://traya.health/products/recap-serum-for-hair-fall-control">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Re Cap Serum
                            </button>
                          </a>
                          <a href="https://traya.health/products/ketoconazole-2-night-lotion">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Anti Dandruff lotion
                            </button>
                          </a>
                          <a href="https://traya.health/products/meno-santulan-tablets-for-menopause-support-and-menopausal-hair-fall">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Meno Santulan
                            </button>
                          </a>
                          <a href="https://traya.health/products/thyro-santulan-tablets-for-supporting-thyroid-health">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Thyro Santulan
                            </button>
                          </a>
                          <div className="">
                            <button
                              onClick={() => setscalpOil(!scalpOil)}
                              className="flex justify-between text-[#414042] w-full mt-2 xs:p-1 text-left text-[14px]"
                            >
                              Scalp Oil
                              {scalpOil ? (
                                <svg
                                  width="14"
                                  height="16"
                                  viewBox="0 0 6 10"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="rotate-90"
                                >
                                  <path
                                    d="M5.12793 1L0.612043 4.66916C0.29631 4.92569 0.296311 5.40764 0.612043 5.66418L5.12793 9.33333"
                                    stroke="black"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              ) : (
                                <svg
                                  width="14"
                                  height="16"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="rotate-90"
                                >
                                  <path
                                    d="M1 0.5L6.78456 5.12765C7.10533 5.38427 7.10533 5.87214 6.78456 6.12876L1 10.7564"
                                    stroke="black"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              )}
                            </button>
                          </div>
                        </div>
                        <div className="w-5/12">
                          <a href="https://traya.health/products/consti-clear-for-improved-bowel-movement">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Cholest vati
                            </button>
                          </a>
                          <a href="https://traya.health/products/hair-vitamins">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Hair Vitamin
                            </button>
                          </a>
                          <a href="https://traya.health/products/minoxidil-2">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Minoxidil 2%
                            </button>
                          </a>
                          <a href="https://traya.health/products/herbal-tablets">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Health Tatva
                            </button>
                          </a>
                          <a href="https://traya.health/products/shatavari-ghrita">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Nasal Drops
                            </button>
                          </a>
                          <a href="https://traya.health/products/anti-dandruff-shampoo">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Anti-Dandruff Shampoo
                            </button>
                          </a>
                          <a href="https://traya.health/products/digest-boost-for-improved-digestive-ability-traya-health">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Digest Boost
                            </button>
                          </a>
                          <a href="https://traya.health/products/pcos-santulan-for-pcos-and-hormone-related-hair-loss">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              PCOS Santulan
                            </button>
                          </a>
                          <a href="https://traya.health/products/mom-santulan-tablets-for-hair-fall-in-post-pregnancy-or-post-childbirth-period">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Mom Santulan
                            </button>
                          </a>
                        </div>
                      </div>
                    )}
                    {scalpOil && (
                      <div className="flex justify-between w-11/12">
                        <div className="w-7/12">
                          <a href="https://traya.health/products/scalp-oil-with-growth-therapy-booster-shots">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Growth therapy + scalp oil
                            </button>
                          </a>
                          <a href="https://traya.health/products/scalp-oil-with-calm-therapy-booster-shots">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Calm therapy + scalp oil
                            </button>
                          </a>
                          <a href="https://traya.health/products/scalp-oil-with-dandruff-therapy-booster-shots">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Dandruff therapy + scalp oil
                            </button>
                          </a>
                          <a href="https://traya.health/products/scalp-oil-with-scalp-therapy-booster-shots">
                            <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[13px] border-b-[0.5px] border-[#414042]">
                              Scalp therapy + scalp oil
                            </button>
                          </a>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between w-11/12">
                      <div className="w-5/12">
                        <h3 className="uppercase text-custom-black text-[15px] font-bold mt-5 mb-2">
                          how we do it
                        </h3>
                        <a href="https://traya.health/pages/the-science">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Traya Science
                          </button>
                        </a>
                        <a href="https://traya.health/pages/traya-ingredients">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Ingredients
                          </button>
                        </a>
                        <a href="https://traya.health/pages/reviews">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Reviews
                          </button>
                        </a>
                        <a href="https://traya.health/pages/customer-stories">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Hero&apos;s Page
                          </button>
                        </a>
                      </div>
                      <div className="w-5/12">
                        <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2">
                          WHO WE ARE
                        </h3>
                        <a href="https://traya.health/pages/about-us ">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            About Us
                          </button>
                        </a>
                        <a href="https://traya.health/pages/our-experts">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Our Experts
                          </button>
                        </a>
                        <a href="https://traya.health/blogs/hair-care">
                          <button className="text-[#000] w-full mt-2 xs:p-1 text-left text-[14px] border-b-[0.5px] border-[#414042]">
                            Blog
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-600 xl:-mt-16 xl:p-12 xs:px-4 xl:ml-12 ">
                    <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2 ">
                      get in touch
                    </h3>
                    <div className="flex flex-wrap flex-row justify-between items-center ">
                      <a href="https://www.instagram.com/traya.health/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27.161 27.161"
                          fill="#6d6e71"
                        >
                          <defs></defs>
                          <g
                            id="Group_28"
                            data-name="Group 28"
                            transform="translate(-887.363 -441.945)"
                          >
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              className="cls-1"
                              d="M910,441.945H891.89a4.527,4.527,0,0,0-4.527,4.527V464.58a4.526,4.526,0,0,0,4.527,4.526H910a4.526,4.526,0,0,0,4.527-4.526V446.472A4.527,4.527,0,0,0,910,441.945Zm2.264,22.635A2.264,2.264,0,0,1,910,466.843H891.89a2.263,2.263,0,0,1-2.263-2.263V446.472a2.263,2.263,0,0,1,2.263-2.263H910a2.264,2.264,0,0,1,2.264,2.263Z"
                            />
                            <path
                              id="Path_16"
                              data-name="Path 16"
                              className="cls-1"
                              d="M900.944,448.736a6.79,6.79,0,1,0,6.79,6.79A6.791,6.791,0,0,0,900.944,448.736Zm0,11.317a4.527,4.527,0,1,1,4.527-4.527A4.527,4.527,0,0,1,900.944,460.053Z"
                            />
                            <circle
                              id="Ellipse_4"
                              data-name="Ellipse 4"
                              className="cls-1"
                              cx="1.698"
                              cy="1.698"
                              r="1.698"
                              transform="translate(906.602 446.472)"
                            />
                          </g>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/traya.health/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="27"
                          viewBox="0 0 27.161 27.161"
                          fill="#6d6e71"
                        >
                          <g
                            id="Group_29"
                            data-name="Group 29"
                            transform="translate(-934.716 -441.945)"
                          >
                            <g id="Group_20" data-name="Group 20">
                              <path
                                id="Path_17"
                                data-name="Path 17"
                                className="cls-1"
                                d="M953.475,454.958h3.379c-.017.166-.032.321-.05.476q-.168,1.475-.337,2.949c-.012.1-.034.208-.037.312,0,.085-.036.1-.116.1-.442,0-.885,0-1.327,0h-1.4c-.033,0-.066,0-.112.005v8.625h-3.844v-8.622H946.76v-3.847h2.871v-.149c0-.761-.014-1.523.006-2.283a4.511,4.511,0,0,1,.86-2.663,3.941,3.941,0,0,1,2.174-1.434,5.546,5.546,0,0,1,1.445-.187,25.122,25.122,0,0,1,2.515.116l.128.015v3.05c-.292,0-.58,0-.867,0-.412,0-.825,0-1.237.017a1.949,1.949,0,0,0-.452.079.912.912,0,0,0-.7.925c-.029.527-.022,1.056-.028,1.584C953.472,454.333,953.475,454.636,953.475,454.958Z"
                              />
                            </g>
                            <path
                              id="Path_18"
                              data-name="Path 18"
                              className="cls-1"
                              d="M957.35,441.945H939.243a4.527,4.527,0,0,0-4.527,4.527V464.58a4.526,4.526,0,0,0,4.527,4.526H957.35a4.526,4.526,0,0,0,4.527-4.526V446.472A4.527,4.527,0,0,0,957.35,441.945Zm2.264,22.635a2.264,2.264,0,0,1-2.264,2.263H939.243a2.264,2.264,0,0,1-2.264-2.263V446.472a2.264,2.264,0,0,1,2.264-2.263H957.35a2.264,2.264,0,0,1,2.264,2.263Z"
                            />
                          </g>
                        </svg>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=918828006272&utm_source=chatwas&utm_medium=chat&utm_campaign=chatbot">
                        <svg
                          fill="#6d6e71"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="32px"
                          height="32px"
                          fillRule="evenodd"
                        >
                          <path
                            fillRule="evenodd"
                            d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-between w-11/12 px-4 pb-5">
                    <div className="w-6/12">
                      <h3 className="uppercase text-[#414042] text-[15px] font-bold mt-5 mb-2 text-left">
                        EXPERIENCE THE <br />
                        TRAYA MOBILE APP
                      </h3>
                      <a
                        href="https://trayahealth.app.link/xT3UrtZDvyb"
                        className="xl:w-[158px] xl:h-[48px]"
                      >
                        <Image
                          src={`${CDN_BASE_URL}website_images/localImages/app_store.webp`}
                          alt="App Store"
                          className="xl:w-[158px] xl:h-[48px]"
                          height={90}
                          width={300}
                          loading="lazy"
                        />
                      </a>
                      <a
                        href="https://trayahealth.app.link/xT3UrtZDvyb"
                        className="xl:w-[158px] xl:h-[48px]"
                      >
                        <Image
                          src={`${CDN_BASE_URL}website_images/localImages/play_store.webp`}
                          alt="Google Play"
                          height={90}
                          width={300}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => closeNav()}
                style={{ padding: 10, cursor: "pointer" }}
                className="hidden xl:block lg:block md:block"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  role="presentation"
                  viewBox="0 0 40 40"
                  className="h-5 w-5"
                >
                  <path
                    d="M23.868 20.015L39.117 4.78c1.11-1.108 1.11-2.77 0-3.877-1.109-1.108-2.773-1.108-3.882 0L19.986 16.137 4.737.904C3.628-.204 1.965-.204.856.904c-1.11 1.108-1.11 2.77 0 3.877l15.249 15.234L.855 35.248c-1.108 1.108-1.108 2.77 0 3.877.555.554 1.248.831 1.942.831s1.386-.277 1.94-.83l15.25-15.234 15.248 15.233c.555.554 1.248.831 1.941.831s1.387-.277 1.941-.83c1.11-1.109 1.11-2.77 0-3.878L23.868 20.015z"
                    className="closeNavImg"
                  ></path>
                </svg>
              </div>
            </ul>
          </div>
          <div className="">
            {showModal ? (
              <>
                {hasToken ? (
                  <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div
                      className="fixed inset-0 w-full h-full bg-black opacity-40"
                      onClick={() => closeModal()}
                    ></div>

                    <div className="flex items-center min-h-screen px-4 py-8">
                      <div className="relative w-sm px-2 py-8 mx-auto bg-white rounded-md shadow-lg">
                        <div className="flex items-start justify-between rounded-t">
                          <button
                            className="text-2xl absolute right-4 top-4"
                            onClick={() => closeModal()}
                          >
                            <span className="h-4 w-4 text-2xl block ">
                              <svg
                                aria-hidden="true"
                                fill="#ff0000"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div className="mt-5">
                          <div className="items-center justify-center text-center mx-auto px-28">
                            <p className="text-2xl font-bold">
                              Hi {loginCustomerName},
                            </p>
                            <p className="text-lg">
                              You&apos;re currently logged in.
                            </p>
                          </div>
                          <hr
                            className="border-1 w-12/12 my-10 mb-5 mx-auto"
                            style={{ borderColor: "#3e3e3e" }}
                          />
                          <p className="text-lg text-center">
                            Click Here to{" "}
                            <span
                              onClick={() => deleteCookie()}
                              className="underline text-[#ff0000] cursor-pointer"
                            >
                              logout
                            </span>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div
                        className="fixed inset-0 w-full h-full bg-black opacity-40"
                        onClick={() => closeModal()}
                      ></div>

                      <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-sm p-4 px-7 mx-auto bg-white rounded-md shadow-lg">
                          <div className="flex items-start justify-between rounded-t">
                            <button
                              className="text-2xl absolute right-4 top-4"
                              onClick={() => closeModal()}
                            >
                              <span className="h-4 w-4 text-2xl block ">
                                <svg
                                  aria-hidden="true"
                                  fill="#000"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          <div className="mt-5">
                            <div className="items-center justify-center text-center mx-auto ">
                              <p className="text-2xl font-bold">
                                Login with OTP
                              </p>
                              <hr
                                className="border-2 w-1/12 rounded-full mx-auto"
                                style={{ borderColor: "#3e3e3e" }}
                              />
                              {!showOtp ? (
                                <div className="mt-16">
                                  <label
                                    className={`phone_number text-md font-semibold mt-3 ${nunito.variable}`}
                                  >
                                    Enter your mobile number
                                  </label>
                                  <div className="flex">
                                    <span className="inline-flex items-center px-3 text-md text-gray-900 border border-r-0 border-gray-300 rounded-l-md dark:text-black dark:border-[#414042]-600 h-[55px]">
                                      +91
                                    </span>
                                    <input
                                      className="rounded-none rounded-r-lg border text-black-900 flex-1 min-w-0 w-full text-md border-gray-300 p-2 focus:border-[#ff0000]-100 focus:outline-[#ff0000]"
                                      onChange={handlePhoneNumber}
                                      value={phoneNumber}
                                      type="number"
                                      pattern="/^-?\d+\.?\d*$/"
                                      maxLength={10}
                                    />
                                  </div>
                                  {error ? (
                                    <>
                                      <p className="text-[#ff0000] text-md font-bold mt-11">
                                        {error}
                                      </p>

                                      <button
                                        onClick={() =>
                                          (window.location.href =
                                            "/home/question?cohort=1&lcn=TopBar")
                                        }
                                        className="text-black bg-[#b7d340] w-full h-12 rounded-lg text-xl font-bold mt-4 hover:text-white p-2"
                                      >
                                        TAKE THE HAIR TEST
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <p className="mt-11">
                                        <span className="text-[14px]">
                                          We will send you an One Time Password
                                          <br />
                                          on this mobile number
                                        </span>
                                      </p>
                                      <button
                                        className={
                                          phoneNumber.length > 9
                                            ? "text-black bg-[#b7d340] w-full h-12  rounded-lg text-xl font-bold mt-4 hover:text-white"
                                            : "text-black bg-[#b7d340] opacity-50 w-full h-12  rounded-lg text-xl font-bold mt-4 "
                                        }
                                        onClick={() => {
                                          userGTM("sendOTP_Clicked");
                                          onSendOTP();
                                        }}
                                        disabled={
                                          phoneNumber.length > 9 ? false : true
                                        }
                                      >
                                        SEND OTP
                                      </button>
                                    </>
                                  )}
                                </div>
                              ) : (
                                <div className="mt-16">
                                  <label
                                    className={`phone_number text-md font-semibold mt-3 ${nunito.variable}`}
                                  >
                                    Enter OTP
                                  </label>
                                  <div className="otp-input">
                                    {otp.map((value, index) => (
                                      <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        value={value}
                                        onChange={(event) =>
                                          handleInputChange(index, event)
                                        }
                                        onKeyDown={(event) =>
                                          handleKeyDown(index, event)
                                        }
                                        autoFocus={index === 0}
                                        ref={(ref) =>
                                          (inputsRef.current[index] = ref)
                                        }
                                      />
                                    ))}
                                  </div>
                                  <p className="mb-8">
                                    <span className="text-[12px]">
                                      Enter the OTP send to{" "}
                                      <b>+91{phoneNumber}</b>
                                    </span>
                                  </p>
                                  {/* OTP Only for Development */}
                                  <p className="text-[#414042] text-md font-bold mt-2 text-center">
                                    OTP: {userData?.debug?.otp}
                                  </p>

                                  {error && (
                                    <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                                      {error}
                                    </p>
                                  )}

                                  <p className="text-center">
                                    <span
                                      className={
                                        seconds < 1
                                          ? "text-black cursor-pointer underline"
                                          : "underline text-black opacity-4"
                                      }
                                      onClick={() => {
                                        if (seconds < 1) {
                                          onSendOTP();
                                          _clearOtp();
                                        }
                                      }}
                                    >
                                      Resend
                                    </span>
                                    {seconds > 0 && (
                                      <span> OTP in {seconds} sec</span>
                                    )}
                                  </p>
                                  <button
                                    className={
                                      otp.join("").length > 5
                                        ? "text-black bg-[#b7d340] w-full h-12  rounded-lg text-xl font-bold mt-4 hover:text-white"
                                        : "text-black bg-[#b7d340] opacity-50 w-full h-12  rounded-lg text-xl font-bold mt-4 "
                                    }
                                    onClick={() => onLoginClick()}
                                    disabled={
                                      otp.join("").length > 5 ? false : true
                                    }
                                  >
                                    LOGIN
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;
