import { useContext, useEffect, useState } from "react";
import { handleBiteSpeedData } from "../../helpers/biteSpeed";
import { isValidPhone } from "../../helpers/validation";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputText from "../form/InputText";

const InputPhoneNumberV3 = ({ block, context }) => {
  const handleSubmit = useFormSubmit(context);
  const {
    queryStrings: { region },
  } = useContext(context);

  const [error, setError] = useState("");
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (block)
      setReply(() =>
        region === "US" ? block.reply.substring(2) : block.reply.substring(3)
      );
  }, [block]);

  const _handleSubmit = (e) => {
    e.preventDefault();

    const _isValid = isValidPhone(reply);
    if (_isValid.hasError) {
      setError(_isValid.error);
      return;
    }

    region === "US" ? handleSubmit("+1" + reply) : handleSubmit("+91" + reply);
    handleBiteSpeedData(reply);
    setError("");
  };

  return (
    <InputText
      error={error}
      reply={reply}
      setError={setError}
      setReply={setReply}
      handleSubmit={_handleSubmit}
      store={context}
    />
  );
};

export default InputPhoneNumberV3;
