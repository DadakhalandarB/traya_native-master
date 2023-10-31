import React, { useContext, useEffect, useRef } from "react";
import ArrowCircleRight from "@assets/icons/ArrowCircleRight";
import { keypress } from "@helpers/keypress";

const InputText = ({
  error,
  reply,
  setError,
  setReply,
  handleSubmit,
  store,
}) => {
  const { currentQuestion } = useContext(store);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef) inputRef.current.focus();
  }, []);

  const handleKeyPress = (event) => {
    const _isValid = keypress(event, currentQuestion.type);

    if (_isValid.hasError) {
      setError(_isValid.error);
      return;
    }
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-8 md:mt-24 md:w-1/2"
    >
      <label
        className="h-12 text-2xl font-bold text-gray-700"
        htmlFor={currentQuestion.id}
      >
        {currentQuestion.text}
      </label>

      <div className="h-12 text-gray-400 my-8">{currentQuestion.sub_text}</div>

      <div className="relative w-full mt-2 md:mt-20 sm:w-4/5 md:w-full">
        <input
          className="w-full pr-8 border-b-2 border-brand-accent form-input ring-transparent focus:ring-transparent active:ring-transparent focus:border-brand-accent active:border-brand-accent"
          id={currentQuestion.id}
          key={currentQuestion.id}
          onChange={({ target }) => setReply(target.value)}
          onKeyPress={handleKeyPress}
          ref={inputRef}
          type={currentQuestion.type}
          value={reply}
        />

        <button
          type="submit"
          disabled={
            error === "Unexpected error occured, please contact traya support"
          }
          className="absolute right-0 focus:outline-none active:outline-none top-2"
        >
          <ArrowCircleRight />
        </button>

        {error !== "" && (
          <span className="block mt-2 text-brand-accent">{error}</span>
        )}
      </div>
    </form>
  );
};

export default InputText;
