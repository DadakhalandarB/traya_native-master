import groupBy from "lodash/groupBy";
import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

export const groupSlots = (slots, v2 = false) => {
	if (isEmpty(slots)) return [];

	let _sortedSlots = sortAsc(slots, "slotTime");
	if (v2) {
		_sortedSlots = _sortedSlots.filter(slot => {
			const slotHour = Number(dayjs(slot.slotTime).format('H'));
			const slotMinute = Number(dayjs(slot.slotTime).format('m'));
			if (slotHour >= 19 || slotHour < 10) {
				if (slotHour === 19 && slotMinute <= 0) {
					return true;
				} else {
					return false;
				}
			} else {
				return true;
			}
		})
	}
	return groupBy(_sortedSlots, slot => {
		return dayjs(slot.slotTime).format("YYYY-MM-DD");
	});
};

const sortAsc = (data, key) => {
	return data.sort((a, b) => {
		return new Date(a[key]) - new Date(b[key]);
	});
};
