import { useRef, useState } from "react";
import Cookies from "js-cookie";
import { useRouter, usePathname } from "next/navigation";

import { keypress } from "@helpers/keypress";
import { isValidEmail, isValidName, isValidPhone } from "@helpers/validation";
import Image from "next/image";
import { useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { CDN_BASE_URL } from "@constants/config";
import encryptMD5 from "@constants/encryptMD5";

import { fetchRequest } from "@helpers/fetchRequest";
import { CHALLENGE_API, VALIDATE_API } from "@constants/urls";
import { getCurrentTimeInReadableForm } from "@helpers/timeFormatter";
import { moengageTrackEvent } from "@helpers/handleMoengage";
import { nunito } from "@/constants/fontConfig";
import CloseSvg from "@/assets/icons/CloseSvg";

const DoctorCalendlyForm = ({
  isSlotSelected,
  error,
  handleSubmit,
  setShowSlots,
  setGetApi,
  getApi,
  isConfirm,
  setConfirmed,
  setGetData,
  reschedule,
  setTrigger,
  showSlots,
  trigger,
  dataVisible,
  path,
}) => {
  const inputRefname = useRef(null);
  const inputRefemail = useRef(null);
  const inputRefphone = useRef(null);

  const router = useRouter();
  const pathname = usePathname();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [otp, setOtp] = useState(new Array(6).fill(""));
  let inputsRef = useRef([]);
  let otpInputRef1 = useRef([]);
  let otpInputRef2 = useRef([]);
  const currentIndexRef = useRef(0);

  const [seconds, setSeconds] = useState(180);
  const [invalid, setInvalid] = useState("");
  const [userData, setUserData] = useState({});
  const [hasToken, setHasToken] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoginError, setIsLoginError] = useState(false);

  const handleKeyPress = (event) => {
    const _isValid = keypress(event, "tel");
    if (_isValid.hasError) setErrorPhone(_isValid.error);
    else setErrorPhone("");
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = isValidEmail(email.trim());
    const isNameValid = isValidName(name.trim());
    const isPhoneValid = isValidPhone(phone);

    setErrorEmail("");
    setErrorName("");
    setErrorPhone("");

    if (isNameValid.hasError) {
      setErrorName(isNameValid.error);
      if (inputRefname) inputRefname.current.focus();
    } else if (isEmailValid.hasError) {
      setErrorEmail(isEmailValid.error);
      if (inputRefemail) inputRefemail.current.focus();
    } else if (isPhoneValid.hasError) {
      setErrorPhone(isPhoneValid.error);
      if (inputRefphone) inputRefphone.current.focus();
    } else {
      await handleSubmit(name, email, phone);
      let _data = {
        first_name: name,
        phone_number: phone,
        email: email,
      };
      setGetData(_data);
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("phone", phone);
      const encryptedEmail = email ? encryptMD5(email.trim()).toString() : "";
      const encryptedPhone = phone ? encryptMD5(phone.trim()).toString() : "";

      window.dataLayer = window.dataLayer || [];
      dataLayer.push({ ecommerce: null });
      // Add the `view_item_list` event and associated data to the dataLayer
      window.dataLayer.push({
        event: "Bookacall_Clicked",
        PageName: "Doctor Consultation",
        JourneyType: "Appointment",
        EID: encryptedEmail,
        MID: encryptedPhone,
        NAEID: email ? email.trim() : "",
        NAMID: phone ? phone.trim() : "",
        Section: "Lead Form",
      });
      //OTP VERIFICATION

      const _phone = Cookies.get("LOGIN_PHONE_NO");

      if (!hasToken || _phone !== phone) {
        onSendOTP();
        setShowModal(true);
      } else if (hasToken && _phone === phone) {
        setTrigger(true);
      }
    }
  };

  useEffect(() => {
    if (Cookies.get("ACCESS_TOKEN")) {
      setHasToken(true);
    }
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

  const handleOtpInputChange = (index, event, currentScreen = "desktop") => {
    const value = event.target.value;
    const newOtpValues = [...otp];
    newOtpValues[index] = value;

    let currenRef = otpInputRef1;
    if (currentScreen !== "desktop") currenRef = otpInputRef2;

    if (value === "" && index > 0) {
      // Backspace pressed with empty value, move to previous input
      currenRef.current[index - 1].focus();
    } else if (index < 5 && value !== "") {
      // Move to next input when value is entered
      currenRef.current[index + 1].focus();
    }
    setOtp(newOtpValues);
  };

  const handleKeyDown = (index, event) => {
    // if (event.key === "Backspace" && index > 0) {
    //   inputsRef.current[index - 1].focus();
    // }
    if (event.keyCode === 8 && otp[index] === "" && index > 0) {
      // Backspace pressed with empty value, move to previous input
      inputsRef.current[index - 1].focus();
      currentIndexRef.current = index - 1;
    }
  };

  const onSendOTP = async () => {
    const _options = {
      method: "POST",
      body: JSON.stringify({ phone: "+91" + phone }),
    };

    const _res = await fetchRequest(CHALLENGE_API, _options);
    if (_res.status == 200) {
      setSeconds(180);
      setUserData(_res.data);
    } else if (_res.status == 300) {
      setLoginError(_res?.data?.message.message);
      setIsLoginError(true);
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
      Cookies.set("LOGIN_PHONE_NO", phone, { expires: 1 });
      closeModal();
      setTrigger(true);
      window.dataLayer = window.dataLayer || [];
      let user_email = window.localStorage.getItem("email");
      let user_phone = window.localStorage.getItem("phone");
      let user_synthetic_id = window.localStorage.getItem("user_syn");

      const encryptedEmail = user_email
        ? encryptMD5(user_email.trim()).toString()
        : "";
      const encryptedPhone = user_phone
        ? encryptMD5(user_phone.trim()).toString()
        : "";

      // Add the `view_item_list` event and associated data to the dataLayer
      let age = window.localStorage.getItem("age");
      let gender = window.localStorage.getItem("gender");
      window.dataLayer.push({
        EID: encryptedEmail,
        PageName: "OTP Submit",
        JourneyType: "Appointment",
        Section: "OTP",
        MID: encryptedPhone,
        NAEID: user_email ? user_email.trim() : "",
        NAMID: user_phone ? user_phone.trim() : "",
        user_id: user_synthetic_id ? user_synthetic_id : "",
        event: "OTP_Submitted",
      });
    } else {
      setInvalid("Incorrect OTP!");
    }
  };
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
    setInvalid("");
    setOtp(new Array(6).fill(""));
    setSeconds(180);

    setUserData("");
    if (isLoginError) {
      router.reload(false);
    }
  };

  const _clearOtp = () => {
    setOtp(new Array(6).fill(""));
    setInvalid("");
  };

  return (
    <>
      <div className="hidden md:hidden lg:block xl:block">
        <div className="w-full h-full">
          <div className="flex flex-col flex-1 space-y-2 md:pl-0 rounded-lg mx-auto p-4">
            <div className="flex  ml-8 w-[80%] h-[290px]">
              <Image
                // src={`${CDN_BASE_URL}website_images/localImages/doctor_form_banner.png`}
                src={
                  pathname === "/doctor-landingV2/appointment"
                    ? `${CDN_BASE_URL}website_images/doctor_landing_page/399_banner.png`
                    : pathname === "/doctor-landingV3/appointment"
                    ? `${CDN_BASE_URL}website_images/doctor_landing_page/299_banner.png`
                    : `${CDN_BASE_URL}website_images/localImages/doctor_form_banner.png`
                }
                priority={true}
                className="rounded-lg"
                width={399}
                height={315}
                alt="Doctor Banner"
              />
            </div>
            <div className="flex flex-col mt-8 ml-8">
              {reschedule && (
                <label className="text-[25px] font-[900] font-sans text-brand-dark">
                  Reschedule Doctor Consult
                </label>
              )}
            </div>
            {showSlots & trigger ? (
              <>
                <div className="my-2 py-2 ml-8 border border-custom-green rounded-xl w-[69%]">
                  <p
                    className={`mt-2 text-[20px] font-[600] font-sans text-brand-dark md:text-2xl 
            ${reschedule ? "ml-4" : "ml-3"}`}
                  >
                    {name}
                  </p>
                  <span
                    className={`text-[16px] font-[600] font-sans text-brand-dark md:text-2xl 
            ${reschedule ? "ml-4" : "ml-3"}`}
                  >
                    Contact no.:{" "}
                  </span>
                  <span
                    className={`text-[16px] font-[600] font-sans text-brand-dark md:text-2xl
            `}
                  >
                    {phone.replace("+91", "")}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col mt-0 ml-8">
                  <label className="text-[18px] font-[600] font-sans text-brand-dark md:text-lg">
                    {reschedule
                      ? "Please share your details."
                      : "Tell us about you"}
                  </label>
                </div>
                <div className="flex flex-col pt-1 p-4 space-y-1 md:ml-2">
                  <div className="relative w-full gap-2 mt-0 ml-[2%] sm:w-4/5 md:w-11/12">
                    <label className="text-[16px] font-[600] font-sans text-brand-dark">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded"
                      id="mini_name"
                      placeholder="Please enter your Full name"
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      ref={inputRefname}
                    />
                    {errorName !== "" && (
                      <span className="block ml-2 text-brand-error">
                        {errorName}
                      </span>
                    )}
                    <label className="text-[16px] font-[600] font-sans text-brand-dark">
                      Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded"
                      id="mini_email"
                      placeholder="Please enter your email Id"
                      type="text"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setShowSlots(false);
                      }}
                      ref={inputRefemail}
                    />
                    {errorEmail !== "" && (
                      <span className="block ml-2 text-brand-error">
                        {errorEmail}
                      </span>
                    )}

                    <label className="text-[16px] font-[600] font-sans text-brand-dark">
                      Primary Phone Number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded"
                      id="mini_phone"
                      placeholder="99-99-999-999"
                      type="text"
                      onKeyPress={handleKeyPress}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setShowSlots(false);
                      }}
                      ref={inputRefphone}
                    />
                    {errorPhone !== "" && (
                      <span className="block ml-2 text-brand-error">
                        {errorPhone === "Numbers only please" ? "" : errorPhone}
                      </span>
                    )}
                    <div className="flex mt-1 mb-16">
                      <AiOutlineExclamationCircle size={18} color="red" />
                      <p className="ml-1 mr-4 font-sans text-[#797979] text-[11px] font-[600]">
                        Please provide your Whatsapp number for important
                        communication, also our doctor will call you on this
                        number
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {!trigger && (
          <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold border-2 focus:outline-none w-full h-20 pb-2.5 pt-2.5 z-50">
            <button
              className="px-12 py-2 w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none"
              onClick={_handleSubmit}
            >
              BOOK A CALL
            </button>
          </div>
        )}

        {/* //OTP VERIFICATION */}
        {showModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => closeModal()}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-xl xl:w-[25%] p-8  mx-auto bg-white rounded-md shadow-lg">
                <div className="flex items-start justify-between rounded-t">
                  <button
                    className="text-2xl absolute right-4 top-4"
                    onClick={() => closeModal()}
                  >
                    <span className="h-4 w-4 text-2xl block ">
                      <CloseSvg />
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <div className="items-center justify-center text-center mx-auto ">
                    <h1 className="text-2xl font-bold">Login with OTP</h1>
                    <hr
                      className="border-2 w-1/12 rounded-full mx-auto"
                      style={{ borderColor: "#3e3e3e" }}
                    />
                  </div>

                  <div className="mt-16">
                    <p className="phone_number text-md font-semibold mt-3 font-nonito text-center">
                      Enter OTP
                    </p>
                    <div className="otp-input">
                      {/* {otp.map((value, index) => (
                        <input
                          key={index}
                          type="text"
                          // type="number"
                          pattern="/^-?\d+\.?\d*$/"
                          inputMode="numeric"
                          maxLength={1}
                          value={value}
                          onChange={(event) => handleInputChange(index, event)}
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          autoFocus={index === 0}
                          ref={(ref) => (inputsRef.current[index] = ref)}
                        />
                      ))} */}
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          type="tel"
                          maxLength={1}
                          value={value}
                          onChange={(event) =>
                            handleOtpInputChange(index, event, "desktop")
                          }
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          autoFocus={index === 0}
                          ref={(ref) => (otpInputRef1.current[index] = ref)}
                        />
                      ))}
                    </div>

                    {/* For development  */}
                    <p className="mb-4 text-center">
                      <span className="text-[12px]">
                        Enter the OTP send to <b>+91{phone}</b>
                      </span>
                    </p>
                    <p className="text-[#414042] text-md font-bold mt-2 text-center">
                      OTP: {userData?.debug?.otp}
                    </p>
                    {invalid && (
                      <p className="text-[#ff0000] text-md font-bold mt-4 text-center">
                        {invalid}
                      </p>
                    )}
                    {loginError && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {loginError}
                      </p>
                    )}

                    {/* For Production  */}

                    {/* <p className="mb-8 text-center">
                      <span className="text-[12px]">
                        Enter the OTP send to <b>+91{phone}</b>
                      </span>
                    </p>
                    {invalid && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {invalid}
                      </p>
                    )}
                    {loginError && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {loginError}
                      </p>
                    )} */}

                    {!isLoginError && (
                      <p className="text-center">
                        <span
                          className={
                            seconds < 1
                              ? "text-[#414042] cursor-pointer underline"
                              : "underline text-[#414042] opacity-4"
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
                        {seconds > 0 && <span> OTP in {seconds} sec</span>}
                      </p>
                    )}
                    <button
                      className={
                        otp.join("").length > 5
                          ? "text-[#414042] bg-[#b7d340] w-full h-12  rounded-lg text-xl font-bold mt-4 hover:text-white"
                          : "text-[#414042] bg-[#b7d340] opacity-50 w-full h-12  rounded-lg text-xl font-bold mt-4 "
                      }
                      onClick={() => onLoginClick()}
                      disabled={otp.join("").length > 5 ? false : true}
                    >
                      VERIFY OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {isConfirm && (
          <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold border-2 focus:outline-none w-full h-20 pb-2.5 pt-2.5">
            {!reschedule && (
              <div className="text-[24px] flex align-center py-3 mx-4">
                <p>
                  {pathname === "/doctor-landingV2/appointment"
                    ? "₹399"
                    : pathname === "/doctor-landingV3/appointment"
                    ? "₹299"
                    : "₹499"}
                </p>
              </div>
            )}
            <button
              className="px-12 py-2 w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-sans font-[600] focus:outline-none"
              onClick={() => {
                setConfirmed(true);
                // freshTrackEventV2("landed_payment_page", {
                //   timestamps: getCurrentTimeInReadableForm(),
                //   url:`https://form.traya.health${path}`
                // });
                moengageTrackEvent("landed_payment_page", {
                  timestamps: getCurrentTimeInReadableForm(),
                  url: `https://form.traya.health${path}`,
                });
              }}
            >
              {reschedule ? "CONFIRM" : "Confirm & Pay"}
            </button>
          </div>
        )}
      </div>

      <div className="block xl:hidden lg:hidden md:block">
        <div className="flex flex-col mx-auto  space-y-1.5 md:pl-0 backdrop-filter backdrop-blur-lg rounded-lg">
          <div className="px-[4.5%] flex justify-center mx-auto mt-[1%]">
            <Image
              // src={`${CDN_BASE_URL}website_images/localImages/doctor_form_banner.png`}
              src={
                pathname === "/doctor-landingV2/appointment"
                  ? `${CDN_BASE_URL}website_images/doctor_landing_page/399_banner.png`
                  : pathname === "/doctor-landingV3/appointment"
                  ? `${CDN_BASE_URL}website_images/doctor_landing_page/299_banner.png`
                  : `${CDN_BASE_URL}website_images/localImages/doctor_form_banner.png`
              }
              priority={true}
              className="rounded-lg"
              width={399}
              height={305}
              alt="Doctor Banner"
            />
          </div>

          {!dataVisible && (
            <>
              <div className="flex flex-col px-[5%] md:ml-2 mt-4">
                {reschedule && (
                  <label className="text-[25px] font-[900] font-sans text-brand-dark md:text-3xl">
                    Reschedule Doctor Consult
                  </label>
                )}
                <label
                  className={`text-[18px] font-[600] font-sans text-brand-dark md:text-lg ${nunito.variable}`}
                >
                  {reschedule
                    ? "Please share your details."
                    : "Tell us about you"}
                </label>
              </div>

              <div className="flex flex-col ml-[5%] justify-center space-y-2 md:ml-2">
                <div
                  className={`relative w-full gap-2 sm:w-4/5 md:w-11/12 ${
                    trigger ? "mb-0" : "mb-12"
                  }`}
                >
                  <label
                    className={`text-[16px] font-[600] font-sans text-brand-dark ${nunito.variable}`}
                  >
                    Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded ${nunito.variable}`}
                    placeholder="Please enter your Full name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    ref={inputRefname}
                  />
                  {errorName !== "" && (
                    <span className="block ml-2 text-brand-error">
                      {errorName}
                    </span>
                  )}
                  <label
                    className={`text-[16px] font-[600] font-sans text-brand-dark ${nunito.variable}`}
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded ${nunito.variable}`}
                    id="mini_email"
                    placeholder="Please enter your email Id"
                    type="text"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setShowSlots(false);
                    }}
                    ref={inputRefemail}
                  />
                  {errorEmail !== "" && (
                    <span className="block ml-2 text-brand-error">
                      {errorEmail}
                    </span>
                  )}

                  <label
                    className={`text-[16px] font-[600] font-sans text-brand-dark ${nunito.variable}`}
                  >
                    Primary Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    className={`w-11/12 px-2 mb-2 font-sans text-[16px] font-[300] border-1 border py-1.5 bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none rounded ${nunito.variable}`}
                    id="mini_phone"
                    placeholder="99-99-999-999"
                    type="text"
                    onKeyPress={handleKeyPress}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setShowSlots(false);
                    }}
                    ref={inputRefphone}
                  />
                  {errorPhone !== "" && (
                    <span className="block ml-2 text-brand-error">
                      {errorPhone === "Numbers only please" ? "" : errorPhone}
                    </span>
                  )}
                  <div className="flex pr-4 mt-1 mb-2">
                    <AiOutlineExclamationCircle size={18} color="red" />
                    <p
                      className={`ml-1 font-sans text-[#797979] text-[11px] font-[600] ${nunito.variable}`}
                    >
                      Please provide your Whatsapp number for important
                      communication, also our doctor will call you on this
                      number
                    </p>
                  </div>
                </div>

                <span className="block mx-auto text-xl font-bold text-brand-error">
                  {error}
                </span>
              </div>
            </>
          )}
        </div>

        {!trigger && (
          <button
            className={`bottom-0 fixed inset-x-0 mx-auto px-6 py-2 w-full md:w-96 bg-custom-green text-[#414042] font-sans text-[22px] font-[600] focus:outline-none style='margin-top: 82px' `}
            onClick={_handleSubmit}
            disabled={phone === "" || email === "" || name === ""}
          >
            BOOK A CALL
          </button>
        )}

        {showModal ? (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => closeModal()}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-xl p-8  mx-auto bg-white rounded-md shadow-lg">
                <div className="flex items-start justify-between rounded-t">
                  <button
                    className="text-2xl absolute right-4 top-4"
                    onClick={() => closeModal()}
                  >
                    <span className="h-4 w-4 text-2xl block ">
                      <CloseSvg />
                    </span>
                  </button>
                </div>
                <div className="mt-5">
                  <div className="items-center justify-center text-center mx-auto ">
                    <h1 className="text-2xl font-bold">Login with OTP</h1>
                    <hr
                      className="border-2 w-1/12 rounded-full mx-auto"
                      style={{ borderColor: "#3e3e3e" }}
                    />
                  </div>

                  <div className="mt-16">
                    <p className="phone_number text-md font-semibold mt-3 font-nonito text-center">
                      Enter OTP
                    </p>
                    <div className="otp-input">
                      {/* {otp.map((value, index) => (
                        <input
                          key={index}
                          type="text"
                          // type="number"
                          pattern="/^-?\d+\.?\d*$/"
                          inputMode="numeric"
                          maxLength={1}
                          value={value}
                          onChange={(event) => handleInputChange(index, event)}
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          autoFocus={index === 0}
                          ref={(ref) => (inputsRef.current[index] = ref)}
                        />
                      ))} */}
                      {otp.map((value, index) => (
                        <input
                          key={index}
                          type="tel"
                          maxLength={1}
                          value={value}
                          onChange={(event) =>
                            handleOtpInputChange(index, event, "mobile")
                          }
                          onKeyDown={(event) => handleKeyDown(index, event)}
                          autoFocus={index === 0}
                          ref={(ref) => (otpInputRef2.current[index] = ref)}
                        />
                      ))}
                    </div>

                    {/* For development */}
                    <p className="mb-4 text-center">
                      <span className="text-[12px]">
                        Enter the OTP send to <b>+91{phone}</b>
                      </span>
                    </p>
                    <p className="text-[#414042] text-md font-bold mt-2 text-center">
                      OTP: {userData?.debug?.otp}
                    </p>
                    {invalid && (
                      <p className="text-[#ff0000] text-md font-bold mt-4 text-center">
                        {invalid}
                      </p>
                    )}
                    {loginError && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {loginError}
                      </p>
                    )}

                    {/* For Production  */}

                    {/* <p className="mb-8 text-center">
                      <span className="text-[12px]">
                        Enter the OTP send to <b>+91{phone}</b>
                      </span>
                    </p>
                    {invalid && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {invalid}
                      </p>
                    )}
                    {loginError && (
                      <p className="text-[#ff0000] text-md font-bold mt-8 text-center">
                        {loginError}
                      </p>
                    )} */}

                    {!isLoginError && (
                      <p className="text-center">
                        <span
                          className={
                            seconds < 1
                              ? "text-[#414042] cursor-pointer underline"
                              : "underline text-[#414042] opacity-4"
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
                        {seconds > 0 && <span> OTP in {seconds} sec</span>}
                      </p>
                    )}
                    <button
                      className={
                        otp.join("").length > 5
                          ? "text-[#414042] bg-[#b7d340] w-full h-12  rounded-lg text-xl font-bold mt-4 hover:text-white"
                          : "text-[#414042] bg-[#b7d340] opacity-50 w-full h-12  rounded-lg text-xl font-bold mt-4 "
                      }
                      onClick={() => onLoginClick()}
                      disabled={otp.join("").length > 5 ? false : true}
                    >
                      VERIFY OTP
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default DoctorCalendlyForm;
