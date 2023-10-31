import isEmpty from "lodash/isEmpty";
import React, { useContext, useState } from "react";

import { GET_SLOTS_API } from "../../../constants/urls";
import { QuestionsContext } from "../../../context/questions-store";
import { fetchRequest } from "../../../helpers/fetchRequest";
import { groupSlots } from "../../SlotBooking/handler";

import DateList from "../appoinetment/DateList";
import SlotsList from "../appoinetment/SlotsList";

export const SlotBooking = ({
	title,
	handleBooking,
	selectedInfo,
	slots,
	selectedSlots = {},
}) => {
	const {
		apiResponse: { caseId },
		saveSlotsList,
		saveSlots,
	} = useContext(QuestionsContext);

	const [selectedDate, setSelectedDate] = useState("");

	const handleSlotBooking = async slot => {
		if (selectedInfo) {
			selectedInfo({ date: selectedDate, time: slot.slotTime });
		}
		const res = await handleBooking(slot);
		if (res.status === 400) {
			const _res = await fetchRequest(GET_SLOTS_API(caseId));

			if (_res.status === 200) {
				const _data = groupSlots(_res.data);
				saveSlotsList(_data);
				saveSlots({});
			}
		}
	};

	if (isEmpty(slots)) {
		return (
			<div className="flex items-center justify-center w-full p-4 md:h-full">
				<p className="h-auto">No slots</p>
			</div>
		);
	}

	return (
		<>
			<h2 className="mt-4 mb-1 text-xl font-bold text-center text-brand-dark">
				{title}
			</h2>

			<div className="flex flex-col justify-center w-full gap-1 p-4 md:flex-row ">
				<div className="w-auto">
					<div className="flex w-full gap-1 pb-2 overflow-x-hidden border-none">
						<div className="w-full h-full space-y-8">
							<DateList
								slots={slots}
								selectedDate={selectedDate}
								setDate={setSelectedDate}
							/>

							<SlotsList
								selectedDate={selectedDate}
								slots={slots}
								selectedSlot={selectedSlots}
								setSlot={handleSlotBooking}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
