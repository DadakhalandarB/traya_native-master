import { useContext, useEffect, useState } from "react";
import { TRANSACTION_API } from "../../constants/urls";
import { fetchRequest } from "../../helpers/fetchRequest";
import useFormSubmit from "../../hooks/useFormSubmit";
import Loader from "../Loader";
import Image from "next/image";
const optionName = require(`../../assets/images/${option.image_url}`);

const InputRadioV3 = ({ block, context }) => {
  const {
    apiResponse: { transactionId },
  } = useContext(context);

  const handleSubmit = useFormSubmit(context);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (block) setReply(() => block.reply);
  }, [block]);

  const _submitReply = async (reply) => {
    setIsLoading(true);
    let _res = "";

    try {
      const _formData = {
        question_id: block.id,
        question: block.text,
        response: reply,
        form_status: block.id === "3f" ? "semi-filled" : "In-Progress",
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
      setIsLoading(false);
      if (_res.status === 200) {
        handleSubmit(reply);
        setReply("");
        return;
      }

      setError(_res.data.message);
    }
  };

  const _handleSubmit = async ({ target }) => {
    const _reply = target.value;

    if (block.reply === _reply) {
      handleSubmit(reply);
      return;
    }

    await _submitReply(_reply);
  };

  return (
    <>
      {isLoading && <Loader />}

      <div
        className={`flex flex-col mt-12  sm:space-y-8 ${
          block.showImages ? "w-full" : "md:w-1/2"
        }`}
      >
        <label className="text-2xl font-bold text-gray-700" htmlFor={block.id}>
          {block.text}
        </label>

        {block.sub_text && (
          <div className="h-8 mt-2 text-gray-400 align-middle">
            {block.sub_text}
          </div>
        )}

        <div
          className={`flex ${
            block.showImages
              ? "flex-wrap gap-2 border-b-2 pb-2"
              : "flex-col md:ml-2 pl-4 space-y-2"
          }`}
        >
          {block.optionMap?.map((option, index) => (
            <label
              htmlFor={option.id || `${block.id}_${index + 1}`}
              key={option.name}
              data-options="responses"
              className={`inline-flex py-4 cursor-pointer ${
                block.showImages
                  ? "flex-col flex-1 bg-gray-100 items-center px-4 justify-center rounded-md"
                  : "border-b-2"
              }`}
            >
              {block.showImages && (
                <Image
                  src={optionName.default}
                  alt={option.name}
                  className="flex-1 mb-1"
                  height={100}
                  width={100}
                />
              )}

              <div className="inline-flex items-center flex-1">
                <input
                  className="cursor-pointer form-radio text-brand-accent"
                  checked={reply === option.value}
                  id={option.id || `${block.id}_${index + 1}`}
                  type="radio"
                  onClick={_handleSubmit}
                  onChange={({ target }) => setReply(target.value)}
                  value={option.value}
                />

                <span
                  className={`ml-2 ${
                    block.showImages ? "text-base" : "text-xl"
                  }`}
                >
                  {option.name}
                </span>
              </div>
            </label>
          ))}
        </div>
        {error !== "" && (
          <span className="block mt-1 text-brand-accent">{error}</span>
        )}
      </div>
    </>
  );
};

export default InputRadioV3;
