import { useContext, useEffect, useState } from "react";
import { TRANSACTION_API } from "../../constants/urls";
import { fetchRequest } from "../../helpers/fetchRequest";
import { isNotEmptyArray } from "../../helpers/validation";
import useFormSubmit from "../../hooks/useFormSubmit";
import Loader from "../Loader";

const InputCheckboxV3 = ({ block, context }) => {
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

		try {
			const _formData = {
				question_id: block.id,
				question: block.text,
				response: reply,
				form_status: block.id === "4n" ? "semi-filled" : "In-Progress",
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

	const _handleSubmit = async () => {
		const _isValid = isNotEmptyArray(reply);

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

	const handleChnage = ({ target }) => {
		const _value = target.value;

		if (reply.includes(_value))
			setReply(prev => prev.filter(i => i !== _value));
		else setReply(prev => [...prev, _value]);
	};

	return (
		<>
			{isLoading && <Loader />}

			<div className="flex flex-col gap-4 mt-12 sm:mt-24">
				<label className="text-2xl font-bold text-gray-700">{block.text}</label>
				{block.sub_text && (
					<div className="mb-2 text-gray-400 align-middle ">
						{block.sub_text}
					</div>
				)}

				<div className="flex flex-col pl-4 ml-2">
					{block.optionMap?.map((option, index) => (
						<label
							htmlFor={`${block.id}_${index + 1}`}
							key={option.name}
							data-options="responses"
							className="inline-flex items-center py-4 border-b-2 cursor-pointer">
							<input
								className="cursor-pointer form-radio text-brand-accent"
								checked={reply.includes(option.value)}
								id={`${block.id}_${index + 1}`}
								type="checkbox"
								onChange={handleChnage}
								value={option.value}
							/>
							<span className="ml-2 text-xl">{option.name}</span>
						</label>
					))}
				</div>

				<div className="flex flex-col items-center justify-center">
					<button
						className="px-6 py-2 uppercase rounded-md w-max bg-brand-accent text-green-50"
						onClick={() => _handleSubmit()}>
						continue
					</button>

					{error !== "" && (
						<span className="block mt-1 text-brand-accent">{error}</span>
					)}
				</div>
			</div>
		</>
	);
};

export default InputCheckboxV3;
