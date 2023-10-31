import { useContext, useEffect, useState } from "react";
import isEmpty from "lodash/isEmpty";

import Cookies from "js-cookie";
import useFormSubmit from "../../hooks/useFormSubmit";
import { fetchRequest } from "../../helpers/fetchRequest";
import { INGESTION_API, TRANSACTION_API } from "../../constants/urls";
import { isValidEmail } from "../../helpers/validation";
import Loader from "../Loader";
import InputText from "../form/InputText";

const InputEmailV3 = ({ block, context }) => {
	const {
		questions,
		saveApiResponse,
		queryStrings: { utmData, cohort },
	} = useContext(context);

	const handleSubmit = useFormSubmit(context);

	const [err, setErr] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [reply, setReply] = useState("");
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		if (block) setReply(() => block.reply);
	}, [block]);

	const _submitReply = async () => {
		let _res = null;

		try {
			const _form = [];
			const _user = {
				email: reply.toLowerCase().trim(),
				first_name: questions.first_name.reply,
				phone_number: questions.phone_number.reply,
			};

			if (cohort) {
				_form.push({
					question_id: "cohort",
					question: "cohort",
					response: cohort,
					form_status: "In-Progress",
				});
			}

			const _bodyData = { form: _form, user: _user };
			const _requestOptions = {
				method: "POST",
				body: JSON.stringify(_bodyData),
			};

			_res = await fetchRequest(INGESTION_API(), _requestOptions);
		} catch (error) {
			console.warn(error.message);
		} finally {
			if (_res.status === 200) {
				saveApiResponse(_res.data);
				handleSubmit(reply);
				setReply("");
				return _res.data.transactionId;
			}
			if (_res.status === 500) {
				setErr("Unexpected error occured, please contact traya support");
				setHasError(true);
				return null;
			}

			setErr(_res.data.message);
			return null;
		}
	};

	const submitUTMData = async transactionId => {
		let res = {};
		try {
			for (let key in utmData) {
				const _formData = {
					question_id: key,
					question: key,
					response: utmData[key],
					form_status: "In-Progress",
					locationPath: window.location.pathname + window.location.search,
        			formFillSource: 'website',
				};

				const _requestOptions = {
					method: "PUT",
					body: JSON.stringify(_formData),
				};

				res = await fetchRequest(
					TRANSACTION_API(transactionId),
					_requestOptions
				);
			}
		} catch (error) {
			console.warn(error.message);
		} finally {
			return res;
		}
	};

	const _handleSubmit = async e => {
		e.preventDefault();

		if (hasError) return;

		const _isValid = isValidEmail(reply);
		if (_isValid.hasError) {
			setErr(_isValid.error);
			return;
		}

		if (block.reply === reply) {
			handleSubmit(reply);
			return;
		}

		setIsLoading(true);
		const transactionId = await _submitReply();
		if (isEmpty(transactionId)) return setIsLoading(false);

		if (isEmpty(utmData)) return setIsLoading(false);
		const utmRes = submitUTMData(transactionId);
		setIsLoading(false);
		if (utmRes.hasError) return;
		Cookies.remove("__TRAYA_UTM__");
	};

	return (
		<>
			{isLoading && <Loader />}
			<InputText
				error={err}
				reply={reply}
				setError={setErr}
				setReply={setReply}
				handleSubmit={_handleSubmit}
				store={context}
			/>
		</>
	);
};

export default InputEmailV3;
