import { useContext, useEffect, useState } from "react";
import useFormSubmit from "../../hooks/v2/useFormSubmit";
import jsonLogic from "json-logic-js";
import {
  CREATE_RESPONSE_GUEST_FORM,
  TRANSACTION_API,
  UPDATE_RESPONSE_GUEST_FORM,
} from "../../constants/urls";
import Loader from "../Loader";
import { fetchRequest } from "../../helpers/fetchRequest";
import InputAdditionalText from "../form/InputAdditionText";
import Cookies from "js-cookie";
import Image from "next/image";

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import {
  COOKIES_DOMAIN,
  LAST_QUESTIONS,
  RESULT_CHOLESTROL,
} from "../../constants/config";
import {
  CHOLESTEROL_SUBMISSION_COMPLETED,
  logGtmEvent,
  triggerGa,
} from "../../helpers/gtmHelpers";
import { useRouter } from "next/navigation";
import { FEMALE, SUBMISSION } from "../../constants/routes";
import Router from "next/navigation";
import { QuestionsContext } from "../../context/questions-store";
import {
  addUserAndEventToMoengage,
  handlePreDefinedUserAttributes,
  moengageTrackEvent,
  moengageUserAttributes,
} from "../../helpers/handleMoengage";
import { freshTrackEvent } from "../../api/handleFreshDesk";
import { getCurrentTimeInReadableForm } from "../../helpers/timeFormatter";
import { activityLoggerForm } from "../../helpers/activityLogger";
import useMediaQuery from "../useMediaQuerry";

const InputRadioV2 = ({ block, context }) => {
  const router = useRouter();

  const {
    apiResponse: { syntheticId, caseId, transactionId },
  } = useContext(context);
  const { currentQuestion, firstQuestion, removeFromPreviousQuestion } =
    useContext(QuestionsContext);

  const handleSubmit = useFormSubmit(context);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState(null);
  const [additionalText, setAdditionalText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const mobileScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    // if (block) {
    //   const [radioVal, additionalTextVal] = block.reply?.split(", ");
    //   if (radioVal) setReply(() => radioVal);
    //   if (additionalTextVal) setAdditionalText(additionalTextVal);
    // }

    // if (!block.reply && block.id === "gender" && router.pathname == FEMALE) {
    //   setReply("F");
    //   window.localStorage.setItem("gender", "F");
    // }
    if (block) {
      setReply(block.reply);
    }
    // return () => setReply("");
  }, [block]);

  const _submitReply = async (reply) => {
    if (block.id === "gender") {
      window.localStorage.setItem("gender", reply);
    }
    setIsLoading(true);
    let _res = "";

    if (block.fn) block.next = jsonLogic.apply(block.fn, { reply });
    try {
      const maleStage = window.localStorage.getItem("2e");
      const _skipBpQuestion = block.id == "preferred_language";
      const _formData = {
        question_id: block.id,
        question: block.text,
        response: reply,
        locationPath: window.location.pathname + window.location.search,
        formFillSource: "website",
        // form_status: LAST_QUESTIONS.has(block.next) || _skipBpQuestion
        form_status:
          LAST_QUESTIONS.has(block.next) || _skipBpQuestion
            ? "semi-filled"
            : "In-Progress",
      };
      const _options = {
        method: "PUT",
        body: JSON.stringify(_formData),
      };

      _res = await fetchRequest(TRANSACTION_API(transactionId), _options);
      if (LAST_QUESTIONS.has(block.next) || _skipBpQuestion) {
        // moengageTrackEvent("hairtest_semifilled", {
        //   time: getCurrentTimeInReadableForm(),
        //   case_id: caseId,
        //   platform: "web",
        // });
        // freshTrackEvent(questions, "hairtest_semifilled", {
        //   time: getCurrentTimeInReadableForm(),
        //   case_id: caseId,
        //   platform: "web",
        // });
        activityLoggerForm(syntheticId, "hairtest_semifilled", {
          time: getCurrentTimeInReadableForm(),
          case_id: caseId,
          platform: "web",
        });
      }
    } catch (error) {
      console.warn(error);
    } finally {
      if (_res.status === 200) {
        if (_res.data.skipPhoto === true) {
          window.localStorage.setItem("skipPhoto", true);
          await handleSubmit(reply);
          Router.push(SUBMISSION);
        } else {
          window.localStorage.removeItem("skipPhoto", true);
          await handleSubmit(reply);
          window.localStorage.removeItem("fs1");
          if (block.id === "gender") {
            window.localStorage.setItem("gender", reply);
          }
          setReply("");
          if (LAST_QUESTIONS.has(block.id)) {
            await _formStatusUpdate();
          }
        }
        return;
      }
      setIsLoading(false);
      setError(_res.data.message);
    }
  };

  const _formStatusUpdate = async () => {
    const _transactionData = {
      question_id: "",
      question: "",
      response: "",
      locationPath: window.location.pathname + window.location.search,
      formFillSource: "website",
      form_status: "COMPLETED",
    };

    const _trOptions = {
      method: "PUT",
      body: JSON.stringify(_transactionData),
    };

    const _postRes = await fetchRequest(
      TRANSACTION_API(transactionId),
      _trOptions
    );
    return _postRes;
  };

  const _handleSubmit = async ({ reply }) => {
    setAdditionalText("");

    const _reply = reply;
    if (block.id === "hair_vol1") {
      window.localStorage.setItem("2e", _reply);
    }
    if (block.id === "gender") {
      window.localStorage.setItem("gender", reply);
    }
    if (_reply === block.additionalTextBox) {
      return;
    }

    if (block.reply === _reply) {
      // await handleSubmit(reply);
      await _submitReply(_reply);

      if (block.reply && block.id === "gender" && router.pathname == FEMALE) {
        window.localStorage.setItem("gender", reply);
      }

      if (block.id === "situation_reaction") {
        await logGtmEvent(CHOLESTEROL_SUBMISSION_COMPLETED, caseId);
        await triggerGa();
        window.location.assign(RESULT_CHOLESTROL(syntheticId));
        let arr = [];
        for (let i = 0; i < localStorage.length; i++) {
          if (localStorage.key(i).substring(0, 5) === "state") {
            arr.push(localStorage.key(i));
          }
        }

        for (let i = 0; i < arr.length; i++) {
          localStorage.removeItem(arr[i]);
        }
      }
      return;
    }
    await _submitReply(_reply);
    if (block.id === "situation_reaction") {
      await logGtmEvent(CHOLESTEROL_SUBMISSION_COMPLETED, caseId);
      await triggerGa();
      window.location.assign(RESULT_CHOLESTROL(syntheticId));
      let arr = [];
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).substring(0, 5) === "state") {
          arr.push(localStorage.key(i));
        }
      }

      for (let i = 0; i < arr.length; i++) {
        localStorage.removeItem(arr[i]);
      }
    }
    if (block.id === "fs1") {
      window.localStorage.setItem("fs1", "Pregnancy");
    }
  };

  const _handleSubmitbtn = async () => {
    if (additionalText === "") {
      setError("Please this in ");
      return;
    }
    const _addtionalTextreply = `${reply}, ${additionalText}`;

    if (block.reply === _addtionalTextreply) {
      await handleSubmit(reply);
      if (block.reply && block.id === "gender" && router.pathname == FEMALE) {
        window.localStorage.setItem("gender", reply);
      }
      return;
    }

    await _submitReply(_addtionalTextreply);
  };

  const handleChange = ({ target }) => {
    setReply(target.value);
    _handleSubmit({ reply: target.value });
  };
  const getGTMElementID = (option, block, index) => {
    if (window.location.pathname === "/guest-form") {
      return (
        gtmParametersMap[block.id] + "-" + option.name.replace("Stage", "STG")
      );
    } else return option.id || `${block.id}_${index + 1}`;
  };

  return (
    <>
      {isLoading && <Loader />}

      <div
        className={`flex flex-col mt-8 sm:mt-8
     
        ${
          block.id === "preferred_language"
            ? "lg:w-[90%] w-full"
            : "lg:w-[60%] w-full"
        }`}
      >
        <p
          className="text-[20px] md:text-[24px] mb-2 sm:mb-4 font-bold text-gray-700 text-left"
          htmlFor={block.id}
        >
          {block.text}
        </p>

        <div className="text-[16px] md:text-[18px] h-8 mb-8 xl:mb-4 text-gray-400 text-left">
          {block.sub_text}
        </div>

        <div
          className={`${
            block.id === "preferred_language"
              ? "w-[100%] grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 xl:mb-0 mx-auto"
              : "xl:w-[80%] w-[100%] grid grid-cols-2 md:grid-cols-2 gap-6 mx-auto"
          } `}
        >
          {block.optionMap?.map((option, index) => (
            <label
              htmlFor={getGTMElementID(option, block, index)}
              key={option.name}
              data-options="responses"
              className={`inline-flex mx-auto cursor-pointer bg-[#F0F0F0] rounded-[5.8px] border border-[#F0F0F0]  ${
                block.showImages
                  ? "flex-col flex-1 items-center px-4 justify-center rounded-md border-brand-accent  hover:bg-brand-accent  hover:text-white"
                  : "border"
              }
              ${
                mobileScreen
                  ? "border"
                  : "border hover:bg-brand-accent hover:text-white"
              }
                ${
                  reply == option.value
                    ? "bg-brand-accent text-white"
                    : "bg-[#F0F0F0]"
                }
              ${
                block.id === "preferred_language"
                  ? "xl:w-[100%] w-[100%]"
                  : "w-[100%]"
              }`}
              style={{
                boxShadow:
                  "0px 1.4473836421966553px 4.342150688171387px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              {block.showImages && (
                <Image
                  src={
                    require(`../../assets/images/${option.image_url}`).default
                  }
                  alt={option.name}
                  className="flex-1 mb-1"
                  height={100}
                  width={100}
                />
              )}

              <div className="inline-flex w-[100%] flex-col flex-1 sm:flex-row sm:items-center">
                <button
                  className={`cursor-pointer w-full px-[24px] py-[12px] md:py-[16px] font-sans text-[#414042] font-[700] text-[14px] xl:text-[20px] ${
                    block.showImages
                      ? "text-base "
                      : "text-[16px] md:text-[20px]"
                  }
                  ${mobileScreen ? "hover:text-[#414042]" : "hover:text-white"}
                  ${reply === option.value ? "text-white" : "text-[#414042]"}`}
                  // checked={reply === option.value}
                  id={getGTMElementID(option, block, index)}
                  onClick={handleChange}
                  value={option.value}
                >
                  {option.name}
                </button>

                {reply === block.additionalTextBox &&
                  option.value === block.additionalTextBox && (
                    <div className="w-full pr-4 mt-4">
                      <InputAdditionalText
                        reply={additionalText}
                        setReply={setAdditionalText}
                        placeholder="Mention which medications"
                      />
                    </div>
                  )}
              </div>
            </label>
          ))}
        </div>

        {errorMsg !== "" && (
          <span className="block mt-1 text-brand-accent">{errorMsg}</span>
        )}

        {error !== "" && (
          <span className="block mt-1 text-brand-accent">{error}</span>
        )}
        {reply === block.additionalTextBox && (
          <div className="flex flex-col items-center justify-center mt-4">
            <button
              className="px-6 py-2 uppercase rounded-md w-max bg-brand-accent text-green-50"
              onClick={() => _handleSubmitbtn()}
            >
              continue
            </button>
          </div>
        )}

        {/* <div className="flex flex-row flex-wrap justify-between mt-6 w-full sm:static bottom-0 left-0 right-0 sm:mb-4  bg-white pt-4 pb-2 z-10">
          <button
            className="uppercase xl:w-[168px] w-[110px] xl:h-[45px] h-[30px] justify-center border border-custom-green bg-[#F9F7F7] font-[700] text-brand-dark xl:px-3 pr-2 xl:py-1 py-0 rounded-full"
            onClick={() => removeFromPreviousQuestion()}
            id="previous_button"
          >
            <div className="flex justify-center items-center">
              <RiArrowLeftSLine color="#414042" size={22} />
              <p className="text-[12px] xl:text-[16px]">Previous</p>
            </div>
          </button>
          <button
            className={`uppercase xl:w-[168px] w-[87px] xl:h-[45px] h-[30px] justify-center border border-custom-green bg-[#F9F7F7] font-[700] text-brand-dark xl:px-4 pl-3 pr-1 xl:py-1 py-0 rounded-full ${
              reply === "" && "cursor-not-allowed blur-none opacity-75"
            }`}
            disabled={reply === ""}
            onClick={() =>
              reply == ""
                ? setErrorMsg("Please select option")
                : _handleSubmit({ reply })
            }
          >
            <div className="flex justify-center items-center">
              <p className="text-[12px] xl:text-[16px]">Next</p>
              <RiArrowRightSLine color="#414042" size={22} />
            </div>
          </button>
        </div> */}
      </div>
    </>
  );
};

export default InputRadioV2;

const gtmParametersMap = {
  gender: "SFQ1",
  mdandruff: "SFQ3",
  fdandruff: "SFQ3",
  "mHairloss-image": "SFQ5",
  "fHairloss-image": "SFQ5",
  mEnergetic: "SFQ6",
  fEnergetic: "SFQ6",
  mConstipated: "SFQ7",
  fConstipated: "SFQ7",
  mStress: "SFQ8",
  fStress: "SFQ8",
  mSleep: "SFQ9",
  fSleep: "SFQ9",
  fStages: "SFQ11-F",
};
