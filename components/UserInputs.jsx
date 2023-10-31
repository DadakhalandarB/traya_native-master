import { useContext, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";
import useFormSubmit from "@hooks/useFormSubmit";
import { isValidEmail, isValidName, isValidPhone } from "@helpers/validation";
import { INGESTION_API, TRANSACTION_API } from "@constants/urls";
import Loader from "./Loader";
import { fetchRequest } from "@helpers/fetchRequest";
import Cookies from "js-cookie";
import { COOKIES_DOMAIN } from "@constants/config";
import { COOKIES_EXPIRY } from "@constants/constants";
import ArrowCircleRight from "@assets/icons/ArrowCircleRight";
import { keypress } from "@helpers/keypress";

const UserInputs = ({ block, context }) => {
  const {
    questions,
    saveApiResponse,
    queryStrings: { utmData, cohort },
  } = useContext(context);

  const handleSubmit = useFormSubmit(context);

  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");
  const [hasError, setHasError] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    if (block.reply) {
      setName(block.reply.first_name);
      setEmail(block.reply.email);
      setPhone(block.reply.phone_number);
    }
  }, [block]);

  const _submitReply = async (data) => {
    let _res = "";

    try {
      const _form = [];
      const _user = {
        email: data.email,
        first_name: data.first_name,
        phone_number: data.phone_number,
      };

      if (cohort) {
        _form.push({
          question_id: "cohort",
          question: "cohort",
          response: cohort,
          form_status: "In-Progress",
        });
      }

      const _bodyData = { form: _form, user: _user };

      const _requestOptions = {
        method: "POST",
        body: JSON.stringify(_bodyData),
      };

      _res = await fetchRequest(INGESTION_API(), _requestOptions);
      if (_res.status === 200) {
        saveApiResponse(_res.data);
        handleSubmit(data);
        setReply("");
        Cookies.set("Transaction_ID", _res.data.transactionId, {
          domain: COOKIES_DOMAIN,
          expires: COOKIES_EXPIRY,
        });
        Cookies.set("Synthetic_ID", _res.data.syntheticId, {
          domain: COOKIES_DOMAIN,
          expires: COOKIES_EXPIRY,
        });

        Cookies.set("form_status", "draft", {
          domain: COOKIES_DOMAIN,
          expires: COOKIES_EXPIRY,
        });

        return _res.data.transactionId;
      }
      if (_res.status === 500) {
        setErr("Unexpected error occured, please contact traya support");
        setHasError(true);
        return null;
      }

      setErr(_res.data.message);
    } catch (error) {
      console.warn(error.message);
    }
  };

  const submitUTMData = async (transactionId) => {
    let res = {};
    try {
      for (let key in utmData) {
        const _formData = {
          question_id: key,
          question: key,
          response: utmData[key],
          form_status: "In-Progress",
          locationPath: window.location.pathname + window.location.search,
          formFillSource: "website",
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
    userObject.first_name = e.target[0].value;
    userObject.phone_number = e.target[1].value;
    userObject.email = e.target[2].value;

    if (hasError) return;
    const _isNameValid = isValidName(userObject.first_name);
    const _isPhoneValid = isValidPhone(userObject.phone_number);
    const _isEmailValid = isValidEmail(userObject.email);

    if (_isNameValid.hasError) {
      setNameError(_isNameValid.error);
      return;
    }
    if (_isPhoneValid.hasError) {
      setPhoneError(_isPhoneValid.error);
      return;
    }
    if (_isEmailValid.hasError) {
      setEmailError(_isEmailValid.error);
      return;
    }
    // if (!hasError) {
    //   handleSubmit(userObject);
    //   return;
    // }

    setIsLoading(true);
    const transactionId = await _submitReply(userObject);
    if (isEmpty(transactionId)) return setIsLoading(false);

    if (isEmpty(utmData)) return setIsLoading(false);
    const utmRes = submitUTMData(transactionId);
    setIsLoading(false);

    if (utmRes.hasError) return;
    Cookies.remove("__TRAYA_UTM__");
  };

  const handleKeyPress = (event, data) => {
    const _isValid = keypress(event, data.type);

    if (_isValid.hasError) {
      if (event.target.id === "first_name") {
        setNameError(_isValid.error);
      }
      // if (event.target.id === "phone_number") {
      //   setPhoneError(_isValid.error);
      // }
      setErr(_isValid.error);
      return;
    }
    // setPhoneError("");
    setNameError("");
    setEmailError("");
    setErr("");
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "first_name") {
      setName(value);
    }
    if (id === "phone_number") {
      setPhone(value);
    }
    if (id === "email") {
      setEmail(value);
    }
  };

  return (
    <>
      {isLoading && <Loader />}

      <form onSubmit={_handleSubmit} className="flex flex-col md:w-1/2">
        <label className=" mt-6 text-gray-700">
          Once you complete the hair test, we will send the hair analysis report
          on the below email & number.
        </label>
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
            value={name}
            placeholder="Name"
          />
          {nameError !== "" && (
            <span className="block mt-2 text-brand-accent">{nameError}</span>
          )}
        </div>

        <div className="relative w-full  md:mt-10 sm:w-4/5 md:w-full">
          <label
            className="h-12 text-2xl font-bold text-gray-700"
            htmlFor={block.dataInfo[1].id}
          >
            {block.dataInfo[1].text}
          </label>
          {block.dataInfo[1].sub_text && (
            <div className="h-12 text-gray-400">
              {block.dataInfo[0].sub_text}
            </div>
          )}
          <div className="flex">
            {/* <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
              +91
            </span> */}
            <input
              className="w-full pr-8 border  rounded-lg border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
              id={block.dataInfo[1].id}
              key={block.dataInfo[1].id}
              onChange={(event) => handleChange(event)}
              // onKeyPress={(event) => handleKeyPress(event, block.dataInfo[1])}
              type={block.dataInfo[1].type}
              value={phone}
              placeholder="1234567890"
            />
          </div>

          {phoneError !== "" && (
            <span className="block mt-2 text-brand-accent">{phoneError}</span>
          )}
        </div>

        <div className="relative w-full  md:mt-10 sm:w-4/5 md:w-full">
          <label
            className="h-12 text-2xl font-bold text-gray-700"
            htmlFor={block.dataInfo[2].id}
          >
            {block.dataInfo[2].text}
          </label>
          {block.dataInfo[2].sub_text && (
            <div className="h-12 text-gray-400">
              {block.dataInfo[2].sub_text}
            </div>
          )}
          <input
            className="w-full pr-8 border  rounded-lg border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            placeholder="E-mail ID"
            id={block.dataInfo[2].id}
            key={block.dataInfo[2].id}
            onChange={(event) => handleChange(event)}
            onKeyPress={(event) => handleKeyPress(event, block.dataInfo[2])}
            type={block.dataInfo[2].type}
            value={email}
          />
          {emailError !== "" && (
            <span className="block mt-2 text-brand-accent">{emailError}</span>
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

export default UserInputs;
