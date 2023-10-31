import React, { useCallback, useContext, useEffect, useState } from "react";

import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";
import Loader from "../Loader";
import {
  GET_CONSULT_CALL_API,
  GET_DOCTOR_SLOTS_API,
  GET_SLOTS_API,
  GET_ONBOARDING_SLOTS_API,
} from "../../constants/urls";
import { QuestionsContext } from "../../context/questions-store";
import { fetchRequest } from "../../helpers/fetchRequest";
import { groupSlots } from "./handler";

import DateListV3 from "../appointment/DateListV3";
import SlotsListV3 from "../appointment/SlotsListV3";

import { DEFAULT_API_URL } from "../../constants/config";
import { moengageTrackEvent } from "../../helpers/handleMoengage";
import {
  freshTrackEventV2,
  freshVisitor,
} from "../../api/handleFreshDesk";

export const SlotBookingV3 = ({
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
  setChatData,
  apiCall,
  bookForm,
  reschedule,
  getData,
  doc,
  isConfirm,
  sessionId,
  cxData,
  path,
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
    if (reschedule) {
      // let url = `${DEFAULT_API_URL}slots/doctor/${caseId}?is_rescheduling=${reschedule}`;
      let url = `${DEFAULT_API_URL}v3/slots/doctor/${caseId}?is_rescheduling=${reschedule}&session_id=${sessionId}`;
      _res = await fetchRequest(url);
      let _url = `${DEFAULT_API_URL}get-user-v2/${caseId}`;
      res = await fetchRequest(_url);
      setIsLoading(false);
    } else {
      _res = await fetchRequest(getSlots(caseId, sessionId));
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
      moengageTrackEvent("landed_doctor_slot_booking", {
        case_id: caseId,
        session_id: sessionId,
        timestamps: _timestamps,
      });
      // if (res) {
      //   freshVisitor(res?.data.email);
      //   freshTrackEventV2("landed_doctor_slot_booking", {
      //     first_name: res?.data.first_name,
      //     mobile_number: res?.data.phone_number,
      //     case_id: caseId,
      //     timestamps: _timestamps,
      //     url: `https://form.traya.health${path}`,
      //   });
      // }
    }

    if (_res.status === 409) {
      setHasBooked(true);
      setErrorMessage(
        "You have already booked a slot. Your doctor will be in touch with you shortly"
      );
      return;
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
  }, [caseId, selectedSlots, api, reschedule]);

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
        <Loader />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col justify-center w-full gap-1 md:flex-row hidden md:hidden lg:block xl:block">
        <div className="w-auto">
          <div className="flex w-full gap-1 md:px-12 md:py-8 overflow-x-hidden border-none md:bg-custom-lightgrey rounded-lg mb-[10%]">
            <div className="w-full h-full space-y-8">
              <DateListV3
                slots={slots}
                selectedDate={selectedDate}
                setDate={setSelectedDate}
                setSlots={setSlots}
                bookForm={bookForm}
                setSlotTime={setSlotTime}
                slotTime={slotTime}
                setIsConfirm={setIsConfirm}
              />

              <SlotsListV3
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
      <div className="flex flex-col justify-center w-full gap-1 md:flex-row block xl:hidden lg:hidden md:block">
        <div className="w-auto ">
          <div className="flex w-full gap-1 md:px-2 md:py-8 overflow-x-hidden overflow-y-hidden border-none  rounded-lg">
            <div className="w-full space-y-6 mt-4 mb-40 overflow-y-hidden">
              <DateListV3
                slots={slots}
                selectedDate={selectedDate}
                setDate={setSelectedDate}
                setSlots={setSlots}
                bookForm={bookForm}
                setSlotTime={setSlotTime}
                slotTime={slotTime}
                setIsConfirm={setIsConfirm}
              />

              <SlotsListV3
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
    </>
  );
};
