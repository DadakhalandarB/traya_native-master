"use client";

import Cookies from "js-cookie";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { sha512 } from "js-sha512";
import encryptMD5 from "@constants/encryptMD5";
// import encryptMD5 from "../constants/encryptMD5";
import { useEffect, useMemo, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  DEFAULT_API_URL,
  PAYU_FURL,
  PAYU_KEY,
  PAYU_SALT,
  PAYU_SURL,
  PAYU_URL,
} from "@constants/config";
import { CONSULT_DOCTOR_FEES } from "@constants/constants";
import {
  DOCTOR_FORM_SLOT,
  MF_TRANSACTION_API,
  V4_ONBOARDING_API,
} from "@constants/urls";
import getQueryStrings from "@context/getQueryStrings";
import { postCohortData } from "@helpers/postCohortData";
import { postUTMData } from "@helpers/postUTMData";
import { fetchRequest } from "@helpers/fetchRequest";
import { SlotBookingV3 } from "@components/SlotBooking/SlotBookingV3";

// Components
import Loader from "@/components/Loader";
import DoctorCalendlyForm from "./DoctorCalendlyForm";
import {
  paymentFailure,
  paymentSuccess,
} from "@/services/paymentServiceDev";
import DateListPlaceholderV3 from "@/components/appointment/DateListPlaceholderV3";
import SlotsListPlaceholderV3 from "@/components/appointment/SlotsListPlaceholderV3";
import {
  handlePreDefinedUserAttributes,
  moengageTrackEvent,
} from "@helpers/handleMoengage";
import { getCurrentTimeInReadableForm } from "@helpers/timeFormatter";

const DoctorAppointmentForm = () => {
  const payuRef = useRef(null);
  const [apiResponse, setApiResponse] = useState({});
  const [error, setError] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [slotId, setSlotId] = useState("");
  const [selectedInfo, setSelectedInfo] = useState({});
  const [apiError, setApiError] = useState(false);

  // new

  const router = useRouter();

  const UTM_CAMPAIGN = router.query?.utm_campaign;

  const [caseId, setCaseId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [slotBooked, setSlotBooked] = useState(false);
  const [selectedTags, setSelectedTags] = useState(["HOMEPAGE"]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [getApi, setGetApi] = useState("SLOTS_API");
  const [confirmed, setConfirmed] = useState(false);
  const [coachName, setCoachName] = useState();
  const [currSlot, setCurrSlot] = useState({});
  const [currSlotTime, setCurrSlotTime] = useState("");
  const [isEmptySlot, setIsEmptySlot] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasBooked, setHasBooked] = useState(false);
  const [chatData, setChatData] = useState({});
  const [getData, setGetData] = useState({});
  const [isSlotBooked, setIsSlotBooked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [cxData, setCxData] = useState({});
  const [sessionId, setSessionId] = useState("");

  const queryStrings = useMemo(() => getQueryStrings(), []);
  const tagsData = ["HOMEPAGE", "SLOTPAGE"];

  const payuHash = useMemo(() => {
    const hash = `${PAYU_KEY}|${apiResponse.transactionId}|${CONSULT_DOCTOR_FEES}|Consult Call|${userInfo.name}|${userInfo.email}|${apiResponse.caseId}||||||||||${PAYU_SALT}`;
    return sha512(hash);
  }, [
    apiResponse.caseId,
    apiResponse.transactionId,
    userInfo.email,
    userInfo.name,
  ]);

  const handleSubmit = async (name, email, phone) => {
    const _data = {
      first_name: name,
      phone_number: phone,
    };

    setCxData(_data);
    setError("");
    setUserInfo({ name, email, contact: phone });
    setLoading(true);

    const is_rescheduling = false;

    const _ob_res = await fetchRequest(
      V4_ONBOARDING_API("doc_appt", is_rescheduling, sessionId),
      {
        method: "POST",
        body: JSON.stringify({
          first_name: name?.trim(),
          email: email?.toLowerCase()?.trim(),
          phone_number: "+91" + phone,
          gender: "M",
        }),
      }
    );

    if (_ob_res.status === 200) {
      setCaseId(_ob_res.data.caseId);
      setDataVisible(true);
      handlePreDefinedUserAttributes("add_first_name", name);
      handlePreDefinedUserAttributes("add_mobile", phone);
    }

    if (_ob_res.hasError) {
      setError("Unexpected error occurred, please contact traya support");
    } else if (!_ob_res.data?.transactionId) {
      setError(
        "Unfortunately, we are not able to book a slot please try again"
      );
    } else {
      setApiResponse(_ob_res.data);

      const utmRes = await postUTMData(
        MF_TRANSACTION_API(_ob_res.data.transactionId, "doc_appt"),
        queryStrings.utmData
      );
      const cohortRes = await postCohortData(
        MF_TRANSACTION_API(_ob_res.data.transactionId, "doc_appt"),
        queryStrings.cohort
      );
      if (utmRes.hasError || cohortRes.hasError) {
        setError("Unexpected error occurred, please contact traya support");
        setLoading(false);
        return;
      }
      Cookies.remove("__TRAYA_UTM__");
      setShowSlots(true);
    }
    setLoading(false);
  };

  const handleBooking = async (_, slotId) => {
    const encryptedEmail = userInfo?.email
      ? encryptMD5(userInfo?.email.trim()).toString()
      : "";
    const encryptedPhone = userInfo?.contact
      ? encryptMD5(userInfo?.contact.trim()).toString()
      : "";

    window.dataLayer = window.dataLayer || [];
    dataLayer.push({ ecommerce: null });
    window.dataLayer.push({
      event: "SlotSelected",
      PageName: "Doctor Consultation",
      JourneyType: "Appointment",
      EID: encryptedEmail,
      MID: encryptedPhone,
      NAMID: userInfo?.contact.trim() ? userInfo?.contact.trim() : "",
      NAEID: userInfo?.email.trim() ? userInfo?.email.trim() : "",
      Section: "Lead Form",
    });
    setErrMsg("");
    setSlotId(slotId);

    setLoading(true);
    const _res = await fetchRequest(DOCTOR_FORM_SLOT(sessionId), {
      method: "POST",
      body: JSON.stringify({
        from_crm: UTM_CAMPAIGN === "traya_team" ? true : false,
        case_id: apiResponse.caseId,
        transaction_id: apiResponse.transactionId,
        consult_doctor_fees: CONSULT_DOCTOR_FEES,
        slot_time: currSlotTime,
        slots: currSlot,
      }),
    });
    window.localStorage.setItem("ca_id", apiResponse.caseId);
    window.localStorage.setItem("tid", apiResponse.transactionId);
    setLoading(false);

    if (_res.status === 500) {
      setErrMsg("Something went wrong. Please contact traya support.");
      setApiError(true);
    } else if (_res.status === 409) {
      setErrMsg(_res?.data?.message);
      setApiError(true);
    } else if (_res.status === 400) {
      setErrMsg(_res?.data?.message);
      setApiError(true);
    } else if (_res.status === 200) {
      if (_res && _res.data) {
        // payuRef.current?.click(); // -> commented only for development
        setCoachName(_res.data.assignment);
        setSlotBooked(true);
        // -> below code is only for development
        if (
          window.confirm("Payment Request/ Ok(Sucess) Cancel(Failed)") === true
        ) {
          await paymentSuccess(apiResponse, slotId);
        } else {
          await paymentFailure(apiResponse, slotId);
        }
        // ----------
      }
    } else {
      setErrMsg("Something went wrong, please contact support");
      setApiError(true);
    }

    // const timeout = setTimeout(() => {
    // 	window.location.reload();
    // }, WAIT_FOR_PAYMENT);

    // if ("razorpay_payment_id" in paymentInfo) {
    // 	pr = { ...paymentInfo };
    // } else {
    // 	pr = await displayRazorpay(
    // 		userInfo,
    // 		apiResponse.amount,
    // 		apiResponse.currency,
    // 		apiResponse.order_id
    // 	);
    // 	setPaymentInfo({ ...pr });
    // }

    // if ("razorpay_payment_id" in pr) {
    // 	clearTimeout(timeout);

    // 	setLoading(true);
    // 	await fetchRequest(CONFIRM_DOCTOR_FORM_SLOT_API, {
    // 		method: "POST",
    // 		body: JSON.stringify({
    // 			case_id: apiResponse.caseId,
    // 			slot_id: slotId,
    // 			razorpay_order_id: apiResponse.order_id,
    // 			booking_id: _bookingId,
    // 		}),
    // 	});
    // 	setLoading(false);

    // 	setSlotBooked(true);
    // 	return { updateSlots: false };
    // }

    // return { updateSlots: true };
  };

  const activityLogger = async (sessionId) => {
    let _url = `${DEFAULT_API_URL}log-user-activity`;
    let _res = await fetchRequest(_url, {
      method: "PUT",
      body: JSON.stringify({
        session_id: sessionId,
        origin: "499_BOOKING",
        url:
          router.pathname === "/doctor-landingV1/appointment"
            ? "https://form.traya.health/doctor-landingV1/appointment"
            : "https://form.traya.health/doctor-appointment",
        user_event: {
          event: "Visiting 499 Doctor Appointment Form",
          meta: {
            case_id: caseId,
            timestamps: getCurrentTimeInReadableForm(),
          },
        },
      }),
    });
  };

  useEffect(() => {
    const _sessionId = uuidv4();
    setSessionId(_sessionId);
    Cookies.set("session_id_activity_logger", _sessionId);
    if (_sessionId) {
      activityLogger(_sessionId);
    }
  }, []);

  const selectedDateTime = useMemo(() => {
    return {
      date: dayjs(selectedInfo.date).format("MMMM D"),
      startTime: dayjs(selectedInfo.time).format("hh:mm A"),
      endTime: dayjs(selectedInfo.time).add(30, "minute").format("hh:mm a"),
    };
  }, [selectedInfo]);

  if (slotBooked) {
    window.localStorage.setItem("doctor_app_date", selectedDateTime.date);
    window.localStorage.setItem(
      "doctor_app_startTime",
      selectedDateTime.startTime
    );
  }

  function chatHandler(e) {
    e.preventDefault();
    window.open(
      "https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+have+a+query&type=phone_number&app_absent=0",
      "_blank"
    );
  }

  function onClose() {
    router.reload();
  }

  if (apiError) {
    return (
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[7%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            <p className="font-sans mx-2 text-center text-[22px] md:text-4xl lg:text-4xl font-[600] text-brand-dark">
              {errMsg}
            </p>
            <button
              className="px-2 py-2 mt-16 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[18px] md:text-[22px] font-[600] font-sans focus:outline-none"
              // onClick={onClose}
              onClick={() => {
                if (
                  errMsg ===
                  "You already have a active booking, if you want to reschedule visit this page"
                ) {
                  router.push("/reschedule/doctor-appointment");
                } else {
                  onClose();
                }
              }}
            >
              {errMsg ===
              "You already have a active booking, if you want to reschedule visit this page"
                ? "Reschedule Doctor Consult"
                : "CLOSE"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isEmptySlot) {
    return (
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[7%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            <p className="font-sans mx-2 text-[24px] md:text-4xl lg:text-4xl font-[900] text-brand-dark">
              Oops, No slots available
            </p>
            <p className="font-sans p-3 text-[16px] md:text-2xl lg:text-[22px] font-[400] text-[#434343]">
              Sorry but your doctor is unavailable at this time. Please check
              back later.
            </p>
            <button
              className="px-12 py-2 mt-16 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none"
              onClick={chatHandler}
            >
              CHAT WITH US
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (hasBooked) {
    return (
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[7%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            <p className="font-sans mx-2 text-[22px] md:text-4xl lg:text-4xl font-[600] text-brand-dark">
              {errorMessage
                ? errorMessage
                : "You have already booked a slot. Your doctor will be in touch with you shortly."}
            </p>
            <button
              className="px-12 py-2 mt-16 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] fonr-sans focus:outline-none"
              onClick={chatHandler}
            >
              CHAT WITH US
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="overflow-y-hidden w-full h-full flex items-center justify-center mt-[25%] xl:mt-[7%]">
        <div className="flex flex-col items-center justify-center w-full p-4 md:mt-4 overflow-y-hidden">
          <div className="flex flex-col w-11/12 md:w-9/12 lg:w-9/12 px-2 md:px-4 xl:px-4 py-6 bg-custom-lightgrey shadow-lg shadow-gray-500/50 rounded-2xl">
            <p className="font-sans mx-2 text-[24px] md:text-4xl lg:text-4xl font-[900] text-brand-dark">
              Oops!
            </p>
            <p className="font-sans p-3 text-[16px] md:text-2xl lg:text-[22px] font-[400] text-[#434343]">
              {errorMessage}
            </p>
            <button
              className="px-12 py-2 mt-16 mx-auto w-full md:w-96 rounded-md bg-custom-green text-[#414042] text-[22px] font-[600] font-sans focus:outline-none"
              onClick={chatHandler}
            >
              CHAT WITH US
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {loading && <Loader />}
      <div className="w-full h-full overflow-y-hidden mt-4 md:divide-x-2 md:px-24 hidden md:hidden lg:block xl:block">
        <div className="flex flex-col justify-between w-full h-full gap-x-32 md:flex-row">
          <div className="flex-1 justify-center">
            <DoctorCalendlyForm
              error={error}
              handleSubmit={handleSubmit}
              setShowSlots={setShowSlots}
              isSlotSelected={Boolean(selectedInfo.id)}
              setGetApi={setGetApi}
              getApi={getApi}
              isConfirm={isConfirm}
              setConfirmed={setConfirmed}
              setGetData={setGetData}
              reschedule={false}
              setTrigger={setTrigger}
              showSlots={showSlots}
              trigger={trigger}
              dataVisible={dataVisible}
              path={router.pathname}
            />
            <form action={PAYU_URL} method="post">
              <input type="hidden" name="key" value={PAYU_KEY} />
              <input
                type="hidden"
                name="txnid"
                value={apiResponse.transactionId}
              />
              <input type="hidden" name="productinfo" value="Consult Call" />
              <input type="hidden" name="amount" value={CONSULT_DOCTOR_FEES} />
              <input type="hidden" name="email" value={userInfo.email} />
              <input type="hidden" name="firstname" value={userInfo.name} />
              <input type="hidden" name="udf1" value={apiResponse.caseId} />
              {/* <input type="hidden" name="udf2" value={slotId} /> */}
              <input type="hidden" name="surl" value={PAYU_SURL} />
              <input type="hidden" name="furl" value={PAYU_FURL} />
              <input type="hidden" name="hash" value={payuHash} />
              <button value="submit" ref={payuRef} hidden />
            </form>
          </div>

          <div className="flex-1 md:justify-center pb-[5%]">
            {showSlots & trigger ? (
              <>
                <SlotBookingV3
                  handleBooking={handleBooking}
                  setIsConfirm={setIsConfirm}
                  selectedInfo={setSelectedInfo}
                  confirmed={confirmed}
                  setCurrSlot={setCurrSlot}
                  setCurrSlotTime={setCurrSlotTime}
                  setIsEmptySlot={setIsEmptySlot}
                  setCheckError={setCheckError}
                  setErrorMessage={setErrorMessage}
                  setHasBooked={setHasBooked}
                  setIsError={setIsError}
                  setChatData={setChatData}
                  apiCall={false}
                  api="DOCTOR_SLOTS_API"
                  caseId={apiResponse.caseId}
                  bookForm={true}
                  reschedule={false}
                  getData={getData}
                  doc={true}
                  isConfirm={isConfirm}
                  sessionId={sessionId}
                  cxData={cxData}
                  path={router.pathname}
                />
                {selectedInfo && selectedInfo.id && (
                  <div className="mt-2 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold border-2 focus:outline-none w-full h-20 pb-2.5 pt-2.5">
                    <button
                      onClick={() => handleBooking(true, selectedInfo.id)}
                      className="absolute bottom-0 px-12 py-3 m-auto mt-2 mb-2 uppercase rounded-md w-full md:w-96 bg-brand-accent text-green-50"
                    >
                      Confirm
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex justify-center w-full gap-1 p-4 md:flex-row mt-12">
                  <div className="w-auto">
                    <div className="relative flex justify-center gap-1 pb-2 border-none w-max h-22rem">
                      <div className="absolute top-0 bottom-0 left-0 right-0 cursor-not-allowed blur-none opacity-75 bg-white"></div>
                      <div className="space-y-8 w-max">
                        <DateListPlaceholderV3 />
                        <SlotsListPlaceholderV3 />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="w-screen h-full  mt-2 md:divide-x-2 md:px-24 block xl:hidden lg:hidden md:block">
        <div className="flex flex-col w-full h-full">
          <DoctorCalendlyForm
            error={error}
            handleSubmit={handleSubmit}
            setShowSlots={setShowSlots}
            isSlotSelected={Boolean(selectedInfo.id)}
            setGetApi={setGetApi}
            getApi={getApi}
            isConfirm={isConfirm}
            setConfirmed={setConfirmed}
            setGetData={setGetData}
            reschedule={false}
            setTrigger={setTrigger}
            trigger={trigger}
            showSlots={showSlots}
            dataVisible={dataVisible}
            path={router.pathname}
          />
          {dataVisible && (
            <div className="sticky top-[0%] w-[100%] bg-white mx-auto">
              <div className="py-[2%]"></div>
              <div className="border-2 border-[#B7D340] rounded-md w-[92%] mx-auto pl-2 bg-white">
                <p
                  className={`mt-2 text-[20px] font-[600] font-sans text-brand-dark md:text-3xl
          ml-0 `}
                >
                  {getData?.first_name}
                </p>
                {getData?.phone_number && (
                  <p
                    className={`text-[16px] font-[600] font-sans text-brand-dark md:text-3xl mb-2
          `}
                  >
                    Contact no.:{" "}
                    <span
                      className={`text-[16px] font-[600] font-sans text-brand-dark md:text-3xl mb-2
          `}
                    >
                      {getData?.phone_number?.replace("+91", "")}
                    </span>
                  </p>
                )}
              </div>
              <div className="py-[2%]"></div>
            </div>
          )}
          {/* <form action={PAYU_URL} method="post">
                  <input type="hidden" name="key" value={PAYU_KEY} />
                  <input
                    type="hidden"
                    name="txnid"
                    value={apiResponse.transactionId}
                  />
                  <input
                    type="hidden"
                    name="productinfo"
                    value="Consult Call"
                  />
                  <input
                    type="hidden"
                    name="amount"
                    value={CONSULT_DOCTOR_FEES}
                  />
                  <input type="hidden" name="email" value={userInfo.email} />
                  <input type="hidden" name="firstname" value={userInfo.name} />
                  <input type="hidden" name="udf1" value={apiResponse.caseId} />
                  <input type="hidden" name="udf2" value={slotId} />
                  <input type="hidden" name="surl" value={PAYU_SURL} />
                  <input type="hidden" name="furl" value={PAYU_FURL} />
                  <input type="hidden" name="hash" value={payuHash} />
                  <button value="submit" ref={payuRef} hidden />
                </form> */}
          {trigger && (
            <>
              <div>
                <form action={PAYU_URL} method="post">
                  <input type="hidden" name="key" value={PAYU_KEY} />
                  <input
                    type="hidden"
                    name="txnid"
                    value={apiResponse.transactionId}
                  />
                  <input
                    type="hidden"
                    name="productinfo"
                    value="Consult Call"
                  />
                  <input
                    type="hidden"
                    name="amount"
                    value={CONSULT_DOCTOR_FEES}
                  />
                  <input type="hidden" name="email" value={userInfo.email} />
                  <input type="hidden" name="firstname" value={userInfo.name} />
                  <input type="hidden" name="udf1" value={apiResponse.caseId} />
                  {/* <input type="hidden" name="udf2" value={slotId} /> */}
                  <input type="hidden" name="surl" value={PAYU_SURL} />
                  <input type="hidden" name="furl" value={PAYU_FURL} />
                  <input type="hidden" name="hash" value={payuHash} />
                  <button value="submit" ref={payuRef} hidden />
                </form>
                <SlotBookingV3
                  handleBooking={handleBooking}
                  setIsConfirm={setIsConfirm}
                  selectedInfo={setSelectedInfo}
                  confirmed={confirmed}
                  setCurrSlot={setCurrSlot}
                  setCurrSlotTime={setCurrSlotTime}
                  setIsEmptySlot={setIsEmptySlot}
                  setCheckError={setCheckError}
                  setErrorMessage={setErrorMessage}
                  setHasBooked={setHasBooked}
                  setIsError={setIsError}
                  setChatData={setChatData}
                  apiCall={false}
                  api="DOCTOR_SLOTS_API"
                  caseId={apiResponse.caseId}
                  bookForm={true}
                  reschedule={false}
                  getData={getData}
                  doc={true}
                  isConfirm={isConfirm}
                  sessionId={sessionId}
                  cxData={cxData}
                  path={router.pathname}
                />
              </div>
              {isConfirm && (
                <div className="py-2 px-4 flex justify-between 	align-center fixed bottom-0 right-0 bg-white font-bold focus:outline-none w-full">
                  <div className="text-[22px] m-auto py-auto w-[40%]">₹499</div>
                  <div className="w-[60%]">
                    <button
                      className={`px-2 py-3 w-[100%] text-center align-center md:w-96 bg-custom-green text-[#414042] text-[20px] font-sans font-[600] focus:outline-none rounded-md
                  ${isConfirm ? "" : "cursor-not-allowed blur-none "}`}
                      disabled={!isConfirm}
                      onClick={() => {
                        setConfirmed(true);
                        // freshTrackEventV2("landed_payment_page", {
                        //   timestamps: getCurrentTimeInReadableForm(),
                        //   case_id: caseId,
                        //   url: `https://form.traya.health${router.pathname}`,
                        // });
                        moengageTrackEvent("landed_payment_page", {
                          case_id: caseId,
                          timestamps: getCurrentTimeInReadableForm(),
                          url: `https://form.traya.health${router.pathname}`,
                        });
                      }}
                    >
                      Confirm & Pay
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DoctorAppointmentForm;
