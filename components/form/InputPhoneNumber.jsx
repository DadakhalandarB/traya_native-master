import { useEffect, useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputText from "./InputText";
import { isValidPhone } from "../../helpers/validation";
import { handleBiteSpeedData } from "../../helpers/biteSpeed";
import Cookies from "js-cookie";

const InputPhoneNumber = ({ block, context }) => {
	const handleSubmit = useFormSubmit(context);

	const [error, setError] = useState("");
	const [reply, setReply] = useState("");

	useEffect(() => {
		if (block) setReply(() => block.reply.substring(3));
	}, [block]);

	const _handleSubmit = e => {
		e.preventDefault();

		const _isValid = isValidPhone(reply);
		if (_isValid.hasError) {
			setError(_isValid.error);
			return;
		}

		handleSubmit("+91" + reply);
		window.localStorage.setItem("user_phone", "+91" + reply);
		Cookies.set('user_phone',"+91" + reply)
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

export default InputPhoneNumber;
