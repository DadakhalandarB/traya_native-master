import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuestionsContext } from "../../context/questions-store";
import compressImage from "@helpers/compressImage";
import useFormSubmit from "@hooks/useFormSubmit";
import isEmpty from "lodash/isEmpty";
import Router from "next/navigation";
import selfie from "@assets/images/selfie.png";
import { SUBMISSION, SUBMISSION_V3 } from "@constants/routes";
import { InternationalFormContext } from "@context/international-form-store";
import Image from "next/image";

const InputImageV3 = ({ block }) => {
  const handleSubmit = useFormSubmit(InternationalFormContext);
  const history = useHistory();
  const inputRef = useRef(null);

  const [compressedImage, setCompressedImage] = useState(null);
  const [compressingImage, setCompressingImage] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [err, setErr] = useState("");
  const [reply, setReply] = useState(null);

  const handleImageUpload = async ({ target }) => {
    const _image = target.files[0];
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
    setErr("");
    setCompressedImage(() => _result.compressedImage);
  };

  const _handleSubmit = () => {
    if (!reply) {
      setErr("Please insert an image!");
      return;
    }
    handleSubmit(reply);
    Router.push(SUBMISSION_V3);
  };

  return (
    <div className="flex flex-col items-center mt-20 space-y-8">
      <label className="text-2xl font-bold text-center text-gray-700">
        {block.text}
      </label>
      {block.sub_text && (
        <p className="mb-5 text-center text-gray-500">{block.sub_text}</p>
      )}
      <div className="relative flex flex-col items-center justify-center border-2 border-gray-500 border-dashed w-60 h-60">
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
      {showButton && (
        <button
          id="scalp_submit"
          onClick={() => _handleSubmit()}
          className="px-6 py-2 mx-auto uppercase rounded-md w-max bg-brand-accent text-green-50"
        >
          {compressingImage ? (
            <span className="animate-pulse">Processing</span>
          ) : (
            "See my results"
          )}
        </button>
      )}

      {err !== "" && (
        <span className="block mt-1 text-brand-accent">{err}</span>
      )}
    </div>
  );
};

export default InputImageV3;
