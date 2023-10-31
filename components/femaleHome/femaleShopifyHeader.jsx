import Image from "next/image";
import Cookies from "js-cookie";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/cart-store";
import { useRef } from "react";
import { fetchRequest } from "../../helpers/fetchRequest";
import useMediaQuery from "../useMediaQuerry";
import { CDN_BASE_URL } from "../../constants/config";
import { gtmEcommerce, userGTM } from "../../helpers/gtmHelpers";
import { CHALLENGE_API, VALIDATE_API } from "../../constants/urls";
import { nunito } from "@/constants/fontConfig";
import { AppStoreIcon, trayaLogoDark } from "@/constants/constants";
import AccountTestCart from "./AccountTestCart";
import DesktopNavHeader from "./DesktopNavHeader";
import MobileNavHeader from "./MobileNavHeader";
import useScreenSize from "@/hooks/useScreenSize";

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

  const screenSize = useScreenSize();

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
        <div className="items-center px-4 md:px-6 xl:px-12">
          <AccountTestCart
            props={props}
            hasToken={hasToken}
            showMyRecc={showMyRecc}
            openNav={openNav}
          />

          <div
            className="sidenav"
            id="mySidenav"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          >
            {["sm", "xs"].includes(screenSize) ? (
              <MobileNavHeader
                props={props}
                hasToken={hasToken}
                showMyRecc={showMyRecc}
                setShowModal={setShowModal}
                product={product}
                setProduct={setProduct}
                scalpOil={scalpOil}
                closeNav={closeNav}
                setscalpOil={setscalpOil}
              />
            ) : (
              <DesktopNavHeader
                props={props}
                hasToken={hasToken}
                showMyRecc={showMyRecc}
                setShowModal={setShowModal}
                product={product}
                setProduct={setProduct}
                scalpOil={scalpOil}
                closeNav={closeNav}
                setscalpOil={setscalpOil}
              />
            )}
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
