"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import Rating_1 from "@assets/images/Rating_1.png";
// assets/images/Rating_1.png";
// import Rating_1 from "../../assets/images/Rating_1.png";
import Rating_2 from "@assets/images/Rating_2.png";
import Rating_3 from "@assets/images/Rating_3.png";
import Rating_4 from "@assets/images/Rating_4.png";
import Rating_5 from "@assets/images/Rating_5.png";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { DEFAULT_API_URL, TRAYA_HOME_URL } from "@constants/config";
import { fetchRequest } from "@helpers/fetchRequest";
import { Space } from "antd";
import CSATHeader from "./CSATHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faAngry,
  faMeh,
  faTired,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import { fredoka } from "@/constants/fontConfig";

const CSATForm = () => {
  const router = useRouter();
  const caseId = router.query?.id;
  const engagementId = router.query?.engagement;
  const txnId = router.query?.txn;

  const [rateCoach, setRateCoach] = useState(null);
  const [emojiColor, setEmojiColor] = useState(null);
  const [trayaRatingColor, setTrayaRatingColor] = useState(null);

  const [rateCoachHover, setRateCoachHover] = useState(null);
  const [trayaRating, setTrayaRating] = useState(null);
  const [trayaRatingHover, setTrayaRatingHover] = useState(null);
  const [changeCoach, setChangeCoach] = useState(0);
  const [doubtResolved, setDoubtResolved] = useState(0);
  const [language, setLanguage] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [cxData, setCxData] = useState({});

  const customIcons = {
    1: <Image src={Rating_1} alt="dx" height={50} width={50} />,
    2: <Image src={Rating_2} alt="dx" height={50} width={50} />,
    3: <Image src={Rating_3} alt="dx" height={50} width={50} />,
    4: <Image src={Rating_4} alt="dx" height={50} width={50} />,
    5: <Image src={Rating_5} alt="dx" height={50} width={50} />,
  };

  const _desc = [
    "Very Unsatisfied",
    "Unsatisfied",
    "Average",
    "Satisfied",
    "Very Satisfied",
  ];
  const desc = [
    { des: "Very Unsatisfied", emoji: "faAngry", color: "#f64d52	" },
    { des: "Unsatisfied", emoji: "faTired", color: "#FF0000 " },
    { des: "Average", emoji: "faMeh", color: "#ffbf00" },
    { des: "Satisfied", emoji: "faSmile", color: "#7CFC00" },
    { des: "Very Satisfied", emoji: "faGrinStars", color: "#116E11" },
  ];

  const emoji = {
    faAngry: faAngry,
    faTired: faTired,
    faMeh: faMeh,
    faSmile: faSmile,
    faGrinStars: faGrinStars,
  };

  const handleSubmit = async () => {
    let data = {
      doubt_resolved: doubtResolved,
      rate_your_coach: rateCoach,
      happy_with_traya: trayaRating,
      change_coach: changeCoach,
      tell_us_more: comment,
      preffered_language: language,
      engagement: engagementId ? engagementId : null,
      txn: txnId ? txnId : null,
    };
    let url = `${DEFAULT_API_URL}csat-feedback?case_id=${caseId}`;
    let _res = await fetchRequest(url, {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    if (_res.status === 200) {
      setIsSubmitted(true);
      setInterval(() => {
        // window.location.replace(TRAYA_HOME_URL);
      }, 3000);
    }
  };

  const handleClick = () => {
    setButtonClicked(true);
  };

  const getData = async (caseId) => {
    let url = `${DEFAULT_API_URL}get-user-v2/${caseId}`;
    let res = await fetchRequest(url);
    setCxData(res?.data);
  };

  useEffect(() => {
    if (caseId !== undefined) getData(caseId);
  }, [caseId]);

  if (isSubmitted) {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "100%",
            boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.05)",
          }}
          className="py-2"
        >
          <div
            className={`${fredoka.variable} flex justify-center w-[100%] text-[24px] xl:text-[26px] not-italic font-[400] text-brand-dark px-auto`}
          >
            Share your feedback
          </div>
        </div>
        <div className="overflow-y-hidden h-screen flex items-center justify-center fixed">
          <div className="flex flex-col items-center justify-center w-screen p-4 -mt-[50%] xl:-mt-[5%] h-full">
            <Image src={Rating_5} alt="dx" height={120} width={120} />
            <p
              className={`text-4xl md:text-6xl xl:text-6xl ${fredoka.variable} font-light text-brand-dark opacity-80 mt-[4%] xl:mt-[2%]`}
            >
              We will do better!
            </p>
            <p className="text-2xl md:text-3xl xl:text-3xl font-sans font-semibold text-brand-dark opacity-80 mt-[5%] xl:mt-[2%]">
              Thanks for letting us know
            </p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <CSATHeader />
      <div className="sticky top-[0%] w-[100%] z-50 bg-white mx-auto mt-2 block xl:hidden lg:hidden">
        <div className="py-[2%]"></div>
        {cxData?.first_name && cxData?.phone_number && (
          <div className="border-2 border-[#B7D340] rounded-md mx-auto w-[95%] xl:w-[57%] xl:ml-20">
            <p
              className={`mt-2 text-[20px] font-[600] font-sans text-brand-dark ml-3`}
            >
              {cxData?.first_name}
            </p>
            {cxData?.phone_number && (
              <p
                className={`text-[16px] font-[600] font-sans text-brand-dark ml-3 mb-2
            `}
              >
                Contact no.:{" "}
                <span
                  className={`text-[16px] font-[600] font-sans text-brand-dark 
            `}
                >
                  {cxData?.phone_number?.replace("+91", "")}
                </span>
              </p>
            )}
          </div>
        )}
        <div className="py-[2%]"></div>
      </div>
      <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
        <div className="flex flex-col justify-between w-full h-[100%] xl:flex-row md:divide-x-2">
          <div className="flex flex-col flex-1 space-y-4 md:pl-0 justify-center md:pt-12 xl:pt-6 h-full">
            {cxData?.first_name && cxData?.phone_number && (
              <div className="z-50 border-2 border-[#B7D340] rounded-md mx-auto w-[95%] xl:w-[57%] xl:ml-20 hidden xl:block lg:block">
                <p
                  className={`mt-2 text-[20px] font-[600] font-sans text-brand-dark ml-3`}
                >
                  {cxData?.first_name}
                </p>
                {cxData?.phone_number && (
                  <p
                    className={`text-[16px] font-[600] font-sans text-brand-dark ml-3 mb-2
            `}
                  >
                    Contact no.:{" "}
                    <span
                      className={`text-[16px] font-[600] font-sans text-brand-dark 
            `}
                    >
                      {cxData?.phone_number?.replace("+91", "")}
                    </span>
                  </p>
                )}
              </div>
            )}
            <>
              <p className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-left md:pl-16 pb-0 xl:pl-20 xl:pt-2 md:pb-2 xl:pb-2">
                Did your hair coach resolve your doubts?
              </p>
              <div className="flex justify-center space-x-6 xl:pt-4">
                <button
                  className={`px-16 md:px-20 xl:px-20 py-2 rounded w-max bg-custom-green focus:bg-custom-green text-brand-dark font-bold font-sans
              ${
                doubtResolved === 0
                  ? "bg-custom-green outline-none"
                  : "bg-custom-lightgrey outline-none"
              }
              `}
                  onClick={() => setDoubtResolved(0)}
                >
                  No
                </button>
                <button
                  className={`px-16 md:px-20 xl:px-20 py-2 rounded w-max bg-custom-green focus:bg-custom-green text-brand-dark font-bold font-sans
              ${
                doubtResolved === 1
                  ? "bg-custom-green outline-none"
                  : "bg-custom-lightgrey outline-none"
              }
              `}
                  onClick={() => setDoubtResolved(1)}
                >
                  Yes
                </button>
              </div>
            </>
            {rateCoach !== 1 || doubtResolved ? (
              <>
                <p className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-left pb-0 md:pl-16 xl:pl-20 xl:pb-2 pt-6">
                  Rate your Traya hair coach
                </p>
                <div className="flex justify-center items-center w-[100%] mx-auto px-2 md:px-28 xl:px-20 flex justify-around -space-x-1 md:space-x-3 xl:space-x-12">
                  {desc.map((des, i) => {
                    const ratingValue = i + 1;
                    //
                    const isSelected = ratingValue === rateCoach;

                    return (
                      <label key={i}>
                        <div
                          className={`text-center not-italic font-normal leading-3 text-gray-500 ${
                            isSelected ? styles.selected : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                              setRateCoach(ratingValue);
                              setEmojiColor(i);
                            }}
                            className="cursor-pointer hidden"
                          />
                          <FontAwesomeIcon
                            icon={emoji[des.emoji]}
                            size="4x"
                            className={`cursor-pointer transition-colors px-2 md:px-2 xl:px-0 ${
                              isSelected
                                ? styles["emoji-icon"] +
                                  " " +
                                  styles["zoom-out"]
                                : styles["emoji-icon"]
                            }`}
                            color={emojiColor === i ? des.color : des.color}
                            onMouseEnter={() => {
                              setEmojiColor(i);
                              setRateCoachHover(ratingValue);
                            }}
                          />
                          <p
                            key={i}
                            className={`mt-2 text-[9px] md:text-[10px] xl:text-[10px] ${
                              isSelected
                                ? styles["emoji-description"] +
                                  " " +
                                  styles["zoom-out"]
                                : styles["emoji-description"]
                            }`}
                          >
                            {des.des}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <p className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-left md:pl-16 pb-0 xl:pl-20 xl:pt-2 md:pb-2 xl:pb-2 pt-6">
                  Do you want to change your coach?
                </p>
                <div className="flex justify-center space-x-6 xl:pt-4">
                  <button
                    className={`px-16 md:px-20 xl:px-20 py-2 rounded w-max bg-custom-green focus:bg-custom-green text-brand-dark font-bold font-sans
              ${
                changeCoach === 0
                  ? "bg-custom-green outline-none"
                  : "bg-custom-lightgrey outline-none"
              }
              `}
                    onClick={() => setChangeCoach(0)}
                  >
                    No
                  </button>
                  <button
                    className={`px-16 md:px-20 xl:px-20 py-2 rounded w-max bg-custom-green focus:bg-custom-green text-brand-dark font-bold font-sans
              ${
                changeCoach === 1
                  ? "bg-custom-green outline-none"
                  : "bg-custom-lightgrey outline-none"
              }
              `}
                    onClick={() => setChangeCoach(1)}
                  >
                    Yes
                  </button>
                </div>
              </>
            )}

            {rateCoach !== null && (
              <>
                <span className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-left pb-0 md:pt-8 md:pl-16 xl:pl-20 xl:pb-2 pt-6">
                  Are you happy with Traya?
                </span>
                <div className="flex justify-center items-center w-[100%] mx-auto px-2 md:px-28 xl:px-28 flex justify-around -space-x-1 md:space-x-3 xl:space-x-12">
                  {desc.map((des, i) => {
                    const ratingValue = i + 1;
                    const isChosen = ratingValue === trayaRating;

                    return (
                      <label key={i}>
                        <div
                          className={`text-center not-italic font-normal leading-3 text-gray-500 ${
                            isChosen ? styles.selected : ""
                          }`}
                        >
                          <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => {
                              setTrayaRating(ratingValue);
                              setTrayaRatingColor(i);
                            }}
                            className="cursor-pointer hidden"
                          />
                          <FontAwesomeIcon
                            icon={emoji[des.emoji]}
                            size="4x"
                            className={`cursor-pointer transition-colors px-2 md:px-2 xl:px-0 ${
                              isChosen
                                ? styles["emoji-icon"] +
                                  " " +
                                  styles["zoom-out"]
                                : styles["emoji-icon"]
                            }`}
                            color={
                              trayaRatingColor === i ? des.color : des.color
                            }
                            onMouseEnter={() => {
                              setTrayaRatingColor(i);
                              setTrayaRatingHover(ratingValue);
                            }}
                          />
                          <p
                            key={i}
                            className={`mt-2 text-[9px] md:text-[10px] xl:text-[10px] ${
                              isChosen
                                ? styles["emoji-description"] +
                                  " " +
                                  styles["zoom-out"]
                                : styles["emoji-description"]
                            }`}
                          >
                            {des.des}
                          </p>
                        </div>
                      </label>
                    );
                  })}
                </div>
                <span className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-left pb-0 md:pt-8 md:pl-16 xl:pl-20 xl:pb-2 pt-6">
                  Choose your preferred Language, We will let your coach know
                  about your choice.
                </span>
                <div className="flex pl-6 pb-0 md:pt-1 md:pl-16 xl:pl-20 xl:pb-2">
                  <Space direction="vertical" className="space-y-1.5 mt-2 mb-4">
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="english"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">English</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="hindi"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Hindi</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="telugu"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Telugu</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="tamil"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Tamil</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="kannada"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Kannada</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="malayalam"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">
                        Malayalam
                      </span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="marathi"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Marathi</span>
                    </div>
                    <div className="w-72 sm:w-[450px] md:w-[450px] lg:w-[450px] xl:w-[450px] h-0 opacity-10 border border-solid border-black"></div>
                    <div>
                      <input
                        type="radio"
                        id="language"
                        name="language"
                        value="bengali"
                        onClick={(e) => setLanguage(e.target.value)}
                        className="cursor-pointer form-radio"
                      />
                      <span className="text-xl font-normal ml-2">Bengali</span>
                    </div>
                  </Space>
                </div>
              </>
            )}
          </div>
          <div
            className={`flex-1 flex flex-col md:justify-center pb-[25%] md:pb-[0%] xl:pb-[0%]`}
          >
            <p className="text-lg md:text-2xl xl:text-2xl font-bold font-sans text-brand-dark xs:text-center xl:text-center mt-[8%] mb-[5%] md:pl-16 xl:pl-0 xl:mt-[5%] xl:mb-[5%]">
              Tell us more, how can we serve better?
            </p>
            <textarea
              className="w-[90%] md:w-[60%] xl:w-[70%] mx-auto bg-custom-lightgrey pr-8 form-input focus:outline-none px-2 py-0 rounded-xl"
              id="tell_us_more"
              rows="5"
              cols="50"
              type="text"
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={() => {
                handleClick();
                handleSubmit();
              }}
              className="text-lg fixed bottom-0 sm:static w-full sm:w-max mt-[5%] xl:mt-[30%] px-16 md:px-20 xl:px-20 py-[8.5px] m-auto mt-2 uppercase sm:rounded-[6.48283px]  bg-custom-green text-brand-dark font-[600] font-sans disabled:cursor-not-alloweds"
              disabled={
                rateCoach === null || trayaRating === null || buttonClicked
              }
            >
              SUBMIT YOUR FEEDBACK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CSATForm;
