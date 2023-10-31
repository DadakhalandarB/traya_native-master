import React, { useContext, useEffect, useRef } from "react";
import ArrowCircleRight from "@assets/icons/ArrowCircleRight";
import { BsArrowRightShort } from "react-icons/bs";
import { keypress } from "@helpers/keypress";
import { BsArrowLeftShort } from "react-icons/bs";

import { QuestionsContext } from "@context/questions-store";
import {
  COOKIES_EXPIRY,
  FEMALE_RESULT_PAGE,
  MALE_RESULT_PAGE,
  TRAYA_MINI_HOME_URL,
} from "@constants/constants";
import Cookies from "js-cookie";
import {
  DOCTOR_APPOINTMENT_FORM,
  FEMALE,
  FEMALE_QUESTIONS,
  GUEST_FORM,
  HINDI_FORM,
  MINI_FORM,
} from "@constants/routes";

import { useRouter } from "next/navigation";
import {
  TRAYA_BOOK_CALL_PAGE,
  TRAYA_GUEST_HOME_URL,
  TRAYA_HINDI_HOME_URL,
  TRAYA_HOME_URL,
  TRAYA_PAGES,
} from "@constants/config";

const InputText = ({
  error,
  reply,
  setError,
  setReply,
  handleSubmit,
  store,
  optional,
}) => {
  const { currentQuestion } = useContext(store);
  const { firstQuestion, removeFromPreviousQuestion } =
    useContext(QuestionsContext);
  const inputRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    if (inputRef) inputRef.current.focus();
    if (optional) adjustTextareaHeight();
  }, []);

  const handleKeyPress = (event) => {
    const _isValid = keypress(event, currentQuestion.type);

    if (_isValid.hasError) {
      setError(_isValid.error);
      return;
    }
    setError("");
  };
  const handleKeyPressTx = (event) => {
    if (event.key == "Enter") {
      event.preventDefault();
      return;
    }

    if (reply?.length > 250 && event.key !== "Backspace") {
      event.preventDefault();
      setError("Character limit 250");

      return;
    }
    setError("");
  };
  const handlePaste = (event) => {
    if (reply?.length > 250) {
      event.preventDefault();
      setError("Character limit 250");

      return;
    }
  };

  const exitURL = () => {
    // Cookies.set("__TRAYA_UTM__", `&page=${pageURL}`);
    if (router.pathname == "/femaleV2/question") {
      return (
        typeof window !== "undefined" && window.location.assign("/femaleV2")
      );
    } else if (router.pathname == "/home/question") {
      return typeof window !== "undefined" && window.location.assign("/home");
    } else if (router.pathname == "/questions") {
      return (
        typeof window !== "undefined" && window.location.assign(TRAYA_HOME_URL)
      );
    }

    switch (typeof window !== "undefined" ? window.location.pathname : "") {
      case DOCTOR_APPOINTMENT_FORM:
        return TRAYA_BOOK_CALL_PAGE;
      case GUEST_FORM:
        return TRAYA_GUEST_HOME_URL;
      case HINDI_FORM:
        return TRAYA_HINDI_HOME_URL;
      case MINI_FORM:
        return TRAYA_MINI_HOME_URL;
      case FEMALE_QUESTIONS:
        return FEMALE;

      default:
        if (router.pathname == "/femaleV2/question") {
          return (
            typeof window !== "undefined" && window.location.assign("/femaleV2")
          );
        } else if (router.pathname == "/home/question") {
          return (
            typeof window !== "undefined" && window.location.assign("/home")
          );
        } else if (router.pathname == "/questions") {
          return (
            typeof window !== "undefined" &&
            window.location.assign(TRAYA_HOME_URL)
          );
        } else {
          return pageURL !== "" ? `${TRAYA_PAGES}/${pageURL}` : TRAYA_HOME_URL;
        }
    }
  };

  const adjustTextareaHeight = () => {
    const textarea = inputRef.current;
    if (textarea) {
      textarea.style.height = "2rem"; // Reset height to initial value
      textarea.style.height =
        textarea.scrollHeight > 90 ? "4.5rem" : textarea.scrollHeight + "px";
    }
  };
  // useEffect(() => {
  //   if(!optional) return;
  //   const textarea = inputRef.current;
  //   console.log(textarea.scrollHeight , textarea.clientHeight, textarea.scrollHeight-textarea.clientHeight,textarea.scrollHeight-textarea.clientHeight<=0? "1.5rem" : "3rem",'924892928')
  //   if (textarea) {
  //      textarea.style.height = "1.5rem"; // Reset height to initial value
  //     textarea.style.height =textarea.scrollHeight-textarea.clientHeight<=0? "1.5rem" : "3rem";
  //   }
  // }, [reply,inputRef.current]);
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-8 md:mt-8 w-full md:w-[60%]"
    >
      <label
        className="h-12 text-[20px] md:text-[24px] font-bold text-gray-700"
        htmlFor={currentQuestion.id}
      >
        {currentQuestion.text}{" "}
        {optional && (
          <span className="h-12 whitespace-nowrap text-[20px] md:text-[24px] text-gray-400">
            {"(Optional)"}
          </span>
        )}
      </label>

      <div className="h-12 text-gray-400">{currentQuestion.sub_text} </div>
      <div className="relative w-full mt-2 md:mt-12 sm:w-4/5 md:w-full">
        {!optional ? (
          <input
            className="w-full border-b-2 border-brand-accent form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id={currentQuestion.id}
            key={currentQuestion.id}
            onChange={({ target }) => setReply(target.value)}
            onKeyPress={handleKeyPress}
            ref={inputRef}
            type={currentQuestion.type}
            value={reply}
            placeholder={
              currentQuestion.id === "first_name"
                ? "Your Name"
                : currentQuestion.text
            }
            maxLength={currentQuestion.id === "phone_number" ? 10 : null}
          />
        ) : (
          <textarea
            className="w-full pr-2 border-b-2 mt-3 border-brand-accent form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent "
            id={currentQuestion.id}
            key={currentQuestion.id}
            onChange={({ target }) => {
              setReply(target.value);
              adjustTextareaHeight();
            }}
            onKeyDown={handleKeyPressTx}
            ref={inputRef}
            maxLength={250}
            value={reply}
            placeholder={"Character limit 250"}
            style={{
              // overflowY: "scroll",
              resize: "none",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          />
        )}

        {!optional && (
          <button
            type="submit"
            disabled={
              error === "Unexpected error occured, please contact traya support"
            }
            className="absolute right-2 focus:outline-none active:outline-none top-3"
          >
            <div className="text-[#414042] w-6 h-6 block xl:hidden lg:hidden md:hidden sm:hidden">
              <ArrowCircleRight />
            </div>
          </button>
        )}

        {error !== "" && (
          <span className="block text-brand-accent">{error}</span>
        )}

        {reply && optional && (
          <span className="block mt-2 text-brand-accent text-right">
            {reply.length + "/" + 250}
          </span>
        )}
      </div>
      {/* {optional && (
        <div className="flex flex-col items-center justify-center p-5">
          <button
            type="submit"
            className="px-10 py-2 uppercase rounded-[4px] w-max bg-brand-accent text-green-50"
            // onClick={() => handleSubmit()}
          >
            {!reply ? "SKIP" : "NEXT"}
          </button>
        </div>
      )} */}

      {currentQuestion.id !== firstQuestion && (
        <button
          className="inline-flex w-fit items-center focus:outline-none text-brand-dark"
          onClick={() =>
            currentQuestion.id === firstQuestion
              ? exitURL()
              : removeFromPreviousQuestion()
          }
          id="previous_button"
          type="button"
        >
          <div className="block sm:hidden md:hidden lg:hidden xl:hidden mt-4">
            <BsArrowLeftShort color="#414042" size={27} />
            {/* <div className="text-brand-dark w-5 h-5">
              <ChevronLeft />
            </div> */}
          </div>
          {/* <span className="hidden sm:block md:block lg:block xl:block mt-0.5">
            <BsArrowLeftShort color="#414042" size={27} />
          </span>
          <span className="font-[700] hidden sm:block md:block lg:block xl:block underline underline-offset-2">
            Previous
          </span> */}
        </button>
      )}

      {currentQuestion.id && (
        <>
          <div
            // className="flex flex-row flex-wrap justify-between mt-6 w-full sm:static bottom-0 left-0 right-0 sm:mb-4  bg-white pt-4 pb-2 z-10"
            className={`flex flex-row flex-wrap justify-center mt-6 w-full sm:static bottom-0 left-0 right-0 sm:mb-4  bg-white pt-4 pb-2 z-10`}
          >
            {/* {currentQuestion.id !== firstQuestion && (
              <button
                className="uppercase xl:w-[168px] w-[110px] xl:h-[45px] h-[30px] justify-center border border-custom-green bg-[#F9F7F7] font-[700] text-brand-dark xl:px-3 pr-2 xl:py-1 py-0 rounded-full"
                onClick={() =>
                  currentQuestion.id === firstQuestion
                    ? exitURL()
                    : removeFromPreviousQuestion()
                }
                id="previous_button"
              >
                <div className="flex justify-center items-center">
                  <RiArrowLeftSLine color="#414042" size={22} />
                  <p className="text-[12px] xl:text-[16px]">Previous</p>
                </div>
              </button>
            )} */}
            {!optional && (
              <>
                <div className="hidden xl:block lg:block md:block sm:block">
                  <button
                    className="uppercase px-32 my-2 py-3 bg-[#414042] text-white rounded-[4px] text-[22px] font-sans font-[600] focus:outline-none"
                    onClick={handleSubmit}
                  >
                    <div className="flex justify-center items-center">
                      <p className="text-[17px]">Next</p>
                      <BsArrowRightShort color="#FFF" size={25} />
                    </div>
                  </button>
                </div>
                {/* <div className="border-white border block xl:hidden lg:hidden md:hidden sm:hidden">
                  <div className="border-white border rounded w-full flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold focus:outline-none z-50">
                    <button
                      className={`uppercase px-12 my-2 py-3 w-[95%] bg-[#414042] text-white rounded-[4px] text-[22px] font-sans font-[600] focus:outline-none
                        `}
                      onClick={handleSubmit}
                    >
                      <div className="flex justify-center items-center">
                        <p className="text-[17px] xl:text-[16px]">Next</p>
                        <BsArrowRightShort color="#FFF" size={25} />
                      </div>
                    </button>
                  </div>
                </div> */}
              </>
            )}
            {optional && (
              <>
                <div className="hidden xl:block lg:block md:block sm:block">
                  <button
                    type="submit"
                    className="uppercase px-32 my-2 py-3 bg-[#414042] text-white rounded-[4px] text-[22px] font-sans font-[600] focus:outline-none"
                    // className="px-10 py-2 uppercase rounded-[4px] w-max bg-brand-accent text-green-50"
                    // onClick={() => handleSubmit()}
                  >
                    <div className="flex justify-center items-center">
                      <p className="text-[17px]">{!reply ? "SKIP" : "NEXT"}</p>
                      <BsArrowRightShort color="#FFF" size={25} />
                    </div>
                  </button>
                </div>
                <div className="block xl:hidden lg:hidden md:hidden sm:hidden">
                  <div className="mt-4 flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold focus:outline-none w-full">
                    <button
                      type="submit"
                      className={`uppercase px-12 my-2 py-3 w-[95%] bg-[#414042] text-white rounded-[4px] text-[22px] font-sans font-[600] focus:outline-none
                        `}
                    >
                      <div className="flex justify-center items-center">
                        <p className="text-[17px]">
                          {!reply ? "SKIP" : "NEXT"}
                        </p>
                        <BsArrowRightShort color="#FFF" size={25} />
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </form>
  );
};

export default InputText;
