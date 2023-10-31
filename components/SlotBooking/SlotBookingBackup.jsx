import React, { useState, useEffect, useCallback, useContext } from "react";
import Calendar from "react-calendar";
import isEmpty from "lodash/isEmpty";
import dayjs from "dayjs";

import { fetchRequest } from "../../helpers/fetchRequest";
import { GET_SLOTS_API, GET_CONSULT_CALL_API } from "../../constants/urls";
import { QuestionsContext } from "../../context/questions-store";
import { groupSlots } from "./handler";

export const SlotBooking = ({
	caseId,
	title,
	api,
	handleBooking,
	selectedInfo,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [maxDate, setMaxDate] = useState("");
	const [minDate, setMinDate] = useState("");
	const [slots, setSlots] = useState({});
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [hasError, sethasError] = useState(false);
	const { selectedSlots } = useContext(QuestionsContext);
	const updateSlots = useCallback(async () => {
		setIsLoading(true);
		const getSlots =
			api === "CONSULT_CALL_API" ? GET_CONSULT_CALL_API : GET_SLOTS_API;

		const _res = await fetchRequest(getSlots(caseId));
		console.error(_res)
		setIsLoading(false);
		if (_res.hasError) {
			sethasError(true);
			return;
		}
		if (isEmpty(_res.data)) return;

		const _data = groupSlots(_res.data);

		const _keys = Object.keys(_data);
		const mx = new Date(_keys[_keys.length - 1]);
		const mi = new Date(_keys[0]);
		setMaxDate(mx);
		setMinDate(mi);
		setSlots(_data);
		setSelectedDate(selectedSlots ? selectedSlots.date : "");
		setSelectedTime(selectedSlots ? selectedSlots.time : "");
	}, [caseId, selectedSlots, api]);

	const handleSlotBooking = async (slotId, time) => {
		if (selectedInfo) selectedInfo({ date: selectedDate, time: time });
		const _res = await handleBooking(selectedDate, slotId);
		if (!Boolean(_res)) return;
		if (_res.status === 200) setSelectedTime(slotId);
		if (_res.status === 400 || _res.updateSlots) updateSlots();
	};

	useEffect(() => {
		updateSlots().then(() => {
			setTimeout(() => {
				if (window.screen.width < 600) {
					window.scrollBy({
						top: window.innerHeight - 100,
						left: 0,
						behavior: "smooth",
					});
				}
			}, 500);
		});
	}, [caseId]);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center w-full p-4 md:h-full">
				<p className="h-auto">Checking availability...</p>
			</div>
		);
	}
	if (hasError) {
		return (
			<div className="flex items-center justify-center w-full p-4 md:h-full">
				<p className="h-auto">
					This link is invalid, please contact your hair coach for more
					information.
				</p>
			</div>
		);
	}

	if (isEmpty(slots)) {
		return (
			<div className="flex items-center justify-center w-full p-4 md:h-full">
				<p className="h-auto">No slots</p>
			</div>
		);
	}

	return (
		<>
			<h2 className="mt-4 text-xl font-bold text-center text-brand-dark">
				{title}
			</h2>

			<div className="flex flex-col justify-center w-full gap-1 p-4 md:flex-row ">
				<div className="w-auto">
					<h4 className="font-bold text-gray-500">Date</h4>
					<div className="flex w-full gap-1 pb-2 overflow-x-hidden border-none md:w-96 h-22rem">
						<Calendar
							value={selectedDate && new Date(selectedDate)}
							maxDate={maxDate}
							minDate={minDate}
							onChange={(date) =>
								setSelectedDate(dayjs(date).format("YYYY-MM-DD"))
							}
						/>
					</div>
				</div>
				<div className="w-full h-20 md:w-40 md:ml-5">
					{selectedDate && (
						<>
							<h4 className="font-bold text-gray-500">Time</h4>
							<div className="flex w-full h-20 gap-1 pb-4 overflow-x-scroll md:flex-col lg:overflow-x-hidden lg:overflow-y-scroll lg:p-1 md:h-84 lg:pr-1">
								{slots[selectedDate] &&
									slots[selectedDate].map((slot, index) => (
										<button
											id={`time_${index + 1}`}
											data-name="slot_time"
											disabled={
												slot.slots.count < 1 && selectedTime !== slot.id
											}
											key={slot.id}
											className={`border text-lg disabled:bg-brand-lightgrey disabled:text-brand-dark disabled:cursor-not-allowed hover:bg-brand-accent hover:text-white border-solid border-brand-accent-light rounded-lg text-brand-dark cursor-pointer w-32 py-2 px-4 ${
												slot.id === selectedTime
													? "bg-brand-accent text-white"
													: "bg-brand-accent-light"
											}`}
											onClick={() => handleSlotBooking(slot.id, slot.slotTime)}
										>
											<span className="whitespace-nowrap">
												{dayjs(slot.slotTime).format("hh:mm a")}
											</span>
										</button>
									))}
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};
