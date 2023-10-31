import { useEffect, useState } from "react";
import { isValidName } from "../../helpers/validation";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputText from "../form/InputText";

const InputNameV3 = ({ block, context }) => {
	const handleSubmit = useFormSubmit(context);

	const [error, setError] = useState("");
	const [reply, setReply] = useState("");

	useEffect(() => {
		if (!block) return;
		setReply(() => block.reply);
	}, [block]);

	const _handleSubmit = e => {
		e.preventDefault();

		const _isValid = isValidName(reply.trim());

		if (_isValid.hasError) {
			setError(_isValid.error);
			return;
		}

		handleSubmit(reply.trim());
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

export default InputNameV3;
