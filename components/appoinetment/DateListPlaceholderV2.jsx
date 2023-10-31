import { useMemo } from "react";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

dayjs.extend(isBetween);
const FROM_TIME = "6";
const TO_TIME = "18";

const DateListPlaceholderV2 = () => {
	const _dateList = useMemo(() => {
		const _days = [];
		let _slots = {};

		const _day0 = dayjs().format("YYYY-MM-DD");
		const _day1 = dayjs().add(1, "d").format("YYYY-MM-DD");
		const _day2 = dayjs().add(2, "d").format("YYYY-MM-DD");
		const _day3 = dayjs().add(3, "d").format("YYYY-MM-DD");

		const _fromTime = dayjs().hour(FROM_TIME).minute(0).second(0);
		const _toTime = dayjs().hour(TO_TIME).minute(0).second(0);

		const _isBetween = dayjs().isBetween(_fromTime, _toTime);
		const _isBefore = dayjs().isBefore(_fromTime);
		const _isAfter = dayjs().isAfter(_toTime);

		if (_isBetween) {
			_slots[_day0] = true;
			_slots[_day1] = true;
			_slots[_day2] = true;
			_slots[_day3] = true;
		} else if (_isBefore) {
			_slots[_day0] = true;
		} else if (_isAfter) {
			_slots[_day1] = true;
		} else if (_isAfter) {
			_slots[_day2] = true;
		} else if (_isAfter) {
			_slots[_day3] = true;
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
		<div className="max-w-full w-max mx-4">
			<h5 className="text-brand-darkgray font-semibold text-lg mx-5">Schedule</h5>
			<div className="w-max bg-white px-0 py-0 rounded-xl border mx-5 border-custom-bordergrey">
				<div className="flex w-max pb-0 mt-0 overflow-x-hidden mx-5">
					{_dateList.map(({ date, day }, index) => {
						return (
							<button
								type="button"
								key={index}
								className="inline-flex flex-col items-center w-12 py-8 rounded-lg disabled:bg-brand-disgray disabled:text-brand-lightgrey disabled:cursor-not-allowed border-brand-disgray text-brand-darkgray">
								<span className="w-16 font-semibold text-sm">
									{dayjs(date).format("ddd")}
								</span>
								<span className="text-lg font-bold">{date.format("D")}</span>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default DateListPlaceholderV2;
