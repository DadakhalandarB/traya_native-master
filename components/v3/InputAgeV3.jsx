import { useContext, useEffect, useState } from "react";
import { TRANSACTION_API } from "../../constants/urls";
import { fetchRequest } from "../../helpers/fetchRequest";
import { isValidAge } from "../../helpers/validation";
import useFormSubmit from "../../hooks/useFormSubmit";
import InputText from "../form/InputText";
import Loader from "../Loader";

const InputAgeV3 = ({ block, context }) => {
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

	const _submitReply = async () => {
		setIsLoading(true);
		let _res = "";

		if (block.reply === reply) handleSubmit(reply);
		try {
			const _formData = {
				question_id: block.id,
				question: block.text,
				response: reply,
				form_status: "In-Progress",
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
			setIsLoading(false);
			if (_res.status === 200) {
				handleSubmit(reply);
				setReply("");
				return;
			}

			setError(_res.data.message);
		}
	};

	const _handleSubmit = async e => {
		e.preventDefault();
		const _isValid = isValidAge(reply);

		if (_isValid.hasError) {
			setError(_isValid.error);
			return;
		}

		if (block.reply === reply) {
			handleSubmit(reply);
			return;
		}

		await _submitReply();
	};

	return (
		<>
			{isLoading && <Loader />}

			<InputText
				error={error}
				reply={reply}
				setError={setError}
				setReply={setReply}
				handleSubmit={_handleSubmit}
				store={context}
			/>
		</>
	);
};

export default InputAgeV3;
