import { useMemo } from "react";
import dayjs from "dayjs";

const START_TIME = 9;
const END_TIME = 20;

const SlotsListPlaceholder = () => {
	const _slotsList = useMemo(() => {
		const _slots = [];

		const _startTime = dayjs().hour(START_TIME).startOf("h");
		const _endTime = dayjs().hour(END_TIME).startOf("h");
		const _hoursLeft = _endTime.diff(_startTime, "h");

		for (let i = 0; i <= _hoursLeft; i++) {
			const _time = _startTime.add(i, "h").minute(0).second(0);

			_slots.push(_time);
			_slots.push(_time.add(30, "m").second(0));
		}

		return _slots;
	}, []);

	return (
		<div className="h-full mx-auto w-max">
			<h5 className="capitalize text-brand-darkgray">select time</h5>
			<div className="grid grid-cols-3 gap-2 pr-4 mt-4 overflow-x-hidden overflow-y-auto h-max max-h-60 sm:grid-cols-4 w-max">
				{_slotsList.map((slot, index) => {
					return (
						<button
							type="button"
							key={index}
							className="inline-flex flex-col items-center self-center px-2 py-2 border border-brand-disgray rounded-xl">
							<span className="font-bold sm:text-lg">
								{slot.format("h:mm a")}
							</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default SlotsListPlaceholder;
