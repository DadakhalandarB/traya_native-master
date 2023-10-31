import groupBy from "lodash/groupBy";
import dayjs from "dayjs";
import isEmpty from "lodash/isEmpty";

export const groupSlots = slots => {
	if (isEmpty(slots)) return [];

	const _sortedSlots = sortAsc(slots, "slotTime");
	return groupBy(_sortedSlots, slot => {
		return dayjs(slot.slotTime).format("YYYY-MM-DD");
	});
};

const sortAsc = (data, key) => {
	return data.sort((a, b) => {
		return new Date(a[key]) - new Date(b[key]);
	});
};
