import { useContext, useEffect, useState } from "react";
import useFormSubmit from "@hooks/useFormSubmit";
import { isValidAge } from "@helpers/validation";
import { TRANSACTION_API } from "@constants/urls";
import Loader from "./Loader";
import { fetchRequest } from "@helpers/fetchRequest";
import ArrowCircleRight from "@assets/icons/ArrowCircleRight";
import { keypress } from "@helpers/keypress";
import { LAST_QUESTIONS } from "@constants/config";
import { useRouter } from "next/navigation";
import { FEMALE } from "@constants/routes";

const UserInputs2 = ({ block, context }) => {
  const router = useRouter();
  const {
    apiResponse: { transactionId },
    byId,
    queryStrings: { utmData },
    nextQuestion,
    makeQuestionsList,
  } = useContext(context);

  const { saveGenderReply } = useContext(context);
  const handleSubmit = useFormSubmit(context);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [hasError, setHasError] = useState(false);
  const [C1d, setC1d] = useState("");
  const [gender, setGender] = useState("");

  const [c1dError, setC1dError] = useState("");
  const [genderError, setGenderError] = useState("");

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (block.reply) {
      setC1d(block.reply.C1d);
      setGender(block.reply.gender);
    } else {
      if (router.pathname == FEMALE) {
        setGender("F");
      }
    }
  }, [block]);

  const _submitReply = async (data) => {
    setIsLoading(true);
    let _res = "";

    // let nextId = block.next;
    // if (block.fn) nextId = jsonLogic.apply(block.fn, { reply });

    try {
      for (let key of block.dataInfo) {
        const _formData = {
          question_id: key.id,
          question: key.text,
          response: key.id == "C1d" ? data.C1d : data.gender,
          form_status: LAST_QUESTIONS.has(block.next)
            ? "semi-filled"
            : "In-Progress",
          locationPath: window.location.pathname + window.location.search,
          formFillSource: "website",
        };
        const _options = {
          method: "PUT",
          body: JSON.stringify(_formData),
        };
        _res = await fetchRequest(TRANSACTION_API(transactionId), _options);
      }
    } catch (error) {
      console.warn(error);
    } finally {
      if (_res.status === 200) {
        window.localStorage.setItem("gender", data.gender);
        handleSubmit(data);

        saveGenderReply(block.id, data.gender);
        if (LAST_QUESTIONS.has(block.id)) {
          await _formStatusUpdate();
        }
        return;
      }
      setIsLoading(false);
      setError(_res.data.message);
    }
  };

  const submitUTMData = async (transactionId) => {
    let res = {};
    try {
      for (let key in utmData) {
        const _formData = {
          question_id: key,
          question: key.text,
          response: utmData[key],
          form_status: "In-Progress",
        };

        const _requestOptions = {
          method: "PUT",
          body: JSON.stringify(_formData),
        };

        res = await fetchRequest(
          TRANSACTION_API(transactionId),
          _requestOptions
        );
      }
    } catch (error) {
      console.warn(error.message);
    } finally {
      return res;
    }
  };

  const _handleSubmit = async (e) => {
    e.preventDefault();

    const userObject = {};
    userObject.C1d = e.target[0].value;

    userObject.gender = gender;

    setUserData(userObject);

    const _isAgeValid = isValidAge(userObject.C1d);

    if (_isAgeValid.hasError) {
      setC1dError(_isAgeValid.error);
      return;
    }
    if (userObject.gender == "") {
      setGenderError("Please Select One");
      return;
    }
    setGenderError("");
    await _submitReply(userObject);
  };

  const handleKeyPress = (event, data) => {
    const _isValid = keypress(event, data.type);

    if (_isValid.hasError) {
      if (event.target.id === "C1d") {
        setC1dError(_isValid.error);
      }
      setErr(_isValid.error);
      return;
    }
    setC1dError("");
    setErr("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "C1d") {
      setC1d(value);
    }
  };
  const handleGender = (select) => {
    saveGenderReply(block.id, select);
    setGender(select);
    window.localStorage.setItem("gender", select);
  };

  const getGTMElementID = (option, block, index) => {
    if (window.location.pathname === "/guest-form") {
      return (
        gtmParametersMap[block.dataInfo[1]] +
        "-" +
        option.name.replace("Stage", "STG")
      );
    } else return option.id || `${block.id}_${index + 1}`;
  };

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={_handleSubmit} className="flex flex-col md:w-1/2">
        {router.pathname !== FEMALE ? (
          <label className="  mt-6 text-gray-700">
            Age & Gender are important parameters to diagnose and treat your
            hair problem
          </label>
        ) : (
          <label className="  mt-6 text-gray-700">
            Age is an important parameter to diagnose and treat your hair
            problem
          </label>
        )}

        <div className="relative w-full  md:mt-10 sm:w-4/5 md:w-full">
          <label
            className="h-12 text-2xl font-bold text-gray-700"
            htmlFor={block.dataInfo[0].id}
          >
            {block.dataInfo[0].text}
          </label>
          {block.dataInfo[0].sub_text && (
            <div className="h-12 text-gray-400">
              {block.dataInfo[0].sub_text}
            </div>
          )}
          <input
            className="w-full pr-8 border  rounded-lg border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id={block.dataInfo[0].id}
            key={block.dataInfo[0].id}
            onChange={(event) => handleChange(event)}
            onKeyPress={(event) => handleKeyPress(event, block.dataInfo[0])}
            type={block.dataInfo[0].type}
            value={C1d}
            placeholder="Age"
          />
          {c1dError !== "" && (
            <span className="block mt-2 text-brand-accent">{c1dError}</span>
          )}
        </div>

        <div className="relative w-full  md:mt-10 sm:w-4/5 md:w-full">
          <label
            className="text-2xl font-bold text-gray-700"
            htmlFor={block.dataInfo[1]}
          >
            {block.dataInfo[1].text}
          </label>
          {block.dataInfo[1].sub_text && (
            <div className="h-8 mt-2 text-gray-400 align-middle">
              {block.dataInfo[1].sub_text}
            </div>
          )}

          <div>
            <ul className="flex ">
              <li className="pr-8">
                <div
                  className={
                    gender === "M"
                      ? "py-4 px-8 w-100 rounded-lg border-2 cursor-pointer border-gray-300 dark:text-white bg-brand-accent  text-white"
                      : "py-4 px-8 w-100 text-gray-500 rounded-lg border-2 cursor-pointer border-gray-300"
                  }
                  onClick={() => handleGender("M")}
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Male</div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className={
                    gender === "F"
                      ? "py-4 px-8 w-100 rounded-lg border-2 cursor-pointer border-gray-300 dark:text-white bg-brand-accent  text-white"
                      : "py-4 px-8 w-100 text-gray-500 rounded-lg border-2 cursor-pointer border-gray-300"
                  }
                  onClick={() => handleGender("F")}
                >
                  <div className="block">
                    <div className="w-full text-lg font-semibold">Female</div>
                  </div>
                </div>
              </li>
            </ul>

            {genderError && (
              <span className="block mt-2 text-brand-accent">
                {genderError}
              </span>
            )}
          </div>
          {err !== "" && (
            <span className="block mt-1 text-brand-accent">{err}</span>
          )}
        </div>

        <div className="relative w-full  md:mt-10 sm:w-4/5 md:w-full">
          <button
            type="submit"
            disabled={
              err === "Unexpected error occured, please contact traya support"
            }
            className="absolute right-0 focus:outline-none active:outline-none top-2"
          >
            <div className="text-brand-accent w-7 h-7">
              <ArrowCircleRight />
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default UserInputs2;
