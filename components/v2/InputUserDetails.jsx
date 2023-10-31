import { useContext, useEffect, useState, useRef } from "react";
import compressImage from "@helpers/compressImage";
import { keypress } from "@helpers/keypress";
import { isValidEmail, isValidName, isValidPhone } from "@helpers/validation";
import isEmpty from "lodash/isEmpty";

// image
import selfie from "@assets/images/selfie.png";
import { SlotBooking } from "../SlotBooking";
import Image from "next/image";

const MiniInputUserDetails = ({ block, context, handler, error = "" }) => {
  const {
    currentQuestion,
    questions,
    apiResponse: { transactionId, caseId },
  } = useContext(context);
  const [compressedImage, setCompressedImage] = useState(null);
  const [compressingImage, setCompressingImage] = useState(false);
  const [err, setErr] = useState("");
  const inputRef = useRef(null);

  const inputRefname = useRef(null);
  const inputRefemail = useRef(null);
  const inputRefphone = useRef(null);
  const inputRefCity = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [reply, setReply] = useState(null);

  useEffect(() => {
    if (currentQuestion.reply) {
      currentQuestion.reply;
      setName(currentQuestion.reply.mainData.first_name);
      setEmail(currentQuestion.reply.mainData.email);
      setPhone(currentQuestion.reply.mainData.phone_number.slice(3));
      setCity(currentQuestion.reply.cityData);
      setReply(() => currentQuestion.reply.imageData);
      setCompressedImage(currentQuestion.reply.imageData);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setCity("");
      setReply(null);
      setCompressedImage(null);
    }
    setErrorEmail("");
    setErrorName("");
    setErrorPhone("");
    setErrorCity("");
  }, []);

  const handleKeyPress = (event) => {
    let _isValid = "";
    if (event.target.id === "mini_phone") {
      _isValid = keypress(event, "tel");
      if (_isValid.hasError) setErrorPhone(_isValid.error);
      else setErrorPhone("");
    }
  };

  const validateInput = () => {
    const isEmailValid = isValidEmail(email.trim());
    const isNameValid = isValidName(name.trim());
    const isPhoneValid = isValidPhone(phone);
    const isCityValid = isValidName(city.trim());

    setErrorEmail("");
    setErrorName("");
    setErrorPhone("");
    setErrorCity("");

    if (isNameValid.hasError) {
      setErrorName(isNameValid.error);
      if (inputRefname) inputRefname.current.focus();
    } else if (isEmailValid.hasError) {
      setErrorEmail(isEmailValid.error);
      if (inputRefemail) inputRefemail.current.focus();
    } else if (isPhoneValid.hasError) {
      setErrorPhone(isPhoneValid.error);
      if (inputRefphone) inputRefphone.current.focus();
    } else if (isCityValid.hasError) {
      setErrorCity(isCityValid.error);
    } else if (!checkImage()) {
      if (inputRef) inputRef.current.focus();
      ("no image");
    } else {
      handler(
        { mainData: _formData, imageData: reply, cityData: city },
        currentQuestion
      );
    }
  };

  const _formData = {
    email: email.toLocaleLowerCase().trim(),
    first_name: name.trim(),
    phone_number: "+91" + phone,
    gender: "M",
  };

  const checkImage = () => {
    if (!reply) {
      setErr("Please upload a jpg or png image");
      return false;
    }
    return true;
  };

  const handleImageUpload = async ({ target }) => {
    const _image = target.files[0];

    if (!_image) {
      setCompressedImage(null);
      setReply(null);
      return;
    }
    setCompressingImage(true);
    const _result = await compressImage(_image);
    setCompressingImage(false);

    if (_result.hasError) {
      setErr(() => _result.error);
      return;
    }
    if (isEmpty(_result.compressedImage)) return;
    setReply(_result.compressedImage);

    setCompressedImage(() => _result.compressedImage);

    setErr("");
  };

  return (
    <div className="flex flex-col items-center w-full gap-2 mx-auto mt-12 md:mt-20 md:w-1/2">
      <label
        className="h-16 text-2xl font-bold text-gray-700 text-center"
        htmlFor={block.id}
      >
        {block.text}
      </label>
      {block.sub_text && (
        <div className="h-12 text-gray-400">{block.sub_text}</div>
      )}
      <div className="w-full gap-2 mt-8 sm:w-4/5 md:w-full">
        <div className="w-full mb-4">
          <input
            value={name}
            className="w-full pr-8 border-1 border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id="mini_name"
            onKeyPress={handleKeyPress}
            onChange={({ target }) => {
              setErrorName("");
              setName(target.value);
            }}
            ref={inputRefname}
            type={block.type}
            placeholder="FULL NAME"
          />

          {errorName !== "" && (
            <span className="block ml-2 text-brand-accent">{errorName}</span>
          )}
        </div>

        <div className="w-full mb-4">
          <input
            value={email}
            className="w-full pr-8 border-1 border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id="mini_email"
            onKeyPress={handleKeyPress}
            type={block.type}
            onChange={({ target }) => {
              setErrorEmail("");
              setEmail(target.value);
            }}
            placeholder="EMAIL ADDRESS"
            ref={inputRefemail}
          />

          {errorEmail !== "" && (
            <span className="block ml-2 text-brand-accent">{errorEmail}</span>
          )}
        </div>

        <div className="w-full mb-4">
          <input
            value={phone}
            className="w-full pr-8 border-1 border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id="mini_phone"
            onKeyPress={handleKeyPress}
            type={block.type}
            onChange={({ target }) => {
              setErrorPhone("");
              setPhone(target.value);
            }}
            placeholder="PHONE NUMBER"
            ref={inputRefphone}
          />

          {errorPhone !== "" && (
            <span className="block ml-2 text-brand-accent">{errorPhone}</span>
          )}
        </div>
        <div className="w-full mb-4">
          <input
            value={city}
            className="w-full pr-8 border-1 border-b-2 border-gray-300 form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id="mini_city"
            onKeyPress={handleKeyPress}
            onChange={({ target }) => {
              setErrorCity("");
              setCity(target.value);
            }}
            ref={inputRefCity}
            type={block.type}
            placeholder="CITY"
          />

          {errorCity !== "" && (
            <span className="block ml-2 text-brand-accent">{errorCity}</span>
          )}
        </div>
      </div>
      <p className="text-center text-xl font-extrabold text-gray-500">
        We need a photo of your scalp for better assessment
      </p>
      <p className="mb-5 text-center text-gray-500">
        *Take a selfie of your entire scalp as depicted in the image below
      </p>
      <div>
        <div className="relative flex flex-col items-center justify-center border-2 border-gray-500 border-dashed w-60 h-60">
          <input
            type="file"
            accept="image/*"
            className="absolute top-0 left-0 z-50 w-full h-full opacity-0 cursor-pointer"
            id={"image"}
            ref={inputRef}
            onChange={handleImageUpload}
          />

          {compressedImage ? (
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <Image
                src={URL.createObjectURL(compressedImage)}
                alt="uploaded"
                className="object-scale-down align-middle w-44 h-44"
                width={160}
                height={160}
              />
              <span className="block px-3 py-1 mt-1 text-gray-700">
                Click to change image
              </span>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center max-w-full max-h-full">
              <Image
                src={selfie}
                alt="selfie"
                className="object-scale-down align-middle w-44 h-44"
                width={160}
                height={160}
              />
              <span className="block px-3 py-1 mt-1 text-white rounded-lg bg-brand-dark">
                + Click to add image
              </span>
            </div>
          )}
        </div>
      </div>
      {/*	<button
				id="img_upload"
				onClick={() => checkImage()}
				className="px-6 py-2 mx-auto uppercase rounded-md w-max bg-brand-accent text-green-50">
				{compressingImage ? (
					<span className="animate-pulse">Processing</span>
				) : (
					"Upload Image"
				)}
				</button> */}
      {err !== "" && (
        <span className="block mt-1 text-brand-accent">{err}</span>
      )}
      {error !== "" && (
        <span className="block ml-2 text-brand-accent">{error}</span>
      )}
      <button
        onClick={() => validateInput()}
        id="submit_button"
        disabled={
          error === "Unexpected error occurred, please contact traya support"
        }
        hidden={
          error === "Unexpected error occurred, please contact traya support"
        }
        className="px-6 py-2 m-auto mt-2 uppercase rounded-md w-max bg-brand-accent text-green-50 cursor-pointer"
      >
        {compressingImage ? (
          <span className="animate-pulse">Processing</span>
        ) : (
          "submit"
        )}
      </button>
    </div>
  );
};

export default MiniInputUserDetails;
