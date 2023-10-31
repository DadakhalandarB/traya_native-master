import { useContext, useEffect, useState } from "react";

import { SLOTS_API, TRANSACTION_API } from "../../constants/urls";
import { QuestionsContext } from "../../context/questions-store";
import { fetchRequest } from "../../helpers/fetchRequest";
import { moengageTrackEvent } from "../../helpers/handleMoengage";
import useFormSubmit from "../../hooks/useFormSubmit";
import Loader from "../Loader";
import { SlotBooking } from "./SlotBooking";

const InputSlots = ({ block }) => {
	const {
		apiResponse: { caseId, transactionId },
		saveSlots,
		selectedSlots,
		slots,
	} = useContext(QuestionsContext);
	const handleSubmit = useFormSubmit(QuestionsContext);

	const [isLoading, setIsLoading] = useState(false);
	const [showSlots, setShowSlots] = useState(false);

	useEffect(() => {
		if (block) {
			setShowSlots(() => (block.reply === "Yes" ? true : false));
		}
	}, [block]);

	useEffect(() => {
		if (!Array.isArray(slots) || slots.length < 1) return;

		setTimeout(() => {
			if (window.screen.width < 600) {
				window.scrollBy({
					top: window.innerHeight - 100,
					left: 0,
					behavior: "smooth",
				});
			}
		}, 500);
	}, [slots]);

	const _handleSubmit = async () => {
		const _reply = "Skipped";
		moengageTrackEvent("Cal_Booked_Form", _reply);
		await _slotSubmit(_reply);
	};

	const handleBooking = async slot => {
		if (selectedSlots && selectedSlots.time === slot.id) {
			_slotSubmit("Yes");
			return {};
		}

		setIsLoading(true);
		const _res = await fetchRequest(SLOTS_API, {
			method: "POST",
			body: JSON.stringify({ case_id: caseId, slot_id: slot.id }),
		});
		setIsLoading(false);

		if (_res.status === 200) {
			saveSlots(slot);
			_slotSubmit("Yes");
		}

		return _res;
	};

	const _slotSubmit = async res => {
		setIsLoading(true);
		if (block.reply === res) {
			handleSubmit(res);
			return;
		}

		let _res = {};

		try {
			const _formData = {
				question_id: block.id,
				question: block.text,
				response: res,
				form_status: "semi-filled",
				locationPath: window.location.pathname + window.location.search,
        		formFillSource: 'website',
			};

			const _options = {
				method: "PUT",
				body: JSON.stringify(_formData),
			};

			_res = await fetchRequest(TRANSACTION_API(transactionId), _options);
		} catch (error) {
			console.warn(error.message);
		} finally {
			setIsLoading(false);
			if (_res.status === 200) {
				handleSubmit(res);
				return;
			}
		}
	};

	return (
		<div className="w-full h-full ">
			{isLoading && <Loader />}

			<div className="flex flex-col justify-between w-full md:mt-6 lg:flex-row">
				<div
					className={`flex flex-1 flex-col md:pl-0 mb-2 md:pb-8 pt-12 pr-8 space-y-8`}>
					<label
						className="text-2xl font-bold text-gray-700"
						htmlFor={block.id}>
						{block.text}
					</label>

					{/* <p className="pb-2 mt-2 text-gray-400 align-middle">
						{block.sub_text}
					</p> */}
				</div>

				<div
					className={`flex-1 md:justify-center ${showSlots && "bg-gray-50"} `}>
					<SlotBooking
						slots={slots}
						selectedSlots={selectedSlots}
						handleBooking={handleBooking}
						title="Please Select a Date & Time"
					/>
					<div className="flex justify-end md:mr-16">
						<button
							id="Slot_booked_skip"
							className="inline-flex gap-2 px-6 py-2 mt-4 text-lg font-medium uppercase rounded-md w-max text-brand-accent"
							onClick={_handleSubmit}>
							Skip
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InputSlots;
