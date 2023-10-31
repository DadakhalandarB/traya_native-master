"use client";

import { useCallback, useEffect, useState } from "react";
import { displayRazorpay } from "../../../services/paymentService";
import DateList from "@components/appointment/DateList";
import SlotsList from "@/components/appointment/SlotsList";
import { fetchRequest } from "@helpers/fetchRequest";
import {
  GET_RAZORPAY_PAYMENT_INFO_API,
  GET_CHOLESTROL_SLOTS_API,
  BOOK_APPOINTMENT_API,
} from "@constants/urls";
import { groupSlots } from "@/helpers/handler";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { trayaLogo } from "@/constants/constants";
import Header from "@/components/generic/Header";

const BookAppointment = () => {
  const router = useRouter();
  const caseId = router.query?.id;
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [paymentInfo, setPaymentInfo] = useState({});

  const fetchSlots = useCallback(async () => {
    if (!caseId) return;
    const _res = await fetchRequest(GET_CHOLESTROL_SLOTS_API(caseId));

    if (_res.hasError) setSlots([]);
    else {
      const _data = groupSlots(_res.data);
      setSlots(_data);
    }
  }, [caseId]);

  useEffect(() => {
    fetchSlots();
  }, [fetchSlots]);

  const handlePayment = async () => {
    try {
      let pr = {};

      if ("razorpay_payment_id" in paymentInfo) {
        pr = pr = { ...paymentInfo };
      } else {
        const _info = await fetchRequest(GET_RAZORPAY_PAYMENT_INFO_API(caseId));

        if (_info.hasError) throw new Error(_info.data);
        const { amount, currency, email, first_name, order_id, phone_number } =
          _info.data;

        const _userInfo = {
          name: first_name,
          email: email,
          contact: phone_number,
        };

        pr = await displayRazorpay(_userInfo, amount, currency, order_id);
        setPaymentInfo({ ...pr });
      }

      if ("razorpay_payment_id" in pr) {
        const _res = await fetchRequest(BOOK_APPOINTMENT_API, {
          method: "POST",
          body: JSON.stringify({
            case_id: caseId,
            slot_id: selectedSlot.id,
            ...pr,
          }),
        });

        if (_res.status === 200) {
          setSelectedDate("");
          setSelectedSlot("");
          setPaymentInfo({});

          router.push({
            pathname: `/thankyou/${caseId}`,
            state: _res.data,
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <Header />
      <div className="w-full max-w-screen-sm p-4 mx-auto space-y-8 overflow-hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Book an Appointment</h2>

          <figure className="flex items-center justify-center w-24 h-24 p-4 rounded-full shadow-xl sm:w-32 sm:h-32">
            <Image
              className="h-auto w-28 sm:w-36"
              src={trayaLogo.default}
              alt="Traya"
            />
          </figure>
        </div>

        {isEmpty(slots) ? (
          <div className="w-full p-8 space-y-8">
            <p className="h-auto mx-auto w-max">No slots</p>
          </div>
        ) : (
          <>
            <div className="w-full space-y-8">
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

            <div className="flex flex-col items-center justify-center w-full">
              <p>Build your cholesterol reversal plan with doctor</p>
              <button
                type="button"
                disabled={isEmpty(selectedDate) || isEmpty(selectedSlot)}
                onClick={handlePayment}
                className="px-4 py-2 mt-4 text-xl uppercase bg-yellow-600 rounded-md disabled:cursor-not-allowed text-gray-50"
              >
                Book | 499
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BookAppointment;
