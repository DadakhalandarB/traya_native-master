import { useMemo } from "react";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

dayjs.extend(isBetween);
const FROM_TIME = "6";
const TO_TIME = "18";

const DateListPlaceholder = () => {
	const _dateList = useMemo(() => {
		const _days = [];
		let _slots = {};

		const _day0 = dayjs().format("YYYY-MM-DD");
		const _day1 = dayjs().add(1, "d").format("YYYY-MM-DD");

		const _fromTime = dayjs().hour(FROM_TIME).minute(0).second(0);
		const _toTime = dayjs().hour(TO_TIME).minute(0).second(0);

		const _isBetween = dayjs().isBetween(_fromTime, _toTime);
		const _isBefore = dayjs().isBefore(_fromTime);
		const _isAfter = dayjs().isAfter(_toTime);

		if (_isBetween) {
			_slots[_day0] = true;
			_slots[_day1] = true;
		} else if (_isBefore) {
			_slots[_day0] = true;
		} else if (_isAfter) {
			_slots[_day1] = true;
		}

		Object.keys(_slots).forEach(key => {
			let _day = "";

			const _date = dayjs(key);
			const _now = dayjs().format("YYYY-MM-DD");
			const _diff = _date.diff(_now, "d");

			if (_diff === 0) _day = "Today";
			else if (_diff === 1) _day = "Tomorrow";
			else _day = _date.format("dddd");

			_days.push({
				date: _date,
				day: _day,
			});
		});

		return _days;
	}, []);

	return (
		<div className="max-w-full mx-auto w-max">
			<div className="flex w-full gap-2 pb-2 mt-4 overflow-x-auto">
				{_dateList.map(({ date, day }, index) => {
					return (
						<button
							type="button"
							key={index}
							className="inline-flex flex-col items-center px-4 py-2 border rounded-xl disabled:bg-brand-disgray disabled:text-brand-lightgrey disabled:cursor-not-allowed border-brand-disgray text-brand-darkgray">
							<span className="w-16 text-xs">{day}</span>
							<span className="text-lg font-bold">{date.format("D")}</span>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default DateListPlaceholder;
