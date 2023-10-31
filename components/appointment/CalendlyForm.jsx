import { useRef, useState, useEffect } from "react";

import { keypress } from "../../helpers/keypress";
import {
  isValidEmail,
  isValidName,
  isValidPhone,
} from "../../helpers/validation";
import { isMobile } from "react-device-detect";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Image from "next/image";
import { CDN_BASE_URL } from "../../constants/config";
import Ishani from "../../assets/images/Ishani(green_coat).png";
import { nunito } from "@/constants/fontConfig";

const CalendlyForm = ({
  error,
  handleSubmit,
  getApi,
  isConfirm,
  setConfirmed,
  setGetData,
  getData,
  showSlots,
  dataVisible,
}) => {
  const inputRefname = useRef(null);
  const inputRefemail = useRef(null);
  const inputRefphone = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setView(true);
    }
  }, []);

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
      if (view) {
        await handleSubmit(name, phone);
      } else if (!view) {
        await handleSubmit(name, phone);
      }
    }
    let _data = {
      first_name: name,
      phone_number: phone,
    };
    setGetData(_data);
  };
  return (
    <>
      <div className="hidden md:hidden lg:block xl:block">
        <div className="w-[88%] h-full">
          <div className="flex flex-col flex-1 rounded-lg ml-12 p-4">
            <p
              className={`text-center ${nunito.variable} text-[20px] text-[#414042] font-[600]`}
            >
              Avail your free call with a hair coach
            </p>
            <div className="flex justify-left ml-[6%] mt-2 w-[100%] h-[200px]">
              <Image
                src={Ishani}
                priority={true}
                width={399}
                height={260}
                className="rounded-lg"
                alt="Hair Coach Banner"
              />
            </div>
            <div className="flex flex-col p-4 xl:mt-[4%] space-y-2 md:ml-2">
              {!dataVisible ? (
                <div className="relative w-full gap-2 mt-0 sm:w-4/5 md:w-11/12 ml-2">
                  <input
                    className="w-11/12 pr-8 mb-3 font-sans text-[16px] font-[300]  border-1 border-b bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                    id="mini_name"
                    placeholder="Full Name"
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
                  <input
                    className="w-11/12 pr-8 mb-1 font-sans text-[16px] font-[300]  border-1 border-b bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
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
                    <span className="block ml-2 text-brand-error">
                      {errorPhone}
                    </span>
                  )}
                  <div className="flex">
                    <AiOutlineExclamationCircle size={18} color="red" />
                    <p className="ml-1 font-sans text-[#797979] text-[12px] font-[600]">
                      Enter the number used to place your order
                    </p>
                  </div>
                  <span className="block mx-auto text-[14px] font-bold text-brand-error">
                    {error}
                  </span>
                </div>
              ) : (
                <div className="border-2 border-[#B7D340] rounded-md w-[98%] mx-auto my-2">
                  <p
                    className={`mt-2 text-[22px] font-[600] font-sans text-brand-dark ml-3`}
                  >
                    {getData?.first_name}
                  </p>
                  {getData?.phone_number && (
                    <p className="text-[22px] font-[600] font-sans text-brand-dark ml-3 mb-2">
                      Contact no.:{" "}
                      <span className="text-[22px] font-[600] font-sans text-brand-dark">
                        {getData?.phone_number?.replace("+91", "")}
                      </span>
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex-col mt-2 mx-auto justify-center sm:w-4/5 md:w-[85%]"></div>
          </div>
        </div>
        {isConfirm && (
          <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold border-2 focus:outline-none w-full h-20 pb-2.5 pt-2.5">
            <button
              className={`px-12 py-2 w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none ${
                isConfirm ? "" : "cursor-not-allowed blur-none opacity-75"
              }`}
              onClick={() => setConfirmed(true)}
              disabled={!isConfirm}
            >
              CONFIRM
            </button>
          </div>
        )}
        {!showSlots && (
          <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold border-2 focus:outline-none w-full h-20 pb-2.5 pt-2.5">
            <button
              className="px-12 py-2 w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none"
              onClick={() => {
                if (isConfirm) {
                  setConfirmed(true);
                } else if (getApi && name !== "" && phone !== "") {
                  _handleSubmit();
                  setIsDisabled(true);
                } else if (!getApi || name === "" || phone === "") {
                  _handleSubmit();
                }
              }}
            >
              BOOK A CALL
            </button>
          </div>
        )}
      </div>

      <div className="block xl:hidden lg:hidden md:block">
        <div className="flex flex-col mx-auto space-y-4 md:pl-0 backdrop-filter rounded-lg px-3 pt-2">
          <p
            className={`text-center ${nunito.variable} text-[18px] text-[#414042] font-[600]`}
          >
            Avail your free call with a hair coach
          </p>
          <div className="flex justify-center mx-auto mt-4 h-[180px]">
            <Image
              src={Ishani}
              // src={`${CDN_BASE_URL}website_images/localImages/Ishani(green_coat).png`}
              priority={true}
              width={399}
              height={305}
              className="rounded-lg"
              alt="Hair Coach Banner"
            />
          </div>

          {!dataVisible && (
            <div className="flex flex-col ml-[1%] justify-center space-y-2">
              <div className="relative w-full gap-2 mt-0 sm:w-4/5 md:w-11/12 ">
                <input
                  className="w-11/12 pr-8 mb-3 font-sans text-[16px] font-[300]  border-1 border-b bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
                  placeholder="Full Name"
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
                <input
                  className="w-11/12 pr-8 font-sans text-[16px] font-[300]  border-1 border-b bg-white border-gray-300 form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-custom-green active:border-custom-green focus:outline-none"
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
                  <span className="block ml-2 text-brand-error">
                    {errorPhone}
                  </span>
                )}
              </div>
              <div className="flex">
                <AiOutlineExclamationCircle size={18} color="red" />
                <p className="ml-1 font-sans text-[#797979] text-[12px] font-[600]">
                  Enter the number used to place your order
                </p>
              </div>
              <span className="block mx-auto text-[14px] font-bold text-brand-error">
                {error}
              </span>
            </div>
          )}
        </div>
        {!showSlots && (
          <button
            className={`bottom-0 fixed inset-x-0 mx-auto px-6 py-2 w-full md:w-96 bg-custom-green text-[#414042] font-sans text-[22px] font-[600] focus:outline-none style='margin-top: 82px' `}
            onClick={_handleSubmit}
            disabled={phone === "" || name === ""}
          >
            BOOK A CALL
          </button>
        )}
      </div>
    </>
  );
};

export default CalendlyForm;
