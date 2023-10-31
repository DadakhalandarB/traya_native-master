import React, { useCallback, useContext, useEffect, useState } from "react";

import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

import {
  GET_CONSULT_CALL_API,
  GET_DOCTOR_SLOTS_API,
  GET_SLOTS_API,
} from "../../constants/urls";
import { QuestionsContext } from "../../context/questions-store";
import { fetchRequest } from "../../helpers/fetchRequest";
import { groupSlots } from "./handler";

import DateList from "../appointment/DateList";
import SlotsList from "../appointment/SlotsList";

export const SlotBooking = ({
  caseId,
  title,
  api,
  handleBooking,
  selectedInfo,
  // setCurrSlot,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slots, setSlots] = useState({});
  const [selectedDate, setSelectedDate] = useState("");
  const [hasError, sethasError] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [currSlot, setCurrSlot] = useState({});
  const selectedSlots = useContext(QuestionsContext);
  const slotAPIs = {
    CONSULT_CALL_API: GET_CONSULT_CALL_API,
    SLOTS_API: GET_SLOTS_API,
    DOCTOR_SLOTS_API: GET_DOCTOR_SLOTS_API,
  };

  const updateSlots = useCallback(async () => {
    setIsLoading(true);
    const getSlots = slotAPIs[api];

    const is_transplant = true;

    const _res = await fetchRequest(
      getSlots(caseId, null, null, is_transplant)
    );
    setIsLoading(false);
    if (_res.hasError) {
      sethasError(true);
      return;
    }
    if (isEmpty(_res.data)) return;

    const _data = groupSlots(_res.data);
    setSlots(_data);
    setSelectedDate(selectedSlots ? selectedSlots.date : "");
  }, [caseId, selectedSlots, api]);

  const handleSlotBooking = async (date, slotId, selectedSlot) => {
    // if (selectedInfo) {
    //   selectedInfo({ date: selectedDate, time: selectedSlot.slotTime });
    // }
    const _res = await handleBooking(date, slotId, selectedSlot.slots);
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

    // if (selectedInfo) {
    //   selectedInfo({
    //     date: selectedDate,
    //     time: selectedSlot.slotTime,
    //     id: selectedSlot.id,
    //   });
    const _date = dayjs(selectedSlot.slotTime).format("YYYY-MM-DD");
    setTimeout(() => {
      handleSlotBooking(_date, selectedSlot.id, selectedSlot);
    }, 2000);
    // }
  }, [selectedSlot]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full p-4 md:h-full">
        <p className="h-auto">Checking availability...</p>
      </div>
    );
  }
  if (hasError) {
    return (
      <div className="flex items-center justify-center w-full p-4 md:h-full">
        <p className="h-auto">
          This request is invalid or You might already booked a slot, please
          contact your hair coach for more information.
        </p>
      </div>
    );
  }

  if (isEmpty(slots)) {
    return (
      <div className="flex items-center justify-center w-full p-4 md:h-full">
        <p className="h-auto">Ooops, No slots available</p>
      </div>
    );
  }

  return (
    <>
      <h2 className="mt-4 mb-1 text-xl font-bold text-center text-brand-dark">
        {title}
      </h2>

      <div className="flex flex-col justify-center w-full gap-1 p-4 md:flex-row ">
        <div className="w-auto">
          <div className="flex w-full gap-1 pb-2 overflow-x-hidden border-none">
            <div className="w-full h-full space-y-8">
              <DateList
                slots={slots}
                selectedDate={selectedDate}
                setDate={setSelectedDate}
                setSlots={setSlots}
              />

              <SlotsList
                selectedDate={selectedDate}
                slots={slots}
                selectedSlot={selectedSlot}
                setSlot={setSelectedSlot}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
