"use client";

import { useMemo, useState, useEffect } from "react";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import moment from "moment";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import {
  CF_ONBOARDING_API,
  MF_TRANSACTION_API,
  NEW_SLOTS_API,
} from "@constants/urls";
import getQueryStrings from "@context/getQueryStrings";
import { postCohortData } from "@helpers/postCohortData";
import { postUTMData } from "@helpers/postUTMData";
import { fetchRequest } from "@helpers/fetchRequest";

import CalendlyForm from "./CalendlyForm";
import { SlotBookingV2 } from "@components/SlotBooking/SlotBookingV2";
import Loader from "@components/Loader";
import DateListPlaceholderV3 from "./DateListPlaceholderV3";
import SlotsListPlaceholderV3 from "./SlotsListPlaceholderV3";
import { FiClock, FiCalendar } from "react-icons/fi";
import SuccessIcon from "@assets/images/Success_Icon.png";
import { DEFAULT_API_URL, TRAYA_HOME_URL } from "@constants/config";
import SlotBookingHeader from "./SlotBookingHeader";
import { handlePreDefinedUserAttributes } from "@helpers/handleMoengage";
import { getCurrentTimeInReadableForm } from "@helpers/timeFormatter";
import { fredoka } from "@/constants/fontConfig";
import CloseSvg from "@/assets/icons/CloseSvg";
import EmptySlotBooking from "./EmptySlotBooking";
import BookedAppointment from "./BookedAppointment";
import AppointmentError from "./AppointmentError";
import NotRegistered from "./NotRegistered";
import IsLead from "./IsLead";
import BookingFailed from "./BookingFailed";

const CalendlyBookingForm = () => {
  const router = useRouter();

  const UTM_CAMPAIGN = router.query?.utm_campaign;
  const UTM_MEDIUM = router.query?.utm_medium;
  const UTM_SOURCE = router.query?.utm_source;

  const [caseId, setCaseId] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [slotBooked, setSlotBooked] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [getApi, setGetApi] = useState("SLOTS_API");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [coachName, setCoachName] = useState();
  const [currSlot, setCurrSlot] = useState({});
  const [view, setView] = useState(false);
  const [isEmptySlot, setIsEmptySlot] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [hasBooked, setHasBooked] = useState(false);
  const [chatData, setChatData] = useState({});
  const [getData, setGetData] = useState({});
  const [isSlotBooked, setIsSlotBooked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [isNotRegistered, setIsNotRegistered] = useState(false);
  const [slotBookingTime, setSlotBookedTime] = useState("");
  const [slotBookingDate, setSlotBookedDate] = useState("");
  const [alreadyBooked, setAlreadyBooked] = useState({});
  const [bookingFailed, setBookingFailed] = useState(false);
  const [dataVisible, setDataVisible] = useState(false);
  const [cxData, setCxData] = useState({});
  const [sessionId, setSessionId] = useState("");
  const [isLead, setIsLead] = useState(false);

  const queryStrings = useMemo(() => getQueryStrings(), []);
  const tagsData = ["HOMEPAGE", "OPTIONPAGE", "SLOTPAGE"];

  const handleSubmit = async (name, phone) => {
    const _data = {
      first_name: name,
      phone_number: phone,
    };

    setCxData(_data);
    setError("");
    setIsLoading(true);
    const _ob_res = await fetchRequest(CF_ONBOARDING_API("appt"), {
      method: "POST",
      body: JSON.stringify({
        first_name: name?.trim(),
        // email: email?.toLowerCase()?.trim(),
        phone_number: "+91" + phone,
        gender: "M",
      }),
    });
    if (_ob_res) {
      setTrigger(true);
    }
    if (_ob_res.status === 300) {
      setError(_ob_res?.data?.message);
      setIsLoading(false);
    } else if (_ob_res.hasError) {
      setError("Unexpected error occurred, please contact traya support");
      setIsLoading(false);
    } else {
      setCaseId(_ob_res.data.caseId);

      const utmRes = await postUTMData(
        MF_TRANSACTION_API(_ob_res.data.transactionId, "appt"),
        queryStrings.utmData
      );
      const cohortRes = await postCohortData(
        MF_TRANSACTION_API(_ob_res.data.transactionId, "appt"),
        queryStrings.cohort
      );
      setIsLoading(false);
      if (utmRes.hasError || cohortRes.hasError) return;
      Cookies.remove("__TRAYA_UTM__");
      setShowSlots(true);
    }
    if (_ob_res.status === 500) {
      if (
        _ob_res?.data?.message?.startsWith(
          "No case found for this phone number"
        )
      ) {
        setIsNotRegistered(true);
      }
    }
    if (_ob_res.status === 200) {
      setDataVisible(true);
      handlePreDefinedUserAttributes("add_first_name", name);
      handlePreDefinedUserAttributes("add_mobile", phone);
    }
  };

  const handleBooking = async (_, slotId) => {
    setIsLoading(true);
    let _res;
    if (getApi === "ONBOARDING_SLOTS_API") {
      _res = await fetchRequest(NEW_SLOTS_API, {
        method: "POST",
        body: JSON.stringify({
          case_id: caseId,
          slot_id: slotId,
          slots: currSlot,
          order_related: true,
          session_id: sessionId,
        }),
      });
    } else if (getApi === "SLOTS_API") {
      _res = await fetchRequest(NEW_SLOTS_API, {
        method: "POST",
        body: JSON.stringify({
          case_id: caseId,
          slot_id: slotId,
          slots: currSlot,
          appointment: true,
          session_id: sessionId,
          from_crm: UTM_CAMPAIGN === "traya_team" ? true : false,
          booking_type:
            UTM_SOURCE !== undefined &&
            UTM_MEDIUM !== undefined &&
            UTM_CAMPAIGN !== undefined
              ? UTM_SOURCE + ">" + UTM_MEDIUM + ">" + UTM_CAMPAIGN
              : "",
        }),
      });
    }

    setIsLoading(false);
    if (_res.status === 200) {
      setSlotBooked(true);
      setCoachName(_res.data.assignment);
      // setInterval(() => {
      //   // window.location.replace(TRAYA_HOME_URL);
      // }, 5000);
    } else if (
      _res.status === 400 &&
      _res?.data?.message?.startsWith("You already have a booking")
    ) {
      const arr = _res?.data?.message.split(" ");
      let _date = arr[arr.length - 2];
      let _time = arr[arr.length - 1];
      _time = moment(new Date(`${_date} ${_time}`)).add({
        hours: 5,
        minutes: 30,
      });
      setSlotBookedDate(_date);
      setSlotBookedTime(_time);

      setIsSlotBooked(true);
    } else if (_res.status === 409) {
      setHasBooked(true);
      setErrorMessage(
        "You have already booked a slot. Your hair coach will be in touch with you shortly"
      );
      setAlreadyBooked(_res?.data?.message);
    } else if (_res.status === 500) {
      setErrorMessage("Something went wrong. Please contact traya support.");
      setBookingFailed(true);
    }
    return _res;
  };

  const activityLogger = async (sessionId) => {
    let _url = `${DEFAULT_API_URL}log-user-activity`;
    let _res = await fetchRequest(_url, {
      method: "PUT",
      body: JSON.stringify({
        session_id: sessionId,
        origin: "SLOT_BOOKING",
        url: "https://form.traya.health/v2/book-appointment",
        user_event: {
          event: "Visiting Book Slot Appointment Form",
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
    if (_sessionId) {
      activityLogger(_sessionId);
    }
  }, []);

  const selectedDateTime = useMemo(() => {
    return {
      date: dayjs(selectedInfo.date).format("dddd, D MMMM"),
      startTime: dayjs(selectedInfo.time).format("hh:mm A"),
      endTime: dayjs(selectedInfo.time).add(30, "minute").format("hh:mm a"),
      hour:
        dayjs(selectedInfo.time).hour() < 12
          ? "Morning"
          : dayjs(selectedInfo.time).hour() >= 12 &&
            dayjs(selectedInfo.time).hour() < 17
          ? "Afternoon"
          : "Evening",
    };
  }, [selectedInfo]);

  function chatHandler(e) {
    e.preventDefault();
    window.open(
      "https://api.whatsapp.com/send/?phone=918828006272&text=Hey%21+I+have+a+query&type=phone_number&app_absent=0",
      "_blank"
    );
  }

  const handleHairTest = () => {
    router.push(`/questions`);
  };

  if (isEmptySlot) {
    return (
      <EmptySlotBooking checkError={checkError} chatHandler={chatHandler} />
    );
  }
  if (hasBooked || isSlotBooked) {
    return <BookedAppointment alreadyBooked={alreadyBooked} />;
  }
  if (isError) {
    return (
      <AppointmentError errorMessage={errorMessage} chatHandler={chatHandler} />
    );
  }

  if (isNotRegistered) {
    return <NotRegistered handleHairTest={handleHairTest} />;
  }

  if (isLead) {
    return <IsLead handleHairTest={handleHairTest} />;
  }

  if (bookingFailed) {
    return (
      <BookingFailed errorMessage={errorMessage} chatHandler={chatHandler} />
    );
  }

  const back = () => {
    router.reload(false);
  };

  const closeModal = () => {
    setSlotBooked(false);
    setInterval(() => {
      router.reload();
    }, 500);
  };

  return (
    <>
      {isLoading && <Loader />}
      <SlotBookingHeader />

      <div className="w-full h-full overflow-y-hidden mt-8 md:divide-x-2 md:px-24 hidden md:hidden lg:block xl:block">
        <div className="flex flex-col justify-between w-full h-full gap-x-32 md:flex-row">
          <div className="flex-1 justify-center">
            <p className="font-sans font-[900] text-[30px] text-[#414042] ml-[7%]">
              Book a Hair Coach Appointment
            </p>
            <CalendlyForm
              error={error}
              handleSubmit={handleSubmit}
              getApi={getApi}
              isConfirm={isConfirm}
              setConfirmed={setConfirmed}
              setGetData={setGetData}
              getData={getData}
              showSlots={showSlots}
              dataVisible={dataVisible}
            />
          </div>

          <div className="flex-1 md:justify-center pb-[7%]">
            {showSlots ? (
              <SlotBookingV2
                api={"SLOTS_API"}
                caseId={caseId}
                handleBooking={handleBooking}
                setIsConfirm={setIsConfirm}
                selectedInfo={setSelectedInfo}
                isConfirm={isConfirm}
                confirmed={confirmed}
                setCurrSlot={setCurrSlot}
                setIsEmptySlot={setIsEmptySlot}
                setCheckError={setCheckError}
                setErrorMessage={setErrorMessage}
                setHasBooked={setHasBooked}
                setIsError={setIsError}
                apiCall={false}
                bookForm={true}
                setAlreadyBooked={setAlreadyBooked}
                doc={false}
                reschedule={false}
                cxData={cxData}
                sessionId={sessionId}
                setIsLead={setIsLead}
              />
            ) : (
              <>
                <div className="flex justify-center w-full gap-1 p-4 md:flex-row">
                  <div className="w-auto">
                    <div className="relative flex justify-center gap-1 pb-2 border-none w-max h-22rem">
                      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 cursor-not-allowed blur-none opacity-75 bg-white"></div>
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
          {slotBooked ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-60"
                onClick={() => closeModal()}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-4 w-[27%] mx-auto">
                <div className="relative w-xl px-4 py-6 mx-auto bg-white rounded-md shadow-lg">
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
                    <div className="items-center justify-center text-center mx-auto">
                      <p
                        className={`${fredoka.variable} mx-2 text-[20px] text-[#414042] font-[400]`}
                      >
                        Successfully Call Booked!
                      </p>
                      <div className="py-4">
                        <Image
                          src={SuccessIcon}
                          priority={true}
                          width={180}
                          height={180}
                          className="rounded-lg"
                          alt="Success Icon"
                        />
                      </div>
                      <p className="font-sans text-[16px] font-[400] text-[#848484]">
                        Thanks for choosing to connect with Traya hair coach, we
                        are here only for you!
                      </p>
                      <div className="flex justify-between">
                        <div className="flex text-[12px] font-[700] text-[#414042] mt-4">
                          <FiCalendar color="#414042" size={18} />
                          &nbsp;
                          <p className="font-[700]">{selectedDateTime.date}</p>
                        </div>
                        <div className="flex text-[12px] font-[700] text-[#414042] mt-4">
                          <FiClock color="#414042" size={18} />
                          &nbsp;
                          <p className="font-[700]">
                            {selectedDateTime.startTime},{" "}
                            {selectedDateTime.hour}
                          </p>
                        </div>
                      </div>
                      <button
                        className="px-12 py-2 mt-6 mx-auto w-[100%] rounded-md bg-[#B7D340] text-[#414042] text-[20px] font-[600] font-sans focus:outline-none shadow-sm"
                        onClick={() => {
                          window.location.replace(TRAYA_HOME_URL);
                        }}
                      >
                        OKAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="w-screen h-full  mt-2 md:divide-x-2 md:px-24 block xl:hidden lg:hidden md:block">
        <div className="flex flex-col justify-between w-full h-full gap-x-32 md:gap-x-0 md:flex-row">
          
          <CalendlyForm
            error={error}
            handleSubmit={handleSubmit}
            getApi={getApi}
            isConfirm={isConfirm}
            setConfirmed={setConfirmed}
            setGetData={setGetData}
            getData={getData}
            showSlots={showSlots}
            dataVisible={dataVisible}
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

          {showSlots && (
            <SlotBookingV2
              api={"SLOTS_API"}
              caseId={caseId}
              handleBooking={handleBooking}
              selectedInfo={setSelectedInfo}
              setIsConfirm={setIsConfirm}
              isConfirm={isConfirm}
              confirmed={confirmed}
              setCurrSlot={setCurrSlot}
              setIsEmptySlot={setIsEmptySlot}
              setCheckError={setCheckError}
              setErrorMessage={setErrorMessage}
              setHasBooked={setHasBooked}
              setIsError={setIsError}
              apiCall={false}
              bookForm={false}
              setAlreadyBooked={setAlreadyBooked}
              doc={false}
              reschedule={false}
              cxData={cxData}
              sessionId={sessionId}
              setIsLead={setIsLead}
            />
          )}

          {slotBooked ? (
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-60"
                onClick={() => closeModal()}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-xl px-2 py-6 mx-auto bg-white rounded-md shadow-lg">
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
                      <p
                        className={`${fredoka.variable} mx-2 text-[20px] text-[#414042] font-[400]`}
                      >
                        Successfully Call Booked!
                      </p>
                      <div className="py-4">
                        <Image
                          src={SuccessIcon}
                          priority={true}
                          width={180}
                          height={180}
                          className="rounded-lg"
                          alt="Success Icon"
                        />
                      </div>
                      <p className="font-sans text-[16px] font-[400] text-[#848484]">
                        Thanks for choosing to connect with Traya hair coach, we
                        are here only for you!
                      </p>
                      <div className="flex justify-between">
                        <div className="flex text-[12px] font-[700] text-[#414042] mt-4">
                          <FiCalendar color="#414042" size={18} />
                          &nbsp;
                          <p className="font-[700]">{selectedDateTime.date}</p>
                        </div>
                        <div className="flex text-[12px] font-[700] text-[#414042] mt-4">
                          <FiClock color="#414042" size={18} />
                          &nbsp;
                          <p className="font-[700]">
                            {selectedDateTime.startTime},{" "}
                            {selectedDateTime.hour}
                          </p>
                        </div>
                      </div>
                      <button
                        className="px-12 py-2 mt-6 mx-auto w-[100%] rounded-md bg-[#B7D340] text-[#414042] text-[20px] font-[600] font-sans focus:outline-none shadow-sm"
                        onClick={() => {
                          window.location.replace(TRAYA_HOME_URL);
                        }}
                      >
                        OKAY
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {isConfirm && (
            <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold focus:outline-none w-full ">
              <button
                className={`px-12 py-2 w-full md:w-96 bg-custom-green text-[#414042] text-[22px] font-sans font-[600] focus:outline-none
                         ${
                           isConfirm
                             ? ""
                             : "cursor-not-allowed blur-none opacity-75"
                         }`}
                disabled={!isConfirm}
                onClick={() => setConfirmed(true)}
              >
                CONFIRM
              </button>
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default CalendlyBookingForm;
