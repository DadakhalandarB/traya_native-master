import { useContext, useEffect, useState } from "react";
import { MiniQuestionsContext } from "../../context/mini-questions-store";
import Image from "next/image";
const optionName = require(`../../assets/images/${option.image_url}`);

const MiniInputRadio = ({ block, handler }) => {
  const {
    byId,
    apiResponse: { transactionId },
  } = useContext(MiniQuestionsContext);
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (block) setReply(() => block.reply);
  }, [block]);

  return (
    <div className="flex items-center justify-center mt-12 space-y-8 md:mt-20">
      <div
        className={`flex flex-col sm:space-y-8 ${
          block.showImages ? "w-full" : "md:w-1/2"
        }`}
      >
        <label className="text-2xl font-bold text-gray-700" htmlFor={block.id}>
          {block.text}
        </label>

        <figure className="flex flex-col items-center justify-center max-w-full max-h-full my-4">
          <Image
            src={URL.createObjectURL(byId["photo_q"].reply)}
            alt="uploaded"
            className="object-scale-down align-middle w-44 h-44"
            width={160}
            height={160}
          />
        </figure>

        <div
          className={`flex ${
            block.showImages
              ? "flex-wrap gap-2 border-b-2 pb-2"
              : "flex-col md:ml-2 pl-4 space-y-2"
          }`}
        >
          {block.optionMap?.map((option, index) => (
            <label
              htmlFor={`${block.id}_${index + 1}`}
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
                  id={`${block.id}_${index + 1}`}
                  checked={reply === option.value}
                  type="radio"
                  onClick={({ target }) => {
                    if (block.id === "2e")
                      handler(block, transactionId, target.value);
                  }}
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
          {block.id === "male-branch" && (
            <div className="pt-5 mx-auto">
              <button
                onClick={() => handler(block, transactionId, reply)}
                id="submit_button"
                className="px-6 py-2 m-auto mt-5 uppercase rounded-md w-max bg-brand-accent text-green-50"
              >
                submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniInputRadio;
