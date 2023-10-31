import { useContext, useEffect, useState } from "react";
import ArrowCircleRight from "../assets/icons/ArrowCircleRight";
import { LAST_QUESTIONS } from "../constants/config";
import { TRANSACTION_API } from "../constants/urls";
import { fetchRequest } from "../helpers/fetchRequest";
import useFormSubmit from "../hooks/useFormSubmit";
import InputText from "./form/InputText";

const UserFeedback = ({ block, context }) => {
  const handleSubmit = useFormSubmit(context);

  const [error, setError] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!block) return;
    setReply(() => block.reply);
  }, [block]);

  const {
    apiResponse: { syntheticId, caseId, transactionId },
  } = useContext(context);

  const _handleSubmit = async (e) => {
    e.preventDefault();
    await _submitReply(reply.trim());
    // handleSubmit(reply.trim());
    setError("");
  };
  const _submitReply = async (reply) => {
    setIsLoading(true);
    let _res = "";
    if (block.fn) block.next = jsonLogic.apply(block.fn, { reply });

    try {
      const _formData = {
        question_id: block.id,
        question: block.text,
        response: reply,
        form_status: LAST_QUESTIONS.has(block.next)
          ? "semi-filled"
          : "In-Progress",
        locationPath: window.location.pathname + window.location.search,
        formFillSource: 'website',
      };

      const _options = {
        method: "PUT",
        body: JSON.stringify(_formData),
      };

      _res = await fetchRequest(TRANSACTION_API(transactionId), _options);
    } catch (error) {
      console.warn(error);
    } finally {
      if (_res.status === 200) {
        await handleSubmit(reply);
        setReply("");
        if (LAST_QUESTIONS.has(block.id)) {
          await _formStatusUpdate();
        }
        return;
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <InputText
        error={error}
        reply={reply}
        setError={setError}
        setReply={setReply}
        handleSubmit={_handleSubmit}
        store={context}
      /> */}
      <form
        onSubmit={_handleSubmit}
        className="flex flex-col mt-8 md:mt-24 md:w-1/2"
      >
        <label
          className="h-12 text-2xl font-bold text-gray-700"
          htmlFor={block.id}
        >
          {block.text}
        </label>

        <div className="relative w-full mt-2 md:mt-20 sm:w-4/5 md:w-full">
          <input
            className="w-full pr-8 border-b-2 border-brand-accent form-input ring-transparent focus:outline-none active:ring-transparent focus:border-brand-accent active:border-brand-accent p-3"
            id={block.id}
            key={block.id}
            onChange={({ target }) => setReply(target.value)}
            type={block.type}
            value={reply}
            // placeholder={block.text}
          />

          <button
            type="submit"
            disabled={
              error === "Unexpected error occured, please contact traya support"
            }
            className="absolute right-2 focus:outline-none active:outline-none top-3"
          >
            <div className="text-brand-accent w-7 h-7">
              <ArrowCircleRight />
            </div>
          </button>

          {error !== "" && (
            <span className="block mt-2 text-brand-accent">{error}</span>
          )}
        </div>
      </form>
      <div className={`flex-1 md:justify-center `}>
        <div className="flex justify-center md:mr-16">
          <button
            id="Slot_booked_skip"
            className="inline-flex gap-2   mt-4 text-lg font-medium uppercase rounded-md w-max text-brand-accent"
            onClick={_handleSubmit}
          >
            Skip
          </button>
        </div>
      </div>
    </>
  );
};

export default UserFeedback;
