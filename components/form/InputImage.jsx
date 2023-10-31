import { useContext, useRef, useState } from "react";
import { SUBMISSION } from "@constants/routes";
import { QuestionsContext } from "@context/questions-store";
import compressImage from "@helpers/compressImage";
import useFormSubmit from "@hooks/useFormSubmit";
import isEmpty from "lodash/isEmpty";
import { useRouter } from "next/navigation";
import { MD5 } from "crypto-js";
import selfie from "@assets/images/selfie.png";
import Image from "next/image";
import { useEffect } from "react";
import { nunito } from "@/constants/fontConfig";

const InputImage = ({ block }) => {
  const {
    currentQuestion,
    removeFromPreviousQuestion,
    questions,
    saveReply,
    nextQuestion,
    makeQuestionsList,
    setAllQuestionsFilled,
  } = useContext(QuestionsContext);

  const handleSubmit = useFormSubmit(QuestionsContext);
  const inputRef = useRef(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressingImage, setCompressingImage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [storedImg, setStoredImg] = useState(false);
  const [err, setErr] = useState("");
  const [reply, setReply] = useState(null);
  const [localImg, setLocalImg] = useState(null);
  const [gender, setGender] = useState("");
  const router = useRouter();
  useEffect(() => {
    const val = window.localStorage.getItem("photo_scalp");
    const genderVal = window.localStorage.getItem("gender");
    setGender(genderVal);
    if (block.reply) {
      setStoredImg(true);
      setShowButton(true);
      setCompressingImage(false);
      setCompressedImage(val);
    }
  }, [reply]);

  const fileToDataUri = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.readAsDataURL(file ? file : "");
    });

  const handleImageUpload = async ({ target }) => {
    const _image = target.files[0];
    if (_image) {
      fileToDataUri(_image).then((dataUri) => {
        window.localStorage.setItem("photo_scalp", dataUri);
      });
    }

    if (!_image) {
      setCompressedImage(null);
      setShowButton(false);
      return;
    }

    setShowButton(true);
    setCompressingImage(true);
    const _result = await compressImage(_image);
    setCompressingImage(false);
    if (_result.hasError) {
      setErr(() => _result.error);
      setShowButton(false);
      return;
    }
    if (isEmpty(_result.compressedImage)) return;
    setReply(_result.compressedImage);
    // var reader = new FileReader();
    // reader.onload = function (base64) {
    //   localStorage["imgVal"] = base64;
    // };
    // localStorage.setItem("imgData", JSON.stringify(_result.compressedImage));
    // reader.readAsDataURL(_image);

    saveReply(block.id, _result.compressedImage);
    window.localStorage.setItem("form_status", "semi-filled");
    window.dataLayer = window.dataLayer || [];
    let user_email = window.localStorage.getItem("user_email");
    let user_phone = window.localStorage.getItem("user_phone");
    let user_synthetic_id = window.localStorage.getItem("user_syn");
    let LossStage = window.localStorage.getItem("2e");
    const encryptedEmail = user_email ? MD5(user_email.trim()).toString() : "";
    const encryptedPhone = user_phone ? MD5(user_phone.trim()).toString() : "";

    // Add the `view_item_list` event and associated data to the dataLayer
    let age = window.localStorage.getItem("age");
    let gender = window.localStorage.getItem("gender");
    window.dataLayer.push({
      EID: encryptedEmail,
      PageName: "Hair Diagnosis",
      JourneyType: "Hair Test",
      Section: "Doctor Assessment",
      Age: age ? age : "",
      Gender: gender ? gender : "",
      MID: encryptedPhone,
      LossStage: LossStage ? LossStage : "",
      NAEID: user_email ? user_email.trim() : "",
      NAMID: user_phone ? user_phone.trim() : "",
      user_id: user_synthetic_id ? user_synthetic_id : "",
      event: "DocAssessment_Submitted",
    });
    // handleFreshUserAttributes({
    //   Email: questions.email.reply,
    //   "Form Status": "semi-filled",
    // });

    setErr("");
    if (!storedImg) setCompressedImage(() => _result.compressedImage);
  };

  const _handleSubmit = async () => {
    if (reply) {
      handleSubmit(reply);
      setAllQuestionsFilled(true);
      // router.push(SUBMISSION);
      // window.localStorage.setItem("form_status", "semi-filled");

      // handleFreshUserAttributes({
      //   Email: questions.email.reply,
      //   "Form Status": "semi-filled",
      // });
    } else {
      if (!block.reply) {
        setErr("Please insert an image!");
        return;
      }
      handleSubmit(block.reply);
      router.push(SUBMISSION);
      window.localStorage.setItem("form_status", "semi-filled");
      // handleFreshUserAttributes({
      //   Email: questions.email.reply,
      //   "Form Status": "semi-filled",
      // });
    }
  };

  return (
    <div className="block max-w-2xl w-full  pt-2 bg-white mx-auto my-4">
      <div className="w-full  px-2 ">
        <p
          className="text-[20px] md:text-[24px] mt-2 font-bold  text-gray-700 text-left sm:text-center"
          id="photo_q"
        >
          {block.text}
        </p>
        <div
          className={`flex flex-col align-top sm:ml-[20%] ${nunito.variable}`}
        >
          <p className="text-[14px] md:text-[17px]   mt-3 ml-0 font  text-left text-[#605F61] ">
            <span className="relative font-bold">
              After you place the order
            </span>
            , this photo will be used by:
          </p>
          {block.sub_text &&
            Array.isArray(block.sub_text) &&
            block.sub_text.map((e, i) => {
              return (
                <div key={i} className="flex  justify-start w-full">
                  {" "}
                  <p className=" text-[#605F61] text-[14px]  ml-[1px] mr-[2px] md:text-[17px]">
                    {i + 1}.{" "}
                  </p>
                  <p className="text-[14px] md:text-[17px] list-decimal mt-0 text-left text-[#605F61] ">
                    {e}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className="relative  mt-5 flex flex-col items-center justify-center border-2 border-gray-500 border-dashed w-60 h-60 mx-auto ">
        <input
          type="file"
          accept="image/*"
          className="absolute top-0 left-0 z-50 w-full h-full opacity-0 cursor-pointer"
          id={block.id}
          ref={inputRef}
          onChange={handleImageUpload}
        />
        {compressedImage ? (
          <div className="flex flex-col items-center justify-center max-w-full max-h-full">
            {storedImg ? (
              <Image
                src={compressedImage}
                alt="uploaded"
                className="object-scale-down align-middle w-44 h-44"
                width={190}
                height={190}
                id="scalpImg"
              />
            ) : (
              <Image
                src={URL.createObjectURL(compressedImage)}
                alt="uploaded"
                className="object-scale-down align-middle w-44 h-44"
                width={190}
                height={190}
                id="scalpImg"
              />
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center max-w-full max-h-full">
            <Image
              src={selfie}
              alt="selfie"
              className="object-scale-down align-middle w-44 h-44"
              width={190}
              height={190}
              priority={false}
            />
          </div>
        )}
      </div>
      {!showButton ? (
        <span
          className={`block px-3 py-1 mt-4 text-white rounded-lg bg-brand-dark cursor-pointer text-center w-60 m-auto`}
          onClick={() => inputRef.current && inputRef.current.click()}
        >
          UPLOAD IMAGE
        </span>
      ) : (
        <span
          onClick={() => inputRef.current && inputRef.current.click()}
          className="block px-3 py-1 mt-2 text-brand-dark rounded-lg cursor-pointer text-center m-auto underline"
        >
          CHANGE IMAGE
        </span>
      )}
      {/* {showButton && (
        <button
          id="scalp_submit"
          onClick={() => _handleSubmit()}
          className="px-6 py-2 flex mt-2 mx-auto uppercase rounded-[4px] w-max bg-brand-accent text-green-50 "
        >
          {compressingImage ? (
            <span className="animate-pulse">Processing</span>
          ) : (
            "See my results"
          )}
        </button>
      )} */}

      {err !== "" && (
        <span className="block mt-1 text-brand-accent">{err}</span>
      )}
      {/* {gender && gender == "F" && (
        <div className="flex justify-end md:mr-16">
          <button
            id="Slot_booked_skip"
            className="inline-flex gap-2 px-6 py-2 mt-4 text-lg font-medium uppercase rounded-[4px] w-max text-brand-accent"
            onClick={_handleSubmit}
          >
            Skip
          </button>
        </div>
      )} */}

      <div className="flex flex-row flex-wrap justify-center mt-6 w-full sm:static bottom-0 left-0 right-0 sm:mb-4  bg-white pt-4 pb-2 z-10">
        {/* {currentQuestion.id && (
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
        )} */}
        {showButton && (
          <>
            <div className="hidden xl:block lg:block md:block sm:block">
              <button
                id="scalp_submit"
                onClick={() => _handleSubmit()}
                className="uppercase px-32 my-2 py-2 bg-[#414042] text-white rounded-[4px] text-[22px] font-sans font-[600] focus:outline-none"
              >
                {compressingImage ? (
                  <span className="animate-pulse">Processing</span>
                ) : (
                  "SUBMIT"
                )}
              </button>
            </div>
            <div className="border-white border block xl:hidden lg:hidden md:hidden sm:hidden">
              <div className="border-white border rounded w-full flex justify-center align-center fixed bottom-0 right-0 bg-white font-bold focus:outline-none z-50">
                <button
                  id="scalp_submit"
                  onClick={() => _handleSubmit()}
                  className={`uppercase px-12 my-2 py-3 w-[95%] bg-[#414042] text-white rounded-[4px] text-[17px] font-sans font-[600] focus:outline-none`}
                >
                  {compressingImage ? (
                    <span className="animate-pulse">Processing</span>
                  ) : (
                    "SUBMIT"
                  )}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InputImage;
