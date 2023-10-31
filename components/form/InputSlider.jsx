import React, { useContext, useEffect, useState } from "react";
import { TRANSACTION_API } from "../../constants/urls";
import { fetchRequest } from "../../helpers/fetchRequest";
import useFormSubmit from "../../hooks/useFormSubmit";
import Loader from "../Loader";
import Slider from "../../ui/slider";
import { isEmpty } from "lodash";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InputSlider = ({ block, context }) => {
	const {
		apiResponse: { transactionId },
	} = useContext(context);

	const handleSubmit = useFormSubmit(context);

	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [reply, setReply] = useState({});

	useEffect(() => {
		if (block) setReply(() => block.reply);
	}, [block]);

	const _submitReply = async reply => {
		setIsLoading(true);
		let _res = "";
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
				setReply({});
				return;
			}
			setError(_res.data.message);
		}
	};

	const _handleSubmit = async () => {
		if (isEmpty(reply)) {
			setError("Please select value");
		}
		if (block.reply === reply) {
			handleSubmit(reply);
			return;
		}
		await _submitReply(reply);
	};

	return (
		<div className="flex flex-col mt-8 md:mt-24 md:w-1/2">
			{isLoading && <Loader />}
			<label className="h-12 text-2xl font-bold text-gray-700">
				{block.text}
			</label>
			<div>
				<div className="py-5 mt-10">
					{block.optionMap?.map(
						({ title, min, max, marks, multiplier, key }) => {
							return (
								<div className="flex flex-col" key={key}>
									<div className="mt-5">
										<label
											className="h-12 mt-2 font-bold text-gray-700 text-md"
											htmlFor={block.id}>
											{title}
										</label>

										<Slider
											className="mt-4 mb-12"
											id={block.id}
											min={min}
											max={max}
											marks={marks}
											step={null}
											onChange={e =>
												setReply(curr => {
													const _curr = curr;
													_curr[title] = e * multiplier;
													return { ..._curr };
												})
											}
											value={reply[title] ? reply[title] / multiplier : min}
										/>
									</div>
								</div>
							);
						}
					)}
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
		</div>
	);
};

export default InputSlider;
