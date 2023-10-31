import { useRef, useState } from "react";
import { DEFAULT_API_URL } from "../../constants/config";
import { useRouter } from "next/router";
import { fetchRequest } from "../../helpers/fetchRequest";
import Image from "next/image";
import CSATHeader from "./CSATHeader";
import { keypress } from "../../helpers/keypress";
import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../../helpers/validation";

import HairCoach from "../../assets/images/IshaniGreenCoat.png";
import { fredoka } from "@/constants/fontConfig";

const CSATFormHome = () => {
  const router = useRouter();
  const inputRefname = useRef(null);
  const inputRefemail = useRef(null);
  const inputRefphone = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [isNotRegistered, setIsNotRegistered] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [activeEngagement, setActiveEngagement] = useState(false);
  const [caseId, setCaseId] = useState("");
  const [error, setError] = useState("");

  const handleKeyPress = (event) => {
    const _isValid = keypress(event, "tel");
    if (_isValid.hasError) setErrorPhone(_isValid.error);
    else setErrorPhone("");
  };

  const _handleSubmit = async () => {
    // const isEmailValid = isValidEmail(email.trim());
    const isNameValid = isValidName(name.trim());
    const isPhoneValid = isValidPhone(phone);

    // setErrorEmail("");
    setErrorName("");
    setErrorPhone("");

    if (isNameValid.hasError) {
      setErrorName(isNameValid.error);
      if (inputRefname) inputRefname.current.focus();
    } else if (isPhoneValid.hasError) {
      setErrorPhone(isPhoneValid.error);
      if (inputRefphone) inputRefphone.current.focus();
    } else {
      let url = `${DEFAULT_API_URL}get-case-id?phone_number=${phone}`;
      const _res = await fetchRequest(url);

      if (_res.status === 200) {
        setCaseId(_res.data);
        setIsRegistered(true);
      } else if (_res.status === 300) {
        setError(_res?.data?.message);
      } else if (_res.status === 500) {
        if (
          _res?.data?.message?.startsWith("No case found for this phone number")
        ) {
          setIsNotRegistered(true);
        } else if (
          _res?.data?.message?.startsWith(
            "No active engagement found for this case"
          )
        ) {
          setActiveEngagement(true);
        }
      }
    }
  };

  const handleHairTest = () => {
    router.push(`/questions`);
  };

  const handleRefresh = () => {
    router.reload();
  };

  if (isRegistered) {
    router.push(`/csat/${caseId}`);
  }

  if (isNotRegistered) {
    return (
      <>
        <div
          style={{
            display: "flex",
            //   paddingLeft: "3%",
            width: "100%",
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
            // position:"fixed",
            // top:"0"
          }}
          // className="py-2 bg-white"
          className="py-2"
        >
          <div
            className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[26px] not-italic font-[400] text-brand-dark px-auto`}
          >
            Share your feedback
          </div>
        </div>
        <div className="overflow-hidden h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-screen p-4 -mt-28 h-full">
            <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12  px-4 py-12 mt-8 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-lg">
              <p className="m-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark opacity-80">
                Ooops!
                <br />
                <span className="text-2xl md:text-2xl lg:text-3xl">
                  We could not trace you as a Traya customer. Please try again
                  with a different number.
                </span>
              </p>
              <p className="px-2 py-4 text-xl md:text-2xl lg:text-2xl font-semibold text-brand-dark opacity-80">
                Not a customer yet? Take the hair test and buy the plan.
              </p>
              <div className="mx-auto flex flex-col xl:flex-row xl:justify-between xl:space-x-6 w-[100%] xl:w-[75%]">
                <button
                  className="px-0 w-[100%] py-3 mt-12 mx-auto w-full md:w-96 rounded-md bg-custom-green text-brand-dark text-lg font-bold focus:outline-none"
                  onClick={handleRefresh}
                >
                  TRY AGAIN
                </button>
                <button
                  className="px-0 w-[100%] py-3 mt-4 xl:mt-12 mx-auto w-full md:w-96 rounded-md bg-custom-green text-brand-dark text-lg font-bold focus:outline-none"
                  onClick={handleHairTest}
                >
                  TAKE THE HAIR TEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (activeEngagement) {
    return (
      <>
        <div
          style={{
            display: "flex",
            //   paddingLeft: "3%",
            width: "100%",
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
            // position:"fixed",
            // top:"0"
          }}
          // className="py-2 bg-white"
          className="py-2"
        >
          <div
            className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[26px] not-italic font-[400] text-brand-dark px-auto`}
          >
            Share your feedback
          </div>
        </div>
        <div className="overflow-hidden h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-screen p-4 -mt-28 h-full">
            <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12  px-4 py-12 mt-8 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-lg ">
              <p className="m-2 text-2xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark opacity-80">
                Ooops!
                <br />
                You are not allowed to fill this form.
              </p>
              <p className="px-2 py-4 text-lg md:text-2xl lg:text-3xl font-semibold text-brand-dark opacity-80">
                Please try again with a new number.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {/* <div className="flex flex-col flex-1 justify-center">
        <div className="sm:w-2/3 md:w-2/3 lg:w-1/2 xl:w-1/2 xs:flex xs:flex-col xs:mx-auto xs:w-full xs:justify-center xs:space-y-4 xs:md:pl-0 xs:backdrop-blur-none xs:rounded-lg ">
          <div className="flex flex-col space-y-6 md:pl-0 backdrop-blur-none sm:bg-custom-lightgrey md:bg-custom-lightgrey lg:bg-custom-lightgrey xl:bg-custom-lightgrey rounded-lg xl:mt-[20%]">
            <div className="flex flex-col mt-8 text-left ml-[7%]">
              <label className="text-[25px] font-[900] font-sans text-brand-dark md:text-[30px]">
                Customer Satisfaction Form
              </label>

              <label className="text-[20px] font-[400] font-sans text-brand-dark xl:text-[22px]">
                First, please share your details
              </label>
            </div>

            <div className="flex flex-col p-4 space-y-2 md:ml-2 text-center">
              <div className="relative w-full gap-2 mt-0 sm:w-4/5 md:w-11/12 xl:pb-4">
                <input
                  className="w-11/12 pr-8 mb-4 border-1 border-b-2 sm:bg-custom-lightgrey md:bg-custom-lightgrey lg:bg-custom-lightgrey xl:bg-custom-lightgrey border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                  id="mini_name"
                  placeholder="Full Name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  ref={inputRefname}
                />
                {errorName !== "" && (
                  <label className="block ml-4 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-8 text-brand-error text-left">
                    {errorName}
                  </label>
                )}
                <input
                  className="w-11/12 pr-8 mb-0 border-1 border-b-2 sm:bg-custom-lightgrey md:bg-custom-lightgrey lg:bg-custom-lightgrey xl:bg-custom-lightgrey xl:bg-custom-lightgrey xl:bg-custom-lightgrey xl:bg-custom-lightgrey border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                  id="mini_phone"
                  placeholder="Phone Number"
                  type="text"
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  ref={inputRefphone}
                />
                {errorPhone !== "" && (
                  <label className="block ml-4 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-8 text-brand-error text-left">
                    {errorPhone}
                  </label>
                )}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="xl:w-[25%] mx-auto">
        <CSATHeader />
      </div>
      <div className="flex flex-col flex-1 justify-center">
        <div className="xl:w-[25%] xs:flex xs:flex-col xs:mx-auto xs:w-full xs:justify-center xs:space-y-4 xs:backdrop-blur-none xs:rounded-lg">
          <div className="flex flex-col space-y-3 rounded-lg">
            <div className="flex flex-col mt-4 text-left xl:px-0">
              <p className="text-[22.5px] font-[700] font-nunito text-[#5F5F5F] px-4 xl:px-0 mx-auto xl:text-[22px] mt-4">
                Tell us how we can make your coach experience smoother
              </p>
              {/* <div className="flex flex-col mx-auto mt-8 gap-6">
                <div className="flex flex-row gap-6">
                  <div>
                    <Image
                      src={step1image}
                      alt="Step 1"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#5F5F5F] text-[20px] font-[600] font-nunito">
                      Step 1: Track progress
                    </label>
                    <label className="text-[#898989] text-[16px] font-[400] font-nunito">
                      Tell us if you have seen any improvement this month.
                    </label>
                  </div>
                </div>
                <div className="flex flex-row gap-6">
                  <div>
                    <Image
                      src={step2image}
                      alt="Step 2"
                      width={80}
                      height={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-[#5F5F5F] text-[20px] font-[600] font-nunito">
                      Step 2 : Build your plan
                    </label>
                    <label className="text-[#898989] text-[16px] font-[400] font-nunito">
                      Your feedback helps doctors prescribe the next month kit.
                    </label>
                  </div>
                </div>
              </div> */}

              <label className="text-[20px] font-[400] font-sans text-brand-dark px-4 xl:px-0 xl:text-[22px] mt-4">
                First, please share your details
              </label>
            </div>

            <div className="flex flex-col text-center">
              <div className="w-full gap-2 mt-0">
                <input
                  className="w-[88%] xl:w-[100%] pr-8 mb-4 border-1 border-b-2  border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                  id="mini_name"
                  placeholder="FULL NAME"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  ref={inputRefname}
                />
                {errorName !== "" && (
                  <label className="block ml-4 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-8 text-brand-error text-left">
                    {errorName}
                  </label>
                )}
                {/* <input
                  className="w-11/12 pr-8 mb-4 border-0 border-b-2 sm:bg-custom-lightgrey md:bg-custom-lightgrey lg:bg-custom-lightgrey xl:bg-custom-lightgrey border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-brand-accent active:border-brand-accent focus:outline-none"
                  id="mini_email"
                  placeholder="EMAIL ADDRESS"
                  type="text"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  ref={inputRefemail}
                />
                {errorEmail !== "" && (
                  <label className="block ml-4 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-8 text-brand-error text-left">
                    {errorEmail}
                  </label>
                )} */}

                <input
                  className="w-[88%] xl:w-full pr-8 mb-0 border-1 border-b-2 border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                  id="mini_phone"
                  placeholder="PHONE NUMBER"
                  type="text"
                  onKeyPress={handleKeyPress}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  ref={inputRefphone}
                />
                {errorPhone !== "" && (
                  <label className="block ml-4 sm:ml-6 md:ml-6 lg:ml-8 xl:ml-8 text-brand-error text-left">
                    {errorPhone}
                  </label>
                )}
              </div>
              {error !== "" && (
                <p className="px-4 xl:px-0 text-left mt-2 block mx-auto text-[14px] font-bold text-brand-error">
                  {error}
                </p>
              )}
            </div>

            <div className="w-full flex justify-end pl-4 xl:pl-0 xl:pb-4">
              <div className="flex flex-col mt-[22%] xl:mt-[20%] sm:ml-0 absolute left-[7%] xl:left-[5%]">
                <div
                  className={`${fredoka.variable} text-[25px] xl:text-[30px] mb-1 text-[#414042]`}
                >
                  Got 2 mins
                </div>
                <div className="font-sans text-[16px] xl:text-[20px] font-[600] text-[#414042]">
                  for your feedback!
                </div>
              </div>
              <div className="bottom-0 w-[90%] xl:w-[68%]">
                <Image
                  className="flex flex-end"
                  src={HairCoach}
                  alt="Hair Coach"
                  fill="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="fixed inset-x-0 bottom-0 xl:bottom-[1.5%] px-12 py-2 w-full xl:w-[25%] xl:rounded-md mx-auto bg-custom-green text-brand-dark text-[22px] font-[600] focus:outline-none"
        onClick={_handleSubmit}
      >
        START NOW
      </button>
      {/* <div className="flex justify-center">
        <button
          className="absolute bottom-4 md:bottom-8 px-12 py-2 md:py-3 xl:w-[25%] xs:w-[92%] xs:px-0 sm:px-0 rounded-md bg-custom-green text-brand-dark text-[20px] font-[600] focus:outline-none"
          onClick={_handleSubmit}
        >
          START NOW
        </button>
      </div> */}
    </>
  );
};

export default CSATFormHome;
