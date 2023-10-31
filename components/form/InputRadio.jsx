import { useContext, useEffect, useState } from "react";
import useFormSubmit from "@hooks/useFormSubmit";
import isEmpty from "lodash/isEmpty";
import jsonLogic from "json-logic-js";
import {
  CREATE_RESPONSE_GUEST_FORM,
  TRANSACTION_API,
  UPDATE_RESPONSE_GUEST_FORM,
} from "@constants/urls";
import Loader from "../Loader";
import { fetchRequest } from "@helpers/fetchRequest";
import InputAdditionalText from "./InputAdditionText";
import Cookies from "js-cookie";
import { COOKIES_DOMAIN, RESULT_CHOLESTROL } from "@constants/config";
import {
  CHOLESTEROL_SUBMISSION_COMPLETED,
  logGtmEvent,
  SUBMISSION_COMPLETED,
  triggerGa,
} from "@helpers/gtmHelpers";
import { QUESTIONS, V4_QUESTIONS } from "@constants/routes";
import { handleCustomUserAttributes } from "@helpers/handleMoengage";
import Image from "next/image";
import { QuestionsContext } from "../../context/questions-store";
// const optionName = require(`../../assets/images/${option.image_url}`);

const InputRadio = ({ block, context }) => {
  const {
    apiResponse: { syntheticId, caseId, transactionId },
    queryStrings,
    byId,
    previewURL,
    questions,
  } = useContext(context);
  const { currentQuestion, removeFromPreviousQuestion } =
    useContext(QuestionsContext);

  const handleSubmit = useFormSubmit(context);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState(null);
  const [additionalText, setAdditionalText] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (block) {
      setReply(block.reply);
    }

    // return () => setReply("");
  }, [block]);

  const _submitReply = async (reply) => {
    setIsLoading(true);
    let _res = "";

    let nextId = block.next;
    if (block.fn) nextId = jsonLogic.apply(block.fn, { reply });
    const nextQuestion = byId[nextId] || {};

    try {
      const _formData = {
        question_id: block.id,
        question: block.text,
        response: reply,
        form_status: nextQuestion.next === null ? "semi-filled" : "In-Progress",
        locationPath: window.location.pathname + window.location.search,
        formFillSource: "website",
      };

      const _options = {
        method: "PUT",
        body: JSON.stringify(_formData),
      };

      _res = await fetchRequest(TRANSACTION_API(transactionId), _options);
    } catch (error) {
      console.warn(error);
    } finally {
      if (_res.status === 200) {
        handleSubmit(reply);
        setReply("");

        if (block.next === null) await _formStatusUpdate();
        return;
      }
      setError(_res.data.message);
      setIsLoading(false);
    }
  };

  const _formStatusUpdate = async () => {
    const _transactionData = {
      question_id: "",
      question: "",
      response: "",
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
      window.localStorage.setItem("hair_vol1", _reply);
    }
    if (block.id === "gender") {
      window.localStorage.setItem("gender", reply);
    }
    if (_reply === block.additionalTextBox) {
      return;
    }

    if (window.location.pathname === "/guest-form") {
      setIsLoading(true);
      let _res = {};
      let apiKey = block.identifier;
      let obj = {};
      obj[apiKey] = _reply;
      if (block.id === "gender") {
        try {
          _res = await fetchRequest(CREATE_RESPONSE_GUEST_FORM, {
            method: "POST",
            body: JSON.stringify(obj),
          });
        } catch (e) {
          console.warn(e.message);
        } finally {
          if (_res.status === 200) {
            Cookies.set("GuestForm_id", _res.data.id, {
              domain: COOKIES_DOMAIN,
              expires: 60,
            });
            handleSubmit(_reply);
          }
        }
      } else {
        try {
          _res = await fetchRequest(
            UPDATE_RESPONSE_GUEST_FORM(Cookies.get("GuestForm_id")),
            {
              method: "PATCH",
              body: JSON.stringify(obj),
            }
          );
        } catch (e) {
          console.warn(e.message);
        } finally {
          if (_res.status === 200) {
            handleSubmit(_reply);
          }
        }
      }
      setIsLoading(false);
      return;
    }

    if (block.reply === _reply) {
      handleSubmit(reply);

      if (block.id === "situation_reaction") {
        await logGtmEvent(
          CHOLESTEROL_SUBMISSION_COMPLETED,
          caseId,
          questions.email?.reply
        );
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
      await logGtmEvent(
        CHOLESTEROL_SUBMISSION_COMPLETED,
        caseId,
        questions.email?.reply
      );
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

    if (
      window.location.pathname === V4_QUESTIONS ||
      window.location.pathname === QUESTIONS
    ) {
      if (block.next === null) {
        // await logGtmEvent(SUBMISSION_COMPLETED, caseId, questions.email?.reply);
        await triggerGa();

        localStorage.removeItem("state" + window.location.pathname);

        const _cohort = queryStrings.cohort;
        const _result_page = isEmpty(_cohort)
          ? `${previewURL}?id=${syntheticId}`
          : `${previewURL}?id=${syntheticId}&cohort=${_cohort}`;

        handleCustomUserAttributes("result page link", _result_page);
        handleCustomUserAttributes("synthetic_id", syntheticId);
        window.location.replace(_result_page);
      }
    }
  };

  const _handleSubmitbtn = async () => {
    if (additionalText === "") {
      setError("Please this in ");
      return;
    }
    const _addtionalTextreply = `${reply}, ${additionalText}`;

    if (block.reply === _addtionalTextreply) {
      handleSubmit(reply);
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
        className={`flex flex-col mt-8 sm:mt-8 ${
          block.showImages ? "w-full md:w-[75%]" : "w-full md:w-[60%]"
        }`}
      >
        <label
          className={`text-[20px] md:text-[24px] font-bold text-gray-700  ${
            block.showImages ? "sm:ml-20" : ""
          } `}
          htmlFor={block.id}
        >
          {block.text}
        </label>

        <label
          className={`text-[16px] md:text-[18px] mt-2 text-gray-400 align-middle ${
            block.showImages ? "sm:ml-20" : ""
          }`}
        >
          {block.sub_text}
        </label>

        <div
          className={`flex ${
            block.showImages
              ? "flex-wrap justify-center sm:justify-center gap-x-2 xsm:gap-x-4 sm:gap-x-8 gap-y-4 pt-3 pb-2"
              : "flex-col md:ml-2 pl-0"
          }`}
        >
          {block.optionMap?.map((option, index) => (
            <label
              htmlFor={getGTMElementID(option, block, index)}
              key={option.name}
              data-options="responses"
              className={`inline-flex cursor-pointer ${
                block.showImages ? "" : "py-3 md:py-3.5"
              } ${
                block.showImages
                  ? `flex-col w-[150px] xsm:w-[162px] md:w-[190px] ${
                      reply === option.value
                        ? "border-2 border-brand-accent"
                        : "border-[1px]"
                    } items-center justify-center rounded-md`
                  : "border-b"
              }`}
            >
              {block.showImages && (
                <>
                  <div className="w-full flex justify-center py-2 bg-[#F9F6F6] rounded-md">
                    <Image
                      src={optionName}
                      alt={option.name}
                      className="flex-1 mb-1 m-10 rounded-full"
                      height={100}
                      width={100}
                    />
                  </div>
                </>
              )}

              <div
                className={`inline-flex flex-col flex-1 sm:flex-row sm:items-center ${
                  block.showImages && "text-center"
                } ${
                  block.showImages && reply == option.value
                    ? "bg-brand-accent text-white"
                    : ""
                } w-full ${
                  block.showImages ? "border-t-[#cacaca7c] border-t-[1px]" : ""
                }`}
              >
                {/* <div className="flex flex-col"> */}
                <div
                  // className="inline-flex items-center w-full"
                  className={`${
                    block.showImages ? "pl-0  " : "pl-2"
                  } inline-flex items-center w-full `}
                >
                  <input
                    className={`cursor-pointer form-radio text-brand-accent ${
                      block.showImages && "hidden"
                    }`}
                    checked={reply === option.value}
                    id={getGTMElementID(option, block, index)}
                    type="radio"
                    onClick={handleChange}
                    onChange={({ target }) => setReply(target.value)}
                    value={option.value}
                  />
                  {!block.showImages && (
                    <span
                      className={`md:whitespace-nowrap ${
                        block.showImages
                          ? "text-base font-[500] ml-1.5"
                          : "text-[16px] md:text-[18px] min-w-fit ml-3"
                      }`}
                    >
                      {option.name}
                    </span>
                  )}
                  {option.sub_text && (
                    <div
                      className={
                        block.showImages &&
                        `flex flex-col px-1 py-3 justify-between ${
                          reply === option.value ? "bg-brand-accent" : ""
                        } w-full`
                      }
                    >
                      <span
                        className={` whitespace-nowrap ${
                          block.showImages
                            ? "md:text-base font-[500]  mr-[1px]   text-sm xs:text-[.8rem]"
                            : "md:text-xl min-w-fit ml-2 "
                        } ${
                          block.showImages && reply == option.value
                            ? "sm:font-semibold"
                            : ""
                        }`}
                      >
                        {option.name}
                      </span>
                      {option.sub_text && (
                        <span
                          className={` xs:text-[.8rem] ${
                            option.sub_text ? "text-[14px]" : "text-xl"
                          } ${reply !== option.value ? "text-[#959595]" : ""} `}
                        >
                          {option.sub_text}
                        </span>
                      )}
                    </div>
                  )}
                  {/* {!option.sub_text&&option.name  &&block.showImages&& (
                    <div
                      className={
                        block.showImages &&
                        `flex flex-col px-2  justify-between ${
                          reply === option.value ? "bg-brand-accent" : ""
                        } w-full`
                      }
                    >
                      <span
                        className={`whitespace-nowrap  ll${
                          block.showImages
                            ? "text-base font-[500] mt-2"
                            : "text-xl min-w-fit ml-2 mt-2"
                        }`}
                      >
                        {option.name}
                      </span>
                    </div>
                  )} */}
                  {/* </div> */}
                </div>

                {/* <div className="w-full pr-4 mt-4">
                  {reply === block.additionalTextBox &&
                    option.value === block.additionalTextBox && (
                      <InputAdditionalText
                        reply={additionalText}
                        setReply={setAdditionalText}
                        placeholder="Mention which medications"
                      />
                    )}
                </div> */}
              </div>
            </label>
          ))}
        </div>
        {error !== "" && (
          <span className="block mt-1 text-brand-accent">{error}</span>
        )}
        {reply === block.additionalTextBox && (
          <div className="flex flex-col items-center justify-center mt-4">
            <button
              className="px-6 py-2 uppercase rounded-[4px] w-max bg-brand-accent text-green-50"
              onClick={() => _handleSubmitbtn()}
            >
              continue
            </button>
          </div>
        )}
        {/* <div className="flex flex-row flex-wrap justify-between mt-6 w-full sm:static bottom-0 left-0 right-0 sm:mb-4  bg-white pt-4 pb-2 z-10">
          {currentQuestion.id && (
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
          )}
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

export default InputRadio;

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
