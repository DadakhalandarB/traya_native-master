"use client";

import { Suspense, useContext, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import { useRouter, usePathname } from "next/navigation";

import ProgressBar from "@components/form/ProgressBar";
import components from "@components/components";
import { BsArrowLeftShort } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import {
  TRAYA_BOOK_CALL_PAGE,
  TRAYA_GUEST_HOME_URL,
  TRAYA_HINDI_HOME_URL,
  TRAYA_HOME_URL,
  TRAYA_PAGES,
} from "@constants/config";
import data from "@helpers/dataV7.json";

import { PREVIEW_URL } from "@constants/config";
import {
  moengageTrackEvent,
  sendUtmDataToMoengage,
} from "@helpers/handleMoengage";
import Loader from "@components/Loader";
import {
  FEMALE_RESULT_PAGE,
  MALE_RESULT_PAGE,
  TRAYA_MINI_HOME_URL,
} from "@constants/constants";
import useMediaQuery from "@components/useMediaQuerry";
import FormSubmission from "@components/form/FormSubmission";
import { QuestionsContext } from "@/context/questions-store";

const Questions = () => {
  const {
    currentQuestion,
    firstQuestion,
    init,
    removeFromPreviousQuestion,
    setPreviewURL,
    questions: { gender },
    queryStrings: { utmData },
    allQuestionsFilled,
  } = useContext(QuestionsContext);
  const router = useRouter();
  const pathname = usePathname();

  const mobileScreen = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    if (pathname === "/questions") {
      router.push(`${pathname}?cohort=1&lcn=HomeSlideshow&page=homev2`);
    }
    moengageTrackEvent("FORM_FILL_STARTED");
    init(data, PREVIEW_URL);
  }, []);

  useEffect(() => {
    if (!gender) return;

    if (gender.reply === "M") {
      setPreviewURL(MALE_RESULT_PAGE);
    } else if (gender.reply === "F") {
      setPreviewURL(FEMALE_RESULT_PAGE);
    }
  }, [gender]);

  useEffect(() => {
    if (isEmpty(utmData)) return;
    sendUtmDataToMoengage(utmData);
  }, [utmData]);

  const [pageURL, setPageURL] = useState("");

  const exitURL = () => {
    if (pathname == "/femaleV2/question") {
      return (
        typeof window !== "undefined" && window.location.assign("/femaleV2")
      );
    } else if (pathname == "/home/question") {
      return typeof window !== "undefined" && window.location.assign("/home");
    } else if (pathname == "/questions") {
      return (
        typeof window !== "undefined" && window.location.assign(TRAYA_HOME_URL)
      );
    } else if (pathname == "/user-account/question") {
      return (
        typeof window !== "undefined" && window.location.assign("/user-account")
      );
    }
    if (pathname == "/home/partners/questions") {
      return (
        typeof window !== "undefined" &&
        window.location.assign(
          `/home/partners?utm_source=${
            router.query.utm_source ? router.query.utm_source : ""
          }&utm_medium=${
            router.query.utm_medium ? router.query.utm_medium : ""
          }&utm_campaign=${
            router.query.utm_campaign ? router.query.utm_campaign : ""
          }&page=partners`
        )
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
        if (pathname == "/femaleV2/question") {
          return (
            typeof window !== "undefined" && window.location.assign("/femaleV2")
          );
        } else if (pathname == "/home/question") {
          return (
            typeof window !== "undefined" && window.location.assign("/home")
          );
        } else if (pathname == "/questions") {
          return (
            typeof window !== "undefined" &&
            window.location.assign(TRAYA_HOME_URL)
          );
        }
        if (pathname == "/home/partners/questions") {
          return (
            typeof window !== "undefined" &&
            window.location.assign(
              `/home/partners?utm_source=${
                router.query.utm_source ? router.query.utm_source : ""
              }&utm_medium=${
                router.query.utm_medium ? router.query.utm_medium : ""
              }&utm_campaign=${
                router.query.utm_campaign ? router.query.utm_campaign : ""
              }&page=partners`
            )
          );
        } else {
          return pageURL !== "" ? `${TRAYA_PAGES}/${pageURL}` : TRAYA_HOME_URL;
        }
    }
  };

  return (
    <>
      {!allQuestionsFilled ? (
        <div className="px-4 sm:px-[10%] lg:px-[20%]">
          {currentQuestion && (
            <>
              <div
                className={`${
                  hidePreviousButton.has(currentQuestion.id) && mobileScreen
                    ? "justify-end"
                    : "justify-between"
                } flex flex-row flex-wrap`}
              >
                <button
                  className="inline-flex items-center focus:outline-none text-brand-dark"
                  onClick={() =>
                    currentQuestion.id === firstQuestion
                      ? exitURL()
                      : removeFromPreviousQuestion()
                  }
                  id="previous_button"
                >
                  {currentQuestion.id !== firstQuestion && (
                    <>
                      <div className="hidden sm:block md:block lg:block xl:block mt-0.5">
                        <BsArrowLeftShort color="#414042" size={27} />
                      </div>
                      {!hidePreviousButton.has(currentQuestion.id) && (
                        <div className="block sm:hidden md:hidden lg:hidden xl:hidden mt-0.5">
                          <BsArrowLeftShort color="#414042" size={40} />
                        </div>
                      )}
                      <span className="font-[700] hidden sm:block md:block lg:block xl:block underline underline-offset-2">
                        Previous
                      </span>
                    </>
                  )}
                </button>
                <button
                  className="inline-flex items-center my-2 focus:outline-none text-brand-dark"
                  onClick={() => exitURL()}
                  id="exit_button"
                >
                  <span className="hidden sm:block md:block lg:block xl:block font-[700] underline underline-offset-2">
                    Exit
                  </span>

                  <span className="block sm:hidden md:hidden lg:hidden xl:hidden mt-1">
                    <RxCross2 color="#414042" size={27} />
                  </span>
                </button>
              </div>
              <ProgressBar context={"questions"} />
              <Suspense fallback={<Loader />}>
                <div className="flex flex-col items-center justify-center">
                  {components(currentQuestion, QuestionsContext)}

                  {currentQuestion.id === "phone_number" && (
                    <p className="py-2 px-1 text-xs text-left sm:text-sm text-brand-disgray">
                      *Your contact details will be used by Traya hair coach to
                      reach out to you via call/sms/whatsapp.
                    </p>
                  )}
                </div>
              </Suspense>
            </>
          )}
        </div>
      ) : (
        <FormSubmission />
      )}
    </>
  );
};
export default Questions;

const hidePreviousButton = new Set([
  "first_name",
  "phone_number",
  "email",
  "C1d",
]);
