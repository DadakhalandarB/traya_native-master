import { CHALLENGE_API, VALIDATE_API } from "@constants/urls";

const LoginComponent = ({
  hasToken,
  loginCustomerName,
  phoneNumber,
  setPhoneNumber,
}) => {
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
    // if (event.key === "Backspace" && index > 0) {
    //   inputsRef.current[index - 1].focus();
    // }
    if (event.keyCode === 8 && otp[index] === "" && index > 0) {
      // Backspace pressed with empty value, move to previous input
      inputsRef.current[index - 1].focus();
      currentIndexRef.current = index - 1;
    }
  };

  const handlePhoneNumber = (event) => {
    const limit = 10;
    setPhoneNumber(event.target.value.slice(0, limit));
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
      // window.location.href = "/user-account";
      window.location.replace("/user-account");
    } else {
      setError("Incorrect OTP!");
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
  };

  return (
    <div>
      <div className="">
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
                    <div className="items-center justify-center text-center mx-auto px-12 sm:px-28 md:px-28 lg:px-28 xl:px-28">
                      <p className="text-2xl font-bold">
                        {/* Hi {loginCustomerData?.first_name}, */}
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
                        <p className="text-2xl font-bold">Login with OTP</p>
                        <hr
                          className="border-2 w-1/12 rounded-full mx-auto"
                          style={{ borderColor: "#3e3e3e" }}
                        />
                        {!showOtp ? (
                          <div className="mt-16">
                            <label className="phone_number text-md font-semibold mt-3 font-nonito">
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
                                <p className="text-[#ff0000] text-md font-bold mt-8 mb-4">
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
                                  onClick={() => onSendOTP()}
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
                            <label className="phone_number text-md font-semibold mt-3 font-nonito ">
                              Enter OTP
                            </label>
                            <div className="otp-input">
                              {otp.map((value, index) => (
                                <input
                                  key={index}
                                  type="text"
                                  // type="number"
                                  pattern="/^-?\d+\.?\d*$/"
                                  inputMode="numeric"
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
                            {/* For development */}
                            {/* <p className="mb-4">
                                    <span className="text-[12px]">
                                      Enter the OTP send to{" "}
                                      <b>+91{phoneNumber}</b>
                                    </span>
                                  </p>
                                  <p className="text-black text-md font-bold mt-2 text-center">
                                    OTP: {userData?.debug?.otp}
                                  </p>
                                  {error && (
                                    <p className="text-[#ff0000] text-md font-bold mt-4 text-center">
                                      {error}
                                    </p>
                                  )} */}

                            {/* For Production  */}
                            <p className="mb-8">
                              <span className="text-[12px]">
                                Enter the OTP send to <b>+91{phoneNumber}</b>
                              </span>
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
                                  // seconds < 1 ? onSendOTP() : null;
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
                              disabled={otp.join("").length > 5 ? false : true}
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
      </div>
    </div>
  );
};

export default LoginComponent;
