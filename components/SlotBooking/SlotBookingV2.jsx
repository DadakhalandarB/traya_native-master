import React, { useCallback, useContext, useEffect, useState } from "react";

// Import external libraries
import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

// Import local components and functions
import LoaderV1 from "../LoaderV1";
import { groupSlots } from "./handler";
import {
  GET_CONSULT_CALL_API,
  GET_DOCTOR_SLOTS_API,
  GET_SLOTS_API,
  GET_ONBOARDING_SLOTS_API,
} from "../../constants/urls";
import DateListV2 from "../appointment/DateListV2";
import SlotsListV2 from "../appointment/SlotsListV2";
import { DEFAULT_API_URL } from "../../constants/config";
import { fetchRequest } from "../../helpers/fetchRequest";
import { QuestionsContext } from "../../context/questions-store";
import { moengageTrackEvent } from "../../helpers/handleMoengage";

export const SlotBookingV2 = ({
  caseId,
  api,
  handleBooking,
  selectedInfo,
  setIsConfirm,
  confirmed,
  setCurrSlot,
  setIsEmptySlot,
  setCheckError,
  setErrorMessage,
  setIsError,
  setHasBooked,
  apiCall,
  bookForm,
  setAlreadyBooked,
  doc,
  reschedule,
  cxData,
  isConfirm,
  sessionId,
  setIsLead,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slots, setSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const { selectedSlots } = useContext(QuestionsContext);
  const [slotTime, setSlotTime] = useState(null);
  
  const slotAPIs = {
    CONSULT_CALL_API: GET_CONSULT_CALL_API,
    SLOTS_API: GET_SLOTS_API,
    ONBOARDING_SLOTS_API: GET_ONBOARDING_SLOTS_API,
    DOCTOR_SLOTS_API: GET_DOCTOR_SLOTS_API,
  };

  const updateSlots = useCallback(async () => {
    setIsLoading(true);
    let getSlots = slotAPIs[api];
    let _res;
    let res;

    if (apiCall) {
      _res = await fetchRequest(getSlots(caseId, null, sessionId));
      let url = `${DEFAULT_API_URL}get-user-v2/${caseId}`;
      res = await fetchRequest(url);
      setIsLoading(false);
    } else if (!apiCall) {
      let firstBooking = true;
      _res = await fetchRequest(getSlots(caseId, firstBooking, sessionId));
      let url = `${DEFAULT_API_URL}get-user-v2/${caseId}`;
      res = await fetchRequest(url);
      setIsLoading(false);
    }

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };

    if (_res.status === 200) {
      let time = new Date();
      const _timestamps = time.toLocaleString(undefined, options);
      moengageTrackEvent("landed_slot_booking", {
        case_id: caseId,
        session_id: sessionId,
        timestamps: _timestamps,
      });
    }
    if (_res.status === 409) {
      setHasBooked(true);
      setErrorMessage(
        "You have already booked a slot. Your hair coach will be in touch with you shortly"
      );
      setAlreadyBooked(_res?.data?.message);

      return;
    } else if (
      _res.status === 500 &&
      _res?.data?.message?.startsWith("You have not placed any order")
    ) {
      setIsLead(true);
    } else if (_res.hasError) {
      setIsError(true);
      setErrorMessage(
        "This link is invalid, please contact your hair coach for more information."
      );
      return;
    }

    if (isEmpty(_res.data)) {
      setIsEmptySlot(true);
    } else if (_res?.data?.message?.startsWith("No any order found")) {
      setCheckError(true);
      setIsEmptySlot(true);
    } else {
      let _data;
      if (Array.isArray(_res.data)) {
        _data = groupSlots(_res.data, true);
      }
      setSlots(_data);
      setSelectedDate(selectedSlots ? selectedSlots.date : "");
      setIsEmptySlot(false);
    }
  }, [caseId, selectedSlots, api]);

  const handleSlotBooking = async (date, slotId) => {
    if (selectedInfo) {
      selectedInfo({ date: selectedDate, time: selectedSlot.slotTime });
    }
    const _res = await handleBooking(date, slotId);
    if (!Boolean(_res)) return;
    if (_res.status === 400 || _res.updateSlots) updateSlots();
  };
  useEffect(() => {
    setCurrSlot(selectedSlot.slots);
  }, [selectedSlot]);

  useEffect(() => {
    if (!caseId) return;
    updateSlots().then(() => {
      setTimeout(() => {
        if (window.screen.width < 600) {
          window.scrollBy({
            top: window.innerHeight - 100,
            left: 0,
            behavior: "smooth",
          });
        }
      }, 500);
    });
  }, [caseId]);

  useEffect(() => {
    if (isEmpty(selectedSlot)) return;
    const _date = dayjs(selectedSlot.slotTime).format("YYYY-MM-DD");
    if (confirmed) {
      handleSlotBooking(_date, selectedSlot.id);
    }
  }, [selectedSlot, confirmed]);

  if (isLoading) {
    return (
      <>
        <LoaderV1 />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center w-full gap-1 md:flex-row hidden md:hidden lg:block xl:block">
        <div className="w-auto">
          <div className="flex w-full gap-1 md:px-12 md:py-8 overflow-x-hidden border-none rounded-lg xl:w-[600px]">
            <div className="w-full h-full space-y-8">
              <DateListV2
                slots={slots}
                selectedDate={selectedDate}
                setDate={setSelectedDate}
                setSlots={setSlots}
                setSlotTime={setSlotTime}
                slotTime={slotTime}
                setIsConfirm={setIsConfirm}
              />

              <SlotsListV2
                selectedDate={selectedDate}
                slots={slots}
                selectedSlot={selectedSlot}
                setSlot={setSelectedSlot}
                setIsConfirm={setIsConfirm}
                doc={doc}
                setSlotTime={setSlotTime}
                slotTime={slotTime}
                isConfirm={isConfirm}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full space-y-6 mt-4 mb-40 block xl:hidden lg:hidden md:block">
        {reschedule && (
          <div className="sticky top-[0%] w-[100%] bg-white mx-auto">
            <div className="py-[2%]"></div>
            <div className="border-2 border-[#B7D340] rounded-md w-[92%] mx-auto pl-2 bg-white">
              <p
                className={`mt-2 text-[20px] font-[600] font-sans text-brand-dark md:text-3xl
            ml-0 `}
              >
                {cxData?.first_name}
              </p>
              {cxData?.phone_number && (
                <p
                  className={`text-[16px] font-[600] font-sans text-brand-dark md:text-3xl mb-2
            `}
                >
                  Contact no.:{" "}
                  <span
                    className={`text-[16px] font-[600] font-sans text-brand-dark md:text-3xl mb-2
            `}
                  >
                    {cxData?.phone_number?.replace("+91", "")}
                  </span>
                </p>
              )}
            </div>
            <div className="py-[2%]"></div>
          </div>
        )}
        <DateListV2
          slots={slots}
          selectedDate={selectedDate}
          setDate={setSelectedDate}
          setSlots={setSlots}
          bookForm={bookForm}
          setSlotTime={setSlotTime}
          slotTime={slotTime}
          setIsConfirm={setIsConfirm}
        />

        <SlotsListV2
          selectedDate={selectedDate}
          slots={slots}
          selectedSlot={selectedSlot}
          setSlot={setSelectedSlot}
          setIsConfirm={setIsConfirm}
          doc={doc}
          setSlotTime={setSlotTime}
          slotTime={slotTime}
          isConfirm={isConfirm}
        />
      </div>
    </>
  );
};
