import { isEmpty } from "lodash";
import { useContext, useEffect, useMemo, useState } from "react";
import { MINI_PREVIEW_URL } from "../../constants/config";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import {
  MF_TRANSACTION_API,
  NEW_SLOTS_API,
  SLOTS_API,
} from "../../constants/urls";
import { MiniQuestionsContext } from "../../context/mini-questions-store";
import { fetchRequest } from "../../helpers/fetchRequest";
import { moengageTrackEvent } from "../../helpers/handleMoengage";
import useFormSubmit from "../../hooks/useFormSubmit";
import Loader from "../Loader";
import { SlotBooking } from "../SlotBooking";
import dayjs from "dayjs";

const InputSlots = ({ block }) => {
  const {
    apiResponse: { caseId, transactionId },
    saveSlots,
    selectedSlots,
    queryStrings: { utmData, cohort },
  } = useContext(MiniQuestionsContext);

  const handleSubmit = useFormSubmit(MiniQuestionsContext);

  const router = useRouter();
  const UTM_CAMPAIGN = router.query.utm_campaign;

  const [isLoading, setIsLoading] = useState(false);
  const [showSlots, setShowSlots] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  // const [currSlot, setCurrSlot] = useState({});
  const [sessionId, setSessionId] = useState("");
  // console.log("currSlot", currSlot);
  useEffect(() => {
    if (block) {
      setShowSlots(() => (block.reply === "Yes" ? true : false));
    }
  }, [block]);

  const selectedDateTime = useMemo(() => {
    return {
      date: dayjs(selectedInfo.date).format("MMMM D"),
      startTime: dayjs(selectedInfo.time).format("hh:mm A"),
      endTime: dayjs(selectedInfo.time).add(30, "minute").format("hh:mm a"),
    };
  }, [selectedInfo]);

  const _handleSubmit = async () => {
    const _reply = "Skipped";
    moengageTrackEvent("Cal_Booked_Form", _reply);
    await _slotSubmit(_reply);
  };

  const handleBooking = async (selectedDate, slotId, currSlot) => {
    if (selectedSlots && selectedSlots.time === slotId) {
      _slotSubmit("Yes");
      return {};
    }

    setIsLoading(true);

    let _res;
    _res = await fetchRequest(NEW_SLOTS_API, {
      method: "POST",
      body: JSON.stringify({
        case_id: caseId,
        slot_id: slotId,
        slots: currSlot,
        order_related: false,
        is_rescheduling: true,
        session_id: sessionId,
        from_crm: UTM_CAMPAIGN === "traya_team" ? true : false,
      }),
    });

    if (_res.status === 200) {
      saveSlots({ date: selectedDate, time: slotId });
      setIsLoading(false);
    }
    if (_res.hasError) return _res;
    const _result_page = isEmpty(cohort)
      ? `${MINI_PREVIEW_URL}?id=${transactionId}`
      : `${MINI_PREVIEW_URL}?id=${transactionId}&cohort=${cohort}`;

    window.location.replace(_result_page);

    return _res;
  };

  useEffect(() => {
    const _sessionId = uuidv4();
    if (_sessionId) {
      setSessionId(_sessionId);
    }
  }, [router.asPath]);

  const _slotSubmit = async (res) => {
    setIsLoading(true);
    if (block.reply === res) {
      handleSubmit(res);
      return;
    }

    let _res = {};

    try {
      const _formData = {
        question_id: block.id,
        question: block.text,
        response: res,
        form_status: "semi-filled",
      };

      const _options = {
        method: "PUT",
        body: JSON.stringify(_formData),
      };

      _res = await fetchRequest(MF_TRANSACTION_API(transactionId), _options);
    } catch (error) {
      console.warn(error.message);
    } finally {
      setIsLoading(false);
      if (_res.status === 200) {
        const _result_page = isEmpty(cohort)
          ? `${MINI_PREVIEW_URL}?id=${transactionId}`
          : `${MINI_PREVIEW_URL}?id=${transactionId}&cohort=${cohort}`;

        window.location.replace(_result_page);
      }
    }
  };

  return (
    <div className="w-full h-full ">
      {isLoading && <Loader />}

      <div className="flex flex-col justify-between w-full md:mt-6">
        <div
          className={`flex flex-1 flex-col md:pl-0 mb-2 md:pb-8 pt-12 pr-8 space-y-8`}
        >
          <label
            className="text-2xl font-bold text-gray-700 text-center"
            htmlFor={block.id}
          >
            {block.text}
          </label>

          {/* <p className="pb-2 mt-2 text-gray-400 align-middle">
						{block.sub_text}
					</p> */}
        </div>

        <div
          className={`flex-1 md:justify-center ${showSlots && "bg-gray-50"} `}
        >
          {caseId && (
            <SlotBooking
              api="SLOTS_API"
              caseId={caseId}
              handleBooking={handleBooking}
              title="Please Select a Date & Time"
              selectedInfo={setSelectedInfo}
              // setCurrSlot={setCurrSlot}
            />
          )}
          <div className="flex justify-end md:mr-16">
            <button
              id="Slot_booked_skip"
              className="inline-flex gap-2 px-6 py-2 mt-4 text-lg font-medium uppercase rounded-md w-max text-brand-accent"
              onClick={_handleSubmit}
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSlots;
